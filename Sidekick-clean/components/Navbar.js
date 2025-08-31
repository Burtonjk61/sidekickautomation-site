"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 backdrop-blur bg-black/50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Text */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"   // ← now PNG
            alt="Sidekick Automation"
            width={36}
            height={36}
            priority
          />
          <span className="font-bold text-lg">Sidekick Automation</span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/about" className="hover:text-brand-blue">About</Link>
          <Link href="/services" className="hover:text-brand-blue">Services</Link>
          <Link href="/insights" className="hover:text-brand-blue">Insights</Link>
          <Link href="/contact" className="hover:text-brand-blue">Contact</Link>
          <Link href="/admin" className="hover:text-brand-blue">Admin</Link>
          <Link href="/book" className="btn btn-primary ml-2">📅 Book a Call</Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/insights" onClick={() => setMenuOpen(false)}>Insights</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/admin" onClick={() => setMenuOpen(false)}>Admin</Link>
          <Link href="/book" className="btn btn-primary mt-2" onClick={() => setMenuOpen(false)}>
            📅 Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}
