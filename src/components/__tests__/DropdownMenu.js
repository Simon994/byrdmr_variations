import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import DropdownMenu from '../common/DropdownMenu'

describe('The DropdownMenu', () => {
  it('renders as expected', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <DropdownMenu/>
      </BrowserRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
