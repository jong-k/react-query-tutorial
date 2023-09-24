import { useQuery, useMutation } from "@tanstack/react-query";

interface PostDetailProps {
  post: PostType;
}

export default function PostDetail({ post }: PostDetailProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["comments", post.id],
    queryFn: () => fetchComments(post.id),
  });

  const deleteMutation = useMutation((postId: number) => deletePost(postId));

  const updateMutation = useMutation((postId: number) => updateTitle(postId));

  if (isLoading) return <h3>Loading...</h3>;
  if (error)
    return (
      <>
        <h3>Oops, something went wrong...</h3>
        <p>{error.toString()}</p>
      </>
    );

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
        <p style={{ color: "red" }}>Error updating the post</p>
      )}
      {updateMutation.isLoading && (
        <p style={{ color: "purple" }}>Updating the post</p>
      )}
      {updateMutation.isSuccess && (
        <p style={{ color: "green" }}>Post has (not) been updated</p>
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

const fetchComments = async (postId: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
  );
  return res.json();
};

const deletePost = async (postId: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "DELETE" },
  );
  return res.json();
};

const updateTitle = async (postId: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        title: "updated!",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
  );
  return res.json();
};
