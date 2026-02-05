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
  priority?: boolean;
};

const ProjectCard = (props: Props) => {
  return (
    <Wrapper
      y={0}
      scale={0.8}
      delay={props.index / 4}
      duration={0.15}
    >
      <Card
        className="flex size-full flex-col"
        role="article"
        aria-labelledby={`project-title-${props.id}`}
      >
        <CardHeader>
          <CardTitle id={`project-title-${props.id}`}>
            {props.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex h-full flex-col items-center justify-between">
          <Image
            className="grow object-cover"
            alt={`${props.title}のサムネイル画像`}
            src={props.src}
            height={350}
            width={350}
            sizes="(max-width: 720px) 100vw, (max-width: 976px) 50vw, 350px"
            priority={props.priority}
          />
          <Link
            href={`/works/${props.id}`}
            className="mt-4"
            aria-label={`${props.title}の詳細を見る`}
          >
            <Button type="button">Show more</Button>
          </Link>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export { ProjectCard };
