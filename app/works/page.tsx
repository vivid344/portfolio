import { Metadata } from "next";
import { Briefcase } from "lucide-react";

import { Heading } from "@/components/heading";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Contents } from "@/lib/types/content";
import { client } from "@/lib/utils/client";

const metadata: Metadata = {
  title: "Works",
};

const Works = async () => {
  const { contents }: Contents = await client.get({
    endpoint: "works",
  });

  return (
    <div className="relative flex size-full flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Briefcase className="size-5" />
        Works
      </Badge>
      <Heading>仕事</Heading>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {contents.map((content, index) => {
          return (
            <ProjectCard
              key={content.id}
              id={content.id}
              index={index}
              title={content.title}
              src={content.image[0].url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Works;
export { metadata };
