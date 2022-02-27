import React from 'react'

import { ReactComponent as InstagramSVG } from '../../icons/Instagram.svg'
import { ReactComponent as TwitterSVG } from '../../icons/Twitter.svg'
import { ReactComponent as YoutubeSVG } from '../../icons/Youtube.svg'
import { ReactComponent as LinkedInSVG } from '../../icons/LinkedIn.svg'
import { ReactComponent as MailSVG } from '../../icons/Mail.svg'

import Logo from '../../images/Logo.png'

import './footer.css'
const Footer = () => {
  const handleDiscord = () => {
    window.open('')
  }

  const handleTwitter = () => {
    window.open('')
  }

  const handleM = () => {
    window.open('')
  }
  return (
    <div className='footerBC componentFirst'>
      <div className='footerMain componentSecond'>
        <div className='footerMainLeft'>
          <div className='footerMainLeftLogo'>
            <img src={Logo} alt='' />
            EnkiConnect
          </div>
          <div className='footerMainLeftText'>Follow us with our social links</div>
          <div className='footerMainLeftLinks'>
            <InstagramSVG className='footerIcon' onClick={handleM} />
            <TwitterSVG className='footerIcon' onClick={handleTwitter} />
            <YoutubeSVG className='footerIcon' onClick={handleDiscord} />
            <LinkedInSVG className='footerIcon' onClick={handleDiscord} />
            <MailSVG className='footerIcon' onClick={handleDiscord} />
          </div>
          <div className='footerMainLeftCopy'>Ⓒ All Rights reserved 2021 EnkiConnect</div>
        </div>
        <div className='footerMainRight'>
          <div className='footerMainRightItem'>
            <div className='footerMainRightItemTitle'>Follow us</div>
            <div className='footerMainRightItemText'>Facebook</div>
            <div className='footerMainRightItemText'>Instagram</div>
            <div className='footerMainRightItemText'>Twitter</div>
            <div className='footerMainRightItemText'>Youtube</div>
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
