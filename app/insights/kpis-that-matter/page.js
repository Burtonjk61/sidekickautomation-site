export const metadata = {
  title: "Dashboards that Matter: KPIs You Should Actually Track — Sidekick Automation",
  description:
    "Cut the noise and track the few numbers that drive decisions and profit.",
};

export default function KPIsThatMatter() {
  return (
    <article className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold">Dashboards that Matter: KPIs You Should Actually Track</h1>
      <p className="text-white/70 mt-4">
        Too many dashboards look impressive but don’t change decisions. Let’s fix
        that. The right dashboard shows <b>what’s winning, what’s slipping, and
        what to do next</b>.
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">The Short List (start here)</h2>
        <ul className="list-disc list-inside text-white/80 mt-2 space-y-2">
          <li><b>Leads → Opportunities → Closed Won</b> (conversion funnel)</li>
          <li><b>Revenue by product/segment</b> (focus where it matters)</li>
          <li><b>Cycle time</b> (from request to delivered)</li>
          <li><b>On-time delivery / SLA</b> (customer experience)</li>
          <li><b>Top 5 risks or blockers</b> (qualitative but vital)</li>
        </ul>
        <p className="text-white/70 mt-3">
          If a metric doesn’t trigger action when it moves, it doesn’t belong on
          the front page.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Design rules for useful dashboards</h2>
        <ul className="list-disc list-inside text-white/80 mt-2">
          <li>One screen, no scrolling for the core KPIs</li>
          <li>Green/amber/red status, not just numbers</li>
          <li>Owner + next action for every red item</li>
          <li>Weekly snapshot saved for trend lines</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">How we build it</h2>
        <p className="text-white/80 mt-2">
          We connect your tools, clean the data, and deploy a dashboard your
          leaders will actually use—plus documentation so your team can maintain
          it without us.
        </p>
      </section>

      <div className="card mt-10">
        <h3 className="text-xl font-semibold">Free KPI &amp; Dashboard Review</h3>
        <p className="text-white/80 mt-2">
          We’ll review your current reports and propose a simpler, action-oriented
          dashboard. You’ll leave with a prioritized KPI list and a rollout plan.
        </p>
        <a href="/book" className="btn btn-primary mt-4">📅 Book your review</a>
        <a href="/contact" className="btn btn-outline mt-4 ml-3">Email us</a>
      </div>
    </article>
  );
}
