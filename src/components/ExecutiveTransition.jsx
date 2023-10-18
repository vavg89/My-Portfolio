import React, { useState, useEffect } from 'react';
import '../components/ExecutiveTransition.css';

const ExecutiveTransition = () => {
  const [position, setPosition] = useState('-900px'); // Comienza desde fuera del lado izquierdo

  useEffect(() => {
    // Mostrar la imagen desde el lado izquierdo y moverla a la posición deseada
    setTimeout(() => {
      setPosition('6cm'); 
    }, 500);
  }, []);

  return (
    <div className="executive-transition">
    <img
      src="../assets/empresario.png" // Asegúrate de que la ruta sea correcta
      alt="empresario"
      style={{
        position: 'absolute',
        right: position, 
        top: '30%', 
        width: '30%',
        transition: 'right 1s ease',
        transitionDelay: '0.2s',
        transform: 'scale(2)',
        zIndex: -1,
        
        
      }}
    />
     </div>
  );    
};

export default ExecutiveTransition;
