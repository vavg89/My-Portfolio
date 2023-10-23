import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Landing from './pages/landingPage';
import KnowMe from './pages/knowMe'; // Asegúrate de que el nombre del componente coincida con la importación
import Tecnologies from './pages/tecnologies';
import Projects from './pages/projects';
import ContactMe from './pages/contactMe';


function App() {
  const location = useLocation();

  return (
    <div>
      <div className="top-filler" ></div>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route exact path="/"  element={<Landing />} />
        <Route path="/knowMe" element={<KnowMe />} />
        <Route path="/tecnologies" element={<Tecnologies />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes>
      <div className="bottom-filler" ></div>
    </div>
  );
}

export default App;
