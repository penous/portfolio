import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Projects = () => {
  return (
    <section
      id='projects'
      className='projects d-flex justify-content-center align-items-center'
    >
      <div className='container'>
        {/* Left side projects */}
        <div className='project-list'>
          <div className='row'>
            <div className='col-sm-12 col-lg-6 mb-3 mb-lg-0'>
              <div className='row '>
                <div className='col-6'>
                  <div className='col-12 mb-3'>
                    <div className='hover-secondary'>
                      <StaticImage
                        alt='One of my projects'
                        src='../images/projects/Parcel_app_header.jpg'
                        width={310}
                        height={310}
                        layout='fullWidth'
                        objectFit='cover'
                        className='h-100'
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='hover-secondary'>
                      <StaticImage
                        alt='One of my projects'
                        src='../images/projects/Parcel_app_header.jpg'
                        width={310}
                        height={310}
                        layout='fullWidth'
                        objectFit='cover'
                        className='h-100'
                      />
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='col-12 h-100 '>
                    <div className='hover-long h-100'>
                      <StaticImage
                        alt='One of my projects'
                        src='../images/projects/parcel.png'
                        layout='fullWidth'
                        objectFit='cover'
                        className='h-100'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side projects */}
            <div className='col-sm-12 col-lg-6'>
              <div className='row'>
                <div className='col-6 mb-3'>
                  <div className='col-12 hover-secondary'>
                    <StaticImage
                      alt='One of my projects'
                      src='../images/projects/memory_preview.png'
                      width={310}
                      height={310}
                      layout='fullWidth'
                      objectFit='cover'
                      className='h-100'
                    />
                  </div>
                </div>
                <div className='col-6 mb-3'>
                  <div className='col-12 hover-secondary'>
                    <StaticImage
                      alt='One of my projects'
                      src='../images/projects/memory_preview.png'
                      width={310}
                      height={310}
                      layout='fullWidth'
                      objectFit='cover'
                      className='h-100'
                    />
                  </div>
                </div>
                <div className='col-12'>
                  <div className='col-12 hover-wide'>
                    <StaticImage
                      alt='One of my projects'
                      src='../images/projects/pokedex.png'
                      width={600}
                      height={310}
                      layout='fullWidth'
                      objectFit='cover'
                      className='h-100'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The title */}
        <div className='row'>
          <div className='col'>
            <h2>
              <span className='text-primary'>P</span>rojects
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
