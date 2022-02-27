import React from 'react'

import vid from '../../images/VID.png'

import './preview.css'

const Preview = () => {
  return (
    <div className='componentFirst contactBC'>
      <div className='contact componentSecond'>
        <div className='contactContainer'>
          <div className='contactTitle'>Preview</div>
          <div className='contactText'>
            Our innovative application allows you to Learn, Share and Earn anywhere and anytime. Our interactive
            one to one video sessions enable a deeper and more satisfying learning experience.
          </div>
          <div className='contactVid'>
            <img src={vid} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview
