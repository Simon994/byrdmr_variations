import buttonArrow from '../styles/assets/button-arrow.png'
import useForm from './CustomHooks'

const Form = ({ handleSubmit }) => {
  const { handleChange, inputs } = useForm()

  return (
    <form onSubmit={handleSubmit} data-testid='form'>
      <label
        className='form-label'
        htmlFor='full-name'
      >
        FULL NAME
      </label>
      <input
        placeholder='Enter your full name'
        onChange={handleChange}
        value={inputs.fullName}
        name='fullName'
        className='input-regular'
        id='full-name'
      />
      <label
        className='form-label'
        htmlFor='email'
      >
        EMAIL
      </label>
      <input
        placeholder='Enter your email'
        onChange={handleChange}
        value={inputs.email}
        name='email'
        className='input-regular'
        id='email'
      />
      <label
        className='form-label'
        htmlFor='message'
      >
        MESSAGE
      </label>
      <textarea
        placeholder='What are your plans?'
        onChange={handleChange}
        value={inputs.message}
        name='message'
        className='input-large'
        id='message'
      />
      <button
        type='submit'
        aria-label='submit the form'>
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