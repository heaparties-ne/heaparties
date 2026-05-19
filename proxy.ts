import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const LOGIN_PATH = "/login";
const ALLOWED_PATHS = ["/api/login", "/api/login/", "/favicon.ico"];
const COOKIE_NAME = "heap_auth";
const PASSWORD = process.env.SITE_PASSWORD || "heap2026";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/images") ||
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith("/api/login") ||
    ALLOWED_PATHS.includes(pathname) ||
    pathname === LOGIN_PATH
  ) {
    return NextResponse.next();
  }

  const authCookie = req.cookies.get(COOKIE_NAME)?.value;
  if (authCookie === PASSWORD) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(LOGIN_PATH, req.url));
}

export const config = {
  matcher: ["/((?!login|api/login|_next|static|favicon.ico).*)"],
};
