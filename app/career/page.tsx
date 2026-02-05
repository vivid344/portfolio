import { Metadata } from "next";
import Link from "next/link";
import { School } from "lucide-react";

import { Heading } from "@/components/heading";
import { PageContainer } from "@/components/page-container";
import { Badge } from "@/components/ui/badge";
import { Wrapper } from "@/components/wrapper";
import { CAREER_DATA, SITE_CONFIG } from "@/lib/constants";

const metadata: Metadata = {
  title: "Career",
  description: "2011年から現在までの経歴を紹介します。",
  openGraph: {
    title: "Career",
    description: "2011年から現在までの経歴を紹介します。",
  },
  twitter: {
    title: "Career",
    description: "2011年から現在までの経歴を紹介します。",
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/career`,
  },
};

const Career = () => {
  return (
    <PageContainer centered>
      <div className="relative flex size-full flex-col items-start gap-5 overflow-hidden">
        <Badge className="gap-2" role="presentation">
          <School className="size-5" aria-hidden="true" />
          Career
        </Badge>
        <div className="flex flex-col gap-3">
          <Heading>経歴</Heading>
          <ol
            className="flex flex-col gap-3"
            aria-label="経歴タイムライン"
          >
            {CAREER_DATA.map((item) => (
              <li
                className="flex h-fit w-full flex-col"
                key={item.title}
                aria-label={`${item.period}: ${item.title}`}
              >
                <div className="flex h-fit w-full">
                  <Wrapper
                    y={0}
                    x={-100}
                    delay={0.35}
                    className="flex w-1/4 items-center justify-evenly font-rubik text-lg max-sm:text-base"
                  >
                    <time>{item.period}</time>
                  </Wrapper>
                  <Wrapper
                    y={0}
                    x={100}
                    delay={0.35}
                    className="education_point relative ml-2 w-3/4 gap-3 border-l-4 border-l-[var(--timeline-border)] p-4"
                  >
                    <Link
                      href={item.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="font-poppins text-base text-[var(--text-secondary)] underline [text-wrap:balance] sm:text-2xl"
                      aria-label={`${item.title}（新しいタブで開きます）`}
                    >
                      {item.title}
                    </Link>
                    {item.description && (
                      <p className="w-full font-poppins text-base text-primary max-sm:text-xs">
                        {item.description}
                      </p>
                    )}
                  </Wrapper>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </PageContainer>
  );
};

export default Career;
export { metadata };
