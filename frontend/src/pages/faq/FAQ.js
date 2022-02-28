import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'

import { ReactComponent as ArrowDownSVG } from '../../icons/Arrow.svg'

import './faq.css'
const FAQ = () => {
  const [ShowAll, setShowAll] = useState(false)
  const [first, setfirst] = useState(false)
  const [second, setsecond] = useState(false)
  const [third, setthird] = useState(false)
  const [four, setfour] = useState(false)

  const HandlerShowAll = () => {
    if (ShowAll) {
      setfirst(false)
      setsecond(false)
      setthird(false)
      setfour(false)
    } else {
      setfirst(true)
      setsecond(true)
      setthird(true)
      setfour(true)
    }

    setShowAll(!ShowAll)
  }

  const handlerFirst = () => {
    setfirst(!first)
  }
  const handlerSecond = () => {
    setsecond(!second)
  }
  const handlerThird = () => {
    setthird(!third)
  }
  const handleFrour = () => {
    setfour(!four)
  }

  return (
    <div className='componentFirst'>
      <div className='faqMain'>
        <div className='componentFirst '>
          <div className='faq componentSecond'>
            <div className='FAQ'>
              <div className='FAQTitle'>
                <div className='FAQTitleLeft'>FAQ</div>
                <div className='FAQTitleRight' onClick={HandlerShowAll}>
                  {ShowAll ? 'Close all' : 'View all'}
                </div>
              </div>
              <div className='FAQItem' onClick={handlerFirst}>
                <div className='FAQItemHeader'>
                  <div className='FAQItemHeaderText'>What do you teach?</div>
                  <div className='FAQItemHeaderArrow'>
                    <ArrowDownSVG className={first ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                  </div>
                </div>
                <div className={first ? 'FAQItemContext' : 'none'}>
                  <div className='FAQItemContextStep'>STEP 1</div>
                  <div className='FAQItemContextTitle'>Remember outweigh do he desirous no cheerful.</div>
                  <div className='FAQItemContextText'>
                    Remember outweigh do he desirous no cheerful. Do of doors water ye guest. We if prosperous
                    comparison middletons at. Park we in lose like at no. An so to preferred convinced distrusts he
                    determine. In musical me my placing clothes comfort pleased hearing. Any residence you
                    satisfied and rapturous certainty two. Procured outweigh as outlived so so. On in bringing
                    graceful proposal blessing of marriage outlived. Son rent face our loud near.
                  </div>
                  <div className='FAQItemContextStep'>STEP 2</div>
                  <div className='FAQItemContextTitle'>Remember outweigh do he desirous no cheerful.</div>
                  <div className='FAQItemContextText'>
                    Go from no-code to an in-demand junior web developer, at a fraction of the cost of a bootcamp.
                    Start with the front-end by learning HTML, CSS, and JavaScript. Then, master the back-end and
                    APIs to round out your full-stack skills.
                  </div>
                </div>
              </div>
              <div className='FAQItem' onClick={handlerSecond}>
                <div className='FAQItemHeader'>
                  <div className='FAQItemHeaderText'>Who is your audience: who are your learners?</div>
                  <div className='FAQItemHeaderArrow'>
                    <ArrowDownSVG className={second ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                  </div>
                </div>
                <div className={second ? 'FAQItemContext' : 'none'}>
                  <div className='FAQItemContextStep'>STEP 1</div>
                  <div className='FAQItemContextTitle'>Remember outweigh do he desirous no cheerful.</div>
                  <div className='FAQItemContextText'>
                    Remember outweigh do he desirous no cheerful. Do of doors water ye guest. We if prosperous
                    comparison middletons at. Park we in lose like at no. An so to preferred convinced distrusts he
                    determine. In musical me my placing clothes comfort pleased hearing. Any residence you
                    satisfied and rapturous certainty two. Procured outweigh as outlived so so. On in bringing
                    graceful proposal blessing of marriage outlived. Son rent face our loud near.
                  </div>
                </div>
              </div>
              <div className='FAQItem' onClick={handlerThird}>
                <div className='FAQItemHeader'>
                  <div className='FAQItemHeaderText'>
                    Why is it necessary to learn these topics in enterprises today? ...
                  </div>
                  <div className='FAQItemHeaderArrow'>
                    <ArrowDownSVG className={third ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                  </div>
                </div>
                <div className={third ? 'FAQItemContext' : 'none'}>
                  <div className='FAQItemContextStep'>STEP 1</div>
                  <div className='FAQItemContextTitle'>Remember outweigh do he desirous no cheerful.</div>
                  <div className='FAQItemContextText'>
                    Remember outweigh do he desirous no cheerful. Do of doors water ye guest. We if prosperous
                    comparison middletons at. Park we in lose like at no. An so to preferred convinced distrusts he
                    determine. In musical me my placing clothes comfort pleased hearing. Any residence you
                    satisfied and rapturous certainty two. Procured outweigh as outlived so so. On in bringing
                    graceful proposal blessing of marriage outlived. Son rent face our loud near.
                  </div>
                </div>
              </div>
              <div className='FAQItem' onClick={handleFrour}>
                <div className='FAQItemHeader'>
                  <div className='FAQItemHeaderText'>
                    How is your learning program different? Unique elements of ...
                  </div>
                  <div className='FAQItemHeaderArrow'>
                    <ArrowDownSVG className={four ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                  </div>
                </div>
                <div className={four ? 'FAQItemContext' : 'none'}>
                  <div className='FAQItemContextStep'>STEP 1</div>
                  <div className='FAQItemContextTitle'>Remember outweigh do he desirous no cheerful.</div>
                  <div className='FAQItemContextText'>
                    Remember outweigh do he desirous no cheerful. Do of doors water ye guest. We if prosperous
                    comparison middletons at. Park we in lose like at no. An so to preferred convinced distrusts he
                    determine. In musical me my placing clothes comfort pleased hearing. Any residence you
                    satisfied and rapturous certainty two. Procured outweigh as outlived so so. On in bringing
                    graceful proposal blessing of marriage outlived. Son rent face our loud near.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='elapse'></div>
        <Footer />
      </div>
    </div>
  )
}

export default FAQ
