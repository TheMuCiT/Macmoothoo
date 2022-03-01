import React from 'react'

import { ReactComponent as InstagramSVG } from '../../icons/Instagram.svg'
import { ReactComponent as TwitterSVG } from '../../icons/Twitter.svg'
import { ReactComponent as YoutubeSVG } from '../../icons/Youtube.svg'
import { ReactComponent as LinkedInSVG } from '../../icons/LinkedIn.svg'
import { ReactComponent as MailSVG } from '../../icons/Mail.svg'

import Logo from '../../images/Logo.png'

import './footer.css'
const Footer = () => {
  const handleInstagram = () => {
    window.open('https://instagram.com/enkiconnect?utm_medium=copy_link')
  }

  const handleTwitter = () => {
    window.open('https://www.facebook.com/enkiconnect/')
  }

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/company/enkiconnect')
  }
  const handlePinterest = () => {
    window.open('https://pin.it/608tj9r')
  }
  const handleWhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=61482174702')
  }

  return (
    <div className='footerBC componentFirst'>
      <div className='footerMain componentSecond'>
        <div className='footerMainLeft'>
          <div className='footerMainLeftLogo'>
            <img src={Logo} alt='' />
            Learn, Share & Earn
          </div>
          <div className='footerMainLeftText'>Follow us with our social links</div>
          <div className='footerMainLeftLinks'>
            <MailSVG className='footerIcon' onClick={handleWhatsapp} />
            <YoutubeSVG className='footerIcon' onClick={handlePinterest} />
            <InstagramSVG className='footerIcon' onClick={handleInstagram} />
            <TwitterSVG className='footerIcon' onClick={handleTwitter} />
            <LinkedInSVG className='footerIcon' onClick={handleLinkedIn} />
          </div>
          <div className='footerMainLeftCopy'>Ⓒ All Rights reserved 2021 Enki Connect Pty Ltd</div>
        </div>
        <div className='footerMainRight'>
          <div className='footerMainRightItem'>
            <div className='footerMainRightItemTitle'>Follow us</div>
            <div className='footerMainRightItemText' onClick={handlePinterest}>
              Pinterest
            </div>
            <div className='footerMainRightItemText' onClick={handleInstagram}>
              Instagram
            </div>
            <div className='footerMainRightItemText' onClick={handleTwitter}>
              Twitter
            </div>
            <div className='footerMainRightItemText' onClick={handleWhatsapp}>
              Whatsapp
            </div>
          </div>
          <div className='footerMainRightItem'>
            <div className='footerMainRightItemTitle'>Legal</div>
            <div className='footerMainRightItemText'>Terms</div>
            <div className='footerMainRightItemText'>FAQ's</div>
            <div className='footerMainRightItemText'>Privacy</div>
            <div className='footerMainRightItemText'>Support</div>
          </div>
        </div>

        <div className='footerMainLeftCopyMobile'>Ⓒ 2021 - TrustMarket all rights reserved</div>
      </div>
    </div>
  )
}

export default Footer
