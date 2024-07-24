import { Metadata } from "next";
import Link from "next/link";
import { School } from "lucide-react";

import { Heading } from "@/components/heading";
import { Badge } from "@/components/ui/badge";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/lib/utils/shadcn";

const career = [
  {
    period: "2011/04 - 2014/03",
    title: "北海道旭川北高等学校",
    link: "http://www.asahikawakita.hokkaido-c.ed.jp/",
  },
  {
    period: "2014/04 - 2018/03",
    title: "公立はこだて未来大学",
    description:
      "公立はこだて未来大学 システム情報科学部 高度ICTコース卒業。",
    link: "https://www.fun.ac.jp/",
  },
  {
    period: "2018/04 - 2020/03",
    title: "公立はこだて未来大学 大学院",
    description:
      "公立はこだて未来大学 大学院 システム情報科学研究科 高度ICT領域修了。インターンは「日本ビジネスシステムズ株式会社」「レバレジーズ株式会社」「株式会社MIXI」「株式会社VOYAGE GROUP」「株式会社サイバーエージェント」に参加。",
    link: "https://www.fun.ac.jp/",
  },
  {
    period: "2020/04 - 現在",
    title: "株式会社サイバーエージェント",
    description:
      "入社から2023/12まで株式会社CAMに出向し、占いサービスやコーポレートサイト、社内向けSaaSサービスの開発に従事。2024/01からは本社のグループIT推進本部にて、社内システムの基盤作成を行う",
    link: "https://www.cyberagent.co.jp/",
  },
];

const metadata: Metadata = {
  title: "Career",
  alternates: {
    canonical: "https://vivid344.vercel.app/career",
  },
};

const Career = () => {
  return (
    <main
      className={cn(
        "screen relative flex min-h-[calc(100vh_-_theme(spacing.16))] items-start justify-between break-words bg-transparent bg-[radial-gradient(#21b5bf_1px,transparent_1px)] px-40 pb-4 pt-12 [background-size:16px_16px] max-md:p-8 md:items-center",
        { "bg-white": "#E6E7EB" },
      )}
    >
      <div className="relative flex size-full flex-col items-start gap-5 overflow-hidden">
        <Badge className="gap-2">
          <School className="size-5" />
          Career
        </Badge>
        <div className="flex flex-col gap-3">
          <Heading>経歴</Heading>
          {career.map((item) => (
            <div
              className="flex h-fit w-full flex-col"
              key={item.title}
            >
              <div className="flex h-fit w-full">
                <Wrapper
                  y={0}
                  x={-100}
                  delay={0.35}
                  className="flex w-1/4 items-center justify-evenly font-rubik text-lg max-sm:text-base"
                >
                  {item.period}
                </Wrapper>
                <Wrapper
                  y={0}
                  x={100}
                  delay={0.35}
                  className="education_point relative ml-2 w-3/4 gap-3 border-l-4 border-l-[#3c3c3c] p-4"
                >
                  <Link
                    href={item.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="font-poppins text-base text-gray-700 underline [text-wrap:balance] sm:text-2xl"
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
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Career;
export { metadata };
