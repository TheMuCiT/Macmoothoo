import React from 'react'

import videoFile from '../../video/video.mp4'

import './preview.css'

const Preview = () => {
  return (
    <div className='componentFirst contactBC previewScroll'>
      <div className='contact componentSecond'>
        <div className='contactContainer'>
          <div className='contactTitle'>Preview</div>
          <div className='contactText'>
            Our innovative application allows you to Learn, Share and Earn anywhere and anytime. Our interactive
            one to one video sessions enable a deeper and more satisfying learning experience.
          </div>
          <div>
            <video width='100%' controls className='contactVid'>
              <source src={videoFile} type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview
