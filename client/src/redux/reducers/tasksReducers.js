
const tasksReducers = (state = [] , action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [action.payload,...state];

    case 'FETCH_TASK': 
    return action.payload;

    case 'UPDATE_TASK': 
    return state.map((task)=> (
      task._id === action.payload._id ? {...task, completed: !task.completed} : task
    ))

    case 'DELETE_TASK': 
    return state.filter((task)=> task._id !== action.payload)

    default:
      return state;
  }
};

export default tasksReducers