import { CREATE,UPDATE,DELETE,FETCH_ALL,COMPLETE } from "./actionTypes";
import * as api from '../../api/index'


export const getTodos = () =>async (dispatch) =>{
    try {
        const {data} = await api.fetchTodos();
        dispatch({type:FETCH_ALL,payload:data})
    } catch (error) {
        console.log(error.message)
    }  
}

export const postTodo = (todo) => async (dispatch) =>{
    try {
        const {data} = await api.createTodo(todo);
        dispatch({type:CREATE, payload:data})
        dispatch(getTodos())
    } catch (error) {
        console.log(error.message)
    }
}

export const updateTodo = (todoId,newContent) => async (dispatch) =>{
    try {
        const {data} = await api.updateTodo(todoId,newContent);
        dispatch({type:UPDATE, payload:data})
        dispatch(getTodos())
    } catch (error) {
        console.log(error);
    }    
}

export const deleteTodo = (todo) => async( dispatch) =>{
    try {
        await api.deleteTodo(todo);
        dispatch({type: DELETE, payload: todo})
        dispatch(getTodos())
    } catch (error) {
        console.log(error.message)
    }
}

export const completeTodo = (todoId,isCompleted) => async (dispatch) =>{
    try {
        const {data} = await api.updateTodo(todoId,isCompleted);
        dispatch({type:COMPLETE, payload:data})
        dispatch(getTodos())
    } catch (error) {
        console.log(error);
    }    
}

