import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../Form'

describe('Form', () => {
  it('renders the desired fields', () => {
    render(<Form />)
    expect(
      screen.getByRole('textbox', {name: 'FULL NAME'})
    ).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', {name: 'EMAIL'})
    ).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', {name: 'MESSAGE'})
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', {name: 'submit the form'})
    ).toHaveAttribute('type', 'submit')
  })

  it('makes a function call when submitted', async () => {
    const mockSubmit = jest.fn()
    render(<Form handleSubmit={mockSubmit}/>)
    fireEvent.submit(
      screen.getByRole('button', {name: 'submit the form'})
    )
    expect(mockSubmit).toBeCalled()
  })
})