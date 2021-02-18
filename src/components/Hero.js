import React, { useState, useEffect } from 'react'

import HeroDesktopNavbar from './HeroDesktopNavbar'
import DropdownMenu from './common/DropdownMenu'
import Drone from '../styles/assets/Drone.png'
import Shadow from '../styles/assets/Shadow.png'

const Hero = () => {
  const breakpointTablet = 768
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointTablet);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointTablet);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <>
    <section className='hero-section'>
    <div>
      {isDesktop ? (
        <div>
          <HeroDesktopNavbar/>
        </div>
      ) : (
        <div>
          <DropdownMenu/>
        </div>
      )}
    </div>
      <div>
        <img
          src={Drone}
          alt='Drone'
        />
        <img 
          src={Shadow}
          alt='Drone'
        />
      </div>
      <h1>F-210</h1>
      <h3>"THE FASTEST DRONE ON THE PLANET"</h3>
      <p>"The— The Wirecutter</p>
    </section>
    </>
  );
}

export default Hero
