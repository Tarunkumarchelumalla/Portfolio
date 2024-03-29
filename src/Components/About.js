import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-black text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#FF4900]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='text-white text-2xl sm:text-right  font-bold'>
              <p>Hi. I'm Tarun, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Welcome to my website! I'm Tarun, a 2023 graduate in Computer Science Engineering. I enjoy working on projects for fun and learning purposes. This website showcases my collection of projects, reflecting my passion for exploring and expanding my skills. Join me on this journey of discovery and innovation! </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
