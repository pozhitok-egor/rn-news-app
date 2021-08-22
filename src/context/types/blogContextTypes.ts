import { IPost } from "../../components/post/Post";

export type BlogContextType = {
  state: Array<IPost> | null,
  addBlogPost: (post: IPost) => void,
  deleteBlogPost: (id: string) => void,
}

export enum BlogActionType {
  ADD_POST = 'BLOG/ADD_POST',
  DELETE_POST = 'BLOG/DELETE_POST'
}

type addPostType = {
  type: BlogActionType.ADD_POST,
  payload: IPost
}

type deletePostType = {
  type: BlogActionType.DELETE_POST,
  payload: string
}

export type BlogAction = addPostType | deletePostType;
