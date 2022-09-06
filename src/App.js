import TodoPage from './pages/TodoPage'
import UserPage from './pages/UserPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserPage/>}/>
        <Route path='/todo' element={<TodoPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App