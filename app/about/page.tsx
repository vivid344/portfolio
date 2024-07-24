import { Metadata } from "next";
import { Circle, Lightbulb, User2 } from "lucide-react";

import { Heading } from "@/components/heading";
import { Badge } from "@/components/ui/badge";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/lib/utils/shadcn";

const language = [
  "HTML",
  "JavaScript",
  "TypeScript",
  "CSS",
];
const skills = [
  "React.js",
  "Next.js",
  "Gatsby.js",
  "Angular",
  "Tailwind CSS",
];

const metadata: Metadata = {
  title: "About",
  alternates: {
    canonical: "https://vivid344.vercel.app/about",
  },
};

const About = () => {
  return (
    <main
      className={cn(
        "screen relative flex min-h-[calc(100vh_-_theme(spacing.16))] items-start justify-between break-words bg-transparent bg-[radial-gradient(#21b5bf_1px,transparent_1px)] px-40 pb-4 pt-12 [background-size:16px_16px] max-md:p-8 md:items-center",
        { "bg-white": "#E6E7EB" },
      )}
    >
      <div className="relative flex size-full flex-col items-start gap-5 overflow-hidden">
        <Badge className="gap-2">
          <User2 className="size-5" />
          About me
        </Badge>
        <div className="flex flex-col gap-3">
          <Heading>
            北海道出身 東京在住の
            <br />
            Webフロントエンドエンジニア
          </Heading>

          <Wrapper y={0} x={100}>
            <p className="w-full font-poppins text-base text-primary sm:text-xl">
              2020年新卒で株式会社サイバーエージェントに入社し、Webフロントエンドエンジニアとして働く。
              <br />
              Reactをベースとしたフレームワークを用いて幅広いサービスの開発を行ってきた。
              <br />
              2022年には個人として24時間でアプリを作り上げるイベント、SPAJAM2022に参加。バックエンドエンジニアとしてチームに参加し、本戦にて優秀賞および長崎賞を受賞。
            </p>
          </Wrapper>
        </div>
        <Wrapper className="block" y={100} delay={0.31}>
          <h2 className="icon_underline relative flex gap-2 font-poppins text-3xl font-semibold text-primary max-sm:text-2xl">
            <Lightbulb className="size-8" />
            プログラミング言語
          </h2>
          <div className="mt-2 flex h-fit w-full flex-row justify-between gap-2 p-2 max-lg:flex-col lg:gap-7">
            {language.map((hobby) => {
              return (
                <div
                  key={hobby}
                  className="flex flex-row items-center justify-center gap-2 text-base text-primary max-lg:justify-start md:text-xl lg:mt-3"
                >
                  <Circle className="size-3" /> {hobby}
                </div>
              );
            })}
          </div>
        </Wrapper>
        <Wrapper className="block" y={100} delay={0.31}>
          <h2 className="icon_underline relative flex gap-2 font-poppins text-3xl font-semibold text-primary max-sm:text-2xl">
            <Lightbulb className="size-8" />
            フレームワーク等
          </h2>
          <div className="mt-2 flex h-fit w-full flex-row justify-between gap-2 p-2 max-lg:flex-col lg:gap-7">
            {skills.map((hobby) => {
              return (
                <div
                  key={hobby}
                  className="flex flex-row items-center justify-center gap-2 text-base text-primary max-lg:justify-start md:text-lg lg:mt-3"
                >
                  <Circle className="size-3" /> {hobby}
                </div>
              );
            })}
          </div>
        </Wrapper>
      </div>
    </main>
  );
};

export default About;
export { metadata };
