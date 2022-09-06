import React,{useState,useRef,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import TodoList from '../components/TodoList'
import { getTodos } from '../store/todo/todoActions';
import { postTodo } from '../store/todo/todoActions';

const TodoPage = () => {
    const [content,setContent] = useState("");
    const dispatch = useDispatch();
    const ref = useRef()
    const user = JSON.parse(localStorage.getItem("user"))


    useEffect(()  => {
      dispatch(getTodos())
    },[dispatch])

    useEffect(() =>{
      ref.current.focus()
    },[])
    
    
  
    const handleChange = (e) =>{
      setContent(e.target.value)
    }
    const handleSubmit = async (e) =>{
      e.preventDefault()
  
      if(!content  || content.length<3 ) return;
  
      const newTodo = {
        id: Math.floor(Math.random()* 1000),
        content,
        isCompleted:false
      };
     await dispatch(postTodo(newTodo))
      setContent("")
    }

    return (  
      <div className='container'>
        <h3 className='user'>Username: {user}</h3>
        <form onSubmit={handleSubmit} className="todo-form">
          <input type="text" className="todo-input" onChange={handleChange} value={content} ref={ref}/>
          <button type='submit' className='todo-button'>Add Todo</button>
        </form>
     
      <TodoList/>
  
      </div>
    )
}

export default TodoPage