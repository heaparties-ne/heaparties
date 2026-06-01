"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const initialForm = {
  contactName: "",
  date: "",
  location: "",
  phoneNumber: "",
  requirements: "",
};

export default function EnquirePage() {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const openDatePicker = () => {
    const input = dateInputRef.current;
    if (!input) return;

    input.focus();
    if ("showPicker" in input) {
      input.showPicker();
    }
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-bold tracking-tight text-white md:text-2xl">
            HAPPILY EVER AFTER-PARTIES NE LTD
          </Link>
          <Link href="/" className="text-sm font-medium uppercase tracking-[0.24em] text-slate-300 transition hover:text-white">
            Back
          </Link>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
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
                <div className="relative mt-3">
                  <input
                    ref={dateInputRef}
                    type="date"
                    value={form.date}
                    onChange={(event) => updateField("date", event.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-4 pr-16 text-white outline-none transition focus:border-violet-300"
                  />
                  <button
                    type="button"
                    onClick={openDatePicker}
                    className="absolute inset-y-2 right-2 inline-flex w-12 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-slate-900"
                    aria-label="Show date picker"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                    >
                      <path
                        d="M7 3v3M17 3v3M4.5 9.5h15M6.5 5h11A2.5 2.5 0 0 1 20 7.5v10A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10A2.5 2.5 0 0 1 6.5 5Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
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
                  value={form.phoneNumber}
                  onChange={(event) => updateField("phoneNumber", event.target.value)}
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
          </form>
        </div>
      </section>
    </main>
  );
}
