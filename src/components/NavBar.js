import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'



const NavBar = () => {
  return (
    <div className='nav'>
      <div className='nav-container'>
        <div className='nav-content'>
              <ul className='navbar-nav'> 

                  <li className='nav-item'><NavLink to='/'>Home</NavLink> </li>
                  <li className='nav-item'><NavLink to='/about'>About</NavLink></li>
                  <li className='nav-item'><NavLink to='/merch'>Merch</NavLink></li>
                  <li className='nav-item'><NavLink to='/contact'>Contact</NavLink></li>

              </ul>

        </div>
        

         

           
             
      </div>


          
          
    </div>
  )
}

export default NavBar