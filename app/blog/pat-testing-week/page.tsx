import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalNav from "../../../components/JournalNav";

export const metadata: Metadata = {
  title: "PAT Testing Week: The Quiet Work Behind a Great Party",
  description:
    "Why PAT testing, visual checks and careful equipment maintenance matter when choosing a professional wedding DJ.",
};

export default function PatTestingWeekPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <JournalNav />

      <header className="relative flex min-h-[68vh] items-end overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <Image
          src="/images/images/pat-tested-dj-equipment.jpeg"
          alt="DJ equipment completing a portable appliance test"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/75 to-black/35" />
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">
            Safety behind the scenes | 6 June 2026
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
            PAT testing week: the quiet work behind a great party
          </h1>
        </div>
      </header>

      <article className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8 text-lg font-light leading-relaxed text-slate-300">
          <p className="text-2xl leading-relaxed text-white">
            Nobody books a wedding DJ because they love electrical safety paperwork. It is still
            rather nice to know the equipment around your guests has been properly looked after.
          </p>
          <p>
            Portable appliance testing, usually shortened to PAT testing, is one part of keeping a
            professional setup safe. It helps identify electrical faults and gives venues confidence
            that equipment arriving on site has been checked.
          </p>
          <h2 className="pt-6 text-3xl font-bold text-white">A sticker is not the whole story</h2>
          <p>
            Good electrical safety also includes regular visual inspections, maintained cables,
            sensible power distribution and replacing anything that has seen better days. PAT
            testing supports those habits; it does not replace them.
          </p>
          <p>
            All equipment used by Happily Ever After-Parties NE is PAT tested, and the setup is
            covered by £5m public liability insurance. It is not the glamorous part of the job, but
            it helps the glamorous part happen without unnecessary drama.
          </p>
          <div className="border-l-2 border-violet-400 bg-slate-900 p-6">
            <p className="font-medium text-white">
              Useful question for any supplier: can you provide current PAT testing and public
              liability insurance documents if the venue asks for them?
            </p>
          </div>
          <p>
            Venues often request both documents before an event. Having them ready keeps planning
            straightforward and lets everyone concentrate on the celebration itself.
          </p>
          <div className="pt-8">
            <Link
              href="/enquire"
              className="inline-flex bg-white px-8 py-4 font-bold tracking-wider text-slate-950 transition hover:bg-slate-200"
            >
              PLAN YOUR CELEBRATION
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
