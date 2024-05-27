import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTask, deleteTask,updateTask } from '../redux/actions/index';
import Task from './Task';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasksList = useSelector(state => state.tasks);
  console.log(tasksList)

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleUpdate = (taskId, updatedData) => {
    dispatch(updateTask(taskId, updatedData));
  };

  return (
    <ul>
      {tasksList.map(task => (
        <Task 
          task={task} 
          key={task._id} 
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </ul>
  );
};

export default Tasks;
