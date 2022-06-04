import React, { useEffect } from 'react'
import { useState } from 'react'
const Todosadd = () => {
    // promise  404error means wrong url
    const [newTodo,setNewTodo]=useState('');
    const [todos,setTodos] = useState([]);
    // fetch("http://localhost:8080/todos")
    // .then((r) =>r.json())
    // .then((d) =>{
    //   setTodos(d);
    // })
    const saveInfo =() =>{
// call api to save info in backend 
fetch("http://localhost:8070/todos",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify({
        text:newTodo,
        isCompleted:false,
    }),

}) 
.then((r) =>r.json())
.then((d) =>{
    setTodos([...todos,d]);
    // todos.push(d);
    // setTodos(todos)
  setNewTodo("");
})
    }
    useEffect(()=>{

        fetch("http://localhost:8070/todos")
        .then((r) =>r.json())
        .then((d) =>{
          setTodos(d);
        })
    },[])
    // manadatory to pass the second param as [] . 
  return (
    <div><h2>Add Todos</h2>
        <div>
            <div>

            <input style={{padding:"5px",fontSize:"18px"}} value={newTodo} 
            onChange={({target})=>setNewTodo(target.value)}/>
          <button style={{background:"tomato",color:"white",padding:"5px 20px", cursor:"pointer",fontSize:"18px"}} onClick={saveInfo}>Save</button>
            </div>
            {/* {todos.map((todo) => (
            <div key={todo.id}>{todo.text}</div>
            ))} */}
        </div>
    </div>
  )
}

export default Todosadd