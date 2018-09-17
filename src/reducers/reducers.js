import { combineReducers } from 'redux';
import todoListReducer from './todoListReducer';

const rootReducer = combineReducers({
    todoList: todoListReducer
});

export default rootReducer;