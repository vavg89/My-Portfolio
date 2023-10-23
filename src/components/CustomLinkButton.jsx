import React from 'react';

const CustomLinkButton = ({ linkUrl, imageUrl }) => {
    return (
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <img src={imageUrl} alt="Imagen del botón" className="button-image" />
        </a>
    );
};

export default CustomLinkButton;
