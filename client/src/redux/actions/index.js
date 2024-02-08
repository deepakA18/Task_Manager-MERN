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