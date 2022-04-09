import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import Contact from './components/Contact/Contact';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


// Se vuelve a Branch Category como base, error masivo al fusionar con master
function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product/:category' element={<Product addToCart={setCart} />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/detail/:Cod' element={<ItemDetailContainer addToCart={setCart}/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
