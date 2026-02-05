import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils/shadcn";

type PageContainerProps = PropsWithChildren<{
  className?: string;
  centered?: boolean;
}>;

export const PageContainer = ({
  children,
  className,
  centered = false,
}: PageContainerProps) => {
  return (
    <main
      className={cn(
        "screen relative flex min-h-[calc(100vh_-_theme(spacing.16))] items-start justify-between break-words bg-background bg-[radial-gradient(var(--dot-pattern)_1px,transparent_1px)] px-40 pb-4 pt-12 [background-size:16px_16px] max-md:p-8",
        centered && "md:items-center",
        className,
      )}
    >
      {children}
    </main>
  );
};
