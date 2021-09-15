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
        <title>Tom Dirinck | Portfolio</title>
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
