import React, { useState } from 'react'

import {FaBars, FaTimes,FaLinkedinIn,FaGithub,FaFacebook,FaBook} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi";
import { Link } from 'react-scroll';
export const Navbar = () => {
    const[nav,setNav]=useState(false);
    const handleburger=()=>setNav(!nav);
    const[menu,setMenu]=useState(false);
    const handlemenu=()=>setMenu(!menu);

  return (
    <div className='fixed w-full flex h-[80px] justify-between items-center px-4 bg-black text-white'>
      <div>
        <h1 className='text-[#FF4900] text-2xl md:text-4xl '>Portfolio</h1>
      </div>
   
{/* md means above medium will render */}
          <ul className='hidden md:flex'>
              <li className='hover:border-b-4 border-[#FF4900] duration-200'>
              <Link to="home" smooth={true} duration={500} className="">Home</Link>
       
              </li>
              <li className='hover:border-b-4 border-[#FF4900] duration-200' >
              <Link to="about" smooth={true} duration={500}>About</Link>
              </li>
              <li className='hover:border-b-4 border-[#FF4900] duration-200' >
              <Link to="projects" smooth={true} duration={500}>Projects</Link>
              </li>
              <li className='hover:border-b-4 border-[#FF4900] duration-200'>
              <Link to="skills" smooth={true} duration={500}>Skills</Link>
              </li>
              <li className='hover:border-b-4 border-[#FF4900] duration-200'>
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
              </li>
              </ul>
    
         {/* this is for burger menu */}
     <div onClick={handleburger} className='md:hidden z-10' >
       {!nav ?<FaBars/>:<FaTimes/>}
       </div>
       {/* mobile menu */}
       
      <div className={!nav ?"hidden":'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center '}>
          <ul>
              <li className="py-6  text-4xl hover:border-b-4 border-[#FF4900] duration-200">
              <Link onClick={handleburger}activeClass="active"to="home" smooth={true} duration={500}>Home</Link>
              </li>
              <li className="py-6 text-4xl hover:border-b-4 border-[#FF4900] duration-200">
              <Link onClick={handleburger} activeClass="active"to="about" smooth={true} duration={500}>About</Link>
              </li>
              <li className=' py-6 text-4xl hover:border-b-4 border-[#FF4900] duration-200' >
              <Link  onClick={handleburger} to="projects" smooth={true} duration={500}>Projects</Link>
              </li>
              <li className="py-6 text-4xl hover:border-b-4 border-[#FF4900] duration-200">
              <Link onClick={handleburger} activeClass="active"to="skills" smooth={true} duration={500}>Skills</Link>
              </li>
              <li className="py-6 text-4xl hover:border-b-4 border-[#FF4900] duration-200">
              <Link onClick={handleburger} activeClass="active"to="contact" smooth={true} duration={500}>Contact</Link>
              </li>
              </ul>
      </div>
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
              <li className='w-[160px] h-[68px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-blue-600 duration-300 '> 
                  <a href='https://www.linkedin.com/in/tarun-kumar-chelumalla/' className='flex justify-between w-full items-center text-gray-300'>
                      LinkedIN <FaLinkedinIn size={30}/>
                  </a>
              </li>
              <li className='w-[160px] h-[68px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[ #565f69] duration-300 '> 
                  <a href='https://github.com/Tarunkumarchelumalla' className='flex justify-between w-full items-center text-gray-300'>
                      Github <FaGithub size={30}/>
                  </a>
              </li>
              <li className='w-[160px] h-[68px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#F23C2B] duration-300 '> 
                  <a href='mailto:tarunchelumall@gmail.com' className='flex justify-between w-full items-center text-gray-300'>
                       Mail<HiOutlineMail size={30}/>
                  </a>
              </li>
              <li className='w-[160px] h-[68px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#565f69] duration-300 '> 
                  <a href='https://drive.google.com/file/d/1MMTKihLNJ86CTXwaaFjZze4X-AnU8y_A/view?usp=sharing' className='flex justify-between w-full items-center text-gray-300'>
                       Resume<FaBook size={30}/>
                  </a>
              </li>
          </ul>

      </div>
    </div>
  )
}
