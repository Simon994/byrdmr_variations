import React from 'react'
import renderer from 'react-test-renderer'
import HeroDesktopNavbar from '../HeroDesktopNavbar'

describe('The HeroDesktopNavbar (navbar for hero view on desktop device)', () => {
  it('renders as expected', () => {
    const tree = renderer.create(<HeroDesktopNavbar/>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
