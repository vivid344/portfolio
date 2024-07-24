import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

import { PropsWithChildren } from "react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  Briefcase,
  Home as HomeIcon,
  School,
  UserRound,
} from "lucide-react";

import { cn } from "@/lib/utils/shadcn";

const inter = Inter({ subsets: ["latin"] });

const links = [
  {
    href: "/",
    icon: <HomeIcon className="size-4 md:size-5" />,
    title: "Home",
  },
  {
    href: "/about",
    icon: <UserRound className="size-4 md:size-5" />,
    title: "About",
  },
  {
    href: "/career",
    icon: <School className="size-4 md:size-5" />,
    title: "Career",
  },
  {
    href: "/works",
    icon: <Briefcase className="size-4 md:size-5" />,
    title: "Works",
  },
];

export const metadata: () => Metadata = () => {
  return {
    title: {
      template: "%s - 三好良弥 | Ryoya Miyoshi",
      default: "三好良弥 | Ryoya Miyoshi",
    },
    description:
      "Webフロントエンドエンジニア 三好良弥のポートフォリオサイトです。",
    icons: "/favicon.ico",
    keywords: [
      "三好",
      "良弥",
      "三好 良弥",
      "三好良弥",
      "みよし",
      "りょうや",
      "みよし りょうや",
      "みよしりょうや",
      "vivid344",
    ],
    authors: [
      {
        name: "三好 良弥",
        url: "https://github.com/vivid344",
      },
    ],
    creator: "三好 良弥",
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: "https://vivid344.vercel.app",
      site_name: "三好良弥 | Ryoya Miyoshi",
      title: {
        template: "%s - 三好良弥 | Ryoya Miyoshi",
        default: "三好良弥 | Ryoya Miyoshi",
      },
      description:
        "Webフロントエンドエンジニア 三好良弥のポートフォリオサイトです。",
      images: ["https://vivid344.vercel.app/ogp.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@vivid_344",
      title: {
        template: "%s - 三好良弥 | Ryoya Miyoshi",
        default: "三好良弥 | Ryoya Miyoshi",
      },
      description:
        "Webフロントエンドエンジニア 三好良弥のポートフォリオサイトです。",
      images: ["https://vivid344.vercel.app/ogp.jpg"],
    },
  };
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ja">
      <body
        className={cn(
          "flex min-h-screen w-full flex-col",
          inter.className,
        )}
      >
        <header className="sticky top-0 z-10 flex h-12 items-center gap-4 border-b bg-background px-4 md:h-16 md:px-6">
          <nav className="flex gap-4 text-sm font-medium md:items-center md:gap-5 md:text-lg lg:gap-6">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.icon}
                <p className="ml-1">{item.title}</p>
              </Link>
            ))}
          </nav>
        </header>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
