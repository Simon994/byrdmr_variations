import React from 'react'

import DropdownMenu from './common/DropdownMenu'
import { postMessage } from '../../src/lib/api'

class Contact extends React.Component {

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
      <>
        <DropdownMenu/>
        <form onSubmit={this.handleSubmit}>
          <label className='form-label'>FULL NAME</label>
          <input placeholder='Enter your full name'
              onChange={this.handleChange}
              value={fullName}
              name='fullName'
            />
          <label className='form-label'>EMAIL</label>
          <input placeholder='Enter your email'
              onChange={this.handleChange}
              value={email}
              name='email'
            />
          <label className='form-label'>MESSAGE</label>
          <input placeholder='What are your plans?'
              onChange={this.handleChange}
              value={message}
              name='message'
            />
          <button type='submit'>Send Message <span>&rarr;</span></button>
        </form>
      </>
    )
  }
}

export default Contact