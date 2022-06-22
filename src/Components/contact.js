
import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-black flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/3d2a8496-0e38-42c8-8531-88d7bbbab050" className='flex flex-col max-w-[600px] w-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF4900] text-white'>Contact</p>
                <p className='text-white py-4'>// Submit the form this thing works i will be notified</p>
            </div>
            <input className='bg-white p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email' />
            <textarea className='bg-white p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#FF4900] hover:border-[#FF4900] px-4 py-4 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact