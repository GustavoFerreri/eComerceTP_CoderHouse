// import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar/Avatar';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Avatar name='Gustavo' age='41'/>
        <Avatar name='Gabriel' age='18'/>
      </main>
    </div>
  );
}

export default App;
