import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import '../pages/PagesStyless.css';

const TransitionImage = ({ children, delay, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  const props = useSpring({
    to: {
      transform: `scale(${isHovered ? 1.5 : 1}) rotate(${isHovered ? 1800 : 0}deg)`,
      borderColor: isHovered ? 'blue' : 'transparent',
    },
    config: { tension: 500, friction: 50 }, 
  });

  const rainProps = useSpring({
    from: { transform: 'translate3d(0,-100vh,0)', opacity: 0 }, 
    to: { transform: 'translate3d(0,0,0)', opacity: 1 }, 
    delay: delay || 0, 
    config: { tension: 50, friction: 5 }, 
  });

  return (
    <div className='images'>
      <animated.div
        style={rainProps}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <animated.div style={{ ...props }}>
          <Link to={url} style={{ border: '2px solid transparent', transition: 'border 0.5s', display: 'block' }} target="_blank" rel="noopener noreferrer">
            {children}
          </Link>
        </animated.div>
      </animated.div>
    </div>
  );
};

export default TransitionImage;
