import Link from "next/link";
export default function CTA(){return(<section className="card mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div><h3 className="text-white">Ready to save time every week?</h3><p className="text-white/70 mt-2">Book a free 20‑minute call. We’ll find 3 easy wins.</p></div>
<div className="flex gap-3"><Link href="/contact" className="btn btn-primary">Book a Call</Link><Link href="/services" className="btn btn-outline">See Services</Link></div>
</section>);}
