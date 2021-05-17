import './Contact.css'
import fbLogo from '../styles/assets/fb-logo.png'
import instaLogo from '../styles/assets/insta-logo.png'
import twitterLogo from '../styles/assets/twitter-logo.png'
import DropdownMenu from './common/DropdownMenu'
import Form from './Form'
import Logo from './common/Logo'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-header'>
        <div className='social-container'>
          <img src={fbLogo} className='social-logo' alt='facebook' />
          <img src={instaLogo} className='social-logo' alt='instagram' />
          <img src={twitterLogo} className='social-logo' alt='twitter' />
        </div>
        <Logo />
        <DropdownMenu />
      </div>
      <div className='form-container'>
        <Form />
      </div>
    </div>
  )
}

export default Contact