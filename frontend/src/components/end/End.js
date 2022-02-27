import React from 'react'

import Image from '../../images/IMG7.png'

import './end.css'

const End = () => {
  return (
    <div className='componentFirst contactBC endBC'>
      <div className='contact end componentSecond'>
        <div className='contactContainer'>
          <div className='endTitle'>Make your learning experiences fun and social again.</div>
          <div className='introButtons'>
            <div className='endButton'>Get Started</div>
            <div className='endButton2'>Join Now</div>
          </div>
        </div>
      </div>
      <img src={Image} alt='' className='endImage' />
    </div>
  )
}

export default End
