import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';

import './AnimatedText.css';

interface Props {
  children: string,
}

const AnimatedText = ({children}: Props) => {
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
    <motion.span
      className="motion-span"
      animate={controls}
      onMouseOver={() => {if(!isPlaying)textAnimation();}}
      onAnimationComplete={() => setIsPlaying(false)}
      style={{color: isPlaying ? 'var(--purple)' : 'var(--white)'}}
    >
      {children}
    </motion.span>
  );
};

export default AnimatedText;
