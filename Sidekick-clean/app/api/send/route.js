import { NextResponse } from "next/server";
export async function POST(req){ const f=await req.formData(); const to=f.get("to"); const subject=f.get("subject")||""; const text=f.get("text")||"";
 if(!to) return NextResponse.json({error:"Missing 'to'"},{status:400});
 const r=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Authorization":`Bearer ${process.env.RESEND_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({from:process.env.RESEND_FROM,to:[to],subject,text})});
 const data=await r.json(); if(!r.ok) return NextResponse.json({error:data?.message||"Send failed"},{status:500});
 return NextResponse.redirect(new URL("/admin/mail", req.url)); }
