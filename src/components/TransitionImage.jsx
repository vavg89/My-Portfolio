import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import '../pages/PagesStyless.css';

const TransitionImage = ({ children, delay, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  const props = useSpring({
    to: {
      transform: `scale(${isHovered ? 1 : 1}) rotate(${isHovered ? 1800 : 0}deg)`,
      borderColor: isHovered ? 'blue' : 'transparent',
    },
    config: { tension: 300, friction: 20 },
  });

  const rainProps = useSpring({
    from: { transform: 'translate3d(0,-100vh,0)', opacity: 0 },
    to: { transform: 'translate3d(0,0,0)', opacity: 1 },
    delay: delay || 0,
    config: { tension: 50, friction: 5 },
  });

  return (
    <animated.div
      style={rainProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={url} target="_blank" rel="noopener noreferrer">
        <animated.div style={{ ...props }}>
          {children}
        </animated.div>
      </Link>
    </animated.div>
  );
};

export default TransitionImage;