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
      <div className="flex size-full flex-col items-center justify-center gap-6 text-center">
        <Wrapper y={-50}>
          <h1 className="font-rubik text-9xl font-bold text-primary max-sm:text-7xl">
            404
          </h1>
        </Wrapper>
        <Wrapper delay={0.2}>
          <h2 className="font-poppins text-2xl text-[var(--text-secondary)] max-sm:text-xl">
            お探しのページが見つかりませんでした
          </h2>
        </Wrapper>
        <Wrapper delay={0.3}>
          <p className="max-w-md font-poppins text-base text-muted-foreground">
            ページが移動または削除された可能性があります。
            URLをご確認の上、再度お試しください。
          </p>
        </Wrapper>
        <Wrapper delay={0.4}>
          <div className="flex gap-4">
            <Button asChild variant="outline">
              <Link href="/">
                <Home className="mr-2 size-4" />
                ホームへ戻る
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/">
                <ArrowLeft className="mr-2 size-4" />
                前のページへ
              </Link>
            </Button>
          </div>
        </Wrapper>
      </div>
    </PageContainer>
  );
};

export default NotFound;
export { metadata };
