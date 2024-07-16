import React from 'react'
// import {FaLaptop,FaTabletAlt,FaMobileAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import UseWindowSize from './hooks/UseWindowSize'
function Header(props) {
  
  const {width} = UseWindowSize()
  
  return (
    <header>
        <h3 >
            {props.title}
        </h3>
        {width<768?<h2>Mobile</h2>:width<992?<h2>Tablet</h2>:<h2>Laptop</h2>}
        <button className='hamBurgerMenuCont'>
            <span></span>
            <span></span>
            <span></span>
        </button>
    </header>
  )
}

export default Header