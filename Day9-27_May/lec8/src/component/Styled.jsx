import logo from './logo.svg';
import styled from "styled-components"
import {AppHeader, AppImg, AppStyled, Flexbox} from './App.Styled'
// import './App.css';


function App() {
  return (
    <AppStyled>
      <AppHeader>
        <AppImg src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
          <Flexbox flex-direction="column">
            <div>A</div>
            <div>B</div>


          </Flexbox>
        
      </AppHeader>
    </AppStyled>
  );
}

export default App;
