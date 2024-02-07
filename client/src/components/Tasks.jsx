import React from 'react'

const Tasks = () => {
  return (
    <div className='mt-4 flex items-center justify-center'>
        <ul>
            <li className='bg-grey border p-5 rounded-md mb-4 w-full'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4'>
                    <p className='text-white font-bold'>TaskName</p>
                    <p className='text-white font-bold'>Status</p>
                    <p className='text-white font-bold '>Time</p>
                    </div>
                
                <div className='flex items-center space-x-2 pl-8'>
                    <button className='bg-buttonhover text-white py-1 px-4 rounded-md hover:bg-hovergreen'>Edit</button>
                    <button className='bg-buttonhover text-white py-1 px-4 rounded-md hover:bg-hoverred'>Delete</button>
                </div>
                </div>
                
            </li>
        </ul>
    </div>
  )
}

export default Tasks