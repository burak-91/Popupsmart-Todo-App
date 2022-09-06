import React from 'react'
import {useSelector} from 'react-redux'
import {todosSelector} from '../store/todo/todoSelector'
import Todo from './Todo'

const TodoList = () => {
    const {todos} = useSelector(todosSelector);
   

  return (
    <div className='todo-list'>
      {
        todos && todos.map((todo) =>(
          <Todo key={todo.id} todo={todo}/>
        ))
      }
    </div>
  )
}

export default TodoList