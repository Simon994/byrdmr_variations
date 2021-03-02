import buttonArrow from '../styles/assets/button-arrow.png'
import useForm from './CustomHooks'

const Form = () => {
  const { handleSubmit, handleChange, inputs } = useForm()
  
  return (
    <form onSubmit={handleSubmit}>
      <label className='form-label'>FULL NAME</label>
      <input placeholder='Enter your full name'
        onChange={handleChange}
        value={inputs.fullName}
        name='fullName'
        className='input-regular'
      />
      <label className='form-label'>EMAIL</label>
      <input placeholder='Enter your email'
        onChange={handleChange}
        value={inputs.email}
        name='email'
        className='input-regular'
      />
      <label className='form-label'>MESSAGE</label>
      <textarea placeholder='What are your plans?'
        onChange={handleChange}
        value={inputs.message}
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
  )
}

export default Form