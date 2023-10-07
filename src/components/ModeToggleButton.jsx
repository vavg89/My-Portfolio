import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModeToggleButton = ({ darkMode, toggleDarkMode }) => {
  return (
    <button className="btn btn-primary" onClick={toggleDarkMode}>
      {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
};

export default ModeToggleButton;
