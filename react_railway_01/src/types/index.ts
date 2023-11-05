export interface Thread {
    id: string;
    title: string;
  }
  
  export type ThreadsResponse = Thread[];

  export interface CreaateThreadResponse {
    threadId: string;
    title: string;
  }

  export interface ErrorResponse {
    ErrorCode: number;
    ErrorMessageJP: string;
    ErrorMessageEN: string;
  }

  export interface Post {
    id: string;
    post: string
  }

  export type PostsResponse = {
    threadId: string,
    posts: Post[]
  }

  export interface CreatePostResponse {
    id: string;
    threadId: string;
    post: string;
  }
