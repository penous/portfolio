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
        <div className='row'>
          <div className='col-sm-12 col-lg-6'>
            <div className='row '>
              <div className='col-6'>
                <div className='col-12 mb-3'>
                  <div className=' bg-secondary'>
                    <StaticImage
                      alt='One of my projects'
                      src='../images/projects/Parcel_app_header.jpg'
                      width={298}
                      height={298}
                    />
                  </div>
                </div>
                <div className='col-12'>
                  <div className='bg-success'>
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
                <div className='col-12 bg-secondary'>4</div>
              </div>
              <div className='col-6 mb-3'>
                <div className='col-12 bg-primary'>5</div>
              </div>
              <div className='col-12'>
                <div className='col-12 bg-danger'>6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
