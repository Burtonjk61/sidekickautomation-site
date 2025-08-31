import { NextResponse } from "next/server"; import { supabase } from "@/lib/supabase";
export async function POST(req){
  const secret=req.headers.get("x-inbound-secret"); if(secret!==process.env.INBOUND_SECRET){ return NextResponse.json({error:"forbidden"},{status:403});}
  const body=await req.json(); const {from,to,subject,text,html}=body||{};
  const {data,error}=await supabase.from("emails").insert({from_address:from||"",to_address:to||"",subject:subject||"",text:text||"",html:html||""}).select().single();
  if(error) return NextResponse.json({error:error.message},{status:500}); return NextResponse.json({ok:true,id:data.id});
}
