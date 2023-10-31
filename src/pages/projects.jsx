import React from "react";
import './PagesStyless.css';
import BottonsTransition from "../components/BottonsTransition";
import SideButton from "../components/SideButton";

function projects() {
    return (
      <div className="Background">
        <BottonsTransition/>
        <SideButton/>
        <div>
          <p>Mis Proyectos</p>
        </div>
      </div>
    );
  }
  
  export default projects;