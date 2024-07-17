import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Info, Lightbulb } from "lucide-react";

import { Heading } from "@/components/heading";
import { Badge } from "@/components/ui/badge";
import { Wrapper } from "@/components/wrapper";
import { Content } from "@/lib/types/content";
import { client } from "@/lib/utils/client";
import { cn } from "@/lib/utils/shadcn";

const generateMetadata = async (
  {
    params,
  }: {
    params: { id: string };
  },
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const content: Content = await client.get({
    endpoint: "works",
    contentId: params.id,
  });
  const image = content.image?.[0]?.url;
  const previousImages =
    (await parent).openGraph?.images || [];
  return {
    title: content.title,
    openGraph: {
      images: [
        ...(image ? [image] : []),
        ...previousImages,
      ],
    },
  };
};

const ContentPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const content: Content = await client.get({
    endpoint: "works",
    contentId: params.id,
  });
  return (
    <main
      className={cn(
        "screen relative flex min-h-[calc(100vh_-_theme(spacing.16))] items-start justify-between break-words bg-transparent bg-[radial-gradient(#21b5bf_1px,transparent_1px)] px-40 pb-4 pt-12 [background-size:16px_16px] max-md:p-8 md:items-center",
        { "bg-white": "#E6E7EB" },
      )}
    >
      <div className="flex size-full flex-col items-start gap-5 overflow-hidden">
        <Badge className="gap-2">
          <Briefcase className="size-5" />
          Works Detail
        </Badge>
        <Heading>{content.title}</Heading>
        <div className="grid w-full grid-cols-1 items-start justify-center lg:grid-cols-2 lg:gap-8">
          <Wrapper
            className="relative flex w-full min-w-[250px] justify-center"
            x={-100}
            y={0}
          >
            <Image
              src={
                content.image?.[0]?.url || "/no_image.png"
              }
              alt={content.title}
              loading="eager"
              priority
              height={400}
              width={400}
            />
          </Wrapper>
          <Wrapper
            className="flex flex-col items-start gap-4 max-lg:mt-4"
            x={100}
            y={0}
          >
            <h2 className="icon_underline relative flex gap-2 font-poppins text-3xl font-semibold text-primary max-sm:text-2xl">
              <Info className="size-8" /> 詳細
            </h2>
            <div className="whitespace-pre-wrap py-4 font-poppins text-base text-gray-700 [text-wrap:balance] sm:text-2xl">
              {content.body}
            </div>
            <h2 className="icon_underline relative flex gap-2 font-poppins text-3xl font-semibold text-primary max-sm:text-2xl">
              <Lightbulb className="size-8" /> 使用技術
            </h2>
            <div className="py-4 font-poppins text-base text-gray-700 [text-wrap:balance] sm:text-2xl">
              {content.technology}
            </div>
            {content.link && (
              <>
                <h2 className="icon_underline relative flex gap-2 font-poppins text-3xl font-semibold text-primary max-sm:text-2xl">
                  <Lightbulb className="size-8" /> リンク
                </h2>
                <Link
                  href={content.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="py-4 font-poppins text-base text-gray-700 underline [text-wrap:balance] sm:text-2xl"
                >
                  {content.title}
                </Link>
              </>
            )}
          </Wrapper>
        </div>
      </div>
    </main>
  );
};

export { generateMetadata };
export default ContentPage;
