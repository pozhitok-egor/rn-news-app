import {Dispatch} from "react";
import { IPost } from "../components/post/Post";
import createDataContext from "./createDataContext";
import { BlogAction, BlogActionType } from "./types/blogContextTypes";

const posts = [
  {
    id: 1,
    title: 'IT in Belarus',
    content: [
      {
        type: 'text',
        content: 'Lorem Ipsum sit amet, et dol et dol et dol adipiscing elit sed do eiusmod tempor incididunt ut labore et dol eiusmod tempor incididunt ut labore et dol'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        caption: 'Programming code'
      }
    ],
    author: 'Egor Pozhitok',
    author_image: 'https://sun9-63.userapi.com/s/v1/ig2/cbSpolDsRT5cT1COVaRrecU8asjQWzVHPiftFQv9ZW1KS0Wyk7iCC_aQLXF7qftcGouuHH6Je8TNBWmj7jM-W-8z.jpg?size=200x0&quality=95&crop=0,0,640,640&ava=1',
    created_at: 1629573541,
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 2,
    title: 'New Language',
    content: [
      {
        type: 'text',
        content: 'Lorem Ipsum sit amet, et dol et dol et dol adipiscing elit sed do eiusmod tempor incididunt ut labore et dol eiusmod tempor incididunt ut labore et dol'
      },
    ],
    author: 'Egor Pozhitok',
    author_image: 'https://sun9-63.userapi.com/s/v1/ig2/cbSpolDsRT5cT1COVaRrecU8asjQWzVHPiftFQv9ZW1KS0Wyk7iCC_aQLXF7qftcGouuHH6Je8TNBWmj7jM-W-8z.jpg?size=200x0&quality=95&crop=0,0,640,640&ava=1',
    created_at: 1629573541
  },
  {
    id: 3,
    title: 'Java becomes the most popular language',
    content: [
      {
        type: 'text',
        content: 'Lorem Ipsum sit amet, et dol et dol et dol adipiscing elit sed do eiusmod tempor incididunt ut labore et dol eiusmod tempor incididunt ut labore et dol'
      },
    ],
    author: 'Egor Pozhitok',
    author_image: 'https://sun9-63.userapi.com/s/v1/ig2/cbSpolDsRT5cT1COVaRrecU8asjQWzVHPiftFQv9ZW1KS0Wyk7iCC_aQLXF7qftcGouuHH6Je8TNBWmj7jM-W-8z.jpg?size=200x0&quality=95&crop=0,0,640,640&ava=1',
    created_at: 1629573541
  }
]

const blogReducer = (state: IPost[], action: BlogAction):IPost[] => {
  switch (action.type) {
    case BlogActionType.ADD_POST:
      return [...state, action.payload]
    case BlogActionType.DELETE_POST:
      return state.filter((post: IPost) => post.id !== action.payload)
    default:
      return state
  }
}

const addBlogPost = (dispatch: Dispatch<BlogAction>) => {
  return (post: IPost) => {
    dispatch({
      type: BlogActionType.ADD_POST,
      payload: post
    })
  }
}

const deleteBlogPost = (dispatch: Dispatch<BlogAction>) => {
  return (id: string) => {
    dispatch({ type: BlogActionType.DELETE_POST, payload: id})
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
)
