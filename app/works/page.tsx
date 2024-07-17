import { Metadata } from "next";
import { Briefcase } from "lucide-react";

import { Heading } from "@/components/heading";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Contents } from "@/lib/types/content";
import { client } from "@/lib/utils/client";
import { cn } from "@/lib/utils/shadcn";

const metadata: Metadata = {
  title: "Works",
  alternates: {
    canonical: "https://vivid344.vercel.app/works",
  },
};

const Works = async () => {
  const { contents }: Contents = await client.get({
    endpoint: "works",
  });

  return (
    <main
      className={cn(
        "screen relative flex min-h-[calc(100vh_-_theme(spacing.16))] items-start justify-between break-words bg-transparent bg-[radial-gradient(#21b5bf_1px,transparent_1px)] px-40 pb-4 pt-12 [background-size:16px_16px] max-md:p-8 md:items-center",
        { "bg-white": "#E6E7EB" },
      )}
    >
      <div className="relative flex size-full flex-col items-start gap-5 overflow-hidden">
        <Badge className="gap-2">
          <Briefcase className="size-5" />
          Works
        </Badge>
        <Heading>仕事</Heading>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {contents.map((content, index) => {
            const imagePath =
              content.image?.[0]?.url || "/no_image.png";
            return (
              <ProjectCard
                key={content.id}
                id={content.id}
                index={index}
                title={content.title}
                src={imagePath}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Works;
export { metadata };
