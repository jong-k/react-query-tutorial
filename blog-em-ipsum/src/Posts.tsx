import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import PostDetail from "./PostDetail";

const MAX_POST_PAGE = 10;

export default function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < MAX_POST_PAGE) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["posts", nextPage], () =>
        fetchPosts(nextPage),
      );
    }
  }, [currentPage, queryClient]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => fetchPosts(currentPage),
    staleTime: 2000,
    keepPreviousData: true,
  });

  if (isLoading) return <h3>Loading...</h3>;
  if (isError && error)
    return (
      <>
        <h3>Oops, something went wrong...</h3>
        <p>{error.toString()}</p>
      </>
    );
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
          disabled={currentPage >= MAX_POST_PAGE}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}

const fetchPosts = async (pageNum: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`,
  );
  return response.json();
};
