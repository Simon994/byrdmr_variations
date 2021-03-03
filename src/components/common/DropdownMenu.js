import {useRef} from 'react'

import './DropdownMenu.css'
import MenuAndNavItems from './MenuAndNavItems'
import ToggleActive from './ToggleActive'
import menu from '../../styles/assets/menu.png'
import Logo from '../../styles/assets/Logo.png'

const DropdownMenu = () => {
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = ToggleActive(dropdownRef, false)
  const onClick = () => setIsActive(!isActive)

  return (
    <div className='outer-menu-container'>
      <img 
        src={Logo}
        alt='ByrdMR logo'
        className='byrd-logo'
      />
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
            listItems={['store', 'tutorials']}/>
          <MenuAndNavItems 
            listItems={['blog', 'contact']}/>
        </nav>
      </div>
    </div>
  )
}

export default DropdownMenu