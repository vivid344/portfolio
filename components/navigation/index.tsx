"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils/shadcn";

export const Navigation = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className="flex gap-4 text-sm font-medium md:items-center md:gap-5 md:text-lg lg:gap-6"
      aria-label="メインナビゲーション"
    >
      {NAV_LINKS.map((item) => {
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex items-center rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              active
                ? "text-foreground"
                : "text-muted-foreground",
            )}
          >
            <item.icon
              className="size-4 md:size-5"
              aria-hidden="true"
            />
            <span className="ml-1">{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
};
