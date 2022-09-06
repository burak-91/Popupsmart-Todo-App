import axios from 'axios';

const url = 'https://630f260e498924524a86d4ca.mockapi.io/todos'

export const fetchTodos = () => axios.get(url);
export const createTodo = (newTodo) => axios.post(url,newTodo)
export const updateTodo = (id,updateTodo) => axios.put(`${url}/${id}`,updateTodo)
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);