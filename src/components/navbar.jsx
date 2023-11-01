import React, { useState, useEffect } from 'react';
import CustomModal from './CustomModal';

import './navbar.css';

function Navbar({ parallax }) {
  const defaultTab = 'Conoceme';
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  const handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const pagePositions = [0, windowHeight, 2 * windowHeight, 3 * windowHeight];

    if (scrollPosition < pagePositions[1]) {
      setSelectedTab('Conoceme');
    } else if (scrollPosition >= pagePositions[1] && scrollPosition < pagePositions[2]) {
      setSelectedTab('Tecnologias');
    } else if (scrollPosition >= pagePositions[2] && scrollPosition < pagePositions[3]) {
      setSelectedTab('Proyectos');
    } 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTabClick = (tab, page) => {
    setSelectedTab(tab);
    localStorage.setItem('selectedTab', tab);
    parallax.current.scrollTo(page); // Navegar a la página específica en función de la pestaña seleccionada
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top justify-content-center">
      <div className="indexBack">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <button
              className={selectedTab === 'Conoceme' ? 'nav-link text-primary selected-tab' : 'nav-link text-white'}
              onClick={() => handleTabClick('Conoceme', 0)}
            >
              Conoceme
            </button>
          </li>
          <li className="nav-item">
            <button
              className={selectedTab === 'Tecnologias' ? 'nav-link text-primary selected-tab' : 'nav-link text-white'}
              onClick={() => handleTabClick('Tecnologias', 1)}
            >
              Tecnologías
            </button>
          </li>
          <li className="nav-item">
            <button
              className={selectedTab === 'Proyectos' ? 'nav-link text-primary selected-tab' : 'nav-link text-white'}
              onClick={() => handleTabClick('Proyectos', 2)}
            >
              Proyectos
            </button>
          </li>
          
           
              <CustomModal/>
          
        
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
