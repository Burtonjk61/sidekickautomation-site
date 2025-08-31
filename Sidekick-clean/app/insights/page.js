export const metadata = {
  title: "Insights — Sidekick Automation",
  description: "Short, helpful reads about AI at work.",
};

const posts = [
  {
    title: "5 Ways Small Businesses Save Time with AI",
    excerpt:
      "From emails to Excel, here are practical wins you can use this week.",
    href: "/insights/save-time-with-ai",
  },
  {
    title: "Automation Playbook: Reporting in Minutes, Not Hours",
    excerpt:
      "Turn a weekly grind into a one-click export and send.",
    href: "/insights/automation-playbook",
  },
  {
    title: "Dashboards that Matter: KPIs You Should Actually Track",
    excerpt:
      "Less noise, more decisions. Here’s our short list.",
    href: "/insights/kpis-that-matter",
  },
];

export default function Insights() {
  return (
    <>
      <h1>Insights</h1>
      <p className="text-white/70 mt-2">
        Short, helpful reads about AI at work.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {posts.map((p, i) => (
          <a
            key={i}
            href={p.href}
            className="card hover:bg-white/10 transition"
          >
            <h3>{p.title}</h3>
            <p className="text-white/70 mt-2">{p.excerpt}</p>
            <span className="text-brand-blue text-sm mt-3 inline-block">
              Read →
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
