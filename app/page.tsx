import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageContainer } from "@/components/page-container";
import { buttonVariants } from "@/components/ui/button";
import { Wrapper } from "@/components/wrapper";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import {
  generatePersonJsonLd,
  generateWebSiteJsonLd,
} from "@/lib/utils/json-ld";
import { cn } from "@/lib/utils/shadcn";

const metadata: Metadata = {
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

const personJsonLd = generatePersonJsonLd(
  SOCIAL_LINKS.map((link) => link.href),
);
const webSiteJsonLd = generateWebSiteJsonLd();

const Home = () => {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={webSiteJsonLd} />
      <PageContainer className="items-center">
        <Wrapper
          className="flex h-full w-auto flex-col justify-start gap-4"
          x={-100}
          y={0}
        >
          <p className="font-poppins text-2xl max-sm:text-xl">
            My Name is
          </p>
          <h1 className="name_underline font-rubik text-8xl text-primary max-sm:text-6xl">
            Ryoya Miyoshi
          </h1>
          <h2 className="py-4 font-poppins text-base text-[var(--text-secondary)] [text-wrap:balance] sm:text-2xl">
            I am a Web Frontend Engineer
          </h2>
          <div className="flex h-fit w-full gap-3 p-4">
            {SOCIAL_LINKS.map((link, index) => {
              const delay = 0.55 + index * 0.125;
              return (
                <Wrapper
                  key={link.name}
                  delay={delay}
                  y={50}
                >
                  <Link
                    target="blank"
                    href={link.href}
                    aria-label={link.name}
                    className={cn(
                      buttonVariants({
                        variant: "outline",
                        size: "icon",
                      }),
                    )}
                  >
                    <link.icon />
                  </Link>
                </Wrapper>
              );
            })}
          </div>
        </Wrapper>
        <Wrapper
          className="relative block h-full w-[47%] min-w-[250px] max-lg:hidden"
          x={100}
          y={0}
        >
          <Image
            className="mx-auto"
            src="/image.webp"
            alt={SITE_CONFIG.name}
            loading="eager"
            priority
            height={400}
            width={400}
            sizes="(max-width: 976px) 0px, 400px"
          />
        </Wrapper>
      </PageContainer>
    </>
  );
};

export default Home;
export { metadata };
