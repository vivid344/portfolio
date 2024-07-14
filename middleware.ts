import { NextRequest, NextResponse } from "next/server";

const middleware = (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;
  const reqHeaders = new Headers(req.headers);

  reqHeaders.set("x-path", pathname);

  return NextResponse.next({
    request: {
      headers: reqHeaders,
    },
  });
};

export default middleware;
