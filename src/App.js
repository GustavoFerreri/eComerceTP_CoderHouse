import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext'

// Se vuelve a Branch Category como base, error masivo al fusionar con master
function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/product/:category' element={<Product />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/detail/:Cod' element={<ItemDetailContainer /> }/>
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>

    </div>
  );
}

export default App;
