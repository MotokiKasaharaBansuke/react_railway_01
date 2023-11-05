import { ThreadsResponse, CreaateThreadResponse, ErrorResponse } from "../types"
import { fetchHandler } from "./utils"

export const getTreads = (offset?:number): Promise<ThreadsResponse> => {
    if(!offset) {
        return fetchHandler<ThreadsResponse>('https://railway.bulletinboard.techtrain.dev/threads')
    }
    return fetchHandler<ThreadsResponse>(`https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`)
    
}

export const createThread = (title: string): Promise<CreaateThreadResponse> => {
    const options: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title })
    }
    return fetchHandler<CreaateThreadResponse>('https://railway.bulletinboard.techtrain.dev/threads', options)
}

