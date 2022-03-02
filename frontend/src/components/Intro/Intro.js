import React, { useState, useEffect } from 'react'

import { ReactComponent as Rectangle } from '../../icons/Rectangle.svg'

import Img1 from '../../images/IMG1.png'
import Img2 from '../../images/IMG2.png'

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
    //TODO
  }

  return (
    <div className='componentFirst'>
      <div className='intro componentSecond'>
        <div className='introLeft SlideLeftAnimation'>
          <div className='introLeftTextMain'>Designed by Fans, for Fans</div>
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
            <div className='introLeftButton' onClick={handleGetStarted}>
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
