import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const About = () => {
  return (
    <section
      id='about'
      className='about d-flex justify-content-center align-items-center'
    >
      <div className='container-lg p-content'>
        <div className='row'>
          <div className='col-md-4 me-auto'>-</div>
          <div className='col-md-4 align-self-center'>&lt;?&gt;</div>
          <div className='col-md-4 d-none d-md-block'>
            <p>
              &lt;div class=&quot;
              <span className='text-primary'>white-box</span>
              &quot;&gt;
            </p>
            <p>&nbsp; &lt;div class=&quot;quote&quot;&gt;</p>
            <p>
              &nbsp; &nbsp; &lt;i class=&quot;fa fa-quote-left
              fa-3x&quot;&gt;&lt;/i&gt;&nbsp;
            </p>
            <p>
              &nbsp; &nbsp; &lt;p class=&quot;company&quot;&gt; &lt;span
              id=&quot;text&quot;&gt;November{' '}
              <span className='text-primary'>Five</span>&lt;/span&gt;&lt;/p&gt;
            </p>
            <p>&nbsp; &lt;/div&gt;</p>
            <p>
              &nbsp; &lt;div class=&quot;random-employee&quot;&gt;- &lt;span
              id=&quot;employee&quot;&gt;Me!&lt;/span&gt;
            </p>
            <p>&nbsp; &lt;/div&gt;</p>
            <p>
              &nbsp; &lt;div class= &quot;
              <span className='text-primary'>buttons</span>&quot;&gt;
            </p>
          </div>
        </div>
        <div className='row justify-content-between mt-5'>
          <div className='col-md-5 col-12'>
            <h2>
              <span className='text-primary'>H</span>ey there, I'm Tom
            </h2>
            <p>
              <q>
                I’m a software engineer specializing in building (and
                occasionally designing) exceptional digital experiences. My
                passion for coding has begun with the 1995 super movie
                'Hackers'. It was in that moment that I knew I wanted to be a
                coder when I got older. I have two years experience as a backend
                developer and I'm now enrolled at Becode Antwerp where it's
                possible to focus more on the frontend spectrum. All this to
                become a full-fledged full stack developer. We've had the
                opportunity to work with a great deal of
                <Link to='#skills'> web technologies</Link>. I'm looking forward
                to gather a significant amount of various experiences at my
                internship and future jobs with amazing and ambitious people.
              </q>
            </p>
            <p className='mb-4'>
              - <span className='text-primary'>Tom Dirinck</span>
            </p>
          </div>
          <div className='col-md-5 col-12 mt-sm-4'>
            <div className='profile-pic'>
              <StaticImage
                alt='profile picture'
                src='../images/profile-picture.png'
                className='image-grey'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
