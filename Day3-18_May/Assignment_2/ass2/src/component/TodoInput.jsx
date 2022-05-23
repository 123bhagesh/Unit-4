import React from 'react'
import { useState } from 'react'
import './Todoinput.css'

export const TodoInput = ({addTodo}) => {
    const [value, setValue] = useState("")
    // const [todos, setTodos] = useState([])
    
    // const handelDelet =(id)=>{
    //   const newTodo = 
    // }


    return (
      <div className='Todoinput'>
      <input type="text" value = {value}
      onChange ={(e) => {
        setValue(e.target.value);
      }}
        />
        <button onClick={() => {
          // setTodos([...todos, {id: Date.now(), value: value}])
          addTodo(value)
          setValue("");
         }}>
           Add
         </button>
  
  
  </div>
)}

