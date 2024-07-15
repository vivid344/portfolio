import { Circle, Lightbulb, User2 } from "lucide-react";

import { Heading } from "@/components/heading";
import { Badge } from "@/components/ui/badge";
import { Wrapper } from "@/components/wrapper";

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

const About = () => {
  return (
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
          <p className="w-full font-poppins text-xl text-primary max-sm:text-lg">
            2020年新卒で株式会社サイバーエージェントに入社し、Webフロントエンドエンジニアとして働く。
            <br />
            Reactをベースとしたフレームワークを用いて幅広いサービスの開発を行ってきた。
            <br />
            2022年には個人として24時間でアプリを作り上げるイベント、SPAJAM2022に参加。バックエンドエンジニアとしてチームに参加し、本戦にて優秀賞および長崎賞を受賞。
          </p>
        </Wrapper>
      </div>
      <Wrapper className="block" y={100} delay={0.31}>
        <h1 className="icon_underline relative flex gap-2 font-poppins text-3xl font-semibold text-primary max-sm:text-2xl">
          <Lightbulb className="size-8" />{" "}
          プログラミング言語
        </h1>
        <div className="mt-2 flex h-fit w-full flex-row justify-between gap-2 p-2 max-lg:flex-col lg:gap-7">
          {language.map((hobby) => {
            return (
              <div
                key={hobby}
                className="flex flex-row items-center justify-center gap-2 text-xl text-primary max-lg:justify-start lg:mt-3"
              >
                <Circle className="size-3" /> {hobby}
              </div>
            );
          })}
        </div>
      </Wrapper>
      <Wrapper className="block" y={100} delay={0.31}>
        <h1 className="icon_underline relative flex gap-2 font-poppins text-3xl font-semibold text-primary max-sm:text-2xl">
          <Lightbulb className="size-8" /> フレームワーク等
        </h1>
        <div className="mt-2 flex h-fit w-full flex-row justify-between gap-2 p-2 max-lg:flex-col lg:gap-7">
          {skills.map((hobby) => {
            return (
              <div
                key={hobby}
                className="flex flex-row items-center justify-center gap-2 text-xl text-primary max-lg:justify-start lg:mt-3"
              >
                <Circle className="size-3" /> {hobby}
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default About;