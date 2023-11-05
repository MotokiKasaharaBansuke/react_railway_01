import {ErrorResponse } from "../types"

export async function fetchHandler<T>(url: string, options?: RequestInit): Promise<T> {
    try {
        const response = await fetch(url, options);

        if(response.ok) {
            const data: T = await response.json();
            return data
        } else {
            const error: ErrorResponse = await response.json();
            throw new Error(
                `Error ${error.ErrorCode}: ${error.ErrorMessageEN}`
            )
        }
    } catch(error) {
        if(error instanceof Error){
            throw error
        } else {
            throw new Error('An unknown error occurred!')
        }
    }
}