import React, { useState, useEffect } from 'react';
import ButtonWithTransition from '../components/ButtonWithTransition';
import ExecutiveTransition from '../components/ExecutiveTransition';
import WelcomeTransition from '../components/WelcomeTransition';
import ClickMessage from '../components/clickMessage';
import './landingPage.css';

function Landing() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div> 
       <div className="top-filler" ></div>
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
            {showButton && <ButtonWithTransition />}
          </div>
        </div>
      </div>
      <div className="bottom-filler" ></div>
    </div>
    
  );
}

export default Landing;
