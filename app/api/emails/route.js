import { NextResponse } from "next/server"; import { supabase } from "@/lib/supabase";
export const dynamic="force-dynamic";
export async function GET(){ const {data,error}=await supabase.from("emails").select("*").order("created_at",{ascending:false}).limit(200);
 if(error) return NextResponse.json({error:error.message},{status:500}); return NextResponse.json({emails:data||[]}); }
