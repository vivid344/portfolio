import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

import { PageContainer } from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/wrapper";

const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "お探しのページが見つかりませんでした。",
};

const NotFound = () => {
  return (
    <PageContainer centered>
      <div
        className="flex size-full flex-col items-center justify-center gap-6 text-center"
        role="alert"
        aria-labelledby="error-title"
        aria-describedby="error-description"
      >
        <Wrapper y={-50}>
          <h1
            id="error-title"
            className="font-rubik text-9xl font-bold text-primary max-sm:text-7xl"
          >
            404
            <span className="sr-only">
              エラー - ページが見つかりません
            </span>
          </h1>
        </Wrapper>
        <Wrapper delay={0.2}>
          <h2 className="font-poppins text-2xl text-[var(--text-secondary)] max-sm:text-xl">
            お探しのページが見つかりませんでした
          </h2>
        </Wrapper>
        <Wrapper delay={0.3}>
          <p
            id="error-description"
            className="max-w-md font-poppins text-base text-muted-foreground"
          >
            ページが移動または削除された可能性があります。
            URLをご確認の上、再度お試しください。
          </p>
        </Wrapper>
        <Wrapper delay={0.4}>
          <nav
            className="flex gap-4"
            aria-label="エラーページナビゲーション"
          >
            <Button asChild variant="outline">
              <Link href="/">
                <Home
                  className="mr-2 size-4"
                  aria-hidden="true"
                />
                ホームへ戻る
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/">
                <ArrowLeft
                  className="mr-2 size-4"
                  aria-hidden="true"
                />
                前のページへ
              </Link>
            </Button>
          </nav>
        </Wrapper>
      </div>
    </PageContainer>
  );
};

export default NotFound;
export { metadata };
