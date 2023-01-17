import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='nav-container'>
        <div className='nav-content'>
              <ul className='navbar-nav'> 

                  <li className='nav-item'> <Link to='/'>Home</Link> </li>
                  <li className='nav-item'> <Link to='/about'>About</Link></li>
                  <li className='nav-item'> <Link to='/merch'>Merch</Link></li>
                  <li className='nav-item'> <Link to='/contact'>Contact</Link></li>
              </ul>

        </div>
        

         

           
             
      </div>


          
          
    </div>
  )
}

export default NavBar