import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Projects = () => {
  return (
    <section
      id='projects'
      className='projects d-flex justify-content-center align-items-center'
    >
      <div className='container-lg p-content'>
        {/* Left side projects */}
        <div className='project-list'>
          <div className='row'>
            <div className='col-sm-12 col-lg-6 mb-3 mb-lg-0'>
              <div className='row '>
                <div className='col-6'>
                  <div className='col-12 mb-3'>
                    <div className='hover-secondary cursor'>
                      <a
                        href='https://github.com/penous/calculator'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <StaticImage
                          alt='One of my projects'
                          src='../images/projects/becode-app.png'
                          width={298}
                          height={298}
                          layout='fullWidth'
                          objectFit='cover'
                          className='h-100'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='hover-small-website cursor'>
                      <a
                        href='https://github.com/penous/portfolio'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <StaticImage
                          alt='One of my projects'
                          src='../images/projects/portfolio.png'
                          width={298}
                          height={298}
                          layout='fullWidth'
                          objectFit='cover'
                          className='h-100'
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='col-12 h-100 '>
                    <div className='hover-long h-100 cursor'>
                      <a
                        href='https://github.com/penous/angular-webshop'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <StaticImage
                          alt='One of my projects'
                          src='../images/projects/parcel.png'
                          layout='fullWidth'
                          objectFit='cover'
                          className='h-100'
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side projects */}
            <div className='col-sm-12 col-lg-6'>
              <div className='row'>
                <div className='col-6 mb-3'>
                  <div className='col-12 hover-secondary cursor'>
                    <a
                      href='https://github.com/penous/js-memory-game'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <StaticImage
                        alt='One of my projects'
                        src='../images/projects/memory_preview.png'
                        width={298}
                        height={298}
                        layout='fullWidth'
                        objectFit='cover'
                        className='h-100'
                      />
                    </a>
                  </div>
                </div>
                <div className='col-6 mb-3'>
                  <div className='col-12 hover-small cursor'>
                    <a
                      href='https://reservaties.deruien.be/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <StaticImage
                        alt='One of my projects'
                        src='../images/projects/ruien.png'
                        width={298}
                        height={298}
                        layout='fullWidth'
                        objectFit='cover'
                        className='h-100'
                      />
                    </a>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='col-12 hover-wide cursor'>
                    <a
                      href='https://github.com/penous/pokedex-php'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <StaticImage
                        alt='One of my projects'
                        src='../images/projects/pokedex.png'
                        width={600}
                        height={298}
                        layout='fullWidth'
                        objectFit='cover'
                        className='h-100'
                      />
                    </a>
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
