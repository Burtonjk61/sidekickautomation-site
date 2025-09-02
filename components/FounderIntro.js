import Image from "next/image";
import Link from "next/link";

export default function FounderIntro() {
  return (
    <section className="py-16 bg-black/40">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <Image
            src="/dj-burton.jpg"
            alt="DJ Burton - Founder of Sidekick Automation"
            width={400}
            height={400}
            className="rounded-lg shadow object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Meet DJ Burton</h2>
          <p className="mb-4">
            After years in manufacturing maintenance, I saw how much time gets
            wasted on reports, approvals, and repetitive busywork. I started
            Sidekick Automation to give small and mid-size businesses the same
            productivity tools big companies use — without the high costs or
            endless trial-and-error.
          </p>
          <p className="mb-6">
            My mission is simple: help business owners save time, cut stress, and
            focus on growth by making AI tools approachable and practical.
          </p>
          <Link href="/book" className="btn btn-primary">📅 Book a Call</Link>
        </div>
      </div>
    </section>
  );
}
