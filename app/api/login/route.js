import { NextResponse } from "next/server";
export async function POST(req){ const f=await req.formData(); const pw=f.get("password");
 if(pw && pw===process.env.ADMIN_PASSWORD){ const res=NextResponse.redirect(new URL("/admin/mail", req.url)); res.cookies.set("admin", process.env.ADMIN_PASSWORD, {httpOnly:true,sameSite:"lax",path:"/"}); return res; }
 return NextResponse.redirect(new URL("/admin/login?error=1", req.url)); }
