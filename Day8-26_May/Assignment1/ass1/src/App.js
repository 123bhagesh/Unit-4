import logo from './logo.svg';
import './App.css';
import { Timer } from './component/Timer';
import { Stopwatch } from './component/Stopwatch';
function App() {
  return (
    <div className="App">

      <div><Timer/></div>
      <div><Stopwatch/></div>
    </div>
  );
}

export default App;
