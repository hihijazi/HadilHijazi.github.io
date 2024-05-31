import React from 'react'
import '../css/homeStyles.scss'
import hadilHeadshot from '../images/Hadil-Headshot.jpg'

function Home() {
  return (
    <div className='odd'>
      <div id="home" className='contain'>
        <div id="home-text-content">
          <p>Hi, I'm</p>
          <h1>Hadil Hijazi</h1>
          <p>a Full Stack Web Developer </p>
          {/* { <p>I'm a Business Analyst dedicated to leveraging my extensive experience in accounting, project management, and recent software engineering education to deliver insightful analysis and innovative solutions that drive towards business success.</p>}
          { <p>I'm a Business Analyst passionate about coding, learning, and seizing opportunities. I believe in technology's power for positive impact and am eager to contribute to your business.  </p>} */}
        </div>

        <div id="home-headshot-container">
          <img src={hadilHeadshot} alt="Hadil Hijazi Headshot"/>
        </div>
      </div>
    </div>
  )
}

export default Home 