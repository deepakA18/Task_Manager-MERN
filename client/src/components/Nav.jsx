import React from 'react'

const Nav = () => {

  return (
   <nav className='bg-grey p-4 shadow-lg'>
    <div className='container mx-auto flex items-center justify-between'>
      <h1 className='text-white text-xl font-bold'>Task Scheduler</h1>
      <div className='font-sans text-lg text-end font-semibold'>
        <div className='space-x-4 pr-8'> 
        <a href="/" className='text-white'>Home</a>
      </div>
      </div>
    </div>
   </nav>
  )
}

export default Nav