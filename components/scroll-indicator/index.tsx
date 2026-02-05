"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils/shadcn";

type ScrollIndicatorProps = {
  showProgress?: boolean;
  showScrollDown?: boolean;
  className?: string;
};

export const ScrollIndicator = ({
  showProgress = true,
  showScrollDown = true,
  className,
}: ScrollIndicatorProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showProgress && (
        <motion.div
          className={cn(
            "fixed left-0 right-0 top-12 z-50 h-1 origin-left bg-primary md:top-16",
            className,
          )}
          style={{ scaleX }}
        />
      )}
      {showScrollDown && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-1 text-muted-foreground"
          >
            <span className="text-xs font-medium">
              Scroll
            </span>
            <ChevronDown className="size-5" />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
