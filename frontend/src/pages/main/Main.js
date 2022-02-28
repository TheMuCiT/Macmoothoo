import React from 'react'

import { ReactComponent as Line } from '../../icons/Line.svg'

import Animation from '../../components/animation/Animation'
import Browse from '../../components/browse/Browse'
import End from '../../components/end/End'
import Intro from '../../components/Intro/Intro'
import Preview from '../../components/preview/Preview'
import Share from '../../components/share/Share'
import Timer from '../../components/timer/Timer'

import './main.css'
import Footer from '../../components/footer/Footer'

const Main = () => {
  return (
    <div className='main'>
      <div className='componentFirst'>
        <div className='componentSecondMain'>
          <div className='elapse' />
          <Line className='Line1' />
          <Line className='Line2' />
          <Line className='Line3' />
          <Intro />
          <Timer />
          <Preview />
          <Share />
          <Browse />
        </div>
      </div>
      <End />
      <Footer />
      <Animation />
    </div>
  )
}

export default Main
