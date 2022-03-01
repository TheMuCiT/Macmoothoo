import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'

import { ReactComponent as ArrowSVG } from '../../icons/Arrow.svg'
import { ReactComponent as ShareSVG } from '../../icons/Share.svg'
import { ReactComponent as ArrowRightSVG } from '../../icons/ArrowRight.svg'

import './skills.css'

const _items = [
  {
    image: '/images/carouselFirst.jpg',
    title: 'ntf',
    press: 'true',
  },
  {
    image: '/images/carouselSecond.jpg',
    title: 'ntf',
    press: 'false',
  },
  {
    image: '/images/carouselThird.jpg',
    title: 'ntf',
    press: 'false',
  },
  {
    image: '/images/carouselFour.jpg',
    title: 'ntf',
    press: 'false',
  },
  {
    image: '/images/carouselFour.jpg',
    title: 'ntf',
    press: 'false',
  },
  {
    image: '/images/carouselFour.jpg',
    title: 'ntf',
    press: 'false',
  },
  {
    image: '/images/carouselFour.jpg',
    title: 'ntf',
    press: 'false',
  },
]

const length = _items.length
_items.push(..._items)

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const createItem = (position, idx) => {
  let slideWidth = 450
  if (window.innerWidth < 600) {
    slideWidth = 300
  }

  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}px)`,
    },
    styleIMG: {},
    image: _items[idx],
  }

  switch (position) {
    case length - 2:
    case length + 2:
      item.styles = { ...item.styles, opacity: 0 }
      break
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles }
      break
    case length:
      item.styles = { ...item.styles }
      break
    default:
      item.styles = { ...item.styles, opacity: 0 }
      break
  }

  return item
}

const keys = Array.from(Array(_items.length).keys())

const Skills = () => {
  const [items, setItems] = useState(keys)
  const [isTicking, setIsTicking] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const bigLength = items.length

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true)
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength])
      })
    }
  }

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true)
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength])
      })
    }
  }

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false))
  }, [isTicking])

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items])

  window.addEventListener('resize', createItem())
  return (
    <>
      <div className='componentFirst contactBC'>
        <div className='contact componentSecond skills'>
          <div className='contactContainer skillsCon'>
            <div className='endTitle'>Some of out exciting skills</div>
          </div>
          <div className='headerRight'>
            <div className='ingameCarouselContainer'>
              <div className='carousel__wrap'>
                <div className='carousel__inner'>
                  <div className='carousel__btn carousel__btn--prev' onClick={() => prevClick()}>
                    <ArrowSVG className='carousel__btn-arrow--left' />
                  </div>
                  <div className='carousel__container'>
                    <ul className='carousel__slide-list'>
                      {items.map((pos, i) => {
                        const item = createItem(pos, i, activeIdx)
                        return (
                          <li className='carousel__slide-item' style={item.styles} key={i}>
                            <img src={item.image.image} alt={item.image.title} style={item.styleIMG} />
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <div className='carousel__btn carousel__btn--next' onClick={() => nextClick()}>
                    <ArrowSVG className='carousel__btn-arrow--right' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='headerRight'>
            <div className='ingameCarouselContainer'>
              <div className='carousel__wrap'>
                <div className='carousel__inner'>
                  <div className='carousel__container'>
                    <ul className='carousel__slide-list'>
                      {items.map((pos, i) => {
                        const item = createItem(pos, i, activeIdx)
                        return (
                          <li className='carousel__slide-item' style={item.styles} key={i}>
                            <div className='carouselImageContainer'>
                              {item.image.press === 'false' ? (
                                <>
                                  <img src={item.image.image} alt={item.image.title} style={item.styleIMG} />
                                  <div className='carouselImageText'>
                                    <div className='infoBarItem'>
                                      <div className='infoBarItemTitle'>
                                        <div className='infoBarItemTitleBox'>
                                          <ShareSVG />
                                        </div>
                                      </div>
                                      <div className='infoBarItemTextContainer'>
                                        <div className='infoBarItemText'>Learn React - Starter</div>
                                        <div className='infoBarItemTextSub'>
                                          Put not enjoyment behaviour her supposing.
                                        </div>
                                        <div
                                          className='infoBarItemTextLearn'
                                          onClick={() => (item.image.press = 'true')}
                                        >
                                          Learn more
                                          <ArrowRightSVG className='BlogArrowRight' />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <div className='skillPressed'>
                                  <div className='infoBarItem'>
                                    <div className='infoBarItemTitle skillTitleNO'>
                                      <div className='infoBarItemTitleBox'>
                                        <ShareSVG />
                                      </div>
                                    </div>
                                    <div className='infoBarItemTextContainer'>
                                      <div className='infoBarItemText'>Learn React - Starter</div>
                                      <div className='infoBarItemTextSub'>
                                        Put not enjoyment behaviour her supposing. Put not enjoyment behaviour her
                                        supposing. Put not enjoyment behaviour her supposing.. Put not enjoyment.
                                        Put not enjoyment behaviour her supposing.
                                      </div>
                                      <div
                                        className='infoBarItemTextLearn'
                                        onClick={() => (item.image.press = 'false')}
                                      >
                                        <ArrowRightSVG className='BlogArrowRight skillArrow' />
                                        Back
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Skills
