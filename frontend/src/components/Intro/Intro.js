import React from 'react'

import { ReactComponent as Rectangle } from '../../icons/Rectangle.svg'

import Img1 from '../../images/IMG1.png'
import Img2 from '../../images/IMG2.png'

import './intro.css'

const Intro = () => {
  const handleGetStarted = () => {
    //TODO
  }

  return (
    <div className='componentFirst'>
      <div className='intro componentSecond'>
        <div className='introLeft SlideLeftAnimation'>
          <div className='introLeftTextMain'>Deisgned by Fans, for Fans</div>
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
