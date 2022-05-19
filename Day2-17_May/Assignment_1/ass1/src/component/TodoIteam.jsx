import React from 'react'
// import { useState } from 'react';

// export const TodoIteam = ({todo}) => {
//   const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

//   return (
//     <div key ={todo.id}>TodoIteam
    
//     <input type="checkbox" 
//     checked ={isCompleted}
//     onChange = {(e) =>{
//     }}/>
//     <div>{todo.value}</div>
//     </div>
//   )
// }
const TodoIteam = ({value}) => {
  return <li>{value}</li>
}
export default TodoIteam;
