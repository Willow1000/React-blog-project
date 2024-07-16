import {React,useContext} from 'react'
import {useParams,Link} from 'react-router-dom'
import DataContext from './context/DataContext'

function PostPage() {
  const {id} = useParams()
  const {posts,handleDelete}= useContext(DataContext)
  const post = posts.find(post=>(post.id).toString()===id)
  return (
    <main className='postFullMain'>
        <article className='postFull'>
          {post &&
            <>
              <h2>{post.title}</h2>
              <p>{post.datetime}</p>
              <p>{post.body}</p>
              
                <div className='buttonDiv'>
                  <button onClick={()=>{handleDelete(post.id)}} className='deletePost'>Delete Post</button>
                  <Link to={`/edit/${post.id}`}><button className='editPost' >Edit Post</button></Link>
                </div>
             
            </>
          }
          {!post &&
            <>
              <p>Oops! Post Not Found</p>
              <Link to={"/"}>Go back home?</Link>
            </>
          }

        </article>
    </main>
  )
}

export default PostPage