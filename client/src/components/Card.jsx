import React from 'react'

const Card = () => {
  return (
    <div className='flex items-center justify-center pt-10'>
      <div className='bg-grey p-8 rounded-md shadow-md w-96'> 
        <h2 className='font-bold text-xl mb-4 text-white text-center'>Begin Your Day!</h2>

        <div className='mb-4'>
          <label htmlFor="taskname" className='block text-sm font-medium text-white'>Enter the Task</label>
          <input type="text" id="taskname" className='p-2 border rounded-md w-full' />
        </div>

        <div className='mb-4'>
          <label htmlFor="completed" className='block text-sm font-medium text-white'>Completed</label>
          <select name="completed" id="completed" className='mt-1 p-2 border rounded-md w-full'>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className='mb-4'>
          <label htmlFor="time" className='block text-sm font-medium text-white'>Schedule</label>
          <input type='datetime-local'  className='mt-1 p-2 border rounded-md w-ful' />
        </div>

        <button type='submit' className='bg-buttonhover text-white p-2 border rounded-md font-semibold hover:bg-blue'>Create Task</button>
      </div>
    </div>

  )
}

export default Card