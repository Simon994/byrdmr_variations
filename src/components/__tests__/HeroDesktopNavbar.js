import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import HeroDesktopNavbar from '../HeroDesktopNavbar'

describe('The HeroDesktopNavbar (navbar for hero view on desktop device)', () => {
  it('renders as expected', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <HeroDesktopNavbar/>
      </BrowserRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
