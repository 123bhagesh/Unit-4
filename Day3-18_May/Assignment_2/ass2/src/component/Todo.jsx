import React, {useState} from 'react'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import './TodoDiv.css'

// const 
// const todo =()=>
const Todo = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (xyz) =>{
    setTodos([...todos, xyz])
  }
  return (
    <div className='TodoDiv'>
      <h1>Todo Application</h1>
     <TodoInput addTodo={addTodo} />
      <TodoList todos ={todos} />
        {/* {todos.map((todo) =>{
          return <li>{todo}</li>
        })}
      </TodoList> */}

</div>
  )
}

export {Todo}