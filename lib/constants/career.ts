export type CareerItem = {
  period: string;
  title: string;
  description?: string;
  link: string;
};

export const CAREER_DATA: CareerItem[] = [
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
