import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const MenuAndNavItems = (props) => {
  const [listItemOne, listItemTwo] = [...props.listItems]

  return (
    <ul>
      <li>
        <a href='#'>
        {listItemOne.toUpperCase()}
        </a>
      </li>
      <li>
        <a href='#'> 
          exact to={`/${listItemTwo}`}
          className='nav-link'
          activeClassName='selected'
        >
        {listItemTwo.toUpperCase()}
        </a>
      </li>
    </ul>
  )
}

export default MenuAndNavItems