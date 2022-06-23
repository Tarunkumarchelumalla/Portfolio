import React from 'react'
import html from "../assests/html.png"
import Capture from "../assests/Capture.PNG"
import port from "../assests/porfolio.PNG"
import ecco from "../assests/ecoomerce.PNG"
import under from "../assests/under.gif"
const Projects = () => {
  return (
    <div name="Projects" className=' w-full h-screen  bg-black text-white'>
        <div className='max-w-[1000px] flex flex-col mx-auto p-4 justify-center w-full h-full'>
      <div className=''>
        
        <p className='border-b-4 inline border-[#FF4900] text-4xl '>Projects</p>
        <p className='py-4'>// My work to</p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>
        <div   className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <a href='https://hellochatbytarun.netlify.app/'><img className="w-50 mx-auto  border-2 hover:border-[#FF4900] duration-300" src={Capture} />
          <p className='py-4'>Chat Application</p></a>
           
        </div>
        <div  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <a href='https://greenify-13813.web.app/'> <img className="w-50 mx-auto border-2 hover:border-[#FF4900] duration-300" src={ecco} />
           <p className='py-4'>Ecommerce</p></a>
        </div>
        <div  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
           <img className="w-50 mx-auto border-2 hover:border-[#FF4900] duration-300 " src={port} />
           <p className='py-4'>Portfolio</p>
        </div>
        <div  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
           <img className="w-20 mx-auto border-2 hover:border-[#FF4900] duration-300 " src={under} />
           <p className='py-10'> Future works</p>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default Projects