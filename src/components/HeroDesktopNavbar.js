import MenuAndNavItems from './common/MenuAndNavItems'
import Logo from '../styles/assets/Logo.png'

function HeroDesktopNavbar() {

  return (
    <nav className='desktop-nav'>
      <div className='left-container'>
        <MenuAndNavItems listItems={['store', 'tutorials']}/>
      </div>
      <img 
        src={Logo}
        alt='ByrdMR logo'
        className='byrd-logo'
      />
      <div className='right-container'>
        <MenuAndNavItems listItems={['blog', 'contact']}/>
      </div>
    </nav>
  )
}

export default HeroDesktopNavbar