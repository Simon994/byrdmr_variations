import { Component } from 'react' 

import './Contact.css'
import fbLogo from '../styles/assets/fb-logo.png'
import instaLogo from '../styles/assets/insta-logo.png'
import twitterLogo from '../styles/assets/twitter-logo.png'
import buttonArrow from '../styles/assets/button-arrow.png'
import DropdownMenu from './common/DropdownMenu'
import { postMessage } from '../../src/lib/api'

class Contact extends Component {

  state = {
    formData: {
      fullName: '',
      email: '',
      message: ''
    },
    formError: false
  }

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    }

    this.setState({
      formData
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await postMessage(this.state.formData)

      this.setState({
        formData: {
          fullName: '',
          email: '',
          message: ''
        }
      })

    } catch (err) {
      this.setState({ formError: true })
    }
  }


  render () {
    const {fullName, email, message} = this.state.formData

    return (
      <div className='contact-container'>
        <div className='social-container'>
          <img src={fbLogo} className='social-logo' alt='facebook'/>
          <img src={instaLogo} className='social-logo' alt='instagram'/>
          <img src={twitterLogo} className='social-logo' alt='twitter'/>
        </div>
        <DropdownMenu/>
        <div className='form-container'>
          <form onSubmit={this.handleSubmit}>
            <label className='form-label'>FULL NAME</label>
            <input placeholder='Enter your full name'
              onChange={this.handleChange}
              value={fullName}
              name='fullName'
              className='input-regular'
            />
            <label className='form-label'>EMAIL</label>
            <input placeholder='Enter your email'
              onChange={this.handleChange}
              value={email}
              name='email'
              className='input-regular'
            />
            <label className='form-label'>MESSAGE</label>
            <textarea placeholder='What are your plans?'
              onChange={this.handleChange}
              value={message}
              name='message'
              className='input-large'
            />
            <button type='submit'>
              <div>
                Send
                Message
              </div>
              <img src={buttonArrow} className='arrow' alt='arrow'/>
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact