import React, { useState, useEffect } from 'react';
import '../components/welcome-transition.css';

const WelcomeTransition = () => {
  const [position, setPosition] = useState('-900px');
  const hola = "1 | <p> Hola </p>";
  const quienSoy = "2 | <p> Soy Victor Vanderviest </p>";
  const miTitulo = "2 | <p> Full Stack Web Developer </p>";
  const conoceme = "3 | <p> Conoce mi experiencia </p>";
  const hasClick = "4 | <p> ¡Has click en el portafolio! </p>"
  useEffect(() => {
    // Mostrar las líneas de texto una detrás de otra antes de mostrar la flecha
    setTimeout(() => {
       setPosition('1cm'); 
    }, 500); // Retraso inicial
    setTimeout(() => {
     }, 2500); // Retraso para mostrar la flecha después del texto

    // Limpia el estado después de un tiempo
    setTimeout(() => {
      
     }, 5000); // Cambia el tiempo según tus necesidades
  }, []);

  return (
    <div className='text-color'>
      <p
        className={`text-container-hola  `}
        style={{
          left: position,              
          transition: 'left 1s ease',       
        }}
      > 
        {hola}
      </p>
   
      <p
        className={`text-container-quienSoy  `}
        style={{
         
          left: position, 
          transition: 'left 1s ease',                
          transitionDelay: '0.5s',
        }}
      >
        {quienSoy}
      </p>
      <p
        className={`text-container-miTitulo  `}
        style={{
         
          left: position,         
          transition: 'left 1s ease',         
          transitionDelay: '1s', 
        }}
      >
        {miTitulo}
      </p>
      <p
        className={`text-container-conoceme  `}
        style={{
          
          left: position,         
          transition: 'left 1s ease',          
          transitionDelay: '1.5s', 
        }}
      >
       {conoceme}
      </p>
      <p
        className={`text-container-hasClick  `}
        style={{
         
          left: position,          
          transition: 'left 1s ease',         
          transitionDelay: '2s', 
        }}
      >
       {hasClick}
      </p>
    </div>
  );
};

export default WelcomeTransition;
