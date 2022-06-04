import React, { useEffect, useRef, useState } from 'react'

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
console.log(msToTime(300000))
export const Stopwatch = () => {
    // const[timerId, setTimerId] = useState(null)
    const timerId= useRef(null)
    const[watch, setWatch] = useState(1000)

   const start = () =>{
       if(!timerId.current){
       let id = setInterval(()=>{
           setWatch((prev) => prev + 100)
       },100)
       timerId.current = id;
    }
   }
   const pause = () =>{
       clearInterval(timerId.current)
       timerId.current =null;
   }
   const reset =() =>{
       clearInterval(timerId.current)
       setWatch(0)
       timerId.current =null

   }
useEffect(()=>{
  return reset
},[])

  return (
    <div>
        <h1>Stopwatch:</h1>
          <h1>{msToTime(watch)}</h1>
        <div>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={reset}>Reset</button>


        </div>

    </div>
  )
}
