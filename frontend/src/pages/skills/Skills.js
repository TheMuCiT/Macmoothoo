import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'

import { ReactComponent as ArrowSVG } from '../../icons/Arrow.svg'
import { ReactComponent as ShareSVG } from '../../icons/Share.svg'
import { ReactComponent as ArrowRightSVG } from '../../icons/ArrowRight.svg'

import './skills.css'

const _items = [
  {
    image: '/images/carouselSecond.jpg',
    title: 'Music Producing ',
    id: 0,
    text: 'Music production is the process of developing, creating and refining recorded music for public presentation. Music production can refer to the entire lifecycle of a piece of music—from songwriting and composition to recording and sound design to mixing and mastering.',
  },
  {
    image: '/images/carouselSecond.jpg',
    title: 'Singing ',
    id: 1,
    text: 'Singing is the act of producing musical sounds with the voice. A person who sings is called a singer or vocalist. Singers perform music that can be sung with or without accompaniment by musical instruments. Different singing styles include art music such as opera and Chinese opera, Indian music and religious music styles such as gospel, traditional music styles, world music, jazz, blues, ghazal and popular music styles such as pop, rock and electronic dance music.',
  },
  {
    image: '/images/carouselSecond.jpg',
    title: 'Dancing',
    id: 2,
    text: 'Dancing is movement of the body in a rhythmic way, usually to music and within a given space, for the purpose of expressing an idea or emotion, releasing energy, or simply taking delight in the movement itself. Dance is a powerful impulse, but the art of dance is that impulse channeled by skillful performers into something that becomes intensely expressive and that may delight spectators who feel no wish to dance themselves. ',
  },
  {
    image: '/images/carouselSecond.jpg',
    title: 'Industrial design ',
    id: 3,
    text: 'Industrial design is the professional practice of designing products, such as cars and smartphones, used by millions of consumers around the world. Most products undergo multiple design iterations before they reach the market. These product iterations typically involve several decisions on design and function. Employers usually need the skills of an industrial designer during these steps. Industrial designers focus on the functionality and appearance of a product, though they are usually involved in far more during the development process.',
  },
  {
    image: '/images/carouselSecond.jpg',
    title: 'Video production ',
    id: 4,
    text: 'The ability to record, edit and produce a video is a valuable modern skill. While video production usually requires a more in-depth education, you don’t have to go back to college to learn the basics. You can learn video editing at home with a camera, a computer, a good microphone and video editing software. Many professionals use paid applications, but you can also choose from several free programs if you’re just starting.',
  },
  {
    image: '/images/carouselSecond.jpg',
    title: 'Audio production ',
    id: 5,
    text: 'Similar to video, audio production is becoming a more valuable skill in a wide variety of fields. While radio, music and entertainment are the most common industries that utilize audio production skills, you may also find jobs in large companies that produce their own marketing materials and advertisements. While audio production usually requires a lot of training, many online resources can help you learn the basics. You will need a computer, a good microphone and software for recording and editing to get started.',
  },
  {
    image: '/images/carouselFirst.jpg',
    title: 'Corporate Communications ',
    id: 6,
    text: 'From internal memos to communicating with the press and media, the ability to manage communications so that they are professional, relevant and rich in information is essential. Those in corporate communication positions need to learn skills such as crisis communication, press release writing, forming public relations links and more.All these skills and areas are already essential in the world of IT, but they are likely to play an even more prominent role in the coming years. Companies need individuals who are not just tech-savvy, but who are also skilled and accomplished in the areas of technology and IT that will really give them the competitive edge they need to succeed. Mastering these IT skills help you become more employable, and there is no doubt that IT training will help put you on that path. ',
  },
  {
    image: '/images/carouselFirst.jpg',
    title: 'Big Data analytics ',
    id: 7,
    text: 'Big Data analytics uses advanced analytics techniques against enormous, diverse data sets including structured, semi-structured, and unstructured data from different sources and sizes from terabytes to zettabytes. One of the areas where Big Data is widely applicable and useful is HR analytics. Knowledge of Big Data empowers you to create accurate headcount forecasts, optimize your workforce structure, and drive workforce transformation. The algorithms can simulate different workforce scenarios: the economic crisis, Brexit or Covid-19. We’d recommend you try out a few datadriven tools that can help you predict your future labor costs, define future skills, make hidden skills transparent and point out the skill gaps.',
  },
  {
    image: '/images/carouselFirst.jpg',
    title: 'Time Management ',
    id: 8,
    text: 'No matter what position you choose as a career, there will always be time-sensitive tasks. Time management is a skill needed by all jobs nowadays, especially in healthcare. In addition, since the pandemic and moving to a work-from-home environment, it has become essential for employees to be able to organise their time to separate between work and personal life without having the structure of an office. College is the perfect time to work on your time management skills as you balance attending classes, studying, socialising, and maybe having a part-time job. ',
  },
  {
    image: '/images/carouselFirst.jpg',
    title: 'Persuasion and negotiation  ',
    id: 9,
    text: 'Positively persuade others’ choices by focusing on what is important to them and building consensus. Professionals in sales are probably already astute at this skill but it is important for all areas of business and customer relationship professionals to learn the art of persuasion to maximise profitability in an increasingly competitive world. ',
  },
  {
    image: '/images/carouselFirst.jpg',
    title: 'Ethical Hacking ',
    id: 10,
    text: 'Hacking means getting onto another computer system or network and acquiring the information needed stealthily. Though hacking is mostly used in a negative sense, it is not a bad thing to get involved in when it is ethically done. Ethical hacking has been popularly dubbed as a white hat technique that has the potential to reverse the damage done by malicious hacking. Ethical hackers find their way in the top companies, government organizations, defense, and innumerable other spaces in India and abroad and are popularly counted as a high-income skill with a brighter future ahead. ',
  },
  {
    image: '/images/carouselFirst.jpg',
    title: 'Statistical analysis and Graphs ',
    id: 11,
    text: 'Statistical analysis is the collection and interpretation of data in order to uncover patterns and trends. It is a component of data analytics. Statistical analysis can be used in situations like gathering research interpretations, statistical modeling or designing surveys and studies. It can also be useful for business intelligence organizations that have to work with large data volumes. ',
  },
  {
    image: '/images/carouselFour.jpg',
    title: 'Blockchain ',
    id: 12,
    text: 'Due to the rapid decline in Bitcoin and other cryptocurrencies, blockchains seemed to have disappeared. But in reality, it’s not only used for cryptocurrency, but also peerto-peer payments, crowdfunding file storage, identity management, digital voting purposes. Thus, developers who understand blockchain, smart contracts and can build decentralized applications will be in a high demand as well. Tech giants, like Facebook, Amazon, IBM, and Microsoft are working on developing blockchain. ',
  },
  {
    image: '/images/carouselFour.jpg',
    title: 'Public Relations ',
    id: 13,
    text: 'Public relations is the professional maintenance of a favorable public image by a company, organization, or a famous person. This process is preceded with the help of a topic that is related to the public and gains its interest. Public relations is a top business skill as it provides the best form of promotional business. It acts as a platform for marketing and advertising media. The ultimate goal of public relations is to share ideas and information with investors, marketing pupils, business persons, and the general audience. ',
  },
  {
    image: '/images/carouselFour.jpg',
    title: 'Computing and Mathematics ',
    id: 14,
    text: 'Mathematics & Computing Engineering is an amalgamation of mathematics with computer science and financial engineering. Covering the major areas in demand today, this course is of utmost value to the aspiring engineers. The course provides students with comprehensive theoretical knowledge and also practical training in computer science, numerical computing and mathematical finance. This programme has been introduced due to the need for sophisticated mathematics for modern scientific investigations and technological developments. ',
  },
]

