"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RefreshCw } from "lucide-react";

import { PageContainer } from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/wrapper";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageContainer centered>
      <div className="flex size-full flex-col items-center justify-center gap-6 text-center">
        <Wrapper y={-50}>
          <h1 className="font-rubik text-8xl font-bold text-primary max-sm:text-6xl">
            Error
          </h1>
        </Wrapper>
        <Wrapper delay={0.2}>
          <h2 className="font-poppins text-2xl text-[var(--text-secondary)] max-sm:text-xl">
            問題が発生しました
          </h2>
        </Wrapper>
        <Wrapper delay={0.3}>
          <p className="max-w-md font-poppins text-base text-muted-foreground">
            申し訳ございません。予期せぬエラーが発生しました。
            再度お試しいただくか、ホームページに戻ってください。
          </p>
        </Wrapper>
        <Wrapper delay={0.4}>
          <div className="flex gap-4">
            <Button onClick={reset} variant="outline">
              <RefreshCw className="mr-2 size-4" />
              再試行
            </Button>
            <Button asChild variant="ghost">
              <Link href="/">
                <Home className="mr-2 size-4" />
                ホームへ戻る
              </Link>
            </Button>
          </div>
        </Wrapper>
      </div>
    </PageContainer>
  );
};

export default Error;
