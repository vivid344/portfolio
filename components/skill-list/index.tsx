import { Circle, Lightbulb } from "lucide-react";

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
        <Lightbulb className="size-8" aria-hidden="true" />
        {title}
      </h2>
      <ul
        className="mt-2 flex h-fit w-full flex-row justify-between gap-2 p-2 max-lg:flex-col lg:gap-7"
        aria-label={title}
      >
        {items.map((item) => {
          return (
            <li
              key={item}
              className="flex flex-row items-center justify-center gap-2 text-base text-primary max-lg:justify-start md:text-lg lg:mt-3"
            >
              <Circle
                className="size-3"
                aria-hidden="true"
              />
              {item}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
