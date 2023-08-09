import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {FaBars, FaTimes,FaLinkedinIn,FaGithub,FaFacebook,FaBook} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi";
import { Link } from 'react-scroll';
export const Home = () => {
  return (
    <div name="home"className='bg-black h-screen w-full h-screen'>
     <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
     <p className="text-[#FF4900]
       "> Hi,my name is </p>
       <h1 className="text-white text-3xl sm:text-4xl font-bold">TarunKumar Chelumalla</h1>
       <p className="text-white  font-bold">I'm Computer Science Student </p>
       <p className="text-white text-1xl py-4 max-w-[700px]">Hi there! Welcome to my Portfolio Site, a technology enthusiast with a passion for building cool things. I have experience working with AngularJS, ReactJS, and NodeJS, and have recently been exploring the exciting world of TensorFlow JS.

I love the feeling of creating something unique and impactful. Whether it's a web app, or something entirely different, I strive to bring creativity and innovation to everything I do. Let's build something amazing!.</p>

<div name='home' className='flex '>
    <div>
         <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF4900] hover:border-[#FF4900]' >
         <Link to="Projects" smooth={true} duration={500} className="">view work</Link>
       
             <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
             </span>

         </button>
         </div>
         
         <div className=''>
          <ul>
              <li className='sm:hidden  px-4 py-3 my-2  flex justify-between ml-8 items-center bg-blue-600 rounded-full hover:scale-125 duration-300'> 
                  <a href='https://www.linkedin.com/in/tarun-kumar-chelumalla/' className='flex justify-between w-full items-center text-gray-300'>
                     <FaLinkedinIn size={20}/>
                  </a>
              </li>
              
         
          </ul>
          </div>
          <div className=''>
          <ul>
              <li className='sm:hidden  px-2 py-3 my-2  mt-0 flex justify-between ml-4 items-center bg-[ #565f69] hover:scale-150 duration-300 '> 
              <a href='https://github.com/Tarunkumarchelumalla' className='flex justify-between w-full items-center text-gray-300'>
                       <FaGithub size={30}/>
                  </a>
              </li>
              
         
          </ul>
          </div>
          <div className=''>
          <ul>
              <li className='sm:hidden  px-4 py-3 my-2  flex justify-between ml-4 items-center bg-[#565f69] rounded-full hover:scale-125 duration-300'> 
              <a href='https://drive.google.com/file/d/1-0iDU44PWETyBIUQ_XA_C9d8bu8eXF17/view?usp=sharing' className='flex justify-between w-full items-center text-gray-300'>
                       <FaBook  size={20}/>
                  </a>
              </li>
              
         
          </ul>
          </div>
      </div>
     </div>
  
    </div>
  )
}
