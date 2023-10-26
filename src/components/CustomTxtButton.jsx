import React from 'react';
import { Link } from 'react-router-dom';

const CustomTxtButton = ({ linkUrl, imageUrl }) => {
    return (
        <Link to={linkUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
      <img src={imageUrl} alt="Imagen del botón" className="button-image" />
    </Link>
    );
};

export default CustomTxtButton;
