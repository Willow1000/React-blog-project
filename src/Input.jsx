import React from 'react'
import { useContext } from 'react'
import DataContext from './context/DataContext'
function Input() {
  const {search,setSearch} = useContext(DataContext)

  return (
    <form action="" onSubmit={(e)=>{e.preventDefault()}} id='searchForm'>
      <input type="search" placeholder='Search Posts' value={search} onChange={(e)=>{setSearch(e.target.value)}} />
    </form>
  )
}

export default Input