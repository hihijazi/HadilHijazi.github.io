import React from 'react'
import '../css/AboutMeStyles.scss'

function AboutMe() {
  return (
    <div className='even'>
      <div id="aboutMe" className='contain'>
        <h2>About Me</h2>
        <p>
          As a graduate student of Flatiron School's Software Engineering Bootcamp, I've wrapped up an intense journey into the realms of coding and creative problem-solving. With a background in Accounting and Finance, I've developed a strong foundation for meticulous analysis and attention to detail. Driven by a relentless hunger for learning, I excel in turning challenges into opportunities for growth. I firmly believe in the transformative power of technology to drive positive change, and I'm eager and well-prepared to lend my skills to your upcoming projects!
        </p>
        <p>
          In my free time I enjoy reading, cooking, exercising, and spending time with my family.
        </p>
        <a style={{ display: "none" }} href='/Hadil-Hijazi-Resume.pdf' target='_blank'>View Resume</a>

        {/* adds MORE toggle */}
        <div>
          <h3>My Background:</h3>
          <p>
            I'm a graduate of University of Maryland with a Bachelor of Science degree in Business Administration and a minor in Human Resources. I have been working in the Accounting and Finance field for the past 6 years. I have made the decision to transition to tech because I found myself very fascinated in software and technology. I have been learning on my own for about a year now and have been able to pick up new skills quickly. I have been working in the DMV area for over 6 years now. Transitioning into a new career has not been very easy. I strive everyday to become better in this field to be able to give more.
          </p>
          <h3>Where I am Now:</h3>
          <p>
            I have recently embarked on a journey of self-education, diving into HTML, CSS, Python and Java. I'm enthusiastic about delving deeper into these subjects and grasping the ins and outs of the entire software development lifecycle. Currently, after graduating from Flatiron School's Software Engineering bootcamp, I have been searching for a Junior Software Engineering opportunity. My goal is to secure a Junior Software Engineering position in the DMV area or remotely. With my strong work ethic and determination, I'm eagerly anticipating making a mark in this industry!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
