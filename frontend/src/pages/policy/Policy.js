import React from 'react'
import Footer from '../../components/footer/Footer'

import '../terms/terms.css'

const Policy = () => {
  return (
    <>
      <div className='componentFirst'>
        <div className='componentSecond'>
          <div className='termsContainer'>
            <div className='termsTitle'>Website and Application Privacy Policy for Enki Connect </div>
            <div className='termsText'>
              Protecting your personal information is important to us. So is following Australia’s privacy laws.
              This Privacy Policy tells you how we will protect your privacy and collect and use your personal
              information (any reference to “<span className='termsBold'>we</span>”, “
              <span className='termsBold'>us</span>” or “<span className='termsBold'>our</span>” is to{' '}
              <span className='termsBold'>Enki Connect</span> ) Our Privacy Policy applies to anyone who uses this
              Website (<span className='termsBold'>www.enkiconnect.co</span>) (Website) or our Application (
              <span className='termsBold'>Enki Connect</span>
              ).
            </div>
            <div className='termsMainText'>
              <span className='termsBold'>“Personal Information” </span>
              means any information that can directly or indirectly identify you or another person.
            </div>
            <div className='termsMainText termsExtra'>
              <span className='termsBold'>YOUR RIGHTS</span>
            </div>

            <div className='termsMainText'>
              If you don’t agree with our Privacy Policy or don’t want us to collect your Personal Information,
              then you shouldn’t use our Website. If you change your mind and don’t agree with our Privacy Policy
              anymore, then you should stop using our Website and Application. If you have any questions, you can
              contact our Privacy Officer at
              <span className='termsBold'>support@enkiconnect.co.</span>
            </div>
            <div className='termsMainText'>
              We’ll only use your Personal Information for the reasons that we collected it. If we don’t need your
              Personal Information anymore for those reasons, then we’ll stop using it.
            </div>
            <div className='termsMainText termsExtra'>
              <span className='termsBold'>INFORMATION WE COLLECT ABOUT YOU</span>
            </div>
            <div className='termsMainText'>
              <ul className='termsListContainerDisc'>
                <li className='termsList'>
                  Information captured as part of your profile including but not limited to your name, age, email,
                  date of birth, contact details, professionals credentials and IP address;
                </li>
                <li className='termsList'>Feedback you give us and your responses to our customer surveys; and</li>
                <li className='termsList'>Any other information you give us.</li>
              </ul>
            </div>
            <div className='termsMainText'>
              Please don’t give us Personal Information about someone else unless you have their permission and
              they know about this Privacy Policy.
            </div>
            <div className='termsMainText termsExtra'>
              <span className='termsBold'>HOW WE COLLECT YOUR INFORMATION</span>
            </div>
            <div className='termsMainText '>
              <ul className='termsListContainerDisc'>
                <li className='termsList'>From you directly (like when you provide your details to us);</li>
                <li className='termsList'>
                  From you indirectly (like when you interact with us on social media);
                </li>
                <li className='termsList'>
                  From other people (like contractors and agents that work for us); and
                </li>
                <li className='termsList'>From places where the information is publicly available.</li>
              </ul>
            </div>
            <div className='termsMainText termsExtra'>
              <span className='termsBold'>WHY WE USE AND SHARE YOUR INFORMATION</span>
            </div>
            <div className='termsMainText '>
              <ul className='termsListContainerDisc'>
                <li className='termsList'>To help you use our Website and Application;</li>
                <li className='termsList'>To respond to your questions and to tell you more about us;</li>
                <li className='termsList'>
                  To operate and maintain our Website and Application; For our internal records’
                </li>
                <li className='termsList'>To comply with our legal obligations; and</li>
                <li className='termsList'>For any other purposes that you authorize.</li>
              </ul>
            </div>
            <div className='termsMainText '>
              Sometimes we might share your Personal Information with our contractors and agents to help do these
              things, but we won’t share your Personal Information with anyone else, unless the law requires us to.
            </div>
            <div className='termsMainText termsExtra'>
              <span className='termsBold'>HOW WE PROTECT YOUR INFORMATION</span>
            </div>
            <div className='termsMainText '>
              We have reasonable protections in place against unauthorised access, use, modification, disclosure
              and loss of your Personal Information.
            </div>
            <div className='termsMainText termsExtra'>
              <span className='termsBold'>SEEING OR CORRECTING YOUR INFORMATION</span>
            </div>
            <div className='termsMainText '>
              You’re allowed to see what Personal Information we have about you, and you can ask us to correct it
              if you think it’s wrong. If there is a legal reason why we can’t let you see it, or if we don’t agree
              with your correction, then we’ll tell you.
              <span className='termsBold'>PRIVACY COMPLAINTS</span>
            </div>
            <div className='termsMainText '>
              If you think that we haven’t properly protected your privacy, you can tell our Privacy Officer here
              (support@enkiconnect.co) or make a complaint to the Australian Privacy Commissioner.
            </div>
            <div className='termsMainText termsExtra'>
              <span className='termsBold'>PRIVACY POLICY CHANGES</span>
            </div>
            <div className='termsMainText'>
              If we change our Privacy Policy, then we will tell you about it on our Website and/or Application. If
              you don’t agree with the changes, you should stop using our Website and/or Application. If you keep
              using our Website and/or Application, then this will indicate that you have agreed to our changes.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Policy
