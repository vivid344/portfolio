import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wrapper } from "@/components/wrapper";

type Props = {
  index: number;
  title: string;
  src: string;
};

const ProjectCard = (props: Props) => {
  return (
    <Wrapper
      className={
        "min-h-[345px] max-w-[50%] max-lg:max-w-full"
      }
      y={0}
      scale={0.8}
      delay={props.index / 4}
      duration={0.15}
    >
      <Card className="size-full">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            alt={props.title}
            src={props.src}
            width={250}
            height={250}
          />
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export { ProjectCard };
