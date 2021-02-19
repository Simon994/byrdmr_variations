import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'


const MenuAndNavItems = (props) => {
  const [listItemOne, listItemTwo] = [...props.listItems]

  return (
    <ul>
      <li>
          <NavLink 
            exact to={`/${listItemOne}`}
            className='nav-link'
            activeClassName='selected'
          >
          {listItemOne.toUpperCase()}
          </NavLink>
      </li>
      <li>
          <NavLink 
            exact to={`/${listItemTwo}`}
            className='nav-link'
            activeClassName='selected'
          >
          {listItemTwo.toUpperCase()}
          </NavLink>
      </li>
    </ul>
  )
}

export default withRouter(MenuAndNavItems)