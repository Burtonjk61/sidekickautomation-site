export const metadata={title:"Contact — Sidekick Automation"};
export default function Contact(){return(<><h1>Contact</h1><p className="text-white/70 mt-2">Tell us what you need. We reply within one business day.</p>
<form action="https://formspree.io/f/your_form_id" method="POST" className="card mt-6 grid gap-4 max-w-xl">
<label className="grid gap-2"><span className="text-sm text-white/80">Your name</span><input name="name" required className="bg-black/20 border border-white/10 rounded-xl px-4 py-3"/></label>
<label className="grid gap-2"><span className="text-sm text-white/80">Email</span><input type="email" name="email" required className="bg-black/20 border border-white/10 rounded-xl px-4 py-3"/></label>
<label className="grid gap-2"><span className="text-sm text-white/80">Message</span><textarea name="message" rows="5" required className="bg-black/20 border border-white/10 rounded-xl px-4 py-3"></textarea></label>
<button className="btn btn-primary w-fit" type="submit">Send</button></form>
<div className="text-white/60 text-sm mt-4">Prefer email? Write us at <b>info@sidekickautomation.com</b>.</div></>);}
