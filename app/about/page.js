export const metadata = {
  title: "About — Sidekick Automation",
  description:
    "Sidekick Automation helps small and mid-size businesses get more done with AI. We simplify technology so your team saves time and grows profit.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold">About Sidekick Automation</h1>
      <p className="text-white/70 mt-4 text-lg">
        We believe small and mid-size businesses should have access to the same
        productivity gains big companies get from AI—without the jargon, high
        costs, or endless trial-and-error.
      </p>

      <div className="card mt-10">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-white/80 mt-3">
          To give every business owner a trusted <b>AI sidekick</b>—helping them
          automate the busywork, see the numbers clearly, and focus on growth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="card">
          <h3 className="font-semibold">🚀 Practical first</h3>
          <p className="text-white/70 mt-2">
            We don’t sell hype. We deliver <b>quick wins</b> you can use right away.
          </p>
        </div>
        <div className="card">
          <h3 className="font-semibold">🤝 People friendly</h3>
          <p className="text-white/70 mt-2">
            Tools should make work easier, not harder. We teach your team how to
            actually <b>use</b> AI comfortably.
          </p>
        </div>
        <div className="card">
          <h3 className="font-semibold">🔍 Transparent</h3>
          <p className="text-white/70 mt-2">
            Clear explanations, simple playbooks, and open pricing. No black box
            consulting.
          </p>
        </div>
      </div>

      <div className="card mt-12 text-center">
        <h2 className="text-2xl font-semibold">Why work with us?</h2>
        <p className="text-white/80 mt-3">
          Because you don’t need another vendor—you need a partner who shows you
          where AI <b>actually saves time and money</b> in your business, then
          helps you make it stick.
        </p>
        <a href="/book" className="btn btn-primary mt-6">
          📅 Book Your Free AI Audit
        </a>
      </div>
    </div>
  );
}
