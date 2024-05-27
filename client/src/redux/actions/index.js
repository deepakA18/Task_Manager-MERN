import axios from 'axios';

const URL = 'http://localhost:5000';

export const addTask = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${URL}/tasks`, data);
    console.log(res.data)
    dispatch({ type: 'ADD_TASK', payload: res.data.task });
    
  } catch (error) {
    console.log("Error calling API", error);
  }
};

export const getTask = () => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/tasks`);
    dispatch({ type: 'FETCH_TASK', payload: res.data });
  } catch (error) {
    console.log("Error Fetching Tasks", error);
  }
};

export const getSingleTask = (taskId) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/tasks/${taskId}`);
    dispatch({ type: 'GET_TASK', payload: res.data });
  } catch (error) {
    console.log("Error Fetching Tasks", error);
  }
};

export const updateTask = (taskId,updatedData) => async (dispatch) => {
  try {
    const res = await axios.patch(`${URL}/tasks/${taskId}`,updatedData);
    dispatch({ type: 'UPDATE_TASK', payload: res.data.task });
  } catch (error) {
    console.log("Error updating task", error);
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await axios.delete(`${URL}/tasks/${taskId}`);
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  } catch (error) {
    console.log("Error deleting task", error);
  }
};
