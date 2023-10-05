import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Landing from './pages/landingPage';
import Home from './pages/home';

function App() {
  const location = useLocation();

  
  return (
    <div className="App">
       {location.pathname !== '/' && <Navbar />}
       
       <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
       </Routes>
    </div>
  );
}

export default App;
