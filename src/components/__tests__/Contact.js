import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Contact from '../Contact'

describe('The Contact component', () => {
  it('renders as expected', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Contact/>
      </BrowserRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})