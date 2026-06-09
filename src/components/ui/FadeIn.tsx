"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "none";
}

const getVariants = (direction: FadeInProps["direction"]): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 24 : direction === "down" ? -24 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={getVariants(direction)}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
