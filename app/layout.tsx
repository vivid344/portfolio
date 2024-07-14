import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

import { PropsWithChildren } from "react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { cn } from "@/lib/utils/shadcn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "三好良弥 | Ryoya Miyoshi",
  description:
    "Webフロントエンドエンジニア 三好良弥のポートフォリオサイトです。",
  icons: "/favicon.ico",
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
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/works"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Works
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
        </header>
        <main className="z-0 flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
          {children}
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
