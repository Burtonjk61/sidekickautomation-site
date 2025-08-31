import CTA from "../../components/CTA";
export const metadata={title:"Services — Sidekick Automation"};
const items=[{title:"AI Training Workshops",bullets:["ChatGPT at work","Excel + AI","Writing co‑pilot skills"]},{title:"Workflow Automation",bullets:["Report generation","Data entry & approvals","Bots to log in and export"]},{title:"Dashboards & Apps",bullets:["KPI dashboards","Internal tools","Python/JS glue"]},{title:"Ongoing Sidekick Plan",bullets:["Monthly tweaks","Fast support","Quarterly training"]}];
export default function ServicesPage(){return(<><h1>Services</h1><p className="text-white/70 mt-2">Start small and grow together.</p>
<div className="grid md:grid-cols-2 gap-6 mt-8">{items.map((s,i)=>(<div key={i} className="card"><h3>{s.title}</h3><ul className="mt-3 text-white/80 list-disc list-inside">{s.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul></div>))}</div><CTA/></>);}
