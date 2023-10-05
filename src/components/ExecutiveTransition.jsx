import React, { useState, useEffect } from 'react';

const ExecutiveTransition = () => {
  const [position, setPosition] = useState('-600px'); // Comienza desde fuera del lado izquierdo

  useEffect(() => {
    // Mostrar la imagen desde el lado izquierdo y moverla a la posición deseada
    setTimeout(() => {
      setPosition('5cm'); 
    }, 500);
  }, []);

  return (
    <div >
    <img
      src="../assets/Ejecutivo.png" // Asegúrate de que la ruta sea correcta
      alt="Ejecutivo"
      style={{
        position: 'absolute',
        right: position, // Cambia 'right' a 'left'
        top: '3cm', // Ajusta la posición vertical según tus necesidades
        width: '600px', // Establece el ancho de la imagen en 300px
        transition: 'right 1s ease',
        
         // Cambia 'right' a 'left' en la transición
      }}
    />
     </div>
  );    
};

export default ExecutiveTransition;
