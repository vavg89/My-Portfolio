import React, { useState, useEffect } from 'react';
import './navbar.css';

function Navbar() {
  const [selectedTab, setSelectedTab] = useState(
    localStorage.getItem('selectedTab') || 'Conoceme'
  ); 

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    localStorage.setItem('selectedTab', tab); 
  };

  useEffect(() => {
    const storedTab = localStorage.getItem('selectedTab');
    if (storedTab) {
      setSelectedTab(storedTab);
    }
  }, []); 

  return (
    <div className="indexBack">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a
            className={selectedTab === 'Conoceme' ? 'nav-link text-white selected-tab' : 'nav-link text-black'} 
            href="/knowMe"
            onClick={() => handleTabClick('Conoceme')}
          >
            Conoceme
          </a>
        </li>
        <li className="nav-item">
          <a
            className={selectedTab === 'Tecnologias' ? 'nav-link text-white selected-tab' : 'nav-link text-black'}
            href="/tecnologies"
            onClick={() => handleTabClick('Tecnologias')}
          >
            Tecnologías
          </a>
        </li>
        <li className="nav-item">
          <a
            className={selectedTab === 'Proyectos' ? 'nav-link text-white selected-tab' : 'nav-link text-black'}
            href="/projects"
            onClick={() => handleTabClick('Proyectos')}
          >
            Proyectos
          </a>
        </li>
        <li className="nav-item">
          <a
            className={selectedTab === 'Contactame' ? 'nav-link text-white selected-tab' : 'nav-link text-black'}
            href="/contactMe"
            onClick={() => handleTabClick('Contactame')}
          >
            Contáctame
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
