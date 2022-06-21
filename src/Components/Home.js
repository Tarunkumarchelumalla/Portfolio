import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const Home = () => {
  return (
    <div name="home"className='bg-black h-screen w-full h-screen'>
     <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
     <p className="text-[#FF4900]
       "> Hi,my name is </p>
       <h1 className="text-white text-3xl sm:text-4xl font-bold">TarunKumar Chelumalla</h1>
       <h2 className="text-white text-2xl sm:text-4xl font-bold">I'm Computer Science Student </h2>
       <p className="text-white text-1xl py-4 max-w-[700px]">A meticulous and organized

individual seeking an Entry-
level position in the field of

Software Development.
Having a Solid knowledge in
writing well-designed and
testable code.</p>

<div>
         <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF4900] hover:border-[#FF4900]' >
             View work
             <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
             </span>
         </button>
         </div>
     </div>
  
    </div>
  )
}
