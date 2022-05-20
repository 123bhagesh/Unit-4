import React from 'react'
import './Todolist.css'

export const TodoList = ({todos}) => {
  return (
    <div className='Todolist'>
      <h2>Todo List</h2>
      <div>
          {todos.map((todo) =>{
              return <div className='list'>{todo}</div> 
          })}
      </div>
    </div>
  )
}
