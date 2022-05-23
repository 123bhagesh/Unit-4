import React from 'react'
import './Todolist.css'

export const TodoList = ({todos}) => {
  return (
    <div className='Todolist'>
      <h2>Todo List</h2>
      <div>
          {todos.map((item) =>{
              return <div className='list'>{item}</div> 
          })}
      </div>
      
    </div>
  )
}
