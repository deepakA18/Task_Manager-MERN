import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { addTask } from '../redux/actions/index';


const Card = () => {

  const [name,setName] = useState('');
  const [completed,setCompleted] = useState(false);
  const [time,setTime] = useState('');

  const newTask = {
    name,
    completed,
    time,
  }

  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setName(e.target.value);
  }
  const handleChangeStatus = (e) => {
    setCompleted(e.target.value === 'true');
  }
  const handleChangeTime = (e) => {
    setTime(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(newTask))
    .then(() => {
      setName('');
      setCompleted(false);
      setTime('');
    })
    .catch((error) => {
      console.error('Error adding task:', error);
    });
  }

  return (
    <div className='flex items-center justify-center pt-10'>
      <div className='bg-grey p-8 rounded-md shadow-md w-96'> 
        <h2 className='font-bold text-xl mb-4 text-white text-center'>Begin Your Day!</h2>
        
        <div className='mb-4'>
          <label htmlFor="taskname" className='block text-sm font-medium text-white'>Enter the Task</label>
          <input type="text" id="taskname" className='p-2 border rounded-md w-full' value={name} onChange={handleChangeName}/>
        </div>

        <div className='mb-4'>
          <label htmlFor="completed" className='block text-sm font-medium text-white'>Completed</label>
          <select name="completed" id="completed" className='mt-1 p-2 border rounded-md w-full' value={completed ? 'true' : 'false'} onChange={handleChangeStatus} >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className='mb-4'>
          <label htmlFor="time" className='block text-sm font-medium text-white'>Schedule</label>
          <input type='datetime-local'  className='mt-1 p-2 border rounded-md w-ful'value={time} onChange={handleChangeTime} />
        </div>
        <div className='pt-4'>
        <button type='submit' className='bg-buttonhover text-white py-2 px-8 mx-auto rounded-md font-semibold hover:bg-blue w-full' onClick={handleSubmit}>Add Task</button>
        </div>
        
      </div>
    </div>

  )
}

export default Card