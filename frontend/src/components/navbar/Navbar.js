import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as MobileMenu } from '../../icons/MobileMenu.svg'
import { ReactComponent as Close } from '../../icons/Close.svg'

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

  const HandleHome = () => {
    window.open('/', '_self')
  }

  window.addEventListener('resize', WindowChange)
  return (
    <div className='navbar'>
      <div className='navbarMobile'>
        <div className='navbarCenterIcon'>
          <div className='navbarMobileTopRight ' onClick={HandleHome}>
            <img src={Logo} alt='enki connect' className='navbarLogo' />
          </div>
        </div>
      </div>
      <div className='navbarMobileButton'>
        <MobileMenu className={Mobile ? 'Mobile' : 'Mobile'} onClick={HandleMobileMenu} />
        <div className={Mobile ? 'navbarMobileContainerActive' : 'navbarMobileContainer'}>
          <div className={Mobile ? 'navbarMenu active' : 'navbarMenu'}>
            <div className='navbarMenuContainer'>
              <div className='navbarMobileTop'>
                <div className='navbarMobileTopRight menuOpen' onClick={HandleHome}>
                  <img src={Logo} alt='enki connect' className='navbarLogo' />
                </div>
                <div className='navbarMobileTopLeft'>
                  <Close className='CloseIcon' onClick={HandleMobileMenu} />
                </div>
              </div>
              <div className='navbarMobileMain'>
                <Link to='/Blog' className='navbarCenterLink opacity7' onClick={HandleMobileMenu}>
                  Blog
                </Link>
                <Link to='/About' className='navbarCenterLink opacity7' onClick={HandleMobileMenu}>
                  About
                </Link>
                <Link to='/FAQ' className='navbarCenterLink opacity7' onClick={HandleMobileMenu}>
                  FAQ
                </Link>
                <Link to='/Skills' className='navbarCenterLink opacity7' onClick={HandleMobileMenu}>
                  Skills
                </Link>
                <div className='navbarCenterLink navbarRightButton'>Join Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='navbarContainer SlideRightAnimation'>
        <div className='navbarLeft'>
          <Link to='/' className='navbarLeftLogo '>
            <img src={Logo} alt='enki connect' className='navbarLogo' />
          </Link>
        </div>
        <div className='navbarCenter'>
          <Link to='/Blog' className='navbarCenterItem'>
            Blog
          </Link>
          <Link to='/About' className='navbarCenterItem'>
            About
          </Link>
          <Link to='/FAQ' className='navbarCenterItem'>
            FAQ
          </Link>
          <Link to='/Skills' className='navbarCenterItem'>
            Skills
          </Link>
        </div>
        <div className='navbarRight'>
          <div className='navbarRightItem'>{/*<Search />*/}</div>
          <div className='navbarRightButton'>Join Now</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
