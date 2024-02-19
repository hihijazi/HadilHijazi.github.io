import React, { useEffect, useState } from 'react'
import "../css/blogStyles.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'

function Blog() {

  return (
    <div className='odd'>
      <div id="blogSection" className='contain' style={{paddingBottom: "20px"}}>
        <h2 style={{paddingTop: '12px'}}>My Blog Posts</h2>
        <div id="blog-header">
          <img src='https://miro.medium.com/v2/resize:fill:141:141/1*V0etv6riNT3tCxRJEivn8w.png' alt="Hadil's profile pic from Medium" />
          <h4>Hadil Hijazi</h4>
          <p>Check out my latest 3 blogs below! If you are interested in seeing a complete list of all my blogs, you go to my Medium page here  
            <span id="blog-medium"><a href='https://medium.com/@hihijazi' target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faMedium} size="xl" title="Go to Hadil's blog on Medium"/>
            </a></span>
          </p>
        </div>
        <div id="blogs-container">
          <div className='blog'>
            <div id="blog-text">
              <p>Feb 12</p>
              <p id="blog-title">HTTP Methods GET POST and Retrieving Form Data</p>
              <p>In the web development world, understanding the fundamental HTTP methods - GET and POST - is...</p>
              <a href="https://medium.com/@hihijazi/http-methods-get-post-retrieving-form-data-7a5e65055ee7" target='_blank' rel="noreferrer">Read more...</a>
            </div>
            <div id="blog-image">
              <img src='	https://miro.medium.com/v2/resize:fit:1100/format:webp/1*D1TtFF3foybxlHR9M9FmoA.jpeg' alt={`Thumbnail img for HTTP Methods GETPOST and Retrieving Form Data blog`}/>
            </div>
          </div>

          <div className='blog'>
            <div id="blog-text">
              <p>Dec 29</p>
              <p id="blog-title">Props Vs States</p>
              <p>What is React.js?  React can manage your data and properly render your application when your data changes...</p>
              <a href="https://medium.com/@hihijazi/props-vs-state-460dfdf9c78f" target='_blank' rel="noreferrer">Read more...</a>
            </div>
            <div id="blog-image">
              <img src='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*IGHnqylymreaXLW4fUzPpQ.jpeg' alt={`Thumbnail img for Props Vs States blog`}/>
            </div>
          </div>

          <div className='blog'>
            <div id="blog-text">
              <p>Dec 4</p>
              <p id="blog-title">innerHTML property in JavaScript</p>
              <p>For the past few weeks, I have been learning about JavaScript in the context of Web Development. JavaScript is a very important programming language for the Web ...</p>
              <a href="https://medium.com/@hihijazi/innerhtml-property-in-javascript-a82480c0bd21" target='_blank' rel="noreferrer">Read more...</a>
            </div>
            <div id="blog-image">
              <img src='	https://miro.medium.com/v2/resize:fit:568/format:webp/1*zPmHfoU9VCYc725T2vMRBQ.png' alt={`Thumbnail img for innerHTML property in JavaScript blog`}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Blog