
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export const AnimatedSection = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}: AnimatedSectionProps) => {
  const { ref, getAnimationVariants } = useScrollAnimation(direction, delay);

  return (
    <motion.div
      ref={ref}
      {...getAnimationVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 
