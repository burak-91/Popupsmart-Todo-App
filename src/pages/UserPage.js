import React,{useRef,useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
//import {useDispatch} from 'react-redux'
//import { currentUserRedux } from '../store/user/userActions'


const UserPage = () => {
    const userInput = useRef();
    
    const navigate = useNavigate();

    const [currentUser,setCurrentUser] = useState('')
    useEffect(() =>{
        userInput.current.focus()
    },[])

  const handleUser = async () =>{

      if(!currentUser) return;
      localStorage.setItem("user", JSON.stringify(currentUser))
      navigate('/todo')
  }
 
  
  return (
    <div className='userContainer'>
      <h4 className='userTitle'>Please enter your username</h4>
      <div className='userForm'>
        <input type="text" className='todo-input' ref={userInput} value={currentUser} onChange={(e) => setCurrentUser(e.target.value)}/>
        <button className='userButton' onClick={() =>handleUser()}>Go to Todo Page</button>
      </div>
    </div>
  )
}

export default UserPage