import './HeroDesktopNavbar.css'
import MenuAndNavItems from './common/MenuAndNavItems'
import Logo from './common/Logo'

function HeroDesktopNavbar() {

  return (
    <nav className='desktop-nav'>
      <div className='left-container'>
        <MenuAndNavItems listItems={['store', 'tutorials']}/>
      </div>
      <Logo />
      <div className='right-container'>
        <MenuAndNavItems listItems={['blog', 'contact']}/>
      </div>
    </nav>
  )
}

export default HeroDesktopNavbar