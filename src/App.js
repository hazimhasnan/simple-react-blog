import './App.css';
import Navbar from './main-components/Navbar';
import Home from './main-components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="content">
      <h1>Hello React. This is app root</h1>
      <Home />
      </header>
    </div>
  );
}

export default App;
