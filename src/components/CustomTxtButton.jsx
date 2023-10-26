import React from 'react';
import { Link } from 'react-router-dom';

const CustomTxtButton = ({ linkUrl, imageUrl }) => {
    return (
        <Link href={linkUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <p alt={imageUrl} className="button-image" />
        </Link>
    );
};

export default CustomTxtButton;
