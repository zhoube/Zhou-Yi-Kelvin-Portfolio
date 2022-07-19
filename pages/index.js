import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className='flex items-center'>
        <div className='w-1/2 lg:block hidden'>
          {/* Hero image here */}
          <img css={'height: 20px;'} src='/ProfilePhoto.jpeg' />
        </div>
        <div className='text-center w-full'>
          <img src='/profile_male.png' className='w-40 mx-auto' />
          <div className='py-4'>{'Zhou Yi Kelvin'}</div>
          <div className='pb-4'>
            I am a Penultimate Year Computer Science and Business Student (DDP)
            from NUS.
            <br></br>I am currently a Software Engineer Intern at Ninja Van,
            <br></br>
            and I am always looking for new opportunities to improve myself
            before I graduate in 2024.
          </div>
          <div className='text-lg text-blue-500'>
            {/* Place your links here */}
            {
              <a
                href='https://www.linkedin.com/in/zhou-yi-kelvin'
                target='_blank'
                rel='noreferrer noopener'
              >
                LinkedIn
              </a>
            }
            {<span className='text-black dark:text-white'> | </span>}
            {
              <a
                href='https://www.github.com/zhoube'
                target='_blank'
                rel='noreferrer noopener'
              >
                Github
              </a>
            }
            {/* End of Links */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
