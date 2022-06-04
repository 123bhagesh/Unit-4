import React, { useEffect, useState } from 'react'

export const Timer = () => {
    const[timer, setTimer] = useState(0)
    const [value, setValue] = useState("")

    // const addTodo = (xyz) =>{
    //   setTodos([...todos, xyz])
    // }


    useEffect(()=>{

        const id = setInterval(()=>{
            if(timer ==value){
                clearInterval(id)
            }else{
                setTimer(timer + 1 )
            }
            // setTimer(timer-1)
        },1000)
        return () =>{
            //call a api to inform user has logged out
            clearInterval(id)
        }
        
    

    
  },[timer,value])
    return (
    <div> <h1>Timer : {timer}--{value}</h1>

    {/* <button onClick={()=> setTimer((timer)=> timer+1)}>+</button>
    <button onClick={()=> setTimer((timer)=> timer-1)}>-</button> */}
      
      
      <div className='Todoinput'>
      <input type="text" value = {value}
      onChange ={(e) => {
        setValue(e.target.value);
      }}
        />
        {/* <button onClick={() => {
          setValue(value)
        //   setTimer("");
         }}>+</button> */}
    </div>
    </div>
  )
}