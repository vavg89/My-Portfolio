import React, { useState, useEffect } from 'react';
import '../components/welcome-transition.css';

const WelcomeTransition = () => {
  const [position, setPosition] = useState('-900px');
  const [positionb, setPositionb] = useState('-3000px');
  const hola = "1 | <p> ¡Hola, saludos! </p>";
  const quienSoy = "2 | <p> Soy Victor Vanderviest </p>";
  const miTitulo = "2 | <p> Full Stack web Developer </p>";
  const conoceme = "3 | <p> Mas de 3 años de experiencia </p>";
  const hasClick = "4 | <p> ¡has click en el portafolio y entra! </p>";
  
  useEffect(() => {
    setTimeout(() => {
      setPosition('1cm');
      setPositionb('-49%')
    }, 500);
  }, []);

  useEffect(() => {
    // Aquí puedes ajustar positionb según el mensaje específico que se muestra
  
  }, [hola, quienSoy, miTitulo, conoceme, hasClick]);

  return (
    <div className='text-color' >
       <img className='img-Stripe-hola'
        src="../assets/franja.png"
        alt="Franja"
        style={{         
          left: positionb ,          
          transition: 'left 1s ease',          
        }}
      />
      <p
        className={`text-container-hola  `}
        style={{
          left: position,
          transition: 'left 1.5s ease',
        }}
      >
        {hola}
      </p>
      <img
       className={`img-Stripe-quienSoy`}
        src="../assets/franja.png"
        alt="Franja"
        style={{       
          left: `calc(${positionb} + 5%)`,         
          transition: 'left 1.5s ease',          
        }}
      />
      <p
        className={`text-container-quienSoy  `}
        style={{
          left: position,
          transition: 'left 2s ease',
          
        }}
      >
        {quienSoy}
      </p>
      <img
        className='img-Stripe-miTitulo'
        src="../assets/franja.png"
        alt="Franja"
        style={{         
          left: `calc(${positionb} + 7%)`,        
          transition: 'left 2s ease',          
        }}
      />
      <p
        className={`text-container-miTitulo  `}
        style={{
          left: position,
          transition: 'left 2.5s ease',
        
        }}
      >
        {miTitulo}
      </p>
      <img
      className='img-Stripe-conoceme'
        src="../assets/franja.png"
        alt="Franja"
        style={{        
          left: `calc(${positionb} + 10%)`,          
          transition: 'left 2.5s ease',        
        }}
      />
      <p
        className={`text-container-conoceme  `}
        style={{
          left: position,
          transition: 'left 3s ease',         
        }}
      >
        {conoceme}
      </p>
      <img
      className='img-Stripe-hasClick '
        src="../assets/franja.png"
        alt="Franja"
        style={{       
          left: `calc(${positionb} + 12%)`,          
          transition: 'left 3s ease',         
        }}
      />
      <p
        className={`text-container-hasClick  `}
        style={{
          left: position,
          transition: 'left 3.5s ease',       
        }}
      >
        {hasClick}
      </p>
    </div>
  );
};

export default WelcomeTransition;
