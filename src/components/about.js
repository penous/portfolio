import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
  return (
    <section
      id='about'
      className='about d-flex justify-content-center align-items-center'
    >
      <div className='container'>
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
        <div className='row flex-nowrap justify-content-between mt-5'>
          <div className='col-md-5 col-12'>
            <h2>
              <span className='text-primary'>H</span>ey there, I'm Tom Dirinck
            </h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt”
            </p>
            <p>
              - <span className='text-primary'>Tom Dirinck</span>
            </p>
          </div>
          <div className='col-md-5 col-12'>
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
