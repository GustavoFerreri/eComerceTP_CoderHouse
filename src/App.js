import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import Contact from './components/Contact/Contact';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


// Se vuelve a Branch Category como base, error masivo al fusionar con master
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/all' element={<ItemListConteiner />}/> 
          <Route path='/product/:category' element={<ItemListConteiner />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/detail/:Cod' element={<ItemDetailContainer/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
