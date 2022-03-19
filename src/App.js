import './App.css';
// Se retira importacion del componente para agregar el contenedor de items
// import Avatar from './components/Avatar/Avatar';
import Navbar from './components/Navbar/Navbar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <ItemListConteiner />
      </main>
    </div>
  );
}

export default App;
