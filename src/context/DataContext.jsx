import { createContext,useState,useEffect } from "react";
import useAxiosFetch from '../hooks/UseAxionsFetch'
import {format} from 'date-fns'
import Api from '../Api/posts'

const DataContext = createContext({})

export const DataProvider=({children})=>{
    const [search,setSearch] = useState('')
    const [posts,setPosts] = useState([])
    const {data,isLoading,fetchError} = useAxiosFetch("http://localhost:3500/posts")
    
    const [editTitle,setEditTitle] = useState('')
    const [editBody,setEditBody] = useState('')
    const handleDelete = async(id)=>{
        await Api.delete(`/posts/${id}`)
        const filteredPosts = posts.filter(post=>post.id!==id)
        setPosts(filteredPosts)
      }
      
    
    const handleEdit = (id)=>{
        const datetime = format(new Date(),'MMMM dd yyyy pp')
        const updatedPost = {id:id,title:editTitle,datetime:datetime,body:editBody}
        try{
        Api.put(`/posts/${id}`,updatedPost)
        setPosts(posts.map(post=>post.id===id?updatedPost:post))
        setEditTitle('')
        setEditBody('')
        
        }catch(err){
    
        }
    }
      
  
  useEffect(()=>{
    setPosts(data)
  },[data])
    return(
        <DataContext.Provider value={{
            search,setSearch,posts,isLoading,fetchError,setEditBody,setEditTitle,editTitle,editBody,handleDelete,handleEdit
        }}>
        {children}
        </DataContext.Provider>
    
    )
       
}

export default DataContext
