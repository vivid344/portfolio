import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
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
  id: string;
};

const ProjectCard = (props: Props) => {
  return (
    <Wrapper
      y={0}
      scale={0.8}
      delay={props.index / 4}
      duration={0.15}
    >
      <Card className="size-full">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Image
            alt={props.title}
            src={props.src}
            height={400}
            width={400}
            priority
          />
          <Link
            href={`/works/${props.id}`}
            className="mt-4"
          >
            <Button type="button">Show more</Button>
          </Link>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export { ProjectCard };
