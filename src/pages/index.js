import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import About from '../components/about';
import Contact from '../components/contact';
import Main from '../components/main';
import Projects from '../components/projects';
import Skills from '../components/skills';

const IndexPage = () => {
  return (
    <Fragment>
      <Helmet>
        <meta name='icon' href='../images/favicon.ico' />
        <meta name='icon' href='../images/nav_logo.png' />

        <link
          href='../images/favicon.ico'
          rel='shortcut icon'
          type='image/x-icon'
        />
        <link
          href='../images/nav-logo.png'
          rel='shortcut icon'
          type='image/x-icon'
        />
      </Helmet>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Fragment>
  );
};

export default IndexPage;
