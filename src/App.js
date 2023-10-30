import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/Signup';
import Analytics from './pages/Analytics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/analytics' element={<Analytics/>} exact/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>    
        <Route path='/signup' element={<Signup/> }/>    
      </Routes>
    </Router>
  );
}

export default App;
