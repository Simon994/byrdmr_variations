import React, {useRef} from 'react'
import ToggleActive from './ToggleActive'

export default function DropdownMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = ToggleActive(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="outer-menu-container">
      <div className="inner-menu-container">
        <button onClick={onClick} className="menu-trigger">
          <img
            src="https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01-825x510.png"
            alt="Menu button icon"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>STORE</li>
            <li>TUTORIALS</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

