import { Metadata } from "next";
import { Briefcase } from "lucide-react";

import { Heading } from "@/components/heading";
import { PageContainer } from "@/components/page-container";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";
import { Contents } from "@/lib/types/content";
import { client } from "@/lib/utils/client";

const metadata: Metadata = {
  title: "Works",
  description: "大学入学以降の実績を紹介します。",
  openGraph: {
    title: "Works",
    description: "大学入学以降の実績を紹介します。",
  },
  twitter: {
    title: "Works",
    description: "大学入学以降の実績を紹介します。",
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/works`,
  },
};

const Works = async () => {
  const { contents }: Contents = await client.get({
    endpoint: "works",
  });

  return (
    <PageContainer centered>
      <div className="relative flex size-full flex-col items-start gap-5 overflow-hidden">
        <Badge className="gap-2">
          <Briefcase className="size-5" />
          Achievements
        </Badge>
        <Heading>実績</Heading>
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
    </PageContainer>
  );
};

export default Works;
export { metadata };
