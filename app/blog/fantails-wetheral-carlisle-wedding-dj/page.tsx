import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalNav from "../../../components/JournalNav";

const pageUrl = "https://www.heaparties-ne.co.uk/blog/fantails-wetheral-carlisle-wedding-dj";
const imageUrl = "/images/optimized/fantails-wetheral-carlisle-wedding-dj-dancefloor.jpg";

export const metadata: Metadata = {
  title: "Fantails Wetheral Wedding DJ Near Carlisle",
  description:
    "A recent wedding DJ night at Fantails in Wetheral near Carlisle, with sax, percussion and a packed dancefloor in a historic former forge.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Fantails Wetheral Wedding DJ Near Carlisle",
    description:
      "A packed wedding dancefloor at Fantails in Wetheral, near Carlisle, with sax, percussion and a proper party atmosphere.",
    url: pageUrl,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 900,
        alt: "Wedding guests dancing at Fantails in Wetheral near Carlisle with colourful DJ lighting.",
      },
    ],
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Fantails Wetheral Wedding DJ Near Carlisle",
  description:
    "A recent wedding DJ night at Fantails in Wetheral near Carlisle, with sax, percussion and a packed dancefloor in a historic former forge.",
  image: `https://www.heaparties-ne.co.uk${imageUrl}`,
  datePublished: "2026-08-06",
  dateModified: "2026-08-06",
  author: {
    "@type": "Organization",
    name: "Happily Ever After-Parties NE LTD",
  },
  publisher: {
    "@type": "Organization",
    name: "Happily Ever After-Parties NE LTD",
    logo: {
      "@type": "ImageObject",
      url: "https://www.heaparties-ne.co.uk/logo.png",
    },
  },
  mainEntityOfPage: pageUrl,
};

export default function FantailsWeddingDjPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <JournalNav />

      <header className="relative flex min-h-[68vh] items-end overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <Image
          src={imageUrl}
          alt="Wedding guests dancing at Fantails in Wetheral near Carlisle with colourful DJ lighting"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/70 to-black/25" />
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">
            Real weddings | Carlisle and Cumbria
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
            Wedding DJ at Fantails in Wetheral, near Carlisle
          </h1>
        </div>
      </header>

      <article className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8 text-lg font-light leading-relaxed text-slate-300">
          <p className="text-2xl leading-relaxed text-white">
            First time DJing a wedding in a former blacksmith&apos;s forge from around 1600. Casual.
          </p>
          <p>
            Fantails in Wetheral, near Carlisle, is full of character before a single light goes on.
            Low beams, cosy rooms and proper historic charm give the place a different feel from a
            modern hotel function room. Add a wedding crowd ready for a party, and it becomes a very
            good room to play.
          </p>
          <p>
            Luke and Victoria&apos;s evening reception was one of those nights where the dancefloor
            simply did not come up for air. I was working alongside Jacob and Emma from Powerhouse
            Duo, with live sax and percussion adding extra energy through the night.
          </p>
          <h2 className="pt-6 text-3xl font-bold text-white">
            A packed dancefloor, sax, percussion and a Dido wildcard
          </h2>
          <p>
            Every wedding set has its own little surprise. This one included Dido making it into the
            playlist. Not something I had on my bingo card, but what the bride wants, the bride gets.
          </p>
          <p>
            That is the point of planning the music around the couple and their guests rather than
            forcing every wedding through the same set list. The best nights usually come from a mix
            of solid dancefloor choices, personal requests and reading the room properly once the
            party is moving.
          </p>
          <div className="border-l-2 border-violet-400 bg-slate-900 p-6">
            <p className="font-medium text-white">
              Planning a wedding at Fantails, in Wetheral or around Carlisle? It is worth thinking
              early about access, room layout, live musicians and how the DJ setup will work with the
              flow of the venue.
            </p>
          </div>
          <p>
            Happily Ever After-Parties NE provides wedding DJ entertainment across Carlisle, Cumbria,
            Teesside, County Durham, Northumberland and Yorkshire, with sound, lighting and music
            shaped around each venue and crowd.
          </p>
          <div className="pt-8">
            <Link
              href="/enquire"
              className="inline-flex bg-white px-8 py-4 font-bold tracking-wider text-slate-950 transition hover:bg-slate-200"
            >
              ASK ABOUT YOUR DATE
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
