import React, { useState } from 'react'

function NewPost() {
  const [postTitle,setPostTitle] = useState('')
    const [postBody,setPostBody] = useState('')
    const handleSubmit = (e)=>{
    e.preventDefault()
    const id = posts.length?(parseInt(posts[posts.length - 1].id)+1).toString() : "1"
    const datetime = format(new Date(),'MMMM dd yyyy pp')
    
    const newPost = {id:id,title:postTitle,datetime:datetime,body:postBody}
    const allPosts = [...posts,newPost].sort((a,b)=>(a.id - b.id))
    
    try{
        Api.post("/posts",newPost)
        setPosts(allPosts)
        setPostTitle('')
        setPostBody('')
    }catch(err){
        console.error(err.name)
    }
    
    }
  return (
    <main className='newPost'>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" id='title' onChange={(e)=>{setPostTitle(e.target.value)}} value={postTitle} required placeholder='Post Title'/>
          <label htmlFor="body">Post:</label>
          <textarea name="body" id="body" required value={postBody} onChange={(e)=>{setPostBody(e.target.value)}} rows={13} placeholder='Post'>
          </textarea>
          <button type='submit'>Submit</button>
        </form>
    </main>
  )
}

export default NewPost