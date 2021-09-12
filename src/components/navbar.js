import React, { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function* generator(arr) {
  while (true) {
    yield* arr;
  }
}

const arr = ['Frontend', 'Backend', 'Fullstack'];
const gen = generator(arr);

const Navbar = () => {
  const [title, setTitle] = useState('Fullstack');

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle(gen.next().value);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <div className='container-fluid'>
        <StaticImage
          className='nav-logo me-3'
          alt='navbar logo'
          src='../images/nav_logo.svg'
        />
        <a className='navbar-brand' href='/'>
          <span className='text-primary'>TOM</span> DIRINCK
        </a>
        <div className='d-flex'>
          <p className='text-light move ms-3'>&lt;!-- {title} Dev --&gt;</p>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse text-end '
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item px-md-2 px-xl-3'>
              <a className='nav-link ' aria-current='page' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item px-md-2 px-xl-3'>
              <a className='nav-link' href='#skills'>
                Skills
              </a>
            </li>
            <li className='nav-item px-md-2 px-xl-3'>
              <a className='nav-link ' aria-current='page' href='#projects'>
                Projects
              </a>
            </li>
            <li className='nav-item px-md-2 px-xl-3'>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
          {/* <form className='d-flex'>
            <button className='btn btn-outline-primary ' type='submit'>
              Resume
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
