import { useState } from 'react'

import { postMessage } from '../../src/lib/api'

const useForm = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    email: '',
    message: ''
  })
  const [formError, setFormError] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setInputs({
        fullName: '',
        email: '',
        message: ''
      })
      await postMessage(inputs)
    } catch (err) {
      console.error('Oops something went wrong.')
      setFormError(true)
    }
  }

  const handleChange = (e) => {
    setInputs(inputs => (
      { ...inputs, [e.target.name]: e.target.value }
    ))
  }

  return {
    handleSubmit,
    handleChange,
    inputs
  }
}

export default useForm