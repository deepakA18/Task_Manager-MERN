import { configureStore } from '@reduxjs/toolkit';
import tasksReducers from '../redux/reducers/tasksReducers'

export default configureStore({
	reducer: {
		tasks: tasksReducers ,
	},
});