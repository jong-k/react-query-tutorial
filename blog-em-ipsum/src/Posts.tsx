import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { PostDetail } from "./PostDetail";

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const maxPostPage: number = 10;

async function fetchPosts(pageNum = 0) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`,
  );
  return await response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: ["posts", nextPage],
        queryFn: async () => await fetchPosts(nextPage),
      });
    }
  }, [currentPage, queryClient]);

  // replace with useQuery
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: async () => await fetchPosts(currentPage),
    staleTime: 2000,
    keepPreviousData: true,
  });
  // 아래 조건문에서 isLoading 대신 isFetching 을 사용한다면?
  if (isLoading) return <h2>Loading...</h2>;
  if (isError && error instanceof Error) {
    return (
      <>
        <h2>Oops, something went wrong</h2>
        <p>{error.toString()}</p>
      </>
    );
  }

  return (
    <>
      <ul>
        {data.map((post: PostType) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage === maxPostPage}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next page
        </button>
      </div>
      <hr />
      {selectedPost != null && <PostDetail post={selectedPost} />}
    </>
  );
}
