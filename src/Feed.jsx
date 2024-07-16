import React from 'react'
import Post from './Post'
function Feed(props) {
  
  return (
    <>
        {props.posts.map(post=>(
            <Post key={post.id} post = {post}/>
        ))}
    </>
    
  )
}

export default Feed