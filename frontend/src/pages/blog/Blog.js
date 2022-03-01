import React from 'react'
import Footer from '../../components/footer/Footer'

import { ReactComponent as ShareSVG } from '../../icons/Share.svg'
import { ReactComponent as ArrowRightSVG } from '../../icons/ArrowRight.svg'
import { ReactComponent as Line } from '../../icons/Line.svg'

import image9 from '../../images/IMG9.png'
import image10 from '../../images/IMG10.png'
import image11 from '../../images/IMG11.png'
import image12 from '../../images/IMG12.png'
import image13 from '../../images/IMG13.png'
import image14 from '../../images/IMG14.png'
import image15 from '../../images/IMG15.png'
import image16 from '../../images/IMG16.png'

import videoFile from '../../video/video.mp4'

import './blog.css'

const Blog = ({ history }) => {
  const handleSkills = () => {
    history.push('/Skills')
  }
  return (
    <div className='componentFirst'>
      <div className='faqMain'>
        <div className='componentFirst contactBC'>
          <div className='contact componentSecond'>
            <div className='contactContainer'>
              <div className='contactTitle'>Our Latest Blog</div>
              <div className='blogWrapper'>
                <div className='blogLeft'>
                  <video width='100%' controls className='contactVid'>
                    <source src={videoFile} type='video/mp4' />
                  </video>
                  <div className='blogTitle'>How is your learning program different? Unique elements of...</div>
                  <div className='blogText'>
                    Remember outweigh do he desirous no cheerful. Do of doors water ye guest. We if prosperous
                    comparison middletons at. Park we in lose like at no. An so to preferred convinced distrusts he
                    determine. In musical me my placing clothes comfort pleased hearing. Any residence you
                    satisfied and rapturous certainty two.
                  </div>
                  <div className='blogButton' onClick={handleSkills}>
                    Read more
                  </div>
                </div>
                <div className='blogRight'>
                  <div className='infoBarItem'>
                    <img src={image9} alt='' className='blogBCImage' />
                    <div className='infoBarItemTitle'>
                      <div className='infoBarItemTitleBox'>
                        <ShareSVG />
                      </div>
                    </div>
                    <div className='infoBarItemTextContainer'>
                      <div className='infoBarItemText'>Learn React - Starter</div>
                      <div className='infoBarItemTextSub'>Put not enjoyment behaviour her supposing.</div>
                      <div className='infoBarItemTextLearn' onClick={handleSkills}>
                        Learn more
                        <ArrowRightSVG className='BlogArrowRight' />
                      </div>
                    </div>
                  </div>
                  <div className='infoBarItem'>
                    <img src={image10} alt='' className='blogBCImage' />
                    <div className='infoBarItemTitle'>
                      <div className='infoBarItemTitleBox'>
                        <ShareSVG />
                      </div>
                    </div>
                    <div className='infoBarItemTextContainer'>
                      <div className='infoBarItemText'>Learn React - Starter</div>
                      <div className='infoBarItemTextSub'>Put not enjoyment behaviour her supposing.</div>
                      <div className='infoBarItemTextLearn' onClick={handleSkills}>
                        Learn more
                        <ArrowRightSVG className='BlogArrowRight' />
                      </div>
                    </div>
                  </div>
                  <div className='infoBarItem'>
                    <img src={image11} alt='' className='blogBCImage' />
                    <div className='infoBarItemTitle'>
                      <div className='infoBarItemTitleBox'>
                        <ShareSVG />
                      </div>
                    </div>
                    <div className='infoBarItemTextContainer'>
                      <div className='infoBarItemText'>Learn React - Starter</div>
                      <div className='infoBarItemTextSub'>Put not enjoyment behaviour her supposing.</div>
                      <div className='infoBarItemTextLearn' onClick={handleSkills}>
                        Learn more
                        <ArrowRightSVG className='BlogArrowRight' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='blogContainer'>
                <div className='infoBarItem'>
                  <img src={image9} alt='' className='blogBCImage' />
                  <div className='infoBarItemTitle'>
                    <div className='infoBarItemTitleBox'>
                      <ShareSVG />
                    </div>
                  </div>
                  <div className='infoBarItemTextContainer'>
                    <div className='infoBarItemText'>Learn React - Starter</div>
                    <div className='infoBarItemTextSub'>Put not enjoyment behaviour her supposing.</div>
                    <div className='infoBarItemTextLearn' onClick={handleSkills}>
                      Learn more
                      <ArrowRightSVG className='BlogArrowRight' />
                    </div>
                  </div>
                </div>{' '}
                <div className='infoBarItem'>
                  <img src={image12} alt='' className='blogBCImage' />
                  <div className='infoBarItemTitle'>
                    <div className='infoBarItemTitleBox'>
                      <ShareSVG />
                    </div>
                  </div>
                  <div className='infoBarItemTextContainer'>
                    <div className='infoBarItemText'>Learn React - Starter</div>
                    <div className='infoBarItemTextSub'>Put not enjoyment behaviour her supposing.</div>
                    <div className='infoBarItemTextLearn' onClick={handleSkills}>
                      Learn more
                      <ArrowRightSVG className='BlogArrowRight' />
                    </div>
                  </div>
                </div>{' '}
                <div className='infoBarItem'>
                  <img src={image13} alt='' className='blogBCImage' />
                  <div className='infoBarItemTitle'>
                    <div className='infoBarItemTitleBox'>
                      <ShareSVG />
                    </div>
                  </div>
                  <div className='infoBarItemTextContainer'>
                    <div className='infoBarItemText'>Learn React - Starter</div>
                    <div className='infoBarItemTextSub'>Put not enjoyment behaviour her supposing.</div>
                    <div className='infoBarItemTextLearn' onClick={handleSkills}>
                      Learn more
                      <ArrowRightSVG className='BlogArrowRight' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='blogContainer'>
                <div className='infoBarItem'>
                  <img src={image14} alt='' className='blogBCImage' />
                  <div className='infoBarItemTitle'>
                    <div className='infoBarItemTitleBox'>
                      <ShareSVG />
                    </div>
                  </div>
                  <div className='infoBarItemTextContainer'>
                    <div className='infoBarItemText'>Learn React - Starter</div>
                    <div className='infoBarItemTextSub'>Put not enjoyment behaviour her supposing.</div>
                    <div className='infoBarItemTextLearn' onClick={handleSkills}>
                      Learn more
                      <ArrowRightSVG className='BlogArrowRight' />
                    </div>
                  </div>
                </div>{' '}
                <div className='infoBarItem'>
                  <img src={image15} alt='' className='blogBCImage' />
                  <div className='infoBarItemTitle'>
                    <div className='infoBarItemTitleBox'>
                      <ShareSVG />
                    </div>
                  </div>
                  <div className='infoBarItemTextContainer'>
                    <div className='infoBarItemText'>Learn React - Starter</div>
                    <div className='infoBarItemTextSub'>Put not enjoyment behaviour her supposing.</div>
                    <div className='infoBarItemTextLearn' onClick={handleSkills}>
                      Learn more
                      <ArrowRightSVG className='BlogArrowRight' />
                    </div>
                  </div>
                </div>{' '}
                <div className='infoBarItem'>
                  <img src={image16} alt='' className='blogBCImage' />
                  <div className='infoBarItemTitle'>
                    <div className='infoBarItemTitleBox'>
                      <ShareSVG />
                    </div>
                  </div>
                  <div className='infoBarItemTextContainer'>
                    <div className='infoBarItemText'>Learn React - Starter</div>
                    <div className='infoBarItemTextSub'>Put not enjoyment behaviour her supposing.</div>
                    <div className='infoBarItemTextLearn' onClick={handleSkills}>
                      Learn more
                      <ArrowRightSVG className='BlogArrowRight' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='elapse'></div>
        <Line className='Line1' />
        <Footer />
      </div>
    </div>
  )
}

export default Blog
