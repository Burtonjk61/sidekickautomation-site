"use client";

import { useState } from "react";

export const metadata = {
  title: "Contact | Sidekick Automation",
};

export default function ContactPage() {
  const [status, setStatus] = useState(null); // "ok" | "error" | null
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: if filled, it's a bot
    if (data.get("website")) {
      setLoading(false);
      return;
    }

    const res = await fetch("https://formspree.io/f/mgvllqzo", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });

    if (res.ok) {
      form.reset();
      setStatus("ok");
    } else {
      setStatus("error");
    }
    setLoading(false);
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Contact</h1>
      <p className="opacity-80 mb-8">
        Tell us what you need. We reply within one business day.
      </p>

      <form
        onSubmit={onSubmit}
        className="space-y-4 p-6 rounded-lg bg-white/5 border border-white/10"
      >
        {/* Honeypot — leave hidden */}
        <input type="text" name="website" className="hidden" tabIndex={-1} />

        <label className="block">
          <span className="text-sm">Your name</span>
          <input
            required
            name="name"
            className="mt-1 w-full rounded-md bg-black/30 border border-white/10 p-3"
            placeholder="Jane Doe"
          />
        </label>

        <label className="block">
          <span className="text-sm">Email</span>
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-md bg-black/30 border border-white/10 p-3"
            placeholder="you@company.com"
          />
        </label>

        <label className="block">
          <span className="text-sm">Message</span>
          <textarea
            required
            name="message"
            rows={5}
            className="mt-1 w-full rounded-md bg-black/30 border border-white/10 p-3"
            placeholder="How can we help?"
          />
        </label>

        {/* Optional: subject that will appear in your email inbox */}
        <input type="hidden" name="_subject" value="New message from SidekickAutomation.com" />

        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {status === "ok" && (
          <p className="text-green-400 mt-2">
            ✅ Message sent! We’ll get back to you within one business day.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-2">
            ❌ Sorry—something went wrong. Please email{" "}
            <a className="underline" href="mailto:info@sidekickautomation.com">
              info@sidekickautomation.com
            </a>.
          </p>
        )}
      </form>

      {/* Trust boosters */}
      <div className="mt-8 text-center space-y-1">
        <p>
          📱 Call or text:{" "}
          <a className="hover:underline" href="tel:18126643501">
            812-664-3501
          </a>
        </p>
        <p>📍 Based in Mt. Carmel, Illinois</p>
        <p>
          📧 Email:{" "}
          <a className="hover:underline" href="mailto:info@sidekickautomation.com">
            info@sidekickautomation.com
          </a>
        </p>
      </div>
    </main>
  );
}
