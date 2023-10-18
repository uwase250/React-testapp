import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>    
      </Routes>
    </Router>
  );
}

export default App;
