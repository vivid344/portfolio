import { Briefcase } from "lucide-react";

import { Heading } from "@/components/heading";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Contents } from "@/lib/types/content";
import { client } from "@/lib/utils/client";

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

      <div className="flex w-full flex-row flex-wrap gap-3 max-lg:flex-col">
        {contents.map((content, index) => {
          return (
            <ProjectCard
              key={content.id}
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
