export default function SocialProof() {
  return (
    <section className="py-16 bg-black/40 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Why Businesses Choose Sidekick Automation
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white/5 rounded-lg shadow text-left">
          <h3 className="font-semibold">⭐ Quick Wins</h3>
          <p className="text-sm mt-2">
            We deliver results you can see right away — not months later.
          </p>
        </div>

        <div className="p-6 bg-white/5 rounded-lg shadow text-left">
          <h3 className="font-semibold">🤝 Easy to Work With</h3>
          <p className="text-sm mt-2">
            No jargon, no black-box consulting. Just tools your team can actually use.
          </p>
        </div>

        <div className="p-6 bg-white/5 rounded-lg shadow text-left">
          <h3 className="font-semibold">💡 Built for Small Business</h3>
          <p className="text-sm mt-2">
            Get the same productivity gains big companies use, at a fraction of the cost.
          </p>
        </div>
      </div>
    </section>
  );
}
