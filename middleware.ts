import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Optional HTTP Basic Auth for the staging preview. Enabled ONLY when both
// STAGING_USER and STAGING_PASS env vars are set (so local dev stays open).
// Gives the client a private link without needing a paid host plan.
export function middleware(req: NextRequest) {
  const user = process.env.STAGING_USER;
  const pass = process.env.STAGING_PASS;
  if (!user || !pass) return NextResponse.next();

  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Basic ")) {
    try {
      const decoded = atob(auth.slice(6));
      const i = decoded.indexOf(":");
      if (decoded.slice(0, i) === user && decoded.slice(i + 1) === pass) {
        return NextResponse.next();
      }
    } catch {}
  }
  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Rodgers Fertilizer staging"' },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
