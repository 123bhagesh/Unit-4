import React, {useReducer} from "react"

const reducer = (state, {type, payload}) =>{
  switch(type){
    case "INCREMENT": {
      return state + payload
    }
  
  case "DECREMENT": {
    return state - payload
  }
  default: {
    return state
  }
  }
}

function Reducer() {
  const [counter, dispatch] = useReducer(reducer, 0)
  return (
    <div >
        Counter: {counter}
        <div>
          <button onClick={() => dispatch({ type: "DECREMENT", payloaad: 1})}>-</button>
          <button onClick={() => dispatch({ type: "INCREMENT", payload: 100})}>+</button>

        </div>

    </div>
  );
}

export default Reducer;
