import React, { useEffect, useState } from 'react'

import { ReactComponent as MobileMenu } from '../../icons/MobileMenu.svg'
import { ReactComponent as Close } from '../../icons/Close.svg'
import { ReactComponent as Search } from '../../icons/Search.svg'

import Logo from '../../images/Logo.png'

import './navbar.css'
const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  useEffect(() => {
    WindowChange()
  }, [])

  const HandleMobileMenu = () => {
    setMobile(!Mobile)
  }

  const WindowChange = () => {
    if (window.innerWidth > 1050) {
      setMobile(false)
    }
  }

  window.addEventListener('resize', WindowChange)
  return (
    <div className='navbar'>
      <div className='navbarMobile'>
        <div className='navbarCenterIcon'>
          <div className='navbarMobileTopRight '>
            <img src={Logo} alt='enki connect' className='navbarLogo' />
          </div>
        </div>
      </div>
      <div className='navbarMobileButton' onClick={HandleMobileMenu}>
        <MobileMenu className={Mobile ? 'Mobile' : 'Mobile'} />
        <div className={Mobile ? 'navbarMobileContainerActive' : 'navbarMobileContainer'}>
          <div className={Mobile ? 'navbarMenu active' : 'navbarMenu'}>
            <div className='navbarMenuContainer'>
              <div className='navbarMobileTop'>
                <div className='navbarMobileTopRight menuOpen'>
                  <img src={Logo} alt='enki connect' className='navbarLogo' />
                </div>
                <div className='navbarMobileTopLeft'>
                  <Close className='CloseIcon' onClick={HandleMobileMenu} />
                </div>
              </div>
              <div className='navbarMobileMain'>
                <div className='navbarCenterLink opacity7'>Blog</div>
                <div className='navbarCenterLink opacity7'>About</div>
                <div className='navbarCenterLink opacity7'>FAQ</div>
                <div className='navbarCenterLink opacity7'>Skills</div>
                <div className='navbarCenterLink navbarRightButton'>Join Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='navbarContainer SlideRightAnimation'>
        <div className='navbarLeft'>
          <div className='navbarLeftLogo '>
            <img src={Logo} alt='enki connect' className='navbarLogo' />
          </div>
        </div>
        <div className='navbarCenter'>
          <div className='navbarCenterItem'>Blog</div>
          <div className='navbarCenterItem'>About</div>
          <div className='navbarCenterItem'>FAQ</div>
          <div className='navbarCenterItem'>Skills</div>
        </div>
        <div className='navbarRight'>
          <div className='navbarRightItem'>
            <Search />
          </div>
          <div className='navbarRightButton'>Join Now</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
