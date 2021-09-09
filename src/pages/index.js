import React, { Fragment } from 'react';
import About from '../components/about';
import Main from '../components/main';
import Skills from '../components/skills';

const IndexPage = () => {
  return (
    <Fragment>
      <Main />
      <About />
      <Skills />
    </Fragment>
  );
};

export default IndexPage;
