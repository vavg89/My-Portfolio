import React, { useState, useEffect } from 'react';
import '../components/SideButton.css';
import CustomTxtButton from './CustomLinkButton';

const SideButton = () => {
    const [position, setPosition] = useState('-900px');
    const [positionb, setPositionb] = useState('-3000px');
    const conoceme = "Conoceme";
    const tecnologias = "Tecnologias";
    const contactame = "Contactame";
    const conocemeUrl = "";
    const contactameUrl = '';
    const tecnologiasUrl = '';
   
    useEffect(() => {
      setTimeout(() => {
        setPosition('1cm');
        setPositionb('-65%');
      }, 500);
    }, []);
  
    useEffect(() => {
      // Aquí puedes ajustar positionb según el mensaje específico que se muestra
    }, [conocemeUrl, conoceme,contactameUrl ,contactame, tecnologiasUrl, tecnologias]);
  
    return (
      <div >
          <div>
  
              <img
          className='Stripe-1'
          src="../assets/franja.png"
          alt="Franja"
          style={{         
            right: positionb,          
            transition: 'right 0.9s ease',          
          }}
        />
        <div
          className={`container-1`}
          style={{
            right: position,
            transition: 'right 1s ease',
          }}>
          <CustomTxtButton linkUrl={conocemeUrl} imageUrl={conoceme} />
        </div>   
          </div>
          <div>
  
            <img
          className='Stripe-2'
          src="../assets/franja.png"
          alt="Franja"
          style={{         
            right: positionb,          
            transition: 'right 0.9s ease',          
          }}
        />
        <div
          className={`container-2`}
          style={{
            right: position,
            transition: 'right 1s ease',
          }}>
          <CustomTxtButton linkUrl={contactameUrl} imageUrl={tecnologias} />
        </div>          
      </div>  
       <div>
  
            <img
          className='Stripe-3'
          src="../assets/franja.png"
          alt="Franja"
          style={{         
            right: positionb,          
            transition: 'right 0.9s ease',          
          }}
        />
        <div
          className={`container-3`}
          style={{
            right: position,
            transition: 'right 1s ease',
          }}>
          <CustomTxtButton linkUrl={tecnologiasUrl} imageUrl={contactame} />
        </div>          
      </div>  
          </div>
       
        
    );
  };

export default SideButton;
