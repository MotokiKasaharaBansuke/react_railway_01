import React, { useState } from 'react'
import { createPost } from '../../services/postService'
import { useParams, Link } from 'react-router-dom';
import { CreatePostResponse } from '../../types';
import Stypes from './NewPost.module.css'

type Props = {
    onAddPost: Function
}

const NewPost: React.FC<Props> = ({onAddPost}) => {
    const { id } = useParams();
    const [post, setPost] = useState('')

    const handleSubmit = (event: React.FormEvent) => {
        // event.preventDefault()
        createPost(id!, post).then(data => {
            onAddPost({id: data.id, post: data.post})
        })
    }
return (
    <>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                    <input 
                        className={Stypes.inputText}
                        type='textarea' value={post}
                        onChange={e => setPost(e.target.value)}
                        placeholder='投稿しよう'
                    />
                    </div>
                </div>
                <div>
                    <button className={Stypes.submitButton}>投稿</button>
                </div>
            </form>
        </div>
        
    </>
)
}

export default NewPost