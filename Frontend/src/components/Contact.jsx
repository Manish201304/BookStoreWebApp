import React from 'react'
import Navbar from './Navbar'

function Contact() {
  return (
    <>
    <Navbar/>
    <div className='flex items-center justify-center h-screen'>
        <div className='border p-6 rounded-md shadow-lg'>
          <span className='text-black text-3xl font-bold dark:text-white'>Contacts Us</span>
          <div className='mt-4'>
            Name
            <br />
            <input type="text" className='w-96 h-8 p-2 border outline-none dark:bg-black  dark:text-white'  placeholder='Enter your name' />
          </div>
          <div className='mt-4'>
            Email
            <br />
            <input  className='border w-96 h-8 p-2 outline-none dark:bg-black dark:text-white'  type="email" placeholder='Enter your email' />
          </div>
          <div className='mt-4'>
            Message
            <br />
            <textarea className="border w-full h-auto p-2 outline-none dark:bg-black dark:text-white" placeholder="Message"></textarea>
          </div>
            <button type='submit' className='text-white bg-blue-500 py-2 px-3 border rounded-md mt-2 dark:border-white'>Submit</button>
        </div>
    </div>
    </>
  )
}

export default Contact