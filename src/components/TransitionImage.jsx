import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import '../pages/PagesStyless.css';

const TransitionImage = ({ children, delay, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  const props = useSpring({
    transform: `scale(${isHovered ? 1.1 : 1})`,
    opacity: isHovered ? 0.9 : 1,
    config: { tension: 300, friction: 20 },
  });

  return (
    <div className="transition-image-container   mx-auto img-fluid">
      <animated.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={url} target="_blank" rel="noopener noreferrer">
          <animated.div style={props}>{children}</animated.div>
        </Link>
      </animated.div>
    </div>
  );
};

export default TransitionImage;
