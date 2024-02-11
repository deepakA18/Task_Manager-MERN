import React from 'react'


const Task = ({task,onDelete}) => {

  return (
    <div className='mt-2 flex items-center justify-center'>
        <ul className='mt-4'> 
                <li className='bg-grey border p-5 rounded-md  w-full'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4 '>
                    <p className='text-white font-bold'>{task.name}</p>
                    <p className='text-white font-bold'>{task.completed}</p>
                    <p className='text-white font-bold '>{task.time}</p>
                  
                    </div>
                
                <div className='flex items-center space-x-2 pl-8'>
                    <button className='bg-buttonhover text-white py-1 px-4 rounded-md hover:bg-hovergreen'>Edit</button>
                    <button className='bg-buttonhover text-white py-1 px-4 rounded-md hover:bg-hoverred' onClick={()=> onDelete(task._id)}>Delete</button>
                </div>
                </div> 
            </li>  
        </ul>
    </div>
  )
}

export default Task