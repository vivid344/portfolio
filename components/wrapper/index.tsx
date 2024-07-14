"use client";

import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: any;
  x?: number;
  y?: number;
  delay?: number;
  duration?: number;
  scale?: number;
};
const Wrapper = (props: Props) => {
  const {
    delay = 0.25,
    x = 0,
    y = 0,
    duration = 0.2,
    scale = 0,
  } = props;
  return (
    <AnimatePresence>
      <motion.div
        initial={
          scale === 0
            ? { opacity: 0, y: y, x: x }
            : { opacity: 0, y: y, x: x, scale: scale }
        }
        animate={
          scale === 0
            ? { opacity: 1, y: 0, x: 0 }
            : { opacity: 1, y: 0, x: 0, scale: 1 }
        }
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: delay, duration: duration }}
        className={props.className}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
};

export { Wrapper };
