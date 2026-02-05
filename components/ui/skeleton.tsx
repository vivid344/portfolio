"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils/shadcn";

type SkeletonProps = {
  className?: string;
};

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <motion.div
      className={cn(
        "rounded-md bg-muted",
        className
      )}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

type CardSkeletonProps = {
  className?: string;
};

const CardSkeleton = ({ className }: CardSkeletonProps) => {
  return (
    <div className={cn("space-y-4 rounded-lg border p-4", className)}>
      <Skeleton className="h-40 w-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
    </div>
  );
};

type TextSkeletonProps = {
  lines?: number;
  className?: string;
};

const TextSkeleton = ({ lines = 3, className }: TextSkeletonProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-4",
            i === lines - 1 ? "w-2/3" : "w-full"
          )}
        />
      ))}
    </div>
  );
};

type ProfileSkeletonProps = {
  className?: string;
};

const ProfileSkeleton = ({ className }: ProfileSkeletonProps) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Skeleton className="size-16 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  );
};

type GridSkeletonProps = {
  count?: number;
  className?: string;
};

const GridSkeleton = ({ count = 6, className }: GridSkeletonProps) => {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
};

export {
  Skeleton,
  CardSkeleton,
  TextSkeleton,
  ProfileSkeleton,
  GridSkeleton,
};
