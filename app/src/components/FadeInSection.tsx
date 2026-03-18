import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const directionOffset = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 }
};

export function FadeInSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: FadeInSectionProps) {
  const offset = directionOffset[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 1,
        delay,
        ease: [0.165, 0.84, 0.44, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
