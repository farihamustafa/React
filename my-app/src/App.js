import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Guestlayout from './layout/Guestlayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Guestlayout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </Guestlayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
