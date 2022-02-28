import React from 'react'
import Footer from '../../components/footer/Footer'

import './blog.css'

const Blog = () => {
  return (
    <div className='componentFirst'>
      <div className='faqMain'>
        <div className='componentFirst contactBC'>
          <div className='contact componentSecond'>
            <div className='contactContainer'>
              <div className='contactTitle'>Our Latest Blog</div>
              <div className='blogContainer'>
                <div className='infoBarItem'>
                  <div className='infoBarItemTitle'>
                    <div className='infoBarItemTitleText'>WED, NOV 17, 2021 12:00 AM PST</div>
                    <div className='infoBarItemTitleBox'></div>
                  </div>
                  <div className='infoBarItemTextContainer'>
                    <div className='infoBarItemText'>Focused Learning</div>
                    <div className='infoBarItemTextSub'>
                      How skill focused learning is beneficial to training in the corporate world{' '}
                    </div>
                    <div className='infoBarItemTextLearn'>Learn more</div>
                  </div>
                </div>
                <div className='infoBarItem'>
                  <div className='infoBarItemTitle'>
                    <div className='infoBarItemTitleText'>WED, NOV 17, 2021 12:00 AM PST</div>
                    <div className='infoBarItemTitleBox'></div>
                  </div>
                  <div className='infoBarItemTextContainer'>
                    <div className='infoBarItemText'>Webpack</div>
                    <div className='infoBarItemTextSub'>
                      Property men the why smallest graceful day insisted required.
                    </div>
                    <div className='infoBarItemTextLearn'>Learn more</div>
                  </div>
                </div>
                <div className='infoBarItem'>
                  <div className='infoBarItemTitle'>
                    <div className='infoBarItemTitleText'>WED, NOV 17, 2021 12:00 AM PST</div>
                    <div className='infoBarItemTitleBox'></div>
                  </div>
                  <div className='infoBarItemTextContainer'>
                    <div className='infoBarItemText'>Learn React - Starter</div>
                    <div className='infoBarItemTextSub'>Put not enjoyment behaviour her supposing.</div>
                    <div className='infoBarItemTextLearn'>Learn more</div>
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

export default Blog
