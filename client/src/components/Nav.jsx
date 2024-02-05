import React from 'react'

const Nav = () => {
  return (
   <nav className='bg-gray-700 p-4 shadow-lg'>
    <div className='container mx-auto flex-intial w-full '>
      <div className='font-sans text-lg text-end font-semibold'>
        <div className='space-x-4 pr-8'> 
        <a href="/" className='text-white'>Home</a>
        <a href="/" className='text-white'>Create Task</a>
        <button type='button' className=' text-white hover:text-gray-400' >Sign out</button>
      </div>
      </div>
    </div>
   </nav>
  )
}

export default Nav