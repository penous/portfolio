import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const Main = () => {
  return (
    <Fragment>
      <section className=' main main-bg text-light d-flex align-items-center'>
        <div className='container-lg'>
          <h1>
            Welcome, I'm <span className='text-primary'>Tom</span> Dirinck
          </h1>
          <h2>
            <span className='text-primary'>Full stack</span> developer
          </h2>
        </div>
      </section>

      <div className='social-icons'>
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/tom-dirinck/'>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className='icon-highlight'
                color='darkgrey'
                size='2x'
              />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/tomdirinck/'>
              <FontAwesomeIcon
                icon={faInstagram}
                className='icon-highlight'
                color='darkgrey'
                size='2x'
              />
            </a>
          </li>
          <li>
            <a href='https://github.com/penous'>
              <FontAwesomeIcon
                icon={faGithub}
                className='icon-highlight'
                color='darkgrey'
                size='2x'
              />
            </a>
          </li>
        </ul>
      </div>

      <div className='email-wrapper'>
        <div className='email-icon'>
          <p>tom@diritom.com</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
