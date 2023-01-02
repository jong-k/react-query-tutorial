import { useQuery, useMutation } from "@tanstack/react-query";

import { PostType } from "./Posts";

interface PostProps {
  post: PostType;
}

interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

async function fetchComments(postId: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
  );
  return await response.json();
}

async function deletePost(postId: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "DELETE" },
  );
  return await response.json();
}

async function updatePost(postId: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        title: "REACT QUERY FOREVER!!!!",
      }),
    },
  );
  return await response.json();
}

export function PostDetail({ post }: PostProps) {
  // replace with useQuery
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["comments", post.id],
    queryFn: async () => await fetchComments(post.id),
    staleTime: 2000,
  });

  // useQuery에서 구조분해할당을 사용중인데, 여기서 또 구조분해할당을 사용하면
  // namespace가 겹쳐서 문제가 생길 수 있으므로 구조분해할당 미사용
  const deleteMutation = useMutation({
    mutationFn: async (postId: number) => await deletePost(postId),
  });

  const updateMutation = useMutation({
    mutationFn: async (postId: number) => await updatePost(postId),
  });

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
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
      {deleteMutation.isError && (
        <p style={{ color: "red" }}>Error deleting the post</p>
      )}
      {deleteMutation.isLoading && (
        <p style={{ color: "purple" }}>Deleting the post</p>
      )}
      {deleteMutation.isSuccess && (
        <p style={{ color: "green" }}>Post has (not) been deleted</p>
      )}
      <button onClick={() => updateMutation.mutate(post.id)}>
        Update title
      </button>
      {updateMutation.isError && (
        <p style={{ color: "red" }}>Error updating the title</p>
      )}
      {updateMutation.isLoading && (
        <p style={{ color: "purple" }}>Updating the title</p>
      )}
      {updateMutation.isSuccess && (
        <p style={{ color: "green" }}>Title has (not) been updated</p>
      )}
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment: CommentType) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
