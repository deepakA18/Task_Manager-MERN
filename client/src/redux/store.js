import {createStore,applyMiddleware,combineReducers} from 'redux' 
import thunk from 'redux-thunk'
import tasksReducers from './reducers/tasksReducers';

const reducer = combineReducers({
    tasks: tasksReducers,
})

const middleware = [thunk];
const store = createStore(reducer,applyMiddleware(...middleware))

export default store;