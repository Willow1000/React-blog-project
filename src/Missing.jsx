import React from 'react'

function Missing() {
  return (
    <main>
      <h2 style={{
        paddingLeft: '2rem'
      }}>OOPS!!</h2>
      <p style={{
        paddingLeft:"2rem",
        marginTop:"4rem",
      }}>Could'nt find what you're looking for</p>
      <div style={{
        marginTop:"2rem"
      }}>
        <a href="/" style={{
          paddingLeft: "2rem",
        
        }}>Go back Home?</a>
      </div>
    </main>
  )
}

export default Missing