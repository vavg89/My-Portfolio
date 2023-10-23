import React, { useState, useEffect } from 'react';
import ButtonWithTransition from '../components/ButtonWithTransition';
import ExecutiveTransition from '../components/ExecutiveTransition';
import WelcomeTransition from '../components/WelcomeTransition';
import ClickMessage from '../components/clickMessage';
import './landingPage.css';
import '../components/ButtonWithTransition.css'

function Landing() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='fondo' > 
       
      <div className="container">
        <div className="row">
        
          <div className="col-lg-6">
            <WelcomeTransition />
          </div>
          
          <div className="col-lg-6">
            {showButton && <ClickMessage />}
          </div>
         
          <div className="col-lg-12">
            <ExecutiveTransition />
          </div>
          
          <div>
            {showButton && <ButtonWithTransition className="portfolioQuery"/>}
          </div>
        </div>
      </div>
     
    </div>
    
  );
}

export default Landing;
