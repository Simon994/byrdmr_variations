import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import Logo from '../styles/assets/Logo.png'

function HeroDesktopNavbar() {

  return (
    <nav className='desktop-nav'>
      <div className='left-container'>
        <ul>
          <li>STORE</li>
          <li>TUTORIALS</li>
        </ul>
      </div>
      <img 
        src={Logo}
        alt='ByrdMR logo'
        className='byrd-logo'
      />
      <div className='right-container'>
        <ul>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </nav>
  )
}

export default HeroDesktopNavbar