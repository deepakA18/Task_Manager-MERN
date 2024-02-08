import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getTask } from '../redux/actions/index'

const Tasks = () => {
 
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks)

    useEffect(()=> {
        dispatch(getTask());
    },[dispatch])

    
  useEffect(() => {
    console.log('Fetched tasks:', tasks);
  }, [tasks]);

  return (
    <ul>
        {
            tasks.map((task) => (
                <li>{task.name}</li>
            ))

        }
    </ul>
    // <div className='mt-4 flex items-center justify-center'>
    //     <ul>
    //         {tasks.data.map((task)=> (
    //             <div key={task._id}>
    //             <li className='bg-grey border p-5 rounded-md mb-4 w-full'>
    //             <div className='flex items-center justify-between'>
    //                 <div className='flex items-center space-x-4'>
    //                 <p className='text-white font-bold'>{task.name}</p>
    //                 <p className='text-white font-bold'>{task.completed}</p>
    //                 <p className='text-white font-bold '>{task.time}</p>
    //                 </div>
                
    //             <div className='flex items-center space-x-2 pl-8'>
    //                 <button className='bg-buttonhover text-white py-1 px-4 rounded-md hover:bg-hovergreen'>Edit</button>
    //                 <button className='bg-buttonhover text-white py-1 px-4 rounded-md hover:bg-hoverred'>Delete</button>
    //             </div>
    //             </div>
                
    //         </li>
    //         </div>
    //         ))}
            
    //     </ul>
    // </div>
    
  )
}

export default Tasks