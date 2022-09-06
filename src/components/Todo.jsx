import React, { useState } from 'react'
import { GrFormClose, GrFormEdit, GrFormCheckmark } from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { updateTodo, deleteTodo,completeTodo } from '../store/todo/todoActions'
import clsx from 'clsx'



const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState(todo.content)


  const handleRemove = async (todoId) => {
    await dispatch(deleteTodo(todoId))
  }
  const handleCompleteTodo = async (todo) => {
    const {id,isCompleted} = todo
    const updateExistingTodo= {
      id:id,
      isCompleted: !isCompleted
    }
    
    await dispatch(completeTodo(id,updateExistingTodo))
  }

  const handleUpdate = async ({todoId,newContent}) => {
    const updateExistingTodo= {
      id:todoId,
      content: newContent,
      isCompleted:false
    }
    await dispatch(updateTodo(todoId,updateExistingTodo))
    setContent('');
    setEdit(false);
  }
 
  const rowStyle = clsx({
    ['todo-row']: true,
    ['completed']: todo.isCompleted,
  })

  return (
    <div className={rowStyle}>
      <div onClick={() =>(edit? null : handleCompleteTodo(todo))}>
        {edit ?<input className='todo-input-edit' type="text" value={content} onChange={e => setContent(e.target.value)} />: todo.content}
      </div>
      {edit ?
        <div className='todo-icons'>
          <GrFormCheckmark className='todo-icon' onClick={() =>handleUpdate({todoId:todo.id, newContent:content})}  />
          <GrFormClose className='todo-icon' onClick={() => setEdit(false)} />
        </div>
        :
        <div className='todo-icons'>
          <GrFormClose className='todo-icon' onClick={() => handleRemove(todo.id)} />
          <GrFormEdit className='todo-icon' onClick={() =>setEdit(true)} />
        </div>}
    </div>
  )
}

export default Todo


