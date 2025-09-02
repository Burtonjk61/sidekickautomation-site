import FounderIntro from "@/components/FounderIntro";
import StrongCTA from "@/components/StrongCTA";

export const metadata = {
  title: "About | Sidekick Automation",
};

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">About Sidekick Automation</h1>
        <p className="opacity-80">
          We believe small and mid-size businesses should have access to the
          same productivity gains big companies get from AI — without the
          jargon, high costs, or endless trial-and-error.
        </p>
      </section>

      {/* Your founder section */}
      <FounderIntro />

      {/* A strong CTA at the bottom */}
      <StrongCTA />
    </main>
  );
}
