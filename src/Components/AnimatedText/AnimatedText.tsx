import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';

const AnimatedText = ({children}) => {
  const controls = useAnimationControls();    
  const [isPlaying, setIsPlaying] = useState(false);

  const textAnimation = () => {
    controls.start({
      transform: [
        'scale3d(1, 1, 1)',
        'scale3d(1.4, .55, 1)',
        'scale3d(.75, 1.25, 1)',
        'scale3d(1.25, .85, 1)',
        'scale3d(.9, 1.05, 1)',
        
      ],
     
    });
    setIsPlaying(true);
  };
  

  return (
    <motion.h1
      animate={controls}
      onMouseOver={() => {
        if(!isPlaying)textAnimation();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      style={{color: isPlaying ? 'var(--lightPurple)' : 'var(--white)'}}
    >
      {children}
    </motion.h1>
  );
};

export default AnimatedText;
