import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom'; // Importa Link desde react-router-dom
import './navbar.css';

function Navbar() {
  const defaultTab = 'Conoceme'; // Valor predeterminado para la pestaña seleccionada
  const location = useLocation();

  const setInitialTab = (tab) => {
    localStorage.setItem('selectedTab', tab);
  };

  const [selectedTab, setSelectedTab] = useState(
    localStorage.getItem('selectedTab') || defaultTab
  );

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    localStorage.setItem('selectedTab', tab);
  };

  useEffect(() => {
    const storedTab = localStorage.getItem('selectedTab');
    if (!storedTab && location.pathname === '/') {
      setInitialTab(defaultTab); // Establecer la pestaña predeterminada si no hay valor en localStorage
      setSelectedTab(defaultTab);
    } else if (storedTab) {
      setSelectedTab(storedTab);
    }
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top justify-content-center">
         <div className="indexBack">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link
                to="/knowMe" // Usa Link en lugar de la etiqueta 'a'
                className={selectedTab === 'Conoceme' ? 'nav-link text-primary selected-tab' : 'nav-link text-white'}
                onClick={() => handleTabClick('Conoceme')}
              >
                Conoceme
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/technologies"
                className={selectedTab === 'Tecnologias' ? 'nav-link text-primary selected-tab' : 'nav-link text-white'}
                onClick={() => handleTabClick('Tecnologias')}
              >
                Tecnologías
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className={selectedTab === 'Proyectos' ? 'nav-link text-primary selected-tab' : 'nav-link text-white'}
                onClick={() => handleTabClick('Proyectos')}
              >
                Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contactMe"
                className={selectedTab === 'Contactame' ? 'nav-link text-primary selected-tab' : 'nav-link text-white'}
                onClick={() => handleTabClick('Contactame')}
              >
                Contáctame
              </Link>
            </li>
          </ul>
        </div>
        </nav>
  );
}

export default Navbar;
