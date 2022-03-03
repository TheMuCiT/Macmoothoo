import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import emailjs from 'emailjs-com'

import { ReactComponent as MobileMenu } from '../../icons/MobileMenu.svg'
import { ReactComponent as Close } from '../../icons/Close.svg'

import Logo from '../../images/Logo.png'

import './navbar.css'
const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  const [join, setJoin] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  const [validEmail, setValidEmail] = useState(true)
  const [validNumber, setValidNumber] = useState(true)

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

  const handleJoin = () => {
    setJoin(!join)
  }

  const handleApply = (e) => {
    e.preventDefault()
    const emailRegex = /\S+@\S+\.\S+/

    var pattern = new RegExp(/^[0-9\b]+$/)

    if (pattern.test(number)) {
      if (number.length > 5 && number.length < 12) {
        setValidNumber(true)
      } else {
        setValidNumber(false)
      }
    } else {
      setValidNumber(false)
    }

    if (emailRegex.test(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }

    if (!validNumber || !validEmail) {
      return
    }

    const value = {
      name: name,
      email: email,
      number: number,
    }

    emailjs.send('service_09ipewl', 'template_0xqwpfm', value, 'KixEmYbZg9Fy7VdAU').then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
    setJoin(!join)
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
                <div className='navbarCenterLink navbarRightButton' onClick={handleJoin}>
                  Join Now
                </div>
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
          <div className='navbarRightButton' onClick={handleJoin}>
            Join Now
          </div>
        </div>
      </div>
      {join && (
        <div className='join'>
          <div className='joinCloseIcon'>
            <Close className='joinClose' onClick={handleJoin} />
          </div>
          <img src={Logo} alt='' />
          <div className='joinHeader' onClick={handleJoin}>
            Join Now
          </div>
          <div className='joinSubHeader'>Start your learning discover today</div>
          <div className='joinInputContainer'>
            <div className='joinInputText'>Full Name</div>
            <div className='joinInputField'>
              <input
                type='text'
                placeholder='Your name'
                value={name}
                name='name'
                className='joinInput'
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
          <div className='joinInputContainer'>
            <div className='joinInputText'>Email</div>
            <div className='joinInputField'>
              <input
                type='email'
                placeholder='Your email address'
                className={validEmail ? 'joinInput' : 'joinInput valid'}
                value={email}
                name='email'
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
          <div className='joinInputContainer'>
            <div className='joinInputText'>Phone Number</div>
            <div className='joinInputField'>
              <input
                type='tel'
                placeholder='Your phone number'
                className={validNumber ? 'joinInput' : 'joinInput valid'}
                name='number'
                value={number}
                onChange={(event) => setNumber(event.target.value)}
              />
            </div>
          </div>
          <div className='joinInputContainer'>
            <div className='joinButton' onClick={handleApply}>
              Apply
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
