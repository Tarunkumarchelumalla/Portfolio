import React from 'react';

import HTML from '../assests/html.png';
import CSS from '../assests/css.png';
import JavaScript from '../assests/javascript.png';
import ReactImg from '../assests/react.png';
import firebase from  '../assests/firebase.png';
import node from  '../assests/node.png';
import angular from  '../assests/angular.png';
import tailwind from  '../assests/tailwind.png';
const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-black text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#FF4900] '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='  neon-button  w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={node} alt="HTML icon" />
                  <p className='my-4'>NOdejs</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={firebase} alt="HTML icon" />
                  <p className='my-4'>firebase</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={angular} alt="HTML icon" />
                  <p className='my-4'>Angular</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={tailwind} alt="HTML icon" />
                  <p className='my-4'>Tailwind</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;