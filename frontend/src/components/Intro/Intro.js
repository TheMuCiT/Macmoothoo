import React, { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'

import { ReactComponent as Rectangle } from '../../icons/Rectangle.svg'

import Img1 from '../../images/IMG1.png'
import Img2 from '../../images/IMG2.png'

import { ReactComponent as Close } from '../../icons/Close.svg'

import Logo from '../../images/Logo.png'

import './intro.css'

const Intro = () => {
  const countdownDate = new Date('May 24, 2022 00:00:00 GMT+10:00').getTime()
  const [
    {
      expired,
      values: { days, hours, minutes, seconds },
    },
    setResult,
  ] = useState(() => calculateCountdownFromNow(countdownDate))

  useEffect(() => {
    if (expired) return undefined
    const intervalId = setInterval(() => setResult(calculateCountdownFromNow(countdownDate)), 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [expired, countdownDate])

  const handleGetStarted = () => {
    let video = document.getElementsByClassName('previewScroll')
    //console.log(video[0].scrollHeight)
    window.scrollTo({ top: video[0].scrollHeight, left: 0, behavior: 'smooth' })
  }

  const [join, setJoin] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  const [validEmail, setValidEmail] = useState(true)
  const [validNumber, setValidNumber] = useState(true)

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

  return (
    <div className='componentFirst'>
      <div className='intro componentSecond'>
        <div className='introLeft SlideLeftAnimation'>
          <h1>
            <span className='introTextMain'>Powerful </span>and
            <span className='introTextMain'> Personalised </span>
            knowledge sharing platform
          </h1>
          <div className='introLeftText'>
            Lets get live! Discover the new era of learning experiences, Use your skills and interests as keys to
            endless possibilities
          </div>
          <div className='introButtons'>
            <div className='introLeftButton' onClick={handleJoin}>
              Get Started
            </div>
            <div className='introLeftButtonSecond' onClick={handleGetStarted}>
              Play Video
            </div>
          </div>
        </div>
        <div className='timerCounter introTimer'>
          <div className='timerContainer'>
            <div className='timerBox'>
              <div className='timerBoxValue'>{('0' + days).slice(-2)}</div>
              <div className='timerBoxText'>Days</div>
            </div>

            <div className='timerBox'>
              <div className='timerBoxValue'>{('0' + hours).slice(-2)}</div>
              <div className='timerBoxText'>Hours</div>
            </div>

            <div className='timerBox'>
              <div className='timerBoxValue'>{('0' + minutes).slice(-2)}</div>
              <div className='timerBoxText'>Minutes</div>
            </div>

            <div className='timerBox'>
              <div className='timerBoxValue'>{('0' + seconds).slice(-2)}</div>
              <div className='timerBoxText'>Seconds</div>
            </div>
          </div>
        </div>
        <div className='introRight SlideRightAnimation'>
          <div className='introRightWrapper'>
            <div className='introRightBackground'>
              <Rectangle className='introRightBackgroundImage' />
            </div>
            <div className='introRightIcon'>
              <img src={Img1} alt='NFT' className='introLeftImage' />
              <img src={Img2} alt='NFT' className='introRightImage' />
            </div>
          </div>
        </div>
      </div>
      {join && (
        <div className='join'>
          <div className='joinCloseIcon'>
            <Close className='joinClose' onClick={handleJoin} />
          </div>
          <img src={Logo} alt='' />
          <div className='joinHeader'>Join Now</div>
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

export default Intro

export const calculateCountdownFromNow = (nextDate) => {
  const now = new Date().getTime()

  const distance = new Date(nextDate).getTime() - now

  if (distance < 0) {
    return {
      expired: true,
      values: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    }
  }

  return {
    expired: false,
    values: {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    },
  }
}
