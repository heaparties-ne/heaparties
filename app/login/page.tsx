"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const errorQuery = searchParams.get("error");

  useEffect(() => {
    if (!error && errorQuery === "invalid") {
      setError("Incorrect username or password. Try again.");
    }
  }, [error, errorQuery]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    setLoading(false);

    if (response.ok) {
      router.push("/");
    } else {
      setError("Incorrect username or password. Try again.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-[2rem] border border-violet-700 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/70 p-10 shadow-[0_30px_80px_-30px_rgba(139,92,246,0.9)] ring-1 ring-violet-500/20 backdrop-blur-xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-violet-300 mb-4">Private preview</p>
          <h1 className="text-4xl font-bold tracking-tight text-white">Happily Ever After-Parties NE LTD</h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Enter your password to view the site. This page protects the preview while the build is online.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off" method="post" action="/api/login/" encType="application/x-www-form-urlencoded" target="_self">
          <label className="block text-slate-300">
            <span className="text-sm uppercase tracking-[0.24em]">Username</span>
            <input
              name="loginUser"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="off"
              className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-violet-400"
              placeholder="Chris Waite"
            />
          </label>
          <label className="block text-slate-300">
            <span className="text-sm uppercase tracking-[0.24em]">Password</span>
            <input
              name="loginPass"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="new-password"
              className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-violet-400"
              placeholder="Enter password"
            />
          </label>

          {error ? <p className="text-sm text-rose-400">{error}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-3xl bg-violet-600 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-950 transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Checking..." : "Unlock Preview"}
          </button>
        </form>
      </div>
    </main>
  );
}
