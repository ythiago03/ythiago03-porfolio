import { useRef, useEffect } from 'react';
import {motion, useInView, useAnimation} from 'framer-motion';


type Props = {
  children: JSX.Element;

}

const Motion = ({children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if(isInView){
      controls.start('visible');
      return;
    }
    controls.start('hidden');
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0}
      }}
      initial={'hidden'}
      animate={controls}
      transition={{duration: 0.5, delay: 0.35}}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
