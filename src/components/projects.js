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
                    <div className=' bg-secondary hover-secondary'>
                      <StaticImage
                        alt='One of my projects'
                        src='../images/projects/Parcel_app_header.jpg'
                        width={298}
                        height={298}
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='bg-success hover-secondary'>
                      <StaticImage
                        alt='One of my projects'
                        src='../images/projects/Parcel_app_header.jpg'
                        width={298}
                        height={298}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='col-12 h-100 '>
                    <div className='bg-primary hover-primary h-100'>
                      <StaticImage
                        alt='One of my projects'
                        src='../images/projects/Parcel_app_header.jpg'
                        width={298}
                        height={600}
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
                  <div className='col-12 bg-secondary hover-secondary'>
                    <StaticImage
                      alt='One of my projects'
                      src='../images/projects/memory_preview.png'
                      width={298}
                      height={298}
                    />
                  </div>
                </div>
                <div className='col-6 mb-3'>
                  <div className='col-12 bg-primary hover-secondary'>
                    <StaticImage
                      alt='One of my projects'
                      src='../images/projects/memory_preview.png'
                      width={298}
                      height={298}
                    />
                  </div>
                </div>
                <div className='col-12'>
                  <div className='col-12 bg-danger hover-primary'>
                    <StaticImage
                      alt='One of my projects'
                      src='../images/projects/Becode_class_app_header.jpg'
                      width={600}
                      height={298}
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
