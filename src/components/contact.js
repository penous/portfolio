import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Contact = () => {
  return (
    <section
      id='contact'
      className='contact d-flex justify-content-center align-items-center'
    >
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='contact-wrapper'>
              <div className='row'>
                <div className='col mb-2'>
                  <h2>
                    <span className='text-primary mb-1'>I</span>nterested?
                  </h2>
                </div>
              </div>

              {/* Form or details */}
              <div className='row details'>
                <div className='col-12 d-flex justify-content-between mb-3 contact-bg text-center'>
                  <div className='tag-start'>
                    &lt;<span className='text-primary '>Github</span>&gt;
                  </div>
                  <a href='https://github.com/penous' target='_blank'>
                    github.com/penous
                  </a>
                  <div className='tag-end'>
                    &lt;/<span className='text-primary '>Github</span>&gt;
                  </div>
                </div>
                <div className='col-12 d-flex justify-content-between mb-3 contact-bg text-center'>
                  <div className='tag-start'>
                    &lt;<span className='text-primary'>LinkedIn</span>&gt;
                  </div>
                  <a
                    href='https://www.linkedin.com/in/tom-dirinck/'
                    target='_blank'
                  >
                    linkedin.com/tom-dirinck
                  </a>

                  <div className='tag-end'>
                    &lt;/<span className='text-primary'>LinkedIn</span>&gt;
                  </div>
                </div>
                <div className='col-12 d-flex justify-content-between mb-3 contact-bg text-center'>
                  <div className='tag-start'>
                    &lt;<span className='text-primary'>Email</span>&gt;
                  </div>
                  tom.dirinck@gmail.com
                  <div className='tag-end'>
                    &lt;/<span className='text-primary'>Email</span>&gt;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side graphics */}
          <div className='col d-flex justify-content-end ps-5'>
            <div className='contact-text-right'>
              <p className='mb-0'>
                --&gt; &nbsp;&nbsp; &lt;country&gt;
                <span className='text-primary'>Belgium</span>&lt;/country&gt;
              </p>
              <p className='mb-0'>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;state&gt;
                <span className='text-primary'>Antwerp</span>
                &lt;/state&gt;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
