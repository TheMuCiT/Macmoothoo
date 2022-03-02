import React from 'react'
import Footer from '../../components/footer/Footer'

import { ReactComponent as Line } from '../../icons/Line.svg'

import image from '../../images/IMG17.png'

import './about.css'

const About = () => {
  return (
    <div className='main'>
      <div className='componentFirst'>
        <div className='componentSecondMain'>
          <Line className='Line1' />
          <div className='contactContainer aboutContainer'>
            <div className='contactTitle'>About</div>
          </div>
        </div>
      </div>
      <div className='about'>
        <img src={image} alt='' className='aboutImgae' />
        <div className='componentFirst'>
          <div className='componentSecondMain aboutMain'>
            <div className='contactContainer'>
              <div className='aboutTitle'>BUSINESS</div>
              <div className='aboutTitleBig'>
                Our Vision is to make more knowledge accessible for everyone, so the world can grow
              </div>
              <div className='aboutText'>
                Our Mission is to create a platform that assists with the human need of exploration, discovery and
                development by personalised and live-learning one to one connections.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='componentFirst'>
        <div className='componentSecondMain'>
          <div className='elapse' />
          <div className='contactContainer'>
            <div className='contactTitle'>Our Values</div>
          </div>
          <div className='aboutBoxContainer'>
            <div className='aboutBox'>Understanding</div>
            <div className='aboutBox'>Respect</div>
            <div className='aboutBox'>Integrity</div>
            <div className='aboutBox'>Innovation</div>
            <div className='aboutBox'>Passion</div>
            <div className='aboutBox'>Empathy</div>
          </div>
          <div className='contactContainer'>
            <div className='contactTitle'>Our Story</div>
          </div>
          <div className='aboutStoryText'>
            In every story or folklore, Enki is connected with the heights and depths of complete understanding and
            is always perceived as a friend of humankind. When faced with a choice between helping the spirit of
            the gods or the requirements of the people, Enki always chose human interests and always the path of
            compassion, forgiveness, and wisdom.
          </div>
          <div className='aboutStoryText'>
            Enki Connect is a real-time, innovative e-learning platform that allows you to connect with people and
            learn and earn in new ways. Enki Connect allows users to connect with a wide range of qualified
            advisers across the world with various skills and expertise. Seekers will have access to an endless
            pool of learning possibilities to develop and improve their lives.
          </div>
          <div className='aboutStoryText'>
            Enki Connect was found with the mission that anyone can learn and discover anything at an affordable
            price, anywhere in the globe.
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default About
