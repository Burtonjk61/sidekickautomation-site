export const metadata = {
  title: "5 Ways Small Businesses Save Time with AI — Sidekick Automation",
  description:
    "Practical, low-risk AI wins that save hours every week for small and mid-sized businesses.",
};

export default function SaveTimeWithAI() {
  return (
    <article className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold">5 Ways Small Businesses Save Time with AI</h1>
      <p className="text-white/70 mt-4">
        You don’t need a lab or a big budget to get value from AI. Most teams
        can win back <b>5–10 hours per week</b> with simple, safe improvements.
        Here are five that work right away.
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">1) Faster Email &amp; Messaging</h2>
        <p className="text-white/80 mt-2">
          Draft replies, summarize long threads, and turn bullet notes into
          clear, professional messages. Your “blank page” time drops to minutes.
        </p>
        <ul className="list-disc list-inside text-white/70 mt-3">
          <li>Auto-draft responses to common customer questions.</li>
          <li>Summarize long emails into key points and next steps.</li>
          <li>Standardize tone and quality across your team.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">2) AI in Excel/Sheets</h2>
        <p className="text-white/80 mt-2">
          Explain a formula in plain English and get the working version.
          Convert messy data into clean columns. Generate pivot summaries on
          command.
        </p>
        <ul className="list-disc list-inside text-white/70 mt-3">
          <li>“Split names, fix casing, remove duplicates.”</li>
          <li>“Build a weekly sales summary by rep and product.”</li>
          <li>“Create a chart that highlights anything below target.”</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">3) Document Prep &amp; Proposals</h2>
        <p className="text-white/80 mt-2">
          Turn a template + client notes into a polished proposal or SOW.
          Keep your brand voice and reduce typos with consistent checklists.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">4) Meeting Notes → Action Items</h2>
        <p className="text-white/80 mt-2">
          Record the call, get a clean summary, and auto-capture tasks with
          owners and due dates. Less “what did we decide?”; more progress.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">5) Simple Workflows (No-Code)</h2>
        <p className="text-white/80 mt-2">
          Connect forms → email → sheet → CRM with a few clicks. The robot does
          the copy/paste, not your team.
        </p>
      </section>

      <div className="card mt-10">
        <h3 className="text-xl font-semibold">What this means for you</h3>
        <ul className="list-disc list-inside text-white/80 mt-3">
          <li><b>10+ hours/week saved</b> across a small team.</li>
          <li>Fewer errors and faster follow-ups = happier customers.</li>
          <li>Staff focus on revenue and service, not admin tasks.</li>
        </ul>
      </div>

      <div className="card mt-8">
        <h3 className="text-xl font-semibold">Next step: a free 20-minute audit</h3>
        <p className="text-white/80 mt-2">
          We’ll look at your current tools and identify <b>3 quick wins</b> you
          can roll out this week—whether you work with us or not.
        </p>
        <a href="/book" className="btn btn-primary mt-4">📅 Book your free audit</a>
        <a href="/contact" className="btn btn-outline mt-4 ml-3">Talk to us</a>
      </div>
    </article>
  );
}
