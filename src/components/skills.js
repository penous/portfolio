import React from 'react';
import { skills } from '../context/skillsData';
import SkillItem from './skillItem';

const Skills = () => {
  return (
    <section
      id='skills'
      className='skills d-flex justify-content-center align-items-center'
    >
      <div className='container-lg p-content'>
        <div className='row row-spacing'>
          <div className='col'>
            <h2>
              <span className='text-primary'>S</span>kills
            </h2>
          </div>
        </div>

        <div className='row skill-list'>
          {skills.map((skill, i) => {
            return (
              <div key={`${i}-${skill.name}`} className='col-6 col-md-3'>
                <SkillItem name={skill.name} level={skill.level} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
