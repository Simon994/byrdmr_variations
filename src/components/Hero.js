import React, { useState, useEffect } from 'react'

import HeroDesktopNavbar from './HeroDesktopNavbar'
import DropdownMenu from './common/DropdownMenu' 

const Hero = () => {
  const breakpointTablet = 768
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointTablet);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointTablet);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
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
  );
}

export default Hero
