import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ParallaxPages from './pages/ParallaxPages';
import CustomModal from './components/CustomModal'

function App() {


return (
  <div>     
    <Routes>
      <Route exact path="/"  element={<ParallaxPages />} />
      <Route path="/contacMe" element={<CustomModal />} />
    </Routes>      
  </div>
);
}

export default App;