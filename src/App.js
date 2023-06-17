import logo from './logo.svg';
import Contact from './components/Contact';
import Home from './components/Home';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
          <Route path='/' element={<Home/>}> 
      </Route>
        <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
