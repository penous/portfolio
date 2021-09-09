import React from 'react';
import { skills } from '../context/skills';
import SkillItem from './skillItem';

const Skills = () => {
  console.log(skills[0]);

  return (
    <section
      id='skills'
      className='skills d-flex justify-content-center align-items-center'
    >
      <div className='container'>
        <div className='row row-spacing'>
          <div className='col'>
            <h2>
              <span className='text-primary'>S</span>kills
            </h2>
          </div>
        </div>

        <div className='row'>
          {skills.map((skill, i) => {
            return (
              <div className='col-6 col-md-3'>
                <SkillItem key={i} name={skill.name} level={skill.level} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
