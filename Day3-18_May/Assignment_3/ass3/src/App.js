import logo from './logo.svg';
import './App.css';
import { Card } from './component/Card';
// const d= new Date();
// const curDate= d.getTime()

function App() {
  let info =[
    { 
    bgcolor:"amazonCol",
    date:"22/05/2022", 
    logo:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" ,
    title:"Case Study", 
    compTitle:"Amazon Gift",
    pay:"Pay",
    mode:"Destop - Mobile"},

    {
    bgcolor:"amazonCol", 
    date:"22/05/2022", 
    logo:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" ,
    title:"Case Study", 
    compTitle:"Amazon Gift",
    pay:"Pay",
    mode:"Destop - Mobile"},

    {
    bgcolor:"appleCol", 
    date:"22 May 2022", 
    logo:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" ,
    title:"Case Study", 
    compTitle:"Apple Gift",
    pay:"Payment",
    mode:"MacOS - Mobile"}

  ]
  
  return (
    <div className="App">
      {info.map((user) => (
        <div>
      <Card {...user} />


        </div>
    )) }
    </div>
  );
}

export default App;
