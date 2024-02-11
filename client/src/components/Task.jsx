import React from 'react'
import { useDispatch } from 'react-redux'

import { updateTask } from '../redux/actions'


const Task = ({task,onDelete}) => {

  const dispatch = useDispatch();

  return (
    <div className='mt-2 flex items-center justify-center'>
        <ul className='mt-4'> 
                <li className='bg-grey border p-5 rounded-md  w-full'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4 '>
                    <span className={`text-white font-bold ${task.completed ? 'line-through': ''}`}>{task.name}</span>
                    <span className={`text-white font-bold ${task.completed  ? 'line-through': ''}`}>{task.time}</span>
                    </div>
                
                <span className='flex items-center space-x-2 pl-8'>
                    <button className={`bg-buttonhover text-white py-1 px-4 rounded-md ${task.completed ? 'hover:bg-hoveryellow': 'hover:bg-hovergreen'}  float-right`} onClick={()=> dispatch(updateTask(task._id))}>{task.completed ? 'Not Done' : 'Done'}</button>
                    <button className={`bg-buttonhover text-white py-1 px-4 rounded-md hover:bg-hoverred float-right`} onClick={()=> onDelete(task._id)}>Delete</button>
                </span>
                </div> 
            </li>  
        </ul>
    </div>
  )
}

export default Task