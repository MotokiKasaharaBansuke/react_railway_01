import { PostsResponse, CreatePostResponse, ErrorResponse } from "../types"
import { fetchHandler } from "./utils"

export const getPosts = (threadId: string): Promise<PostsResponse> => {
    return fetchHandler<PostsResponse>(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`)
}

export const createPost = (threadId: string, post: string): Promise<CreatePostResponse> => {
    const options: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post })
    }
    return fetchHandler<CreatePostResponse>(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, options)
}