const _items2 = [
  {
    image: '/images/carouselFour.jpg',
    title: 'items',
    id: 15,
    text: 'An individual or a company’s growth is prominently assessed by its finances. The management of one’s finances or that of a company might sound to be easy at the initial stages but it eventually grows to be a difficult and hectic task. Financial management has always been an important skill to nurture for the students and budding professionals, which has now also grown to be one of the high-paying skills with the increasing market competition and is likely to be ruling the charts even in the future. ',
  },
  {
    image: '/images/carouselFour.jpg',
    title: 'People management  ',
    id: 16,
    text: 'Strong people management skills are about building and strengthening relationships, keeping the team on track, giving the right motivation, understanding the needs of a person on your team and helping others achieve their goals. ',
  },
  {
    image: '/images/carouselFour.jpg',
    title: 'People management  ',
    id: 17,
    text: 'People management includes the use of both hard and soft skills. If you haven’t been in a management position before but are looking to enter one, try to focus on improving the softer sides of the skill, such as dealing with work stress, clear communication and empathizing with your team. Developing these skills will help you demonstrate that you can successfully manage a team. ',
  },
  {
    image: '/images/carouselThird.jpg',
    title: 'Communication Skills ',
    id: 18,
    text: 'When it comes to communication skills, they are essential in any position since you will also have to be working with other people and departments. This includes the ability to communicate with clients, teammates, and management. Don’t think that because communication happens through online platforms and e-mails, that this skill isn’t important. It’s even more integral to be able to deliver information and your point of things without physical interaction. This means it’s time to sign up for the communication skills class at your school or university! ',
  },
  {
    image: '/images/carouselThird.jpg',
    title: 'Astrology',
    id: 19,
    text: 'Astrology is generally defined as the belief that astronomical phenomena, like the stars overhead when you were born or the fact that Mercury is in retrograde, have the power to influence the daily events in our lives and our personality traits. This is, of course, very different from the study of astronomy, which is the scientific study of celestial objects, space, and the physics of the universe. ',
  },
  {
    image: '/images/carouselThird.jpg',
    title: 'Spirituality',
    id: 20,
    text: "Spirituality means different things to different people. For some, it's primarily about a belief in God and active participation in organized religion. For others, it's about nonreligious experiences that help them get in touch with their spiritual selves through quiet reflection, time in nature, private prayer, yoga, or meditation.Many people identify as spiritual but not religious: With a few exceptions, the percentage of adults who identify as religious in many industrialized countries is declining, while remaining generally high in less developed nations. Even as religious affiliation decreases, though, a sense of spiritual identification could remain steady or even increase. ",
  },
  {
    image: '/images/carouselThird.jpg',
    title: 'Yoga/ Meditation ',
    id: 22,
    text: 'Yoga is essentially a spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body. It is an art and science of healthy living. Yoga is also commonly understood as a therapy or exercise system for health and fitness. While physical and mental health are natural consequences of yoga, the goal of yoga is more far-reaching. "Yoga is about harmonizing oneself with the universe. It is the technology of aligning individual geometry with the cosmic, to achieve the highest level of perception and harmony.” ',
  },
  {
    image: '/images/carouselThird.jpg',
    title: 'Self Development ',
    id: 23,
    text: 'Personal development is a lifelong process that helps you assess your life goals and upskill to fulfill your potential. It allows you to be proactive and take charge of your actions. You may not always reach your objective but you lead a more fulfilling life because your purpose is defined. Personal development contributes to both satisfaction and success in life. ',
  },
  {
    image: '/images/carouselThird.jpg',
    title: 'Personal Training ',
    id: 24,
    text: 'A personal trainer is an individual who has earned a certification that demonstrates they have achieved a level of competency for creating and delivering safe and effective exercise programs for apparently healthy individuals and groups or those with medical clearance to exercise. They motivate clients by collaborating to set goals, providing meaningful feedback, and by being a reliable source for accountability. ',
  },
  {
    image: '/images/carouselThird.jpg',
    title: 'Philosophy and Ethics ',
    id: 25,
    text: "Philosophy and ethics aims to look into the human problems related to existence, knowledge and moral values that govern a person's behaviour. These problems are considered based on rational argumentation using systematic approaches. Philosophy strives to acquire knowledge by rational means about the issues that are difficult for empirical investigations. Ethics is the part of philosophy that analyses fundamental values and systems of moral principles that define good human conduct.",
  },
  {
    image: '/images/carouselFive.jpg',
    title: 'carouselFive',
    id: 26,
    text: 'Public speaking, also called oratory or oration, has traditionally meant the act of speaking face to face to a live audience. Today it includes any form of speaking to an audience, including pre-recorded speech delivered over great distance by means of technology. Public speaking is used for many different purposes, but usually as some mixture of teaching, persuasion, or entertaining. Each of these calls upon slightly different approaches and techniques.',
  },
  {
    image: '/images/carouselFive.jpg',
    title: 'Career counseling ',
    id: 27,
    text: "Career counseling is a type of advice-giving and support provided by career counselors to their clients, to help the clients manage their journey through life, learning and work changes. This includes career exploration, making career choices, managing career changes, lifelong career development and dealing with other career-related issues. There is no agreed definition of career counseling worldwide, mainly due to conceptual, cultural and linguistic differences. However, the terminology of 'career counseling' typically denotes a professional intervention which is conducted either one-on-one or in a small group. Career counseling is related to other types of counseling. What unites all types of professional counseling is the role of practitioners, who combine giving advice on their topic of expertise with counseling techniques that support clients in making complex decisions and facing difficult situations. ",
  },
  {
    image: '/images/carouselFive.jpg',
    title: 'Relationship Advice ',
    id: 28,
    text: 'Maintaining a healthy romantic relationship requires work. It’s not uncommon for couples to seek professional help to overcome challenges that arise during the course of a partnership. Like in-person relationship counseling, online help for couples comes in a variety of forms, including couples and marriage therapy, premarital counseling, and relationship coaching. To help couples find the best approach for them, we evaluated several platforms that provide counseling geared specifically towards couples and relationships. ',
  },
  {
    image: '/images/carouselFive.jpg',
    title: 'Counselling ',
    id: 29,
    text: "Counselling falls under the umbrella term ‘talking therapies’ and allows people to discuss their problems and any difficult feelings they encounter in a safe, confidential environment. The term can mean different things to different people, but in general, it is a process people seek when they want to change something in their lives, or simply explore their thoughts and feelings in more depth. A counsellor is not there to sit you down and tell you what to do. Instead, they will encourage you to talk about what's bothering you in order to uncover any root causes and identify your specific ways of thinking. The counsellor may then look to create a plan of action to either help you reconcile your issues, or help you to find ways of coping. ",
  },
  {
    image: '/images/carouselFive.jpg',
    title: 'Life Coaching ',
    id: 30,
    text: 'A life coach is a type of wellness professional who helps people make progress in their lives in order to attain greater fulfillment. Life coaches aid their clients in improving their relationships, careers, and day-to-day lives. Life coaches can help you clarify your goals, identify the obstacles holding you back, and then come up with strategies for overcoming each obstacle. In creating these strategies, life coaches target your unique skills and gifts. By helping you to make the most of your strengths, life coaches provide the support you need to achieve long-lasting change. ',
  },
]

