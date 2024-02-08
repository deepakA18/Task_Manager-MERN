
const tasksReducers = (state = [] , action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [action.payload,...state];
  
    default:
      return state;
  }
};

export default tasksReducers