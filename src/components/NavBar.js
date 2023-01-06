import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='container'>
          <Link to= '/'>
            <h2>Home</h2>
          </Link>
      </div>
    </div>
  )
}

export default NavBar