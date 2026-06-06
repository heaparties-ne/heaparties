"use client";

import Image from "next/image";
import { Suspense, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import BrandLogo from "../../components/BrandLogo";

const invalidLoginMessage = "Incorrect username or password. Try again.";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") || "/";
  const [error, setError] = useState(() =>
    searchParams.get("error") === "invalid" ? invalidLoginMessage : "",
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, next: nextPath }),
      });

      if (!response.ok) {
        setError(invalidLoginMessage);
        return;
      }

      const data = (await response.json()) as { redirectTo?: string };
      window.location.replace(data.redirectTo || nextPath || "/");
    } catch {
      setError(invalidLoginMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <Image
          src="/images/images/north-east-wedding-dj-hero.jpeg"
          alt="Wedding DJ decks overlooking a celebration"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="light light-1 absolute inset-0" />
          <div className="light light-2 absolute inset-0" />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <section className="text-center lg:text-left">
          <div className="mb-6 flex justify-center lg:justify-start">
            <BrandLogo showName={false} />
          </div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-violet-200">
            Happily Ever After-Parties NE
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            New website<br />
            <span className="text-violet-300">coming soon.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-slate-200 lg:mx-0">
            A fresh wedding and event DJ experience for North East England, built around brilliant music,
            packed dancefloors and celebrations that feel completely yours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-200 lg:justify-start">
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
        </section>

        <aside className="mx-auto w-full max-w-md rounded-lg border border-white/10 bg-slate-950/75 p-6 shadow-[0_24px_70px_-35px_rgba(139,92,246,0.7)] backdrop-blur-xl sm:p-8">
          <div className="mb-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Preview access
            </p>
            <h2 className="text-xl font-semibold text-white">Already on the guestlist?</h2>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
            <label className="block text-slate-300">
              <span className="sr-only">Username</span>
              <input
                name="loginUser"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                autoComplete="username"
                autoCapitalize="none"
                spellCheck={false}
                className="w-full rounded-lg border border-slate-700 bg-slate-950/90 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
                placeholder="Username"
              />
            </label>
            <label className="block text-slate-300">
              <span className="sr-only">Password</span>
              <input
                name="loginPass"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    formRef.current?.requestSubmit();
                  }
                }}
                autoComplete="current-password"
                enterKeyHint="go"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/90 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
                placeholder="Password"
              />
            </label>

            {error ? <p className="text-sm text-rose-400">{error}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Checking..." : "View Preview"}
            </button>
          </form>
        </aside>
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
