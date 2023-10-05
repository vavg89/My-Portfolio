import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/knowMe">Conoceme</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tecnologies">Tecnologías</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contactMe">Contáctame</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
