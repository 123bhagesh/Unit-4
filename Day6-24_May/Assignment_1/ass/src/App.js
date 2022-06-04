import logo from './logo.svg';
import './App.css';
import Todos from './component/Todos';
import Todosadd from './component/Todosadd';
function App() {
  return (
    <div className="App">
        <Todosadd/>
        <Todos/>

    </div>
  );
}

export default App;
