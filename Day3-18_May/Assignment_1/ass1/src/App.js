import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar';
import Filters from './component/Filters';
import {Offers} from './component/Offers'
import { Resturants } from './component/Resturants';

import userInfo from './data/userInfo.json'
import offers from './data/offers.json'
import reust from './data/reust.json'
import { useState } from 'react';


const filters  = {
  1:'High to Lost',
  2:'Cost Lost to High', 
  3:'Ratings',
  4:'Delivery Time',
  5:'Relevance'
  
}
function App() {
  
  const [filterBy, setFilterBy] =useState("")
  const [data, setData] = useState(reust)

  const updateFilter = (newFilter) =>{

    console.log(newFilter)
    switch(newFilter){

      case "1":{
        setFilterBy(1)
        data.sort((a,b) => b.costForTwo - a.costForTwo)
        setData([...data])
        break;
      }
      case "2":{
        setFilterBy(2)
        data.sort((a,b) => a.costForTwo - b.costForTwo)
        setData([...data])
        break;
      }
      case "3":{
        setFilterBy(3)
        data.sort((a,b) => b.rating - a.rating)
        setData([...data])
        break;
      }
      default:{
        setData(reust)
        break;
      }

    }
  }

  return (
    <div className="App">
 <Navbar {...userInfo.location}></Navbar>

 <Offers offers={offers}></Offers>
 <section className='near-you'>
   <Filters 
   filters={filters} 
   currentFilterBy={filterBy} 
   updateFilter={updateFilter}></Filters>

   <Resturants reust={data}/>

 </section>

    </div> 
  );
}

export default App;
