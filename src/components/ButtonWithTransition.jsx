import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './ButtonWithTransition.css'; // Asegúrate de importar tu archivo CSS de transiciones
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

const ButtonWithTransition = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => { 
    if (!clicked) {
        setClicked(true);
    } else if (currentImage === 6) {
      // No hagas nada si ya se mostraron todas las imágenes
    } else {
      // Muestra la siguiente imagen
      setCurrentImage(currentImage + 1);
    }
  };

  useEffect(() => {
    // Cambiar automáticamente las imágenes cada 2 segundos después de hacer clic
    if (clicked && currentImage < 6) {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => prevImage + 1);
      }, 80);

      return () => clearInterval(interval);
    } else if (currentImage === 6) {
      // Redirige al usuario al inicio cuando llegue a la última imagen
      navigate('/knowMe'); // Cambia '/home' a la URL de inicio real
    }
  }, [clicked, currentImage, navigate]);

  return (
    <div className='ButtonWithTransition'>
      <SwitchTransition>
        <CSSTransition
          key={currentImage <= 6}
          classNames="fade"
          timeout={4000}
        >
          <div className='divStyle'
           
          >
            {currentImage <= 6 && (
             <img
             src={`../assets/${currentImage}.png`}
             alt={`Imagen ${currentImage}`}
             style={{ maxWidth: '100%', maxHeight: '100%' }}
             onClick={handleClick}
             className="auto-cursor-change"
           />
           
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default ButtonWithTransition;
