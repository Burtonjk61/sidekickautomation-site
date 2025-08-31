// app/api/send-email/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, where: "app router" });
}

export async function POST(req: Request) {
  let data: any = {};
  try { data = await req.formData(); } catch {}
  // For now, just confirm we got here.
  return NextResponse.json({ ok: true, received: Object.fromEntries(data) });
}
