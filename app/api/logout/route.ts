import { NextResponse } from "next/server";

const COOKIE_NAME = "heap_auth";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    path: "/",
    maxAge: 0,
    sameSite: "lax",
  });

  return response;
}
