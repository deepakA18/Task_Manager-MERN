
const tasksReducers = (state = [] , action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [action.payload,...state];

    case 'FETCH_TASK': 
    return action.payload;

    case 'DELETE_TASK': 
    return state.filter((task)=> task._id !== action.payload)

    default:
      return state;
  }
};

export default tasksReducers