import { PropsWithChildren } from "react";

import { Wrapper } from "@/components/wrapper";

const Heading = (props: PropsWithChildren) => {
  return (
    <Wrapper y={0} x={-100}>
      <h1 className="name_underline font-poppins text-4xl font-bold text-primary max-sm:text-2xl">
        {props.children}
      </h1>
    </Wrapper>
  );
};

export { Heading };
