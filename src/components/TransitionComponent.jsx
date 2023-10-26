import React from 'react';
import { useSpring, animated } from 'react-spring';

const TransitionComponent = ({ children, duration, delay, opacity, marginTop }) => {
  const props = useSpring({ 
    opacity: opacity || 1, 
    marginTop: marginTop || 0, 
    from: { opacity: 0, marginTop: -500 }, 
    config: { duration: duration || 1000, delay: delay || 0 } 
  });

  return (
    <animated.div style={props}>
      {children}
    </animated.div>
  );
};

export default TransitionComponent;
