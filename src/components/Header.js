import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/EasyRecruit-Web-Elements/Logos/EasyRecruit_Logo_1.png'
import '../styles/Header.css'

const Header = () => {
  return (
    <div>
      <nav className='nav'>
        <div>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <div className='nav-items'>
          <NavLink className='nav-item-link' to='/login'>
            Login
          </NavLink>
          <NavLink className='nav-item-button' to='/register'>
            Sign up
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Header
