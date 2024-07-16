import React from 'react'
import { format } from 'date-fns'
import { useEffect,useContext } from 'react'
import { useParams,Link } from 'react-router-dom'
import DataContext from './context/DataContext'
function EditPost() {
    const {id} = useParams()
    const {posts,setEditBody,setEditTitle,editTitle,editBody,handleEdit}=useContext(DataContext)
    
    const post = posts.find(post=>post.id == id)
    useEffect(()=>{
        if(post){
            setEditBody(post.body)
            setEditTitle(post.title)
        }
    },[post,setEditTitle,setEditBody])
  return (
    <main className='newPost'>
        {editTitle &&
        <form action="" onSubmit={(e)=>{e.preventDefault()}}>
          <label htmlFor="title">Title:</label>
          <input type="text" id='title' onChange={(e)=>{setEditTitle(e.target.value)}} value={editTitle} required placeholder='Post Title'/>
          <label htmlFor="body">Post:</label>
          <textarea name="body" id="body" required value={editBody} onChange={(e)=>{setEditBody(e.target.value)}} rows={13} placeholder='Post'>
          </textarea>
          <button type='button' onClick={()=>{handleEdit(id); setEditBody(''); setEditTitle('')}}>Submit</button>
        </form>}
        {!editTitle &&
            <>
                <p>Oops! Post Not Found</p>
                <p><Link to="/">Home</Link></p>
            </>
        }
    </main>
  )
}

export default EditPost