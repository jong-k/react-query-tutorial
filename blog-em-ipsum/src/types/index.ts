/* eslint-disable */
declare interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

declare interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
