import { NavLink } from 'react-router-dom'

import './MenuAndNavItems.css'

const MenuAndNavItems = (props) => {
  const [listItemOne, listItemTwo] = [...props.listItems]

  return (
    <ul>
      <li>
        <NavLink 
          to={`/${listItemOne}`}
          className='nav-link'
          activeClassName='selected'
        >
          {listItemOne.toUpperCase()}
        </NavLink>
      </li>
      <li>
        <NavLink 
          to={`/${listItemTwo}`}
          className='nav-link'
          activeClassName='selected'
        >
          {listItemTwo.toUpperCase()}
        </NavLink>
      </li>
    </ul>
  )
}

export default MenuAndNavItems