import type { Metadata, Viewport } from "next";
import { Inter, Poppins, Rubik } from "next/font/google";

import "@/styles/globals.css";

import { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils/shadcn";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-rubik",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#030712",
    },
  ],
};

export const metadata: () => Metadata = () => {
  return {
    title: {
      template: `%s - ${SITE_CONFIG.name}`,
      default: SITE_CONFIG.name,
    },
    description: SITE_CONFIG.description,
    icons: "/favicon.ico",
    keywords: SITE_CONFIG.keywords,
    authors: [SITE_CONFIG.author],
    creator: SITE_CONFIG.author.name,
    openGraph: {
      type: "website",
      locale: SITE_CONFIG.locale,
      url: SITE_CONFIG.url,
      site_name: SITE_CONFIG.name,
      title: {
        template: `%s - ${SITE_CONFIG.name}`,
        default: SITE_CONFIG.name,
      },
      description: SITE_CONFIG.description,
      images: [SITE_CONFIG.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      creator: SITE_CONFIG.twitter.creator,
      title: {
        template: `%s - ${SITE_CONFIG.name}`,
        default: SITE_CONFIG.name,
      },
      description: SITE_CONFIG.description,
      images: [SITE_CONFIG.ogImage],
    },
  };
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={cn(
        inter.variable,
        poppins.variable,
        rubik.variable,
      )}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = theme === 'dark' || (theme === 'system' && systemDark) || (!theme && systemDark);
                  document.documentElement.classList.add(isDark ? 'dark' : 'light');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "flex min-h-screen w-full flex-col",
          inter.className,
        )}
      >
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            メインコンテンツへスキップ
          </a>
          <header
            className="sticky top-0 z-10 flex h-12 items-center justify-between gap-4 border-b bg-background px-4 md:h-16 md:px-6"
            role="banner"
          >
            <Navigation />
            <ThemeToggle />
          </header>
          <main id="main-content" role="main">
            {children}
          </main>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
