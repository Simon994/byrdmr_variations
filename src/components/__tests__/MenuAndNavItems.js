import React from 'react'
import renderer from 'react-test-renderer'
import MenuAndNavItems from '../common/MenuAndNavItems'


describe('The Menu', () => {
  jest.mock('../../../node_modules/react-router-dom/NavLink', () => () => '<nav/>')
  it('renders as expected', () => {
    const tree = renderer.create(<MenuAndNavItems listItems={['store', 'tutorials']}/>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})