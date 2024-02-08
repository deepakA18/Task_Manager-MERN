
const tasksReducers = (state = [] , action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [action.payload,...state];

    case 'FETCH_TASK': 
    return action.payload;

    default:
      return state;
  }
};

export default tasksReducers