const data = [
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
  {
    value: false,
  },
]

const length = _items.length
_items.push(..._items)
_items2.push(..._items2)

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

let win = window.innerWidth

let words = 450

if (win < 600) {
  words = 300
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

const createItem2 = (position, idx) => {
  let slideWidth = 450
  if (window.innerWidth < 600) {
    slideWidth = 300
  }

  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}px)`,
    },
    styleIMG: {},
    image: _items2[idx],
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

const keys2 = Array.from(Array(_items2.length).keys())

const Skills = () => {
  const [items, setItems] = useState(keys)
  const [items2, setItems2] = useState(keys2)
  const [isTicking, setIsTicking] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const bigLength = items.length

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true)
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength])
      })
      setItems2((prev) => {
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
      setItems2((prev) => {
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

  const [random, setRandom] = useState(false)

  const changeBoxFalse = (id) => {
    console.log(id)
    setRandom(!random)
    data[id].value = false
  }

  const changeBoxTrue = (id) => {
    console.log(id)
    setRandom(!random)
    data[id].value = true
  }

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
                  <div className='carousel__container'>
                    <ul className='carousel__slide-list'>
                      {items.map((pos, i) => {
                        const item = createItem(pos, i, activeIdx)
                        return (
                          <li className='carousel__slide-item' style={item.styles} key={i}>
                            <div className='carouselImageContainer'>
                              {!data[item.image.id].value ? (
                                <>
                                  <img src={item.image.image} alt={item.image.title} style={item.styleIMG} />
                                  <div className='carouselImageText'>
                                    <div className='infoBarItem skillItem'>
                                      <div className='infoBarItemTitle'>
                                        <div className='infoBarItemTitleBox'>
                                          <ShareSVG />
                                        </div>
                                      </div>
                                      <div className='infoBarItemTextContainer'>
                                        <div className='infoBarItemText'>{item.image.title}</div>
                                        <div className='infoBarItemTextSub'>
                                          {item.image.text.split('').slice(0, 40)}...
                                        </div>
                                        <div
                                          className='infoBarItemTextLearn'
                                          onClick={() => changeBoxTrue(item.image.id)}
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
                                  <div className='infoBarItem skillItem'>
                                    <div className='infoBarItemTitle skillTitleNO'>
                                      <div className='infoBarItemText skillTextOpen'>{item.image.title}</div>
                                      <div className='infoBarItemTitleBox'>
                                        <ShareSVG />
                                      </div>
                                    </div>
                                    <div className='infoBarItemTextContainer'>
                                      <div className='infoBarItemTextSub skillTextSub'>
                                        {item.image.text.split('').slice(0, words)}...
                                      </div>
                                    </div>
                                    <div
                                      className='infoBarItemTextLearn skillTextLearn'
                                      onClick={() => changeBoxFalse(item.image.id)}
                                    >
                                      <ArrowRightSVG className='BlogArrowRight skillArrow' />
                                      Back
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

          <div className='headerRight'>
            <div className='ingameCarouselContainer'>
              <div className='carousel__wrap'>
                <div className='carousel__inner'>
                  <div className='carousel__btn carousel__btn--prev' onClick={() => prevClick()}>
                    <ArrowSVG className='carousel__btn-arrow--left' />
                  </div>
                  <div className='carousel__container'>
                    <ul className='carousel__slide-list'>
                      {items2.map((pos, i) => {
                        const item = createItem2(pos, i, activeIdx)
                        return (
                          <li className='carousel__slide-item' style={item.styles} key={i}>
                            <div className='carouselImageContainer'>
                              {!data[item.image.id].value ? (
                                <>
                                  <img src={item.image.image} alt={item.image.title} style={item.styleIMG} />
                                  <div className='carouselImageText'>
                                    <div className='infoBarItem skillItem'>
                                      <div className='infoBarItemTitle'>
                                        <div className='infoBarItemTitleBox'>
                                          <ShareSVG />
                                        </div>
                                      </div>
                                      <div className='infoBarItemTextContainer'>
                                        <div className='infoBarItemText'>{item.image.title}</div>
                                        <div className='infoBarItemTextSub'>
                                          {item.image.text.split('').slice(0, 40)}...
                                        </div>
                                        <div
                                          className='infoBarItemTextLearn'
                                          onClick={() => changeBoxTrue(item.image.id)}
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
                                  <div className='infoBarItem skillItem'>
                                    <div className='infoBarItemTitle skillTitleNO'>
                                      <div className='infoBarItemText skillTextOpen'>{item.image.title}</div>
                                      <div className='infoBarItemTitleBox'>
                                        <ShareSVG />
                                      </div>
                                    </div>
                                    <div className='infoBarItemTextContainer'>
                                      <div className='infoBarItemTextSub skillTextSub'>
                                        {item.image.text.split('').slice(0, words)}...
                                      </div>
                                    </div>
                                    <div
                                      className='infoBarItemTextLearn skillTextLearn'
                                      onClick={() => changeBoxFalse(item.image.id)}
                                    >
                                      <ArrowRightSVG className='BlogArrowRight skillArrow' />
                                      Back
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
                  <div className='carousel__btn carousel__btn--next' onClick={() => nextClick()}>
                    <ArrowSVG className='carousel__btn-arrow--right' />
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
