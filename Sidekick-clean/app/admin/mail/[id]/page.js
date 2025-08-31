import { supabase } from "@/lib/supabase"; import Link from "next/link"; export const dynamic="force-dynamic";
export default async function ReadEmail({params}){ const {id}=params; const {data,error}=await supabase.from("emails").select("*").eq("id",id).single();
 if(error) return <div className="mt-10">Error: {error.message}</div>; if(!data) return <div className="mt-10">Not found</div>;
 return(<div className="mt-8"><Link href="/admin/mail" className="text-brand-blue">← Back to inbox</Link><div className="card mt-4">
 <div className="text-sm text-white/60">{new Date(data.created_at).toLocaleString()}</div><h1 className="mt-2">{data.subject||"(no subject)"}</h1>
 <div className="mt-2 text-white/70">From: {data.from_address}</div><div className="mt-6 whitespace-pre-wrap">{data.text||data.html}</div></div></div>);
}
