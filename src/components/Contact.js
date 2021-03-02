import { Component } from 'react' 

import './Contact.css'
import fbLogo from '../styles/assets/fb-logo.png'
import instaLogo from '../styles/assets/insta-logo.png'
import twitterLogo from '../styles/assets/twitter-logo.png'
import DropdownMenu from './common/DropdownMenu'
import Form from './Form'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='social-container'>
        <img src={fbLogo} className='social-logo' alt='facebook'/>
        <img src={instaLogo} className='social-logo' alt='instagram'/>
        <img src={twitterLogo} className='social-logo' alt='twitter'/>
      </div>
      <DropdownMenu/>
      <div className='form-container'>
        <Form/>
      </div>
    </div>
  )
}

export default Contact