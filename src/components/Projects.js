import React from 'react';
import '../css/projectStyles.scss';
import BookifyBooks from '../images/Bookifybooks.png';
import javascriptIcon from '../images/javascript.svg';
import reactIcon from '../images/react.svg';
import pythonIcon from '../images/python.svg';
import flaskIcon from '../images/flask.svg';
import sqliteIcon from '../images/sqlite.svg';

function Projects() {
  return (
    <div className='even'>
      <div id="projects" className='contain'>
        <h2>Projects</h2>

        <div id="projects-container">
          <div id="tile1" className='project-tile'>
            <div className='project-image'>
              <img src={BookifyBooks} style={{ objectFit: "fit" }} alt="BookifyBooks Screenshot" />
            </div>
            <div className='project-text right'>
              <h3>BookifyBooks</h3>
              <div id="project-description">
                <p>BookifyBooks is an app that allows you to streamline your bookstore operations. Manage inventory, process orders, and provide a user-friendly interface for customers to browse, purchase, and review books. </p>
              </div>
              <div className='made-with'>
                <img className="icon-p" src={javascriptIcon} alt='JavaScript Icon' />
                <img className="icon-p" src={reactIcon} alt='React Icon' />
                <img className="icon-p" src={pythonIcon} alt='Python Icon' />
                <img className="icon-p" src={flaskIcon} alt='Flask Icon' style={{ width: "20px" }} />
                <img className="icon-p" src={sqliteIcon} alt='SQLite Icon' />
              </div>
              <div id="links">
                <a href='https://github.com/hihijazi/phase-4-bookify-books' target="_blank" title='BookifyBooks on GitHub' rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
