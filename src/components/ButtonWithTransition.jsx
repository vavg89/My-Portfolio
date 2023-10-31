import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './ButtonWithTransition.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ButtonWithTransition = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => { 
    if (!clicked) {
        setClicked(true);
    } else if (currentImage === 6) {
      
    } else {
     
      setCurrentImage(currentImage + 1);
    }
  };

  useEffect(() => {
    if (clicked && currentImage < 6) {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => prevImage + 1);
      }, 80);
  
      return () => clearInterval(interval);
    } else if (currentImage === 6 && location.pathname !== '/knowMe') {
      navigate('/knowMe');
    }
  }, [clicked, currentImage, location, navigate]);

  return (
    <div className='ButtonWithTransition '>
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
