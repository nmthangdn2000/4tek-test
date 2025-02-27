import { animated, useSpring } from '@react-spring/web';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type AnimationNumberProps = {
  n: number;
  style: React.CSSProperties;
};

export const AnimationNumber = ({ n, style }: AnimationNumberProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const [springs, api] = useSpring(() => ({
    number: 0,
  }));

  useEffect(() => {
    if (!inView) return;
    api.start({ number: n, delay: 100, config: { duration: 2000 } });
  }, [api, inView]);

  return (
    // @ts-ignore
    <animated.div ref={ref} style={style}>
      {springs.number.to((x) => x.toFixed(0)) as any}
    </animated.div>
  );
};
