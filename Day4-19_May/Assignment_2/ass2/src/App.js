import './App.css';
import Square from './component/Square';
import React, {useState, useEffect } from 'react'

const initialTactoe=["","","","","","","","","",""]

function App() {

  const [tactoe,setTactoe]=useState(initialTactoe);
  const [xchance,setXchance]=useState(false);

const onSquareClicked = (index) =>{
let strings = Array.from(tactoe);
strings[index]=xchance ? "X":"Y"
setTactoe(strings);
setXchance(!xchance);
}

useEffect(()=>{
const winner = checkWinner();

if(winner){
  setTimeout(()=>{
    alert(`Player ! ${winner} has won the Game!`);
    setTactoe(initialTactoe)
  },1000)
 }
}, [tactoe])

const checkWinner = () =>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (tactoe[a] && tactoe[a] === tactoe[b] && tactoe[a] === tactoe[c]) {
      return tactoe[a];
    }
  }
  return null;
}

  return (
    <div className="App-header">
      <h1>React Tic Tac Toe</h1>
      <div className="Row jc-center">
        <Square className="Bottom-right" tactoe={tactoe[0]} onClick={() => onSquareClicked(0)}/>
        <Square className="Bottom-right" tactoe={tactoe[1]} onClick={() => onSquareClicked(1)}/>
        <Square className="B-bottom" tactoe={tactoe[2]} onClick={() => onSquareClicked(2)}/>
      </div>
      <div className="Row jc-center">
        <Square className="Bottom-right" tactoe={tactoe[3]} onClick={() => onSquareClicked(3)}/>
        <Square className="Bottom-right" tactoe={tactoe[4]} onClick={() => onSquareClicked(4)}/>
        <Square className="B-bottom" tactoe={tactoe[5]} onClick={() => onSquareClicked(5)}/>
        </div>
      <div className="Row jc-center">
      <Square className="b-right" tactoe={tactoe[6]} onClick={() => onSquareClicked(6)}/>
      <Square className="b-right" tactoe={tactoe[7]} onClick={() => onSquareClicked(7)}/>
      <Square className="" tactoe={tactoe[8]} onClick={() => onSquareClicked(8)}/>
      </div>
      <button className="clear-button" onClick={()=> setTactoe(initialTactoe)}>Clear Game</button>
      
    </div>
  );
}

export default App;