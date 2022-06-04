
import React from "react"; 
import axios from "axios";
import "../App.css";
import { useEffect, useState } from 'react';

function Todos() {

  const [todos, setTodos] = useState([])
  const [page, setPage]= useState(1)
  const [limit, setLimit] = useState(5)
  const [totalCount, setTotalCount]= useState(0)
  
  useEffect(() =>{
      axios.get(`http://localhost:8070/todos?_page=${page}&_limit=${limit}`)
      .then((r) => {
        setTodos(r.data);
        setTotalCount(Number(r.headers["x-total-count"]))
      });
    
  },[page,limit])

  useEffect(()=>{
    fetch("http://localhost:8070/todos")
    .then((r) =>r.json())
    .then((d) =>{
      setTodos(d);
    })
},[])

  return (
    <div className="App">
       
       <button disabled={page <= 1} onClick={() => { 
        if(page >1){
          setPage(page - 1);
        }
        }} >{" "}
         {`<`} {" "}
         </button>
         <input type="number" value={limit} min={0}
          max={totalCount}
          onChange={({target}) => setLimit(Number(target.value))} />
         <select onChange={(e) => setLimit(Number(e.target.value))}>
           <option value={5}>5</option>
           <option value={10}>10</option>
           <option value={20}>20</option>
         </select>
         
         <button
         disabled={totalCount < page * 5}
         onClick={() => setPage(page + 1)}> 
         {">"}</button>
 
        {todos.map((todo) =>(
          <div key={todo.id}> 
          {todo.id} {`:`} {todo.text}
          </div>
        ))}

    </div>
  );
}

export default Todos;
