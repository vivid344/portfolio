"use client";

import { Lightbulb } from "lucide-react";

import { AnimatedBadge } from "@/components/ui/animated-badge";
import { Wrapper } from "@/components/wrapper";

type SkillListProps = {
  title: string;
  items: readonly string[];
  delay?: number;
};

export const SkillList = ({
  title,
  items,
  delay = 0.31,
}: SkillListProps) => {
  return (
    <Wrapper className="block" y={100} delay={delay}>
      <h2 className="icon_underline relative flex gap-2 font-poppins text-3xl font-semibold text-primary max-sm:text-2xl">
        <Lightbulb className="size-8" />
        {title}
      </h2>
      <div className="mt-4 flex h-fit w-full flex-row flex-wrap gap-3 p-2">
        {items.map((item, index) => {
          return (
            <AnimatedBadge
              key={item}
              variant="skill"
              delay={delay + index * 0.1}
              className="px-4 py-2 text-sm md:text-base"
            >
              {item}
            </AnimatedBadge>
          );
        })}
      </div>
    </Wrapper>
  );
};
