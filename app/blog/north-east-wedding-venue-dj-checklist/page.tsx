import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalNav from "../../../components/JournalNav";

export const metadata: Metadata = {
  title: "North East Wedding Venue DJ Checklist",
  description:
    "The practical questions to ask a North East England wedding venue before booking your evening DJ and entertainment.",
};

export default function VenueDjChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <JournalNav />

      <header className="relative flex min-h-[68vh] items-end overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <Image
          src="/images/images/wedding-dj-decks-confetti-dancefloor.jpeg"
          alt="Wedding DJ setup beside a busy dancefloor"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/70 to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">
            Venue planning | 6 June 2026
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
            Your North East wedding venue DJ checklist
          </h1>
        </div>
      </header>

      <article className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8 text-lg font-light leading-relaxed text-slate-300">
          <p className="text-2xl leading-relaxed text-white">
            A beautiful room is a fine start. A few practical questions will help it become a
            brilliant party once the evening begins.
          </p>
          <h2 className="pt-6 text-3xl font-bold text-white">Ask about access and turnaround time</h2>
          <p>
            Find out when the DJ can enter the room, where equipment comes in and whether the space
            changes over from the wedding breakfast. Tight access or a quick room turnaround is
            manageable when everyone knows about it early.
          </p>
          <h2 className="pt-6 text-3xl font-bold text-white">Check sound limits and finishing times</h2>
          <p>
            Some venues use sound limiters or have restrictions because of nearby residents. Ask
            where the limiter is positioned, what level it permits and what time amplified music
            must finish.
          </p>
          <h2 className="pt-6 text-3xl font-bold text-white">Look at the dancefloor location</h2>
          <p>
            Guests are more likely to dance when the DJ, bar and evening seating feel connected.
            A dancefloor hidden in a separate room can still work, but it needs a little more
            thought when planning the flow of the night.
          </p>
          <div className="border-l-2 border-violet-400 bg-slate-900 p-6">
            <p className="font-medium text-white">
              Also ask whether the venue needs supplier insurance documents, PAT records or a risk
              assessment before the day.
            </p>
          </div>
          <p>
            Whether you are considering Wynyard Hall, Hardwick Hall, Beamish Hall, Matfen Hall or
            another North East England venue, these answers help the entertainment fit the room
            properly.
          </p>
          <div className="pt-8">
            <Link
              href="/enquire"
              className="inline-flex bg-white px-8 py-4 font-bold tracking-wider text-slate-950 transition hover:bg-slate-200"
            >
              TALK THROUGH YOUR VENUE
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
