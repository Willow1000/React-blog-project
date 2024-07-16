import React from 'react'
import { Link } from 'react-router-dom'

function Links() {
  return (
    <div className='linkDiv'>
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/about">About
        </Link>
      <Link to='/post'>Post
      </Link> */}
      
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/post">Post</a>
    </div>
  )
}

export default Links