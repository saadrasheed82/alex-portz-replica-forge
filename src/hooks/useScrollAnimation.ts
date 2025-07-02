
import { useInView } from 'framer-motion';
import { useRef } from 'react';

type AnimationDirection = 'up' | 'down' | 'left' | 'right';

export const useScrollAnimation = (direction: AnimationDirection = 'up', delay: number = 0) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getAnimationVariants = () => {
    const variants = {
      hidden: {
        opacity: 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
      },
    };

    const transition = {
      duration: 0.8,
      delay: delay,
      ease: [0.25, 0.1, 0.25, 1] as const,
    };

    return {
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      variants,
      transition,
    };
  };

  return { ref, getAnimationVariants };
};
