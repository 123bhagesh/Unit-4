import React, {useState} from 'react'
// import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import './TodoDiv.css'

// const 
// const todo =()=>
const Todo = () => {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState([])
    

  const addTodo = (xyz) =>{
    setTodos([...todos, xyz])
  }
  return (
    <div className='TodoDiv'>
      <h1>Todo Application</h1>
     {/* <TodoInput addTodo={addTodo} /> */}
     <div className='Todoinput'>
      <input type="text" value = {value}
      onChange ={(e) => {
        setValue(e.target.value);
      }}
        />
        <button onClick={() => {
          setTodos([...todos, {id: Date.now(), title: value}])
          addTodo(value)
          setValue("");
         }}>
           +
         </button>
  
  
  </div>
      <TodoList todos ={todos} />


</div>
  )
}

export {Todo}