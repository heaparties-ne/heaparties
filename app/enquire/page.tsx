"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import BrandLogo from "../../components/BrandLogo";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

const initialForm = {
  contactName: "",
  date: "",
  location: "",
  phoneNumber: "",
  requirements: "",
  customerMatchConsent: false,
};

function getTodayIsoDate() {
  const today = new Date();
  const timezoneOffset = today.getTimezoneOffset() * 60_000;
  return new Date(today.getTime() - timezoneOffset).toISOString().slice(0, 10);
}

function formatPhoneNumber(value: string) {
  const allowedCharacters = value.replace(/[^\d+]/g, "");
  const normalized = allowedCharacters.startsWith("+")
    ? `+${allowedCharacters.slice(1).replace(/\+/g, "")}`
    : allowedCharacters.replace(/\+/g, "");

  return normalized.slice(0, normalized.startsWith("+") ? 13 : 11);
}

export default function EnquirePage() {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState(initialForm);
  const [today] = useState(getTodayIsoDate);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  const updateField = <K extends keyof typeof initialForm,>(
    field: K,
    value: (typeof initialForm)[K],
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      window.gtag_report_conversion?.();
      setStatus("sent");
      setForm(initialForm);
      setMessage("Thanks. Your enquiry has been sent.");
    } else {
      setStatus("error");
      setMessage("This form is not connected yet. Please use the email link for now.");
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <BrandLogo />
          <div className="flex items-center gap-5">
            <Link href="/" className="text-sm font-medium uppercase tracking-[0.24em] text-slate-300 transition hover:text-white">
              Back
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/images/north-east-wedding-dj-hero.jpeg"
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

        <div className="relative z-10 grid w-full max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="text-white">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-violet-200">
              Enquire now
            </p>
            <h1 className="mb-6 text-5xl font-bold md:text-7xl">
              TELL US<br />
              <span className="text-violet-300">THE PLAN</span>
            </h1>
            <p className="max-w-xl text-lg font-light leading-relaxed text-gray-100">
              Send the essentials and we&apos;ll come back with availability, pricing and the right vibe for the event.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-white/15 bg-slate-950/85 p-6 shadow-[0_30px_80px_-30px_rgba(139,92,246,0.9)] ring-1 ring-violet-500/20 backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-slate-300">
                <span className="text-sm uppercase tracking-[0.24em]">Contact Name</span>
                <input
                  autoFocus
                  type="text"
                  value={form.contactName}
                  onChange={(event) => updateField("contactName", event.target.value)}
                  className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-4 text-white outline-none transition focus:border-violet-300"
                />
              </label>

              <label className="block text-slate-300">
                <span className="text-sm uppercase tracking-[0.24em]">Date</span>
                <input
                  ref={dateInputRef}
                  type="date"
                  min={today}
                  value={form.date}
                  onClick={() => dateInputRef.current?.showPicker?.()}
                  onChange={(event) => updateField("date", event.target.value)}
                  className="mt-3 w-full cursor-pointer rounded-lg border border-slate-700 bg-slate-950 px-4 py-4 text-white outline-none transition focus:border-violet-300"
                />
              </label>

              <label className="block text-slate-300">
                <span className="text-sm uppercase tracking-[0.24em]">Location</span>
                <input
                  type="text"
                  value={form.location}
                  onChange={(event) => updateField("location", event.target.value)}
                  className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-4 text-white outline-none transition focus:border-violet-300"
                />
              </label>

              <label className="block text-slate-300">
                <span className="text-sm uppercase tracking-[0.24em]">Phone Number</span>
                <input
                  type="tel"
                  inputMode="tel"
                  maxLength={13}
                  pattern="\+?[0-9]*"
                  value={form.phoneNumber}
                  onChange={(event) =>
                    updateField("phoneNumber", formatPhoneNumber(event.target.value))
                  }
                  className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-4 text-white outline-none transition focus:border-violet-300"
                />
              </label>

              <label className="block text-slate-300 sm:col-span-2">
                <span className="text-sm uppercase tracking-[0.24em]">Requirements</span>
                <textarea
                  value={form.requirements}
                  onChange={(event) => updateField("requirements", event.target.value)}
                  rows={6}
                  className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-4 text-white outline-none transition focus:border-violet-300"
                />
              </label>

              <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-700 bg-slate-900/70 p-4 text-slate-300 sm:col-span-2">
                <input
                  type="checkbox"
                  checked={form.customerMatchConsent}
                  onChange={(event) => updateField("customerMatchConsent", event.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-violet-400"
                />
                <span className="text-sm leading-relaxed">
                  I agree that my contact details may be securely shared with Google to measure
                  advertising and create matched advertising audiences. This is optional and I can
                  withdraw my consent at any time. See the{" "}
                  <Link href="/privacy" className="text-violet-300 transition hover:text-violet-200">
                    privacy policy
                  </Link>
                  .
                </span>
              </label>
            </div>

            {message ? (
              <p className={`mt-5 text-sm ${status === "sent" ? "text-emerald-300" : "text-rose-300"}`}>
                {message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex w-full items-center justify-center bg-white px-8 py-4 font-bold tracking-wider text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "SENDING..." : "SEND ENQUIRY"}
            </button>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Your enquiry is sent securely by email. Approximate IP-derived location is included
              to help identify genuine local enquiries, but your IP address is not included. Read the{" "}
              <Link href="/privacy" className="text-violet-300 transition hover:text-violet-200">
                privacy policy
              </Link>
              .
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
