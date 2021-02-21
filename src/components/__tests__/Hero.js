import React from 'react'
import renderer from 'react-test-renderer'
import Hero from '../Hero'
import { BrowserRouter } from "react-router-dom";

describe('The Hero component', () => {
  it('renders as expected', () => {
    const tree = renderer.create(
      <BrowserRouter>
            <Hero/>
      </BrowserRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
