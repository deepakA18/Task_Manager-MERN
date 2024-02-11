import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { getTask,deleteTask } from '../redux/actions/index'
import Task from './Task'


const Tasks = () => {
 
    const dispatch = useDispatch();
    const tasksList = useSelector(state => state.tasks)

    useEffect(()=> {
        dispatch(getTask());
    },[dispatch])

    //deleteTask
    const handleDelete = (taskId) => {
      dispatch(deleteTask(taskId));
    }

  return (
    <ul>
        {
            tasksList.map((task)=> (
              <Task 
              task={task}
              key={task._id}
              onDelete={handleDelete}/>
            ))
        }
    </ul>
  )
}

export default Tasks