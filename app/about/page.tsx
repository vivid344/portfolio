import { Metadata } from "next";
import { User2 } from "lucide-react";

import { Heading } from "@/components/heading";
import { PageContainer } from "@/components/page-container";
import { SkillList } from "@/components/skill-list";
import { Badge } from "@/components/ui/badge";
import { Wrapper } from "@/components/wrapper";
import {
  FRAMEWORKS,
  LANGUAGES,
  SITE_CONFIG,
} from "@/lib/constants";

const metadata: Metadata = {
  title: "About",
  description:
    "2020年新卒で株式会社サイバーエージェントに入社し、Webフロントエンドエンジニアとして働く。Reactをベースとしたフレームワークを用いて幅広いサービスの開発を行ってきた。2022年には個人として24時間でアプリを作り上げるイベント、SPAJAM2022に参加。バックエンドエンジニアとしてチームに参加し、本戦にて優秀賞および長崎賞を受賞。",
  openGraph: {
    title: "About",
    description:
      "2020年新卒で株式会社サイバーエージェントに入社し、Webフロントエンドエンジニアとして働く。Reactをベースとしたフレームワークを用いて幅広いサービスの開発を行ってきた。2022年には個人として24時間でアプリを作り上げるイベント、SPAJAM2022に参加。バックエンドエンジニアとしてチームに参加し、本戦にて優秀賞および長崎賞を受賞。",
  },
  twitter: {
    title: "About",
    description:
      "2020年新卒で株式会社サイバーエージェントに入社し、Webフロントエンドエンジニアとして働く。Reactをベースとしたフレームワークを用いて幅広いサービスの開発を行ってきた。2022年には個人として24時間でアプリを作り上げるイベント、SPAJAM2022に参加。バックエンドエンジニアとしてチームに参加し、本戦にて優秀賞および長崎賞を受賞。",
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

const About = () => {
  return (
    <PageContainer centered>
      <div className="relative flex size-full flex-col items-start gap-5 overflow-hidden">
        <Badge className="gap-2" role="presentation">
          <User2 className="size-5" aria-hidden="true" />
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
        <SkillList
          title="プログラミング言語"
          items={LANGUAGES}
        />
        <SkillList
          title="フレームワーク等"
          items={FRAMEWORKS}
        />
      </div>
    </PageContainer>
  );
};

export default About;
export { metadata };
