import Image from "next/image";
import Link from "next/link";
import BrandLogo from "../../components/BrandLogo";

const packages = [
  {
    name: "Classic Wedding",
    title: "Ever After Essentials",
    image: "/images/images/classic-wedding-reception-lights.jpeg",
    sampleUrl: "https://open.spotify.com/playlist/3hAvZ4roTRx4aAgEFQ6BUB?si=f828a41bfdb64f3d",
    description:
      "A polished wedding soundtrack from ceremony warmth to a full dancefloor finish, tailored around your must-play moments.",
  },
  {
    name: "Ibiza Vibes",
    title: "White Isle Afterglow",
    image: "/images/images/ibiza-sunset-dj-package.jpeg",
    sampleUrl: "https://open.spotify.com/playlist/02qgSj4ZiNaAWeyJH0RGPb?si=dcff6679e8fa4d72",
    description:
      "Sunset energy, vocal house, Balearic sparkle and hands-in-the-air classics for couples who want the party to glow.",
  },
  {
    name: "School Pop Disco",
    title: "Tuck Shop Takeover",
    image: "/images/images/school-pop-disco-music.jpeg",
    sampleUrl: "https://open.spotify.com/playlist/6e2GhF61TigyOvCbID99Cq?si=z1oZGEF8Suq1uy6k6YQXng",
    description:
      "Clean pop edits, party games energy and big singalong moments for school discos, family events and younger crowds.",
  },
  {
    name: "More Indy/Rock",
    title: "Indie Til Midnight",
    image: "/images/images/indie-rock-party-crowd.jpeg",
    sampleUrl: "https://open.spotify.com/playlist/4kffNnLJejRCoh0EJ3Q7Oj?si=085fe786516e409c",
    description:
      "Guitars, anthems, festival favourites and alternative floor-fillers for guests who want more bite in the set.",
  },
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <BrandLogo />
          <div className="flex items-center gap-5">
            <div className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
              <Link href="/#vibes" className="transition hover:text-white">Vibes</Link>
              <Link href="/#testimonials" className="transition hover:text-white">Testimonials</Link>
              <Link href="/blog" className="transition hover:text-white">Journal</Link>
              <Link href="/#contact" className="transition hover:text-white">Enquire</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden px-4 pt-28 text-center sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/images/north-east-wedding-dj-hero.jpeg"
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
                  className="mt-6 inline-flex w-full max-w-sm items-center gap-4 rounded-lg border border-white/20 bg-black/45 p-3 text-left shadow-2xl shadow-black/30 backdrop-blur-md transition hover:border-emerald-300/60 hover:bg-white/10 sm:w-auto sm:min-w-80"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1DB954] text-slate-950 shadow-lg shadow-emerald-950/40">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-current"
                    >
                      <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75Zm4.7 14.78a.77.77 0 0 1-1.06.26c-2.9-1.77-6.55-2.17-10.85-1.19a.77.77 0 1 1-.34-1.5c4.7-1.07 8.74-.6 11.99 1.39.36.22.48.69.26 1.04Zm1.25-2.78a.96.96 0 0 1-1.32.32c-3.31-2.04-8.36-2.63-12.28-1.44a.96.96 0 0 1-.56-1.84c4.47-1.36 10.04-.7 13.84 1.64.45.28.6.87.32 1.32Zm.11-2.9C14.08 8.49 7.52 8.27 3.71 9.42a1.15 1.15 0 1 1-.67-2.2c4.38-1.33 11.62-1.07 16.19 1.65a1.15 1.15 0 0 1-1.17 1.98Z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[0.65rem] font-bold uppercase tracking-[0.24em] text-emerald-200">
                      Spotify playlist
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-white">
                      Listen to {item.title}
                    </span>
                  </span>
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
            href="/enquire"
            className="inline-flex items-center justify-center bg-white px-8 py-4 font-bold tracking-wider text-slate-900 transition hover:bg-slate-200"
          >
            ENQUIRE NOW
          </Link>
        </div>
      </section>
    </main>
  );
}
