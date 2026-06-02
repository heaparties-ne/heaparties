"use client";

import Image from "next/image";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BrandLogo from "../../components/BrandLogo";

const invalidLoginMessage = "Incorrect username or password. Try again.";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState(() =>
    searchParams.get("error") === "invalid" ? invalidLoginMessage : "",
  );
  const [loading, setLoading] = useState(false);

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
      setError(invalidLoginMessage);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-12 text-slate-100">
      <div className="absolute inset-0">
        <Image
          src="/images/images/image8.jpeg"
          alt="Wedding celebration"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="light light-1 absolute inset-0" />
          <div className="light light-2 absolute inset-0" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-xl rounded-[2rem] border border-white/15 bg-slate-950/80 p-10 shadow-[0_30px_80px_-30px_rgba(139,92,246,0.9)] ring-1 ring-violet-500/20 backdrop-blur-xl">
        <div className="mb-10 text-center">
          <div className="mb-4 flex justify-center">
            <BrandLogo showName={false} markClassName="p-2" />
          </div>
          <p className="text-sm uppercase tracking-[0.35em] text-violet-200 mb-4">Private preview</p>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            HAPPILY EVER<br />
            <span className="text-violet-300">AFTER-PARTIES</span>
          </h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Enter your password to view the site. This page protects the preview while the build is online.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 text-xs text-gray-200 sm:flex-row">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-black/35 px-4 py-2">
              25 years DJ experience
            </span>
            <span className="inline-flex items-center rounded-full border border-white/20 bg-black/35 px-4 py-2">
              PAT tested equipment
            </span>
            <span className="inline-flex items-center rounded-full border border-white/20 bg-black/35 px-4 py-2">
              £5m public liability
            </span>
          </div>
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
            className="w-full rounded-3xl bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Checking..." : "Unlock Preview"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
