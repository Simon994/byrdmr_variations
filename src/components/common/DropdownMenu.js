import { useRef } from 'react'

import './DropdownMenu.css'
import MenuAndNavItems from './MenuAndNavItems'
import ToggleActive from './ToggleActive'
import menu from '../../styles/assets/menu.png'

export default function DropdownMenu() {
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = ToggleActive(dropdownRef, false)
  const onClick = () => setIsActive(!isActive)

  return (
    <div className='inner-menu-container'>
      <button onClick={onClick} className='menu-trigger'>
        <img
          src={menu}
          alt='Menu button icon'
        />
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? 'active' : 'inactive'}`}
      >
        <MenuAndNavItems
          listItems={['store', 'tutorials']} />
        <MenuAndNavItems
          listItems={['blog', 'contact']} />
      </nav>
    </div>
  )
}

