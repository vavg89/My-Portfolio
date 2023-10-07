import React, { useState, useEffect } from 'react';
import '../components/ExecutiveTransition.css';

const ExecutiveTransition = () => {
  const [position, setPosition] = useState('-600px'); // Comienza desde fuera del lado izquierdo

  useEffect(() => {
    // Mostrar la imagen desde el lado izquierdo y moverla a la posición deseada
    setTimeout(() => {
      setPosition('0.5cm'); 
    }, 500);
  }, []);

  return (
    <div className="executive-transition">
    <img
      src="../assets/Ejecutivo.png" // Asegúrate de que la ruta sea correcta
      alt="Ejecutivo"
      style={{
        position: 'absolute',
        right: position, 
        top: '15%', 
        width: '30%',
        transition: 'right 1s ease',
        transitionDelay: '2.5s',
        
        
      }}
    />
     </div>
  );    
};

export default ExecutiveTransition;
