import React from "react";
import './PagesStyless.css';
import BottonsTransition from "../components/BottonsTransition";
import SideButton from "../components/SideButton"

function tecnologies() {
    return (
      <div className="BackgroundBlack">
         <BottonsTransition/> 
         <SideButton/>
        <div>
          <p>Mis Tecnologias Aplicadas</p>
        </div>
       
      </div>
    );
  }
  
  export default tecnologies;