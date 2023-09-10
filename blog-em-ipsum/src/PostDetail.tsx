import { useQuery } from "@tanstack/react-query";

interface PostDetailProps {
  post: PostType;
}

export default function PostDetail({ post }: PostDetailProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["comments", post.id],
    queryFn: () => fetchComments(post.id),
  });

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
      <button>Delete</button> <button>Update title</button>
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

// const deletePost = async (postId: number) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/postId/${postId}`,
//     { method: "DELETE" },
//   );
//   return res.json();
// };
//
// const updatePost = async (postId: number) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/postId/${postId}`,
//     { method: "PATCH", data: { title: "REACT QUERY FOREVER!!!!" } },
//   );
//   return res.json();
// };
