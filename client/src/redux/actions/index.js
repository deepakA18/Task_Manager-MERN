import axios from 'axios';


const URL = 'http://localhost:5000'

export const addTask = (data) => async(dispatch) => {
    try {
      const res = await axios.post(`${URL}/addtask`,data)
      dispatch({type:'ADD_TASK' ,payload: res.data})
    } catch (error) {
        console.log("Error calling API",error)
    }
   
}

export const getTask = () => async (dispatch)=> {
    try {
      const res = await axios.get(`${URL}/gettasks`);
      dispatch({type: 'FETCH_TASK', payload: res.data})
    } catch (error) {
      console.log("Error Fetching Tasks", error)
    }
}

export const updateTask = (taskId) => async (dispatch) => {
  try {
    const res = await axios.patch(`${URL}/updatetask/${taskId}`)
    dispatch({type: 'UPDATE_TASK', payload: res.data})
  } catch (error) {
    
  }
}

export const deleteTask = (taskId) => async(dispatch) => {
  try {
    dispatch({type: 'DELETE_TASK', payload: taskId})
  } catch (error) {
    console.log(error);
  }
}