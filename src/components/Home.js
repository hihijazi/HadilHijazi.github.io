import React from 'react'
import '../css/homeStyles.scss'
import hadilHeadshot from '../images/Hadil-Headshot.png'

function Home() {
  return (
    <div className='odd'>
      <div id="home" className='contain'>
        <div id="home-text-content">
          <p>Hi, I'm</p>
          <h1>Hadil Hijazi</h1>
          <p>a Full Stack Software Developer </p>
          {/* <p>a Software Developer passionate about creating interactive applications and experiences on the web.</p> */}
          {/* <p>a Software Developer passionate about coding, continuous learning, and turning challenges into opportunities. I believe in the power of technology to make a positive impact, and I'm ready to bring my skills to your next project.</p> */}
        </div>

        <div id="home-headshot-container">
          <img src={kimHeadshot} alt="Hadil Hijazi Headshot"/>
        </div>
      </div>
    </div>
  )
}

export default Home