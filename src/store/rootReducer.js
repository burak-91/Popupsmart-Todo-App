import {combineReducers} from 'redux'
import {todoReducer} from './todo/todoReducer'
//import { userReducer } from './user/userReducer'


export const rootReducer = combineReducers({
    todo: todoReducer,
    //user: userReducer
})

