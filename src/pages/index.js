import React, { Fragment } from 'react';
import About from '../components/about';
import Contact from '../components/contact';
import Main from '../components/main';
import Projects from '../components/projects';
import Skills from '../components/skills';

const IndexPage = () => {
  return (
    <Fragment>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Fragment>
  );
};

export default IndexPage;
