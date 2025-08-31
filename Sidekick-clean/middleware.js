import { NextResponse } from "next/server";

export function middleware(req) {
  const url = new URL(req.url);

  // ✅ Allow the login page itself to load without a cookie
  const isAdminArea = url.pathname.startsWith("/admin");
  const isLoginPage = url.pathname === "/admin/login";

  if (isAdminArea && !isLoginPage) {
    const cookie = req.cookies.get("admin")?.value;
    if (!cookie || cookie !== process.env.ADMIN_PASSWORD) {
      // not logged in -> send to login
      const loginUrl = new URL("/admin/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
