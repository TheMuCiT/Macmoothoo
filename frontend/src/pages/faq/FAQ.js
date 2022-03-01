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
  const [five, setfive] = useState(false)

  const [firstq1, setfirstq1] = useState(false)
  const [firstq2, setfirstq2] = useState(false)
  const [firstq3, setfirstq3] = useState(false)
  const [firstq4, setfirstq4] = useState(false)
  const [firstq5, setfirstq5] = useState(false)
  const [firstq6, setfirstq6] = useState(false)
  const [firstq7, setfirstq7] = useState(false)

  const [secondq1, setsecondq1] = useState(false)
  const [secondq2, setsecondq2] = useState(false)
  const [secondq3, setsecondq3] = useState(false)
  const [secondq4, setsecondq4] = useState(false)
  const [secondq5, setsecondq5] = useState(false)
  const [secondq6, setsecondq6] = useState(false)
  const [secondq7, setsecondq7] = useState(false)

  const [thirdq1, setthirdq1] = useState(false)
  const [thirdq2, setthirdq2] = useState(false)
  const [thirdq3, setthirdq3] = useState(false)
  const [thirdq4, setthirdq4] = useState(false)
  const [thirdq5, setthirdq5] = useState(false)

  const [fourq1, setfourq1] = useState(false)
  const [fourq2, setfourq2] = useState(false)

  const [fiveq1, setfiveq1] = useState(false)
  const [fiveq2, setfiveq2] = useState(false)
  const [fiveq3, setfiveq3] = useState(false)
  const [fiveq4, setfiveq4] = useState(false)
  const [fiveq5, setfiveq5] = useState(false)

  const HandlerShowAll = () => {
    if (ShowAll) {
      setfirst(false)
      setsecond(false)
      setthird(false)
      setfour(false)
      setfive(false)
    } else {
      setfirst(true)
      setsecond(true)
      setthird(true)
      setfour(true)
      setfive(true)
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
  const handleFiver = () => {
    setfive(!five)
  }

  const handlerFirstq1 = () => {
    setfirstq1(!firstq1)
  }
  const handlerFirstq2 = () => {
    setfirstq2(!firstq2)
  }
  const handlerFirstq3 = () => {
    setfirstq3(!firstq3)
  }
  const handlerFirstq4 = () => {
    setfirstq4(!firstq4)
  }
  const handlerFirstq5 = () => {
    setfirstq5(!firstq5)
  }
  const handlerFirstq6 = () => {
    setfirstq6(!firstq6)
  }
  const handlerFirstq7 = () => {
    setfirstq7(!firstq7)
  }

  const handlersecondq1 = () => {
    setsecondq1(!secondq1)
  }
  const handlersecondq2 = () => {
    setsecondq2(!secondq2)
  }
  const handlersecondq3 = () => {
    setsecondq3(!secondq3)
  }
  const handlersecondq4 = () => {
    setsecondq4(!secondq4)
  }
  const handlersecondq5 = () => {
    setsecondq5(!secondq5)
  }
  const handlersecondq6 = () => {
    setsecondq6(!secondq6)
  }
  const handlersecondq7 = () => {
    setsecondq7(!secondq7)
  }

  const handlerthirdq1 = () => {
    setthirdq1(!thirdq1)
  }
  const handlerthirdq2 = () => {
    setthirdq2(!thirdq2)
  }
  const handlerthirdq3 = () => {
    setthirdq3(!thirdq3)
  }
  const handlerthirdq4 = () => {
    setthirdq4(!thirdq4)
  }
  const handlerthirdq5 = () => {
    setthirdq5(!thirdq5)
  }

  const handlerfourq1 = () => {
    setfourq1(!fourq1)
  }
  const handlerfourq2 = () => {
    setfourq2(!fourq2)
  }

  const handlerfiveq1 = () => {
    setfiveq1(!fiveq1)
  }
  const handlerfiveq2 = () => {
    setfiveq2(!fiveq2)
  }
  const handlerfiveq3 = () => {
    setfiveq3(!fiveq3)
  }
  const handlerfiveq4 = () => {
    setfiveq4(!fiveq4)
  }
  const handlerfiveq5 = () => {
    setfiveq5(!fiveq5)
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
              {/**11 */}
              <div className='FAQItem'>
                <div className='FAQItemHeader' onClick={handlerFirst}>
                  <div className='FAQItemHeaderText'>Features</div>
                  <div className='FAQItemHeaderArrow'>
                    <ArrowDownSVG className={first ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                  </div>
                </div>
                <div className={first ? 'FAQItemContext' : 'none'}>
                  <div className='FAQItemHeader' onClick={handlerFirstq1}>
                    <div className='FAQItemHeaderText'>What is Enki Connect?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={firstq1 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={firstq1 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      Enki Connect is an eLearning platform where one can learn, share and earn through our one to
                      one personalized sessions.
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlerFirstq2}>
                    <div className='FAQItemHeaderText'>
                      What are the topics on which an Advisor can teach sessions?
                    </div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={firstq2 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={firstq2 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      Advisors can teach any skill or topic they are specialized in with proof of expertise.
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlerFirstq3}>
                    <div className='FAQItemHeaderText'>Can I get the trial sessions?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={firstq3 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={firstq3 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      We offer a complimentary 10 minute meet and greet session, subject to the advisors
                      availability for people who have special requests and need to ask more questions to determine
                      suitability.
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlerFirstq4}>
                    <div className='FAQItemHeaderText'>Can you choose an advisor for me?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={firstq4 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={firstq4 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      Our system is designed to recommend advisors based on your interests and preferences, while
                      giving you the option of selecting the advisor of your choice.
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlerFirstq5}>
                    <div className='FAQItemHeaderText'>How quickly does an advisor respond?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={firstq5 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={firstq5 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      Advisors respond subject to their availability and will be notified of every connection
                      request.
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlerFirstq6}>
                    <div className='FAQItemHeaderText'>What is the maximum duration of a session?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={firstq6 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={firstq6 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      30 minutes. One session cannot be more than 30 minutes. This is the time that has been set
                      for all advisors. Sessions can be booked back to back, subject to the advisors discretion.
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlerFirstq7}>
                    <div className='FAQItemHeaderText'>How can a Seeker review a session?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={firstq7 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={firstq7 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      After the session, the seeker will be prompted to leave a review and there a seeker can put a
                      review for the session.
                    </div>
                  </div>
                </div>
              </div>
              {/**22 */}
              <div className='FAQItem'>
                <div className='FAQItemHeader' onClick={handlerSecond}>
                  <div className='FAQItemHeaderText'>Accessability</div>
                  <div className='FAQItemHeaderArrow'>
                    <ArrowDownSVG className={second ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                  </div>
                </div>
                <div className={second ? 'FAQItemContext' : 'none'}>
                  <div className='FAQItemHeader' onClick={handlersecondq1}>
                    <div className='FAQItemHeaderText'>How can I download the Enki Connect app?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG
                        className={secondq1 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'}
                      />
                    </div>
                  </div>
                  <div className={secondq1 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      From May 24th, our app will be available to download on Google and Apple play store.
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlersecondq2}>
                    <div className='FAQItemHeaderText'>What countries can I use this application?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG
                        className={secondq2 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'}
                      />
                    </div>
                  </div>
                  <div className={secondq2 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>Enki Connect is available in all accepted countries</div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlersecondq3}>
                    <div className='FAQItemHeaderText'>How do I delete my account?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG
                        className={secondq3 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'}
                      />
                    </div>
                  </div>
                  <div className={secondq3 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>Contact support via email</div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlersecondq4}>
                    <div className='FAQItemHeaderText'>How do I connect my account to Facebook?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG
                        className={secondq4 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'}
                      />
                    </div>
                  </div>
                  <div className={secondq4 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      You can use the sign in option at login to connect your account with Facebook.
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlersecondq5}>
                    <div className='FAQItemHeaderText'>Can we make sessions using our laptop/desktop/mobile?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG
                        className={secondq5 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'}
                      />
                    </div>
                  </div>
                  <div className={secondq5 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      Currently the Enki Connect App is not available for laptop and desktop. It is available for
                      android phone/tablet and iOS devices(iPhone/iPad).
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlersecondq6}>
                    <div className='FAQItemHeaderText'>
                      Where can I access Enki Connect’s privacy policies and terms & conditions?
                    </div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG
                        className={secondq6 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'}
                      />
                    </div>
                  </div>
                  <div className={secondq6 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      Please visit here.
                      <div>
                        <a href='https://www.enkiconnect.co/privacy/' target='_blank' rel='noreferrer'>
                          https://www.enkiconnect.co/privacy/
                        </a>
                      </div>
                      <div>
                        <a href='https://www.enkiconnect.co/terms/' target='_blank' rel='noreferrer'>
                          https://www.enkiconnect.co/terms/
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlersecondq7}>
                    <div className='FAQItemHeaderText'>
                      How long does it take for an advisor to get approved on Enki Connect?
                    </div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG
                        className={secondq7 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'}
                      />
                    </div>
                  </div>
                  <div className={secondq7 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>48-72 Hours</div>
                  </div>
                </div>
              </div>
              {/**33 */}
              <div className='FAQItem'>
                <div className='FAQItemHeader' onClick={handlerThird}>
                  <div className='FAQItemHeaderText'>Payment</div>
                  <div className='FAQItemHeaderArrow'>
                    <ArrowDownSVG className={third ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                  </div>
                </div>
                <div className={third ? 'FAQItemContext' : 'none'}>
                  <div className='FAQItemHeader' onClick={handlerthirdq1}>
                    <div className='FAQItemHeaderText'>Will the advisor be paid for sessions?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={thirdq1 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={thirdq1 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      The advisors will be paid from the seeker with every completed session. The advisor is free
                      to set their own hourly rate and how many sessions are conducted.
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlerthirdq2}>
                    <div className='FAQItemHeaderText'>How can I pay for a session?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={thirdq2 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={thirdq2 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      You can pay for a session by firstly choosing your advisor. You will purchase a subscription
                      package with the advisor and pay base
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlerthirdq3}>
                    <div className='FAQItemHeaderText'>Will the advisor be paid for sessions?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={thirdq3 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={thirdq3 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      The advisors will be paid from the seeker with every completed session. The advisor is free
                      to set their own hourly rate and how many sessions are conducted.
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlerthirdq4}>
                    <div className='FAQItemHeaderText'>How can I pay for a session?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={thirdq4 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={thirdq4 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      You can pay for a session by firstly choosing your advisor. You will purchase a subscription
                      package with the advisor and pay based on their hourly rate and sessions required. All
                      payments are completed through our affiliated stripe payment facility.
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlerthirdq5}>
                    <div className='FAQItemHeaderText'>Is the application free to download?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={thirdq5 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={thirdq5 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      Yes our application is free to download, the user is free to browse until a session is
                      conducted.
                    </div>
                  </div>
                </div>
              </div>
              {/**44 */}
              <div className='FAQItem'>
                <div className='FAQItemHeader' onClick={handleFrour}>
                  <div className='FAQItemHeaderText'>Setting up your account</div>
                  <div className='FAQItemHeaderArrow'>
                    <ArrowDownSVG className={four ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                  </div>
                </div>
                <div className={four ? 'FAQItemContext' : 'none'}>
                  <div className='FAQItemHeader' onClick={handlerfourq1}>
                    <div className='FAQItemHeaderText'>
                      What is the process to become an advisor on Enki Connect?
                    </div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={fourq1 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={fourq1 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      The first step of the process to becoming an advisor involves determining what
                      skills/knowledge you have to share on the platform. We sign you up as a freelance advisor,
                      create a profile and the next step is sending any evidence that show you are qualified in any
                      field. Evidence including certificate, degree, letter of recommendation, Youtube channel,
                      Instagram or Linkedin profiles.
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlerfourq2}>
                    <div className='FAQItemHeaderText'>
                      What is the process to become a seeker on Enki Connect?
                    </div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={fourq2 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={fourq2 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      First step is to determine your interests and what you want to learn. Then we will confirm
                      your full name, email address and phone number and sign you up.
                    </div>
                  </div>
                </div>
              </div>
              {/**55 */}
              <div className='FAQItem'>
                <div className='FAQItemHeader' onClick={handleFiver}>
                  <div className='FAQItemHeaderText'>Troubleshoot</div>
                  <div className='FAQItemHeaderArrow'>
                    <ArrowDownSVG className={five ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                  </div>
                </div>
                <div className={five ? 'FAQItemContext' : 'none'}>
                  <div className='FAQItemHeader' onClick={handlerfiveq1}>
                    <div className='FAQItemHeaderText'>
                      What should I do if I won’t be unable to take the planned session?
                    </div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={fiveq1 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={fiveq1 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      When you know in advance that you won’t be able to attend the session, please get in contact
                      with your advisor to reschedule the session.
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlerfiveq2}>
                    <div className='FAQItemHeaderText'>How to report an issue?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={fiveq2 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={fiveq2 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      Click on “feedback” in settings. You can email/call us to report the issue and we will take
                      note of it in order to solve the issue.
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlerfiveq3}>
                    <div className='FAQItemHeaderText'>How can I reset my password?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={fiveq3 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={fiveq3 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      Using the forgot password at login. A link will be sent to the registered email address. By
                      visiting that link, you can reset and enter a new password.
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlerfiveq4}>
                    <div className='FAQItemHeaderText'>
                      How can I maximize my chance to get approved as an Enki Connect Advisor?
                    </div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={fiveq4 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={fiveq4 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      Getting approved is very easy. At Enki Connect every skill and experience is welcomed.
                      Provide us with as much supporting evidence of expertise.
                    </div>
                  </div>

                  <div className='FAQGap' />

                  <div className='FAQItemHeader' onClick={handlerfiveq5}>
                    <div className='FAQItemHeaderText'>How can you earn well as an advisor?</div>
                    <div className='FAQItemHeaderArrow'>
                      <ArrowDownSVG className={fiveq5 ? 'FAQItemHeaderArrowSVGHover' : 'FAQItemHeaderArrowSVG'} />
                    </div>
                  </div>
                  <div className={fiveq5 ? 'FAQItemContext' : 'none'}>
                    <div className='FAQItemContextText'>
                      A well earning Advisor is able to communicate very well, has great people skills and is
                      passionate about his skills and expertise. A well earning Advisor manages his time, seekers
                      and himself and present meaningful and creative content in a professional and friendly way.
                    </div>
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
