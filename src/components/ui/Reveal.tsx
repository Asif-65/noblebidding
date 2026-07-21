"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "whileInView"> {
  /** Stagger delay in seconds. Use index * 0.08 across siblings (§4). */
  delay?: number;
  /** Rise distance in px. */
  y?: number;
  children: React.ReactNode;
}

/**
 * Fade-and-rise on scroll, fired once. Motion is disabled and content stays
 * visible under prefers-reduced-motion (§4).
 */
export function Reveal({ delay = 0, y = 24, children, ...props }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    // Motion off, content still visible. Keep motion.div so prop types match.
    return <motion.div {...props}>{children}</motion.div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
