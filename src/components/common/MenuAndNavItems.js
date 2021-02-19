import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'


const MenuAndNavItems = (props) => {
  const [listItemOne, listItemTwo] = [...props.listItems]

  return (
    <ul>
      <li>
        <Router>
          <NavLink 
            exact to={`/${listItemOne}`}
            className='nav-link'
            activeClassName='selected'
          >
          {listItemOne.toUpperCase()}
          </NavLink>
        </Router>
      </li>
      <li>
        <Router>
          <NavLink 
            exact to={`/${listItemTwo}`}
            className='nav-link'
            activeClassName='selected'
          >
          {listItemTwo.toUpperCase()}
          </NavLink>
        </Router>
      </li>
    </ul>
  )
}

export default MenuAndNavItems