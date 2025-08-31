export const metadata={title:"Compose — Sidekick Automation"};
export default function Compose(){return(<div className="max-w-2xl mx-auto mt-10 card"><h1>Compose</h1>
<form method="POST" action="/api/send" className="grid gap-3 mt-4">
<input name="to" placeholder="To (email)" className="bg-black/20 border border-white/10 rounded-xl px-4 py-3" required/>
<input name="subject" placeholder="Subject" className="bg-black/20 border border-white/10 rounded-xl px-4 py-3"/>
<textarea name="text" rows="10" placeholder="Message" className="bg-black/20 border border-white/10 rounded-xl px-4 py-3"></textarea>
<button className="btn btn-primary w-fit" type="submit">Send</button></form></div>);}
