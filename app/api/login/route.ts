import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "heap_auth";
const PASSWORD = process.env.SITE_PASSWORD || "heap2026";
const USERNAME = process.env.SITE_USERNAME || "Chris Waite";

export async function POST(req: NextRequest) {
  let username = "";
  let password = "";

  const contentType = req.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const body = await req.json();
    username = typeof body.username === "string" ? body.username : typeof body.loginUser === "string" ? body.loginUser : "";
    password = typeof body.password === "string" ? body.password : typeof body.loginPass === "string" ? body.loginPass : "";
  } else {
    const bodyText = await req.text();
    const data = new URLSearchParams(bodyText);
    username = data.get("username") ?? data.get("loginUser") ?? "";
    password = data.get("password") ?? data.get("loginPass") ?? "";
  }

  const isForm = contentType.includes("application/x-www-form-urlencoded");
  if (username !== USERNAME || password !== PASSWORD) {
    if (isForm) {
      return NextResponse.redirect(new URL("/login?error=invalid", req.url), 303);
    }
    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.redirect(new URL("/", req.url), 303);
  response.cookies.set({
    name: COOKIE_NAME,
    value: PASSWORD,
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
  });

  return response;
}
