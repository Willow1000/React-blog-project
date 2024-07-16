import React from 'react'
import Feed from './Feed'
import { useContext } from 'react'
import DataContext from './context/DataContext'
function Home() {
  const {posts,fetchError,isLoading,search} = useContext(DataContext)
  const postsFiltered=posts.filter(post=> post.body.toLowerCase().includes(search.toLowerCase()) || post.title.toLowerCase().includes(search.toLowerCase()) || post.datetime.toLowerCase().includes(search.toLowerCase())).reverse()
  return (
    <main className='home'>
      {isLoading && 
        <p style={{
          textAlign:"center"
        }}>Loading Posts...</p>
      }
      {fetchError &&  <p style={{
        color:'red'
      }}>{fetchError}</p>}
      {!isLoading && !fetchError && (postsFiltered.length?(
          <Feed posts = {postsFiltered}/>
        ):(
          <p style={{
            marginTop: "2rem",
          }}>No Posts To Display</p>
        ))
        
      }
      
    </main>
  )
}

export default Home