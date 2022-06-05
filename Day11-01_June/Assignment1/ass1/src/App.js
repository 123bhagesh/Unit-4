// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Navbar } from './component/Navbar';
import { About } from './component/About'
import { Home } from './component/Home'
import { Products } from './component/Products'
import { Product } from './component/Product';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products/*" element={<Products/>}>
              <Route path=":id" element={<Product/>}/>
          </Route>
        </Routes>

    </div>
  );
}

export default App;
