"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/shadcn";

const animatedBadgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        skill:
          "border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/40",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type AnimatedBadgeProps = VariantProps<typeof animatedBadgeVariants> & {
  delay?: number;
  hoverScale?: number;
  className?: string;
  children: ReactNode;
};

const AnimatedBadge = ({
  className,
  variant,
  delay = 0,
  hoverScale = 1.05,
  children,
}: AnimatedBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      whileHover={{
        scale: hoverScale,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      className={cn(animatedBadgeVariants({ variant }), "cursor-default", className)}
    >
      {children}
    </motion.div>
  );
};

export { AnimatedBadge, animatedBadgeVariants };
