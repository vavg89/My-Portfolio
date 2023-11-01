import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ParallaxPages from './pages/ParallaxPages';

function App() {


return (
  <div>     
    <Routes>
      <Route exact path="/"  element={<ParallaxPages />} />
    </Routes>      
  </div>
);
}

export default App;