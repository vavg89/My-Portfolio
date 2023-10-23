import React, { useState, useEffect } from 'react';
import '../components/BottonsTransition.css';
import CustomLinkButton from './CustomLinkButton';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import henry from '../assets/HenryTalent.jpeg';

const BottonsTransition = () => {
  const [position, setPosition] = useState('-900px');
  const [positionb, setPositionb] = useState('-3000px');  
  const linkUrl = "https://www.linkedin.com/in/victor-vanderviest-193b34256/";
  const gitUrl = 'https://www.github.com/vavg89/';
  const henryUrl = 'https://www.talent.soyhenry.com/es?searchInput=victor/';
  const linkedinImg=linkedin;
  const gitImg = github;
  const henryImg= henry;

  useEffect(() => {
    setTimeout(() => {
      setPosition('1cm');
      setPositionb('-65%');
    }, 500);
  }, []);

  useEffect(() => {
    // Aquí puedes ajustar positionb según el mensaje específico que se muestra
  }, [linkUrl, linkedinImg,gitUrl ,gitImg, henryUrl, henryImg]);

  return (
    <div >
        <div>

            <img
        className='img-Stripe-1'
        src="../assets/franja.png"
        alt="Franja"
        style={{         
          left: positionb,          
          transition: 'left 0.9s ease',          
        }}
      />
      <div
        className={`container-img-1`}
        style={{
          left: position,
          transition: 'left 1s ease',
        }}>
        <CustomLinkButton linkUrl={linkUrl} imageUrl={linkedin} />
      </div>   
        </div>
        <div>

          <img
        className='img-Stripe-2'
        src="../assets/franja.png"
        alt="Franja"
        style={{         
          left: positionb,          
          transition: 'left 0.9s ease',          
        }}
      />
      <div
        className={`container-img-2`}
        style={{
          left: position,
          transition: 'left 1s ease',
        }}>
        <CustomLinkButton linkUrl={gitUrl} imageUrl={gitImg} />
      </div>          
    </div>  
     <div>

          <img
        className='img-Stripe-3'
        src="../assets/franja.png"
        alt="Franja"
        style={{         
          left: positionb,          
          transition: 'left 0.9s ease',          
        }}
      />
      <div
        className={`container-img-3`}
        style={{
          left: position,
          transition: 'left 1s ease',
        }}>
        <CustomLinkButton linkUrl={henryUrl} imageUrl={henryImg} />
      </div>          
    </div>  
        </div>
     
      
  );
};

export default BottonsTransition;
