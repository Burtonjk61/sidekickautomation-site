import Script from "next/script";

export const metadata = { title: "Book a Call — Sidekick Automation" };

export default function Book() {
  const CALENDLY_URL = "https://calendly.com/sidekickautomation-info/30min";

  return (
    <>
      <h1 className="text-4xl font-bold">Free 20-Minute AI Audit Call</h1>
      <p className="text-white/70 mt-2 max-w-2xl">
        On this quick call, we’ll uncover 3 simple ways your business can start
        saving time and money with AI — no pressure, just value.
      </p>

      <ul className="mt-6 space-y-3 text-white/80 list-disc list-inside">
        <li>✅ Identify 3 tasks you can automate immediately</li>
        <li>✅ Learn how other small businesses are using AI today</li>
        <li>✅ Get a clear action plan (even if you don’t hire us)</li>
      </ul>

      {/* Calendly inline widget */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div className="card mt-8">
        <div
          className="calendly-inline-widget"
          data-url={`${CALENDLY_URL}?hide_gdpr_banner=1`}
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>

      <p className="text-sm text-white/60 mt-6">
        All calls are private. You’ll get a confirmation email after booking.
      </p>
    </>
  );
}
