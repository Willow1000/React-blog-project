import React from 'react'
import Input from './Input'
import Links from './Links'
import { useContext } from 'react'
import DataContext from './context/DataContext'
function Nav() {
  const {search,setSearch} = useContext(DataContext)
  return (
    <section>
        <Input search={search} setSearch = {setSearch}/>
        <Links/>
    </section>
  )
}

export default Nav