import React from 'react'
import renderer from 'react-test-renderer'
import HeroDesktopNavbar from '../HeroDesktopNavbar'

describe('The navbar for hero view on desktop device', () => {
  it('renders as expected', () => {
    const tree = renderer.create(<HeroDesktopNavbar/>).toJSON()

    console.log(tree)
    expect(tree).toMatchSnapshot()
  })
})
