import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function AnimateInView({ children, delay = 0, duration = 0.75 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80%" });

  const animation = {
    initial: { y: "100%" },
    animate: {
      y: "0",
      transition: {
        duration,
        ease: [0.33, 1, 0.68, 1],
        delay,
      },
    },
  };

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        variants={animation}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {children}
      </motion.div>
    </div>
  );
}