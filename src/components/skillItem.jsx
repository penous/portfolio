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
      <div className='col-6'>
        <h6>{name}</h6>
      </div>
      <div className='col-6 text-primary'>
        <p>{level}</p>
      </div>
      <div className='col-6'>
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
