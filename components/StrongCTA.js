import Link from "next/link";

export default function StrongCTA() {
  return (
    <section className="py-16 text-center">
      <h3 className="text-2xl font-bold mb-3">
        Ready to save time every week?
      </h3>
      <p className="opacity-80 mb-6">
        Book a free 20-minute call. We’ll find 3 easy wins you can use right away.
      </p>
      <Link href="/book" className="btn btn-primary">
        📅 Book Your Free AI Audit
      </Link>
    </section>
  );
}
