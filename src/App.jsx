import { useState, useEffect } from 'react'

import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Home from './Home'
import Missing from './Missing'
import About from './About'
import NewPost from './NewPost'
import EditPost from './EditPost'
import PostPage from './PostPage'

import { Route,BrowserRouter,Routes } from 'react-router-dom'

import useAxiosFetch from './hooks/UseAxionsFetch'
import { DataProvider } from './context/DataContext'
function App() {
  const {data} = useAxiosFetch("http://localhost:3500/posts")
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    setPosts(data)
  },[data])

const handleDelete = async(id)=>{
  await Api.delete(`/posts/${id}`)
  const filteredPosts = posts.filter(post=>post.id!==id)
  setPosts(filteredPosts)
  localStorage.setItem('posts',JSON.stringify(filteredPosts))
}
  return (
    <>
   
    <Header title = 'Reactjs Blog'  />
    <DataProvider>
      <Nav />
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route exact path="/post" element={<NewPost/>} />
        <Route exact path="/edit/:id" element={<EditPost/>} />
        <Route path="/post/:id" element={<PostPage posts = {posts} handleDelete={handleDelete}/>  }/>
        <Route path="*" element={<Missing />}/>
        </Routes>
      </BrowserRouter>
    </DataProvider>
    <Footer />

    
    
    </>
  )
}

export default App
