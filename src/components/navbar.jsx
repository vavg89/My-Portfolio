import React from 'react';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Cambia a bg-dark para el fondo negro */}
        <div className="container"> {/* Envuelve el contenido en un div con clase "container" */}
          <a className="navbar-brand" href="#">Conoceme</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Tecnologias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contactame</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;