import React from 'react'

import { ReactComponent as Rectangle } from '../../icons/Rectangle.svg'

import Img3 from '../../images/IMG3.png'
import Img4 from '../../images/IMG4.png'

import './share.css'

const Share = () => {
  return (
    <div className='componentFirst'>
      <div className='intro componentSecond'>
        <div className='introLeft SlideLeftAnimation'>
          <h1>
            Share any skill as a <span className='introTextMain'>Freelance Advisor</span>
          </h1>
          <div className='introLeftText'>
            Advisors have the ability to "mentor" with any advise with any skill or expertise with proven
            experience or qualification.
          </div>
        </div>
        <div className='introRight SlideRightAnimation'>
          <div className='introRightWrapper shareWrapper'>
            <div className='introRightBackground'>
              <Rectangle className='introRightBackgroundImage' />
            </div>
            <div className='introRightIcon'>
              <img src={Img3} alt='NFT' className='shareLeftImage' />
              <img src={Img4} alt='NFT' className='shareRightImage' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share
