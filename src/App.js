import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ParallaxPages from './pages/ParallaxPages';
import CustomModal from './components/CustomModal'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC78MIulukUTjWnGXo-ff_PtU_Y4Wc8ah4",
  authDomain: "portafolio-a1509.firebaseapp.com",
  projectId: "portafolio-a1509",
  storageBucket: "portafolio-a1509.appspot.com",
  messagingSenderId: "885522681271",
  appId: "1:885522681271:web:63094b8721e3d562c06c32",
  measurementId: "G-TYZ7MZRH38"
};


function App() {

initializeApp(firebaseConfig);
getAnalytics();

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