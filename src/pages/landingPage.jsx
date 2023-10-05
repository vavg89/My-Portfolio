import React from 'react';
import ButtonWithTransition from '../components/ButtonWithTransition';

const landingStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};


function Landing() {
  return (
    <div style={landingStyle} className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
       <ButtonWithTransition />
        </div>
      </div>
    </div>
  );
}

export default Landing;
