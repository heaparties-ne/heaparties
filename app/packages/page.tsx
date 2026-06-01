import Image from "next/image";
import Link from "next/link";

const defaultSampleUrl = "https://www.mixcloud.com/HappilyEverAfter-Parties/";

const packages = [
  {
    name: "Classic Wedding",
    title: "Ever After Essentials",
    image: "/images/images/image17.jpeg",
    sampleUrl: defaultSampleUrl,
    description:
      "A polished wedding soundtrack from ceremony warmth to a full dancefloor finish, tailored around your must-play moments.",
  },
  {
    name: "Ibiza Vibes",
    title: "White Isle Afterglow",
    image: "/images/images/image13.jpeg",
    sampleUrl: defaultSampleUrl,
    description:
      "Sunset energy, vocal house, Balearic sparkle and hands-in-the-air classics for couples who want the party to glow.",
  },
  {
    name: "School Pop Disco",
    title: "Tuck Shop Takeover",
    image: "/images/images/image16.jpeg",
    sampleUrl: defaultSampleUrl,
    description:
      "Clean pop edits, party games energy and big singalong moments for school discos, family events and younger crowds.",
  },
  {
    name: "More Indy/Rock",
    title: "Indie Til Midnight",
    image: "/images/images/image15.jpeg",
    sampleUrl: defaultSampleUrl,
    description:
      "Guitars, anthems, festival favourites and alternative floor-fillers for guests who want more bite in the set.",
  },
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-bold tracking-tight text-white md:text-2xl">
            HAPPILY EVER AFTER-PARTIES NE LTD
          </Link>
          <div className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
            <Link href="/#vibes" className="transition hover:text-white">Vibes</Link>
            <Link href="/#gallery" className="transition hover:text-white">Gallery</Link>
            <Link href="/#testimonials" className="transition hover:text-white">Testimonials</Link>
            <Link href="/#contact" className="transition hover:text-white">Enquire</Link>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden px-4 pt-28 text-center sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/images/image8.jpeg"
            alt="Wedding dancefloor"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="light light-1 absolute inset-0" />
            <div className="light light-2 absolute inset-0" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-white">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-violet-200">
            Packages
          </p>
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            CHOOSE YOUR<br />
            <span className="text-violet-300">SOUNDTRACK</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-100 md:text-xl">
            Four starting points for the night you want, each shaped around your crowd, venue and favourite moments.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {packages.map((item) => (
            <article
              key={item.name}
              className="group relative min-h-[420px] overflow-hidden rounded-lg border border-slate-800 bg-slate-900"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">
                  {item.name}
                </p>
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{item.title}</h2>
                <p className="max-w-xl text-base font-light leading-relaxed text-slate-200">
                  {item.description}
                </p>
                <a
                  href={item.sampleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center border border-white/60 px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] text-white transition hover:bg-white hover:text-slate-900"
                >
                  Listen to a sample
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-4xl font-bold md:text-5xl">Not sure which fits?</h2>
          <p className="mb-8 text-lg font-light leading-relaxed text-slate-300">
            Tell us the feel you want and we&apos;ll shape the package around the room, the guests and the moments that matter.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center bg-white px-8 py-4 font-bold tracking-wider text-slate-900 transition hover:bg-slate-200"
          >
            ENQUIRE NOW
          </Link>
        </div>
      </section>
    </main>
  );
}
