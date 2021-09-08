import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  return (
    <div className='row'>
      <div className='col-12 d-flex '>
        <p>-</p>
        <StaticImage
          alt='small logo'
          src='../images/bigger_logo.svg'
          className='footer-logo ms-auto'
        />
      </div>
    </div>
  );
};

export default Footer;
