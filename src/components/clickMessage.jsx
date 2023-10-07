import React from 'react';
import '../components/ClickMessage.css';

function ClickMessage () {

   
    return (
        <div className="click-message">
            <img className='img'
             src={`../assets/click.png`}
             alt={`Imagen`}
            /> 
        </div>
    )
};

export default ClickMessage