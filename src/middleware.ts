import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;

  // 1. Jika mencoba ke /admin tapi tidak ada session, lempar ke /login
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      await decrypt(session);
      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // 2. Jika sudah login tapi malah buka /login, lempar ke /admin
  if (request.nextUrl.pathname.startsWith("/login") && session) {
    try {
      await decrypt(session);
      return NextResponse.redirect(new URL("/admin", request.url));
    } catch (e) {
      return NextResponse.next();
    }
  }
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};