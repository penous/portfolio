import React, { Fragment } from 'react';
import About from '../components/about';
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
    </Fragment>
  );
};

export default IndexPage;
