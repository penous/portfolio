import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Contact = () => {
  return (
    <section
      id='contact'
      className='contact d-flex justify-content-center align-items-center'
    >
      <div className='container-lg p-content'>
        <div className='row'>
          <div className='col-12 col-md-8 col-lg-6'>
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
                <div className='col-12 d-flex justify-content-between py-1 mb-3 contact-bg text-center'>
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

                <div className='col-12 d-flex justify-content-between py-1 mb-3 contact-bg text-center'>
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

                <div className='col-12 d-flex justify-content-between py-1 mb-3 contact-bg text-center'>
                  <div className='tag-start'>
                    &lt;<span className='text-primary'>Email</span>&gt;
                  </div>
                  <a href='mailto:tom@diritom.com'>tom@diritom.com</a>
                  <div className='tag-end'>
                    &lt;/<span className='text-primary'>Email</span>&gt;
                  </div>
                </div>

                <div className='col-12 d-flex  py-1 mb-3 text-center'>
                  <div className='col-3 tag-start commit contact-bg py-1 ms-auto'>
                    <span className='text-primary'>&lt;</span>
                    commit
                    <span className='text-primary'>&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side graphics */}
          <div className='col-12 col-md-4 col-lg-6 d-flex justify-content-end ps-5'>
            <div className='contact-text-right'>
              <p className='mb-0'>
                --&gt; &nbsp;&nbsp; &lt;country&gt;
                <span className='text-primary'>Belgium</span>&lt;/country&gt;
              </p>
              <p className='mb-0'>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;city&gt;
                <span className='text-primary'>Antwerp</span>
                &lt;/city&gt;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
