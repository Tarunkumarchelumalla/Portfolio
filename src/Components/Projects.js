import React, { useState } from 'react'
import port from "../assests/porfolio.PNG"
import { Data } from './ProjectsData'
const Projects = () => {
  const [ProjectsData,setProjectsData] = useState()
  return (
    <div name="projects" className=' w-full h-screen  bg-black text-white'>
      
      <div className='max-w-[1000px] flex flex-col mx-auto p-4 justify-center w-full h-full'>
        
        <div className=''>
          <p className='border-b-4 inline border-[#FF4900] text-4xl '>Projects</p>
          <p className='py-4'>// My work </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>
           
        {Data.map((curr)=>(
          <a href={curr.link}>
            
            <div  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             
              <img className="w-50 mx-auto border-2 hover:border-[#FF4900] duration-300 " src={curr.imageSrc} />
              <p className='py-4'>{curr.projectTitle}</p>
              <p className='py-4 text-sm'>{curr.techStack} </p>
           
            </div>
         
          </a>))
}          <div  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
          
          <img className="w-50 mx-auto border-2 hover:border-[#FF4900] duration-300 " src={port} />
          <p className='py-4'>Portfolio</p>
          <p className='py-4  text-sm'>Built Using Tailwind css and Reactjs</p>
       
        </div>
         
        </div>
      
      </div>
  
  </div>
  )
}

export default Projects