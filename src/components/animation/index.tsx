import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type AnimationProps = {
  children: React.ReactNode;
  className?: string;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
};

export const Animation = ({ children, className, direction = 'bottom', delay = 0.25 }: AnimationProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef, { once: true });

  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start('visible');
    }
  }, [isInView]);

  const getInitialPosition = () => {
    switch (direction) {
      case 'top':
        return { opacity: 0, y: -75 };
      case 'bottom':
        return { opacity: 0, y: 75 };
      case 'left':
        return { opacity: 0, x: -75 };
      case 'right':
        return { opacity: 0, x: 75 };
      default:
        return { opacity: 0, y: 75 };
    }
  };

  return (
    <div ref={divRef} className={className || 'relative'} style={{ overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: getInitialPosition(),
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={animationControls}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
