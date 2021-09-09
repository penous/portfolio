import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const SkillItem = ({ name, level }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          gatsbyImageData
          fixed {
            originalName
          }
        }
      }
    }
  `);

  return (
    <div className='row'>
      <div className='col-12'>
        <h5 className='d-inline-block me-4 mb-2'>{name}</h5>{' '}
        <p className='text-primary d-inline-block mb-2'>{level}</p>
      </div>
      <div className='col-12 mb-3'>
        {data.allImageSharp.nodes.map((node) => {
          if (node.fixed.originalName.includes(level.toLowerCase())) {
            const image = node.gatsbyImageData;
            return <GatsbyImage image={image} alt={`Skill Level ${level}`} />;
          }
        })}
      </div>
    </div>
  );
};

export default SkillItem;
