"use client";
import Link from "next/link";

export default function ContactClient() {
  return (
    <section className="mt-10 md:mt-16">
      <h1>Contact</h1>
      <p className="text-white/70 mb-6">
        Tell us what you need. We reply within one business day.
      </p>

      <form
        action="https://formspree.io/f/mgvllqzo"
        method="POST"
        className="bg-white/5 rounded-2xl border border-white/10 p-6 max-w-2xl"
      >
        <label className="block mb-4">
          <span className="block mb-2">Your name</span>
          <input
            name="name"
            type="text"
            required
            className="w-full rounded-lg bg-black/30 border border-white/10 p-3 outline-none"
            placeholder="Jane Doe"
          />
        </label>

        <label className="block mb-4">
          <span className="block mb-2">Email</span>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-lg bg-black/30 border border-white/10 p-3 outline-none"
            placeholder="you@company.com"
          />
        </label>

        <label className="block mb-6">
          <span className="block mb-2">Message</span>
          <textarea
            name="message"
            rows={6}
            required
            className="w-full rounded-lg bg-black/30 border border-white/10 p-3 outline-none"
            placeholder="How can we help?"
          />
        </label>

        <button type="submit" className="btn btn-primary">Send</button>

        <p className="text-white/50 text-sm mt-4">
          Prefer email? Write us at{" "}
          <Link href="mailto:info@sidekickautomation.com" className="underline">
            info@sidekickautomation.com
          </Link>
          .
        </p>
      </form>
    </section>
  );
}
