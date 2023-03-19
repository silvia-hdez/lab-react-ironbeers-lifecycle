import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './screens/Home/Home';
import Beers from './screens/Beers/Beers.jsx'
import NewBeer from './screens/NewBeer/NewBeer';
import RandomBeer from './screens/RandomBeer/RandomBeer';



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/beers' element={<Beers />}/>
      <Route path='/random-beers' element={<RandomBeer />}/>
      <Route path='/new-beer' element={<NewBeer />}/>
      
    </Routes>
    
    </div>
  );
}

export default App;
