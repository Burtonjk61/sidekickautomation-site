"use client";
import { useEffect, useState } from "react";
export default function AdminMail(){
  const [emails,setEmails]=useState([]); const [loading,setLoading]=useState(true);
  useEffect(()=>{(async()=>{const res=await fetch("/api/emails"); const d=await res.json(); setEmails(d.emails||[]); setLoading(false);})()},[]);
  if(loading) return <div className="mt-10">Loading…</div>;
  return(<div className="mt-8"><div className="flex items-center justify-between"><h1>Inbox</h1><a href="/admin/send" className="btn btn-primary">Compose</a></div>
  <div className="mt-6 grid gap-4">{emails.length===0 && <div className="text-white/70">No emails yet.</div>}{emails.map(e=>(<a key={e.id} href={`/admin/mail/${e.id}`} className="card hover:bg-white/10 transition"><div className="text-sm text-white/60">{new Date(e.created_at).toLocaleString()}</div><div className="font-semibold mt-1">{e.subject||"(no subject)"}</div><div className="text-white/70 mt-1">From: {e.from_address}</div></a>))}</div></div>);
}
