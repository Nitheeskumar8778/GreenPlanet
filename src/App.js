
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './about';
import Home from './home';
import './App.css';
import Plants from './Plants'
import Ricecrop from './ricecrop';
// import Post from './post'; 
function App() {
  return (
    
   <BrowserRouter>
  
  
  
   <Routes>
  
    
    <Route path="/about" element={<About/>} />
    <Route path="/" element={<Home/>} /> 
    <Route path="/plants" element={<Plants/>} /> 
    <Route path="/ricecrop" element={<Ricecrop/>} /> 
    </Routes>
  </BrowserRouter>
      
    
  );
}

export default App;
