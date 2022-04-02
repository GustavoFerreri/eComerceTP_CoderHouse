import './App.css';
// Se retira importacion del componente para agregar el contenedor de items
// import Avatar from './components/Avatar/Avatar';
// Se tuvo que agregar import React from 'react'; en cada uno de los elementos
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import Contact from './components/Contact/Contact';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/product' element={<ItemListConteiner />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/detail/:Cod' element={<ItemDetailContainer/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
