import React, { useEffect, useState } from 'react'
import { getPosts } from '../../services/postService'
import { Post } from '../../types'
import { useParams } from 'react-router-dom';
import NewPost from '../NewPost/NewPost';
import Stypes from './PostList.module.css'


const PostList: React.FC = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState<Post[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  //userEffectで更新せずstateに新たなpostを入れる   
  const onAddPost = (newPost: Post) => {
        const newPosts = [...posts, newPost]
        setPosts(newPosts)
  }

  useEffect(() => {
    getPosts(id!).then(data => {
      setPosts(data.posts)
      setLoading(false)
    })
    .catch(error => {
      setError(error.message)
      setLoading(false)
    })
  }, [])

  return (
    <>
      <div>
        {loading && <p>Loading threads</p>}
        {error && <p>Error: {error}</p>}
     </div>
     <div className={Stypes.main}>
        <div className={Stypes.left}>
            {posts && (
            <>
                <h2 className={Stypes.title}>TechTrainってどうなの？</h2>
                <ul className={Stypes.list}>
                {posts.map(post => (
                    <li className={Stypes.item} key={post.id}>{post.post}</li>
                ))}
                </ul>
            </>
            )}
        </div>
        <div className={Stypes.right}>
            <NewPost onAddPost={onAddPost}/>
        </div>
     </div>
    </>
  )
}

export default PostList