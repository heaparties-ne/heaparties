import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalNav from "../../components/JournalNav";

export const metadata: Metadata = {
  title: "North East England Wedding Venues & DJ Planning",
  description:
    "A practical guide to choosing a North East England wedding venue and planning the music, sound and atmosphere for your celebration.",
};

const venues = [
  "Wynyard Hall",
  "Hardwick Hall Hotel",
  "Le Petit Château",
  "Newton Hall",
  "Beamish Hall",
  "Matfen Hall",
  "Healey Barn",
  "The Biscuit Factory",
  "The Grand Hotel Tynemouth",
];

const journalPosts = [
  {
    title: "Fantails Wetheral wedding DJ near Carlisle",
    description: "A packed dancefloor in a historic former forge, with sax, percussion and one Dido wildcard.",
    href: "/blog/fantails-wetheral-carlisle-wedding-dj",
    image: "/images/optimized/fantails-wetheral-carlisle-wedding-dj-dancefloor.jpg",
    category: "Real weddings",
  },
  {
    title: "PAT testing week: the quiet work behind a great party",
    description: "Why testing, visual checks and careful equipment maintenance are worth asking about.",
    href: "/blog/pat-testing-week",
    image: "/images/images/pat-tested-dj-equipment.jpeg",
    category: "Safety behind the scenes",
  },
  {
    title: "How to choose your first dance without overthinking it",
    description: "A few practical ways to find a song and a first-dance format that actually feels like you.",
    href: "/blog/choosing-your-first-dance",
    image: "/images/images/bride-groom-first-dance.jpeg",
    category: "Music planning",
  },
  {
    title: "Your North East wedding venue DJ checklist",
    description: "The useful questions that make evening entertainment easier to plan.",
    href: "/blog/north-east-wedding-venue-dj-checklist",
    image: "/images/images/wedding-dj-decks-confetti-dancefloor.jpeg",
    category: "Venue planning",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <JournalNav />

      <header className="relative flex min-h-[72vh] items-end overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <Image
          src="/images/images/outdoor-garden-wedding-reception.jpeg"
          alt="Outdoor North East wedding reception"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/60 to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-violet-200">
            The planning journal
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
            North East England wedding venues and the soundtrack to match
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-slate-200">
            A venue shapes the look of the day. The music shapes how it feels. Here is what to think
            about when bringing the two together.
          </p>
        </div>
      </header>

      <article>
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
                6 June 2026
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Start with the room, then build the night
              </h2>
            </div>
            <div className="space-y-6 text-lg font-light leading-relaxed text-slate-300">
              <p>
                North East England has everything from country houses and converted barns to city spaces
                and coastal hotels. Couples often shortlist venues including {venues.slice(0, -1).join(", ")} and{" "}
                {venues.at(-1)}.
              </p>
              <p>
                Each room behaves differently once the evening begins. Ceiling height, dancefloor
                position, guest numbers, access times and sound limits all influence the right setup.
                Sorting those details early means the equipment can suit the venue without taking over
                the celebration.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/images/church-wedding-ceremony.jpeg"
                alt="Church wedding ceremony ready for guests"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
                Questions worth asking
              </p>
              <h2 className="mt-4 text-4xl font-bold text-white">Before you book the entertainment</h2>
              <ul className="mt-8 space-y-5 text-lg font-light leading-relaxed text-slate-300">
                <li>Where will the DJ and dancefloor sit during the evening reception?</li>
                <li>What time can suppliers access the room and when must setup be complete?</li>
                <li>Does the venue use a sound limiter or have any music restrictions?</li>
                <li>Is there enough power nearby, and is equipment access straightforward?</li>
                <li>When will the room change from dining to dancing?</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
              Looking ahead
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              It is never too early to start the conversation
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-light leading-relaxed text-slate-300">
              Couples are planning celebrations further ahead than ever. Where does the time go?
              If you already have a venue or a date in mind, an early chat makes it easier to shape
              the music, production and atmosphere around your plans.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center bg-white px-8 py-4 font-bold tracking-wider text-slate-950 transition hover:bg-slate-200"
              >
                ENQUIRE NOW
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center justify-center border-2 border-white px-8 py-4 font-bold tracking-wider text-white transition hover:bg-white hover:text-slate-950"
              >
                LISTEN TO SAMPLE MIXES
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
                More from the journal
              </p>
              <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                Useful things to know before the big night
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {journalPosts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group overflow-hidden rounded-lg border border-slate-800 bg-slate-950 transition hover:border-violet-400/60"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
                      {post.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold leading-tight text-white">{post.title}</h3>
                    <p className="mt-4 font-light leading-relaxed text-slate-300">{post.description}</p>
                    <span className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-white">
                      Read article
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
