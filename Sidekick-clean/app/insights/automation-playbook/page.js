export const metadata = {
  title: "Automation Playbook: Reporting in Minutes, Not Hours — Sidekick Automation",
  description:
    "A simple framework to automate weekly reporting so it runs in minutes with one click.",
};

export default function AutomationPlaybook() {
  return (
    <article className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold">Automation Playbook: Reporting in Minutes, Not Hours</h1>
      <p className="text-white/70 mt-4">
        If your team spends Fridays cobbling together spreadsheets and slides, this
        playbook is for you. Most reporting can be reduced to a <b>one-click run</b>
        that emails a clean PDF and updates your dashboard.
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">The 4-Step Reporting Loop</h2>
        <ol className="list-decimal list-inside text-white/80 mt-3 space-y-2">
          <li><b>Collect</b> — pull data from your apps, sheets, or exports.</li>
          <li><b>Clean</b> — fix formats, names, and dates; dedupe rows.</li>
          <li><b>Summarize</b> — totals, trends, exceptions, and KPIs.</li>
          <li><b>Publish</b> — update the dashboard + email a PDF to stakeholders.</li>
        </ol>
        <p className="text-white/70 mt-3">
          Tools can be no-code or light code. The magic is the <i>repeatable</i> pipeline.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Before vs After</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-3">
          <div className="card">
            <h3 className="font-semibold">Before</h3>
            <ul className="list-disc list-inside text-white/70 mt-2">
              <li>Copy/paste between apps</li>
              <li>Manual formulas and broken links</li>
              <li>Late or inconsistent reports</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">After</h3>
            <ul className="list-disc list-inside text-white/70 mt-2">
              <li>One click (or scheduled) pipeline</li>
              <li>Clean, consistent numbers every week</li>
              <li>Auto-emailed PDF + updated dashboard</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Why it pays off</h2>
        <ul className="list-disc list-inside text-white/80 mt-2">
          <li><b>80% less time</b> on reporting admin</li>
          <li>Leadership gets results by Monday 9am</li>
          <li>Teams focus on action, not formatting</li>
        </ul>
      </section>

      <div className="card mt-10">
        <h3 className="text-xl font-semibold">We’ll build the first pipeline with you</h3>
        <p className="text-white/80 mt-2">
          In a short engagement, we design your reporting flow, implement it, and
          provide a mini “owner’s manual” so you can run it yourselves.
        </p>
        <a href="/book" className="btn btn-primary mt-4">🚀 Start your first automation</a>
        <a href="/contact" className="btn btn-outline mt-4 ml-3">Ask a question</a>
      </div>
    </article>
  );
}
