import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Body } from './components/Body';
import { CartProvider } from './context/CartContext';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';


function App() {
  const {isLight} = useContext(ThemeContext)
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      <CartProvider>
        <Navbar/>
        <Body/>
      </CartProvider>

    </div>
  );
}

export default App;
