import React from 'react'
import html from "../assests/html.png"
import Capture from "../assests/Capture.PNG"
import port from "../assests/porfolio.PNG"
import ecco from "../assests/ecoomerce.PNG"
import shop from "../assests/shop.PNG"
import image from "../assests/imageClassifier.jpeg"
const Projects = () => {
  return (
    <div name="projects" className=' w-full h-screen  bg-black text-white'>
      
      <div className='max-w-[1000px] flex flex-col mx-auto p-4 justify-center w-full h-full'>
        
        <div className=''>
         
          <p className='border-b-4 inline border-[#FF4900] text-4xl '>Projects</p>
          <p className='py-4'>// My work </p>
        
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>
           
          <a href='https://hellochatbytarun.netlify.app/'> 
            
            <div   className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className="w-50 mx-auto  border-2 hover:border-[#FF4900] duration-300" src={Capture} />
              <p className='py-4'>Chat Application</p>
              <p className='py-4  text-sm'>Built using HTML,CSS,JS and Database as Firebase</p>
            </div>
        
          </a>
          <a href='https://greenify-13813.web.app/'>
            
            <div  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             
             <img className="w-50 mx-auto border-2 hover:border-[#FF4900] duration-300" src={ecco} />
             <p className='py-4'>Ecommerce website</p>
             <p className='py-4  text-sm'>Built using react js and Firebase as database</p>
           
            </div>
          
          </a>
          
          <div  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
          
            <img className="w-50 mx-auto border-2 hover:border-[#FF4900] duration-300 " src={port} />
            <p className='py-4'>Portfolio</p>
            <p className='py-4  text-sm'>Built Using Tailwind css and Reactjs</p>
         
          </div>
         
          <a href='https://react-ecommerce-be808.web.app/'>
            
            <div  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             
              <img className="w-50 mx-auto border-2 hover:border-[#FF4900] duration-300 " src={shop} />
              <p className='py-4'> Shop here </p>
              <p className='py-4 text-sm'>Built using reactjs,Tailwind css,MUI,Firebase as database and Rapid api</p>
           
            </div>
         
          </a>
          <a href='https://fake-book-321d1.web.app/'>
            
            <div  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             
              <img className="w-50 mx-auto border-2 hover:border-[#FF4900] duration-300 " src={image} />
              <p className='py-4'> Image Clasifier</p>
              <p className='py-4 text-sm'>Built using reactjs,TensorFlow js COCOSSD model</p>
           
            </div>
         
          </a>
        </div>
      
      </div>
  
  </div>
  )
}

export default Projects