"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");

    // Send FormData (no manual headers)
    const fd = new FormData();
    fd.append("password", password);

    const res = await fetch("/api/login", { method: "POST", body: fd });

    if (res.ok) {
      // success -> go to your first admin page
      router.push("/admin/mail");
    } else {
      const data = await res.json().catch(() => ({}));
      setErr(data.message || "Login failed");
    }
  }

  return (
    <main className="max-w-sm mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
          className="w-full rounded border px-3 py-2 text-black"
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Sign in
        </button>
        {err && <p className="text-red-500 text-sm">{err}</p>}
      </form>
    </main>
  );
}
