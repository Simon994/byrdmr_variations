import React from 'react'
import renderer from 'react-test-renderer'
import DropdownMenu from '../common/DropdownMenu'


describe('The Menu', () => {
  it('renders as expected', () => {
    const tree = renderer.create(<DropdownMenu/>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
