import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import TransitionComponent from '../components/TransitionComponent';
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
    <div>
      <TransitionComponent duration={1200} delay={200} opacity={0} marginTop={0}>
        <div className="indexBack">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link
                to="/knowMe" // Usa Link en lugar de la etiqueta 'a'
                className={selectedTab === 'Conoceme' ? 'nav-link text-primary selected-tab' : 'nav-link text-black'}
                onClick={() => handleTabClick('Conoceme')}
              >
                Conoceme
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/tecnologies"
                className={selectedTab === 'Tecnologias' ? 'nav-link text-primary selected-tab' : 'nav-link text-black'}
                onClick={() => handleTabClick('Tecnologias')}
              >
                Tecnologías
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className={selectedTab === 'Proyectos' ? 'nav-link text-primary selected-tab' : 'nav-link text-black'}
                onClick={() => handleTabClick('Proyectos')}
              >
                Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contactMe"
                className={selectedTab === 'Contactame' ? 'nav-link text-primary selected-tab' : 'nav-link text-black'}
                onClick={() => handleTabClick('Contactame')}
              >
                Contáctame
              </Link>
            </li>
          </ul>
        </div>
      </TransitionComponent>
    </div>
  );
}

export default Navbar;
