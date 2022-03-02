import React from 'react'

import { ReactComponent as InstagramSVG } from '../../icons/Instagram.svg'
import { ReactComponent as TwitterSVG } from '../../icons/Twitter.svg'
import { ReactComponent as YoutubeSVG } from '../../icons/Youtube.svg'
import { ReactComponent as LinkedInSVG } from '../../icons/LinkedIn.svg'
import { ReactComponent as MailSVG } from '../../icons/Mail.svg'

import Logo from '../../images/Logo.png'

import './footer.css'
const Footer = ({ history }) => {
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

  const handleToFAQ = () => {
    window.open('/FAQ', '_self')
  }

  const handleTerms = () => {
    window.open('/Terms', '_self')
  }

  const handlePrivacy = () => {
    window.open('/Privacy', '_self')
  }

  const handleSupport = () => {
    window.open('mailto::enkiconnect_board_1651812700_b1ac2038443bc270e6b1__23995924@use1.mx.monday.com')
  }

  return (
    <div className='footerBC componentFirst'>
      <div className='footerMain componentSecond'>
        <div className='footerMainLeft'>
          <div className='footerMainLeftLogo'>
            <img src={Logo} alt='' />
            Learn, Share & Earn
          </div>
          <div className='footerMainLeftText'>Follow us on our socials</div>
          <div className='footerMainLeftLinks'>
            <MailSVG className='footerIcon' onClick={handleWhatsapp} />
            <YoutubeSVG className='footerIcon' onClick={handlePinterest} />
            <InstagramSVG className='footerIcon' onClick={handleInstagram} />
            <TwitterSVG className='footerIcon' onClick={handleTwitter} />
            <LinkedInSVG className='footerIcon' onClick={handleLinkedIn} />
          </div>
          <div className='footerMainLeftCopy'>All Rights Reserved Ⓒ 2021 Enki Connect Pty Ltd</div>
        </div>
        <div className='footerMainRight'>
          <div className='footerMainRightItem'>
            <div className='footerMainRightItemTitle'>Follow Us</div>
            <div className='footerMainRightItemText' onClick={handlePinterest}>
              Pinterest
            </div>
            <div className='footerMainRightItemText' onClick={handleInstagram}>
              Instagram
            </div>
            <div className='footerMainRightItemText' onClick={handleTwitter}>
              Facebook
            </div>
            <div className='footerMainRightItemText' onClick={handleWhatsapp}>
              Whatsapp
            </div>
          </div>
          <div className='footerMainRightItem'>
            <div className='footerMainRightItemTitle'>Legal</div>
            <div className='footerMainRightItemText' onClick={handleTerms}>
              Terms
            </div>
            <div className='footerMainRightItemText' onClick={handleToFAQ}>
              FAQ's
            </div>
            <div className='footerMainRightItemText' onClick={handlePrivacy}>
              Privacy
            </div>
            <div className='footerMainRightItemText' onClick={handleSupport}>
              Support
            </div>
          </div>
        </div>

        <div className='footerMainLeftCopyMobile'>Ⓒ 2021 - TrustMarket all rights reserved</div>
      </div>
    </div>
  )
}

export default Footer
