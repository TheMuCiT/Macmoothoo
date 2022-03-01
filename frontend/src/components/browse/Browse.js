import React from 'react'

import { ReactComponent as Rectangle } from '../../icons/Rectangle.svg'

import Img5 from '../../images/IMG5.png'
import Img6 from '../../images/IMG6.png'

import './browse.css'

const Browse = () => {
  return (
    <div className='componentFirst'>
      <div className='intro browse componentSecond'>
        <div className='introRight SlideRightAnimation'>
          <div className='introRightWrapper shareWrapper'>
            <div className='introRightBackground'>
              <Rectangle className='introRightBackgroundImage' />
            </div>
            <div className='introRightIcon'>
              <img src={Img5} alt='NFT' className='browseLeftImage' />
              <img src={Img6} alt='NFT' className='browseRightImage' />
            </div>
          </div>
        </div>
        <div className='introLRight SlideLeftAnimation'>
          <h1 className='h1Right'>
            Browse our extensive <span className='introTextMain'>Advisor Catalog</span>
          </h1>
          <div className='introRightText'>
            Seekers will have an extensive selection of various advisors with various abilities in various
            industries.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Browse
