import logo from './logo.svg';
import './App.css';
import Categories from './Components/categories';
import Videos from './Components/videos';
import Navbar from './Components/navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Categories/>
    <Videos/>
    </div>
  );
}

export default App;
