import React from 'react';
import { skills } from '../context/skills';

const Skills = () => {
  console.log(skills[0]);

  return (
    <section
      id='skills'
      className='skills d-flex justify-content-center align-items-center'
    >
      <div className='container'>Here will my skills be displayed</div>
    </section>
  );
};

export default Skills;
