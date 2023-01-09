import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='container'>
          <Link to= '/'>
            <h2>Home</h2>
           </Link>
          <h2>About</h2>
          <h2>Merch</h2>
          <h2>Contact</h2>
      </div>
    </div>
  )
}

export default NavBar