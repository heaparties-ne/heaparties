import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalNav from "../../../components/JournalNav";

export const metadata: Metadata = {
  title: "How to Choose Your First Dance Without Overthinking It",
  description:
    "Practical first-dance advice for North East couples, from choosing the song to inviting guests onto the dancefloor.",
};

export default function ChoosingYourFirstDancePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <JournalNav />

      <header className="relative flex min-h-[68vh] items-end overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <Image
          src="/images/images/bride-groom-first-dance.jpeg"
          alt="Bride and groom sharing their first dance"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/65 to-black/25" />
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">
            Music planning | 6 June 2026
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
            How to choose your first dance without overthinking it
          </h1>
        </div>
      </header>

      <article className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8 text-lg font-light leading-relaxed text-slate-300">
          <p className="text-2xl leading-relaxed text-white">
            The best first-dance song is not necessarily the grandest one. It is the one that feels
            like the two of you.
          </p>
          <p>
            Start with songs connected to a real memory: a gig, a road trip, a holiday or an
            ordinary evening that became part of your story. Meaning usually lands better than a
            lyric chosen because it sounds suitably wedding-like.
          </p>
          <h2 className="pt-6 text-3xl font-bold text-white">You do not need to dance alone for four minutes</h2>
          <p>
            If being watched feels uncomfortable, plan for the DJ to invite your guests onto the
            floor after the first verse or chorus. You still get the photograph and the moment,
            without feeling as though you are performing a routine.
          </p>
          <p>
            An edited version can also work beautifully. A clean two-minute cut often feels more
            natural than waiting for a long instrumental ending, particularly when everyone is
            ready to join you.
          </p>
          <div className="border-l-2 border-violet-400 bg-slate-900 p-6">
            <p className="font-medium text-white">
              There is no rule saying it must be slow. Soul, indie, acoustic covers, house and
              full-volume singalongs can all make brilliant first dances.
            </p>
          </div>
          <p>
            Once you have chosen it, share the exact artist and version. Live recordings, remasters
            and covers can sound very different, and getting the right one matters.
          </p>
          <div className="pt-8">
            <Link
              href="/packages"
              className="inline-flex bg-white px-8 py-4 font-bold tracking-wider text-slate-950 transition hover:bg-slate-200"
            >
              LISTEN TO SAMPLE MIXES
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
