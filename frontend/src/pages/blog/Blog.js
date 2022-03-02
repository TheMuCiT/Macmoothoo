import { useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import Footer from '../../components/footer/Footer'

import { ReactComponent as ShareSVG } from '../../icons/Share.svg'
import { ReactComponent as ArrowRightSVG } from '../../icons/ArrowRight.svg'
import { ReactComponent as Line } from '../../icons/Line.svg'

import image8 from '../../images/IMG8.png'
import image9 from '../../images/IMG9.png'
import image12 from '../../images/IMG12.png'
import image13 from '../../images/IMG13.png'
import image14 from '../../images/IMG14.png'
import image15 from '../../images/IMG15.png'
import image16 from '../../images/IMG16.png'

import './blog.css'

const blog = [
  {
    title: 'How Skill Focused eLearning Is Beneficial To Training In The Corporate World',
  },
  {
    title:
      'Cómo La Educación En Línea Especializada En Las Habilidades Beneficia La Formación En El Mundo Empresarial',
  },
  {
    title: 'The Importance Of Face To Face Learning',
  },
  {
    title: 'La Importancia De La Educación Cara A Cara',
  },
  {
    title: 'Challenges of E-learning During Covid-19',
  },
  {
    title: 'Advantages of E-Learning Platform in Education',
  },
]

const Blog = ({ history }) => {
  const { pathname } = useLocation()
  const handleSkills = (id) => {
    history.push({
      pathname: `/Blog/${id}`,
      state: {
        id: id,
      },
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className='componentFirst'>
      <div className='faqMain'>
        <div className='componentFirst contactBC'>
          <div className='contact componentSecond'>
            <div className='contactContainer'>
              <div className='contactTitle'>Our Latest Blog</div>
              <div className='blogWrapper'>
                <div className='blogLeft'>
                  <div className='blogBig'>
                    <img src={image8} alt='' className='contactVid' />
                  </div>
                  <div className='blogTitle'>We are launching</div>
                  <div className='blogText'>
                    Humans are curious, and learning new things is in their nature. In today's fast-paced world, we
                    would be interested in learning hundreds of skills. However, what happens when we get the time
                    to learn those skills? Unfortunately, most of us do not find a reliable platform to find
                    engaging courses that can teach us the skills we are interested in learning.
                  </div>
                  <div className='blogButton' onClick={() => handleSkills(0)}>
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
                      <div className='infoBarItemText blogTextSmaller'>{blog[0].title}</div>
                      <div className='infoBarItemTextLearn' onClick={() => handleSkills(1)}>
                        Learn more
                        <ArrowRightSVG className='BlogArrowRight' />
                      </div>
                    </div>
                  </div>
                  <div className='infoBarItem'>
                    <img src={image12} alt='' className='blogBCImage' />
                    <div className='infoBarItemTitle'>
                      <div className='infoBarItemTitleBox'>
                        <ShareSVG />
                      </div>
                    </div>
                    <div className='infoBarItemTextContainer'>
                      <div className='infoBarItemText blogTextSmaller'>{blog[1].title}</div>
                      <div className='infoBarItemTextLearn' onClick={() => handleSkills(2)}>
                        Learn more
                        <ArrowRightSVG className='BlogArrowRight' />
                      </div>
                    </div>
                  </div>
                  <div className='infoBarItem'>
                    <img src={image13} alt='' className='blogBCImage' />
                    <div className='infoBarItemTitle'>
                      <div className='infoBarItemTitleBox'>
                        <ShareSVG />
                      </div>
                    </div>
                    <div className='infoBarItemTextContainer'>
                      <div className='infoBarItemText blogTextSmaller'>{blog[2].title}</div>
                      <div className='infoBarItemTextLearn' onClick={() => handleSkills(3)}>
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
                    <div className='infoBarItemText blogTextSmaller'>{blog[0].title}</div>
                    <div className='infoBarItemTextLearn' onClick={() => handleSkills(1)}>
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
                    <div className='infoBarItemText blogTextSmaller'>{blog[1].title}</div>
                    <div className='infoBarItemTextLearn' onClick={() => handleSkills(2)}>
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
                    <div className='infoBarItemText blogTextSmaller'>{blog[2].title}</div>
                    <div className='infoBarItemTextLearn' onClick={() => handleSkills(3)}>
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
                    <div className='infoBarItemText blogTextSmaller'>{blog[3].title}</div>
                    <div className='infoBarItemTextLearn' onClick={() => handleSkills(4)}>
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
                    <div className='infoBarItemText blogTextSmaller'>{blog[4].title}</div>
                    <div className='infoBarItemTextLearn' onClick={() => handleSkills(5)}>
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
                    <div className='infoBarItemText blogTextSmaller'>{blog[5].title}</div>
                    <div className='infoBarItemTextLearn' onClick={() => handleSkills(6)}>
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
