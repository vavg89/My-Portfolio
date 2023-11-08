import React, { useState, useEffect } from 'react';
import '../components/SideButton.css';
import CustomTxtButton from "../components/CustomTxtButton";
import whatsapp from "../assets/WhatsApp.png";
import Correo from "../assets/Correo.png";
import Cv from "../assets/cv.png";

const SideButton = () => {
    const [position, setPosition] = useState('-900px'); 
    const whatsApp = whatsapp;
    const correo = Correo;
    const cv = Cv;
    
    const wahtsappUrl = "https://wa.me/+5491127051235";
    const correoUrl = 'mailto:vavg89.ar@gmail.com';
    const cvUrl = 'https://drive.google.com/file/d/1NO41C627No9xTA1jDr-V_csvwdCTT0O6/view?usp=sharing';
   
   
    useEffect(() => {
      setTimeout(() => {
        setPosition('1cm');       
      }, 500);
    }, []);
  
    useEffect(() => {
   
    }, [wahtsappUrl, whatsApp,correoUrl ,correo, cvUrl,  cv]);
  
    return (
      <div >
          <div>        
        <div
          className={`container-1`}
          style={{
            right: position,
            transition: 'right 1s ease',
          }}>
          <CustomTxtButton linkUrl={wahtsappUrl} imageUrl={whatsApp} />
        </div>   
          </div>
          <div>        
        <div
          className={`container-2`}
          style={{
            right: position,
            transition: 'right 1s ease',
          }}>
          <CustomTxtButton linkUrl={correoUrl} imageUrl={correo} />
        </div>          
      </div>  
       <div>       
        <div
          className={`container-3`}
          style={{
            right: position,
            transition: 'right 1s ease',
          }}>
          <CustomTxtButton linkUrl={cvUrl} imageUrl={cv} />
        </div>          
      </div>
     </div>
       
        
    );
  };

export default SideButton;
