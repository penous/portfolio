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
      <section className='main-bg text-light d-flex align-items-center'>
        <h1>
          Hi, I'm <span className='text-primary'>Tom</span> Dirinck
        </h1>
      </section>

      <div className='social-icons'>
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/tom-dirinck/'>
              <FontAwesomeIcon icon={faLinkedinIn} color='darkgrey' size='2x' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/tomdirinck/'>
              <FontAwesomeIcon icon={faInstagram} color='darkgrey' size='2x' />
            </a>
          </li>
          <li>
            <a href='https://github.com/penous'>
              <FontAwesomeIcon icon={faGithub} color='darkgrey' size='2x' />
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Main;
