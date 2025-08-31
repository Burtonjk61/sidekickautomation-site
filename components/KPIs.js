export default function KPIs(){
  const items=[{value:"80%",label:"Less time on reporting"},{value:"10+ hrs",label:"Saved per team / week"},{value:"3 days",label:"First automation live"},{value:"99.9%",label:"Uptime on hosted tools"}];
  return(<section className="mt-16"><div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {items.map((k,i)=>(<div key={i} className="card text-center"><div className="text-3xl md:text-4xl font-extrabold text-brand-teal">{k.value}</div><div className="text-white/70 mt-1">{k.label}</div></div>))}
  </div></section>);
}
