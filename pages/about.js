import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className='text-6xl lg:text-8xl font-semibold py-32'>About Me</div>
      <div className='text-4xl font-semibold'></div>

      <div>
        Hello! Welcome to my About Page.
        <br />
        My name is Kelvin, an aspiring Software Engineer that will graduate from
        NUS in 2024.
        <br />
        In the past, I have had multiple Software Engineering Internships, most
        recent one being in Ninja Van.
        <br />
        You may head over to the Work Page to find out more!
        <br />
        In my free time, I like to play International Chess competitively, and
        perform my duties as the Vice President (Internal) of the NUS
        Intellectual Games Club.
        <br />
        Last but not least, I follow the NBA and the MCU very closely. Many say
        that I am somewhat of an encyclopedia on these two topics :D.
      </div>
    </Layout>
  );
};

export default About;
