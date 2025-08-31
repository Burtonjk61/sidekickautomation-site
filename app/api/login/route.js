// app/api/login/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  let password = "";

  try {
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      // If someone posts JSON: { password: "..." }
      const body = await req.json();
      password = body?.password || "";
    } else {
      // Default (recommended): send FormData from the login page
      const form = await req.formData();
      password = form.get("password") || "";
    }
  } catch {
    // ignore parse errors, we'll fail auth below
  }

  const ok =
    password &&
    process.env.ADMIN_PASSWORD &&
    password === process.env.ADMIN_PASSWORD;

  if (ok) {
    // optional: set a simple cookie so middleware/pages know you're signed in
    const res = NextResponse.json({ ok: true });
    res.cookies.set("auth", "1", {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });
    return res; // 200
  }

  return NextResponse.json({ ok: false, message: "Invalid password" }, { status: 401 });
}

// (Optional) Handy ping so you can GET the route during testing
export async function GET() {
  return NextResponse.json({ ok: true, route: "login" });
}
