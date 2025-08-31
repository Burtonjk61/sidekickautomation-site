export const metadata={title:"Admin Login — Sidekick Automation"};
export default function AdminLogin(){return(<div className="max-w-sm mx-auto mt-16 card"><h1>Admin Login</h1>
<form method="POST" action="/api/login" className="grid gap-3 mt-4">
<input type="password" name="password" placeholder="Password" className="bg-black/20 border border-white/10 rounded-xl px-4 py-3"/>
<button className="btn btn-primary" type="submit">Sign in</button></form></div>);}
