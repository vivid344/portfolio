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
  UserRound,
} from "lucide-react";

import { cn } from "@/lib/utils/shadcn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "三好良弥 | Ryoya Miyoshi",
  description:
    "Webフロントエンドエンジニア 三好良弥のポートフォリオサイトです。",
  icons: "/favicon.ico",
};

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
    href: "/works",
    icon: <Briefcase className="size-4 md:size-5" />,
    title: "Works",
  },
];

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
        <main
          className={cn(
            "screen relative flex min-h-[calc(100vh_-_theme(spacing.16))] items-center justify-between break-words bg-transparent bg-[radial-gradient(#2f7df4_1px,transparent_1px)] px-40 pb-4 [background-size:16px_16px] max-md:p-8 max-sm:pt-12",
            { "bg-white": "#E6E7EB" },
          )}
        >
          {children}
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
