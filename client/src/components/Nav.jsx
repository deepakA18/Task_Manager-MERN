import React, { useState } from 'react'


const Nav = () => {
const [login, setLogin] = useState(false);

const handleLogin = (e) => {
  if(login)
  {
    setLogin(e.target.value)
  }
}
  return (
   <nav className='bg-grey p-4 shadow-lg'>
    {/* <div className='text-white text-lg font-bold mt-2'>
      Task Manager
    </div> */}
    <div className='container mx-auto flex items-center justify-between'>
      <h1 className='text-white text-xl font-bold'>Task manager</h1>
      <div className='font-sans text-lg text-end font-semibold'>
        <div className='space-x-4 pr-8'> 
        <a href="/" className='text-white'>Home</a>
        <a href="/" className='text-white'>Create Task</a>
        <button type='button' className=' text-white hover:text-hovergrey' onClick={handleLogin} >Sign out</button>
      </div>
      </div>
    </div>
   </nav>
  )
}

export default Nav