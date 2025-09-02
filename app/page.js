"use client";
import Image from "next/image";
import Link from "next/link";

// ✅ add these imports at the very top
import SocialProof from "@/components/SocialProof";
import StrongCTA from "@/components/StrongCTA";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="mt-10 md:mt-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1>Your AI partner in productivity</h1>
            <p className="text-white/70 mt-4 max-w-xl">
              We teach and build AI tools that cut busywork, speed up reporting,
              and make your team smile.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="btn btn-primary">
                Get a Free Quote
              </Link>
              <Link href="/services" className="btn btn-outline">
                What we do
              </Link>
            </div>
          </div>

          {/* Logo Showcase */}
          <div className="bg-white/5 rounded-2xl border border-white/10 p-6 flex items-center justify-center">
            <Image
              src="/icon.png"   // ✅ use the working PNG
              alt="Sidekick Automation logo"
              width={260}
              height={260}
              priority
            />
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="mt-16">
        <h2>What we help with</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="card">
            <h3>AI Training Workshops</h3>
            <p>ChatGPT, AI in Excel, and smart email automation.</p>
          </div>
          <div className="card">
            <h3>Workflow Automation</h3>
            <p>Reports, scheduling, approvals — hours saved weekly.</p>
          </div>
          <div className="card">
            <h3>Dashboards & Apps</h3>
            <p>Operations dashboards and internal tools.</p>
          </div>
        </div>
      </section>

      {/* ✅ New trust + call-to-action sections */}
      <SocialProof />
      <StrongCTA />
    </>
  );
}
