import Image from "next/image";
import Link from "next/link";
import BrandLogo from "../components/BrandLogo";
import LocalServiceMessage from "../components/LocalServiceMessage";
import WhatsAppLink from "../components/WhatsAppLink";

// Assemble contact details client-side to avoid raw scraping in HTML
const phoneParts = ["07356", "211274"];
const phone = phoneParts.join(" ");
const phoneNumberInternational = phone.replace(/\s/g, "").replace(/^0/, "44");
const emailLocal = "enquiries";
const emailDomain = "heaparties-ne.co.uk";
const email = `${emailLocal}@${emailDomain}`;
const mailSubject = encodeURIComponent("Website Enquiry");
const mailBody = encodeURIComponent(
  [
    "Contact Name: ",
    "",
    "Date: ",
    "",
    "Location: ",
    "",
    "Phone Number: ",
    "",
    "Requirements: ",
  ].join("\n"),
);
const mailtoHref = `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;
const spotifyProfileUrl = "https://open.spotify.com/user/31k747dtbsgpaszqbkkqvt47id6i?si=b6f91bce12ff4428";

const testimonials = [
  {
    quote:
      "Absolutely incredible. They brought the energy and kept our guests dancing all night.",
    names: "Sarah & Michael",
  },
  {
    quote:
      "From start to finish, they handled everything perfectly. The lighting transformed our venue.",
    names: "Jessica & David",
  },
  {
    quote:
      "Professional, reliable, and genuinely cared about making our day special.",
    names: "Emma & James",
  },
  {
    quote:
      "Fantastic communication and a brilliant set — everyone danced until the end.",
    names: "Olivia & Mark",
  },
  {
    quote:
      "Exceeded expectations — the vibe was perfect and the dancefloor was full.",
    names: "Hannah & Luke",
  },
  {
    quote:
      "Amazing service and atmosphere — would recommend to anyone.",
    names: "Mia & Tom",
  },
  {
    quote:
      "He read the room so well and timed every switch perfectly. The whole evening felt effortless for us.",
    names: "Rachel & Ben",
  },
  {
    quote:
      "We wanted the night to feel personal and relaxed, and he absolutely nailed it from our first dance right through to the last track.",
    names: "Daniel & Marcus",
  },
  {
    quote:
      "The setup looked class, the sound was spot on, and our guests are still talking about the last hour on the dancefloor.",
    names: "Chinelo & Adam",
  },
  {
    quote:
      "We gave a very mixed playlist and somehow every age group felt included. It never felt cheesy, just really well judged.",
    names: "Sophie & Ryan",
  },
  {
    quote:
      "Brilliant from the planning stage onwards. Calm, organised and exactly the kind of presence you want running the evening.",
    names: "Lauren & Chris",
  },
];
const testimonialGroups = Array.from(
  { length: Math.ceil(testimonials.length / 3) },
  (_, index) => {
    const start = index * 3;
    const group = testimonials.slice(start, start + 3);

    while (group.length < 3) {
      group.push(testimonials[group.length]);
    }

    return group;
  },
);
const faqs = [
  {
    question: "How far ahead should we book our wedding DJ?",
    answer:
      "Popular Saturdays can be reserved well ahead, so it is worth enquiring as soon as you have a date and venue in mind. An enquiry does not commit you to booking.",
  },
  {
    question: "Can we request songs and choose the style of music?",
    answer:
      "Yes. Your favourites, must-plays and do-not-plays help shape the night. Requests from guests can also be welcomed where they suit the celebration.",
  },
  {
    question: "What is included in the evening DJ package?",
    answer:
      "Every quote is built around the event, but a typical evening booking includes professional DJ service, sound, lighting and setup. Timings, travel, venue access and any additional production are confirmed before a price is agreed.",
  },
  {
    question: "Are you insured and is the equipment PAT tested?",
    answer:
      "Yes. Happily Ever After-Parties NE LTD holds up to £5m public liability cover, and the equipment used for events is PAT tested and regularly checked.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "The service is based in Teesside and covers Yorkshire, County Durham, Cumbria and Northumberland. Travel requirements are confirmed in your quote.",
  },
  {
    question: "How do we secure our date?",
    answer:
      "Send an enquiry with your date, venue and plans. If the date is available, you will receive the booking details and the deposit required to confirm it.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function SpotifyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 fill-current"
    >
      <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75Zm4.7 14.78a.77.77 0 0 1-1.06.26c-2.9-1.77-6.55-2.17-10.85-1.19a.77.77 0 1 1-.34-1.5c4.7-1.07 8.74-.6 11.99 1.39.36.22.48.69.26 1.04Zm1.25-2.78a.96.96 0 0 1-1.32.32c-3.31-2.04-8.36-2.63-12.28-1.44a.96.96 0 0 1-.56-1.84c4.47-1.36 10.04-.7 13.84 1.64.45.28.6.87.32 1.32Zm.11-2.9C14.08 8.49 7.52 8.27 3.71 9.42a1.15 1.15 0 1 1-.67-2.2c4.38-1.33 11.62-1.07 16.19 1.65a1.15 1.15 0 0 1-1.17 1.98Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0"
      fill="none"
    >
      <path
        d="M5.3 18.8 6.4 15.6A7.6 7.6 0 1 1 9 18.2L5.3 18.8Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3 0 .5-.2.7l-.4.5c.7 1.2 1.7 2.1 2.9 2.7l.5-.5c.2-.2.5-.3.8-.1l1.5.7c.3.1.4.3.4.6v.4c0 .4-.1.6-.4.8-.5.4-1.1.6-1.8.6-2.7 0-6.8-3.6-6.8-6.8 0-.5.2-.9.6-1.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {

  return (
    <main className="overflow-hidden bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {/* Navigation */}
      <nav className="site-nav fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
        <div className="site-nav-inner max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <BrandLogo />
            <div className="site-nav-links hidden gap-8 text-sm font-medium text-slate-300 md:flex">
              <a href="#vibes" className="transition hover:text-white">Vibes</a>
              <a href="#testimonials" className="transition hover:text-white">Testimonials</a>
              <a href="#pricing" className="transition hover:text-white">Quotes</a>
              <Link href="/blog" className="transition hover:text-white">Journal</Link>
              <a href="#contact" className="transition hover:text-white">Enquire</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="site-hero relative h-screen w-full flex items-center justify-center overflow-hidden pt-16">
        {/* Background image with Ken Burns effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="kenburns-wrapper absolute inset-0">
            <picture>
              <source
                type="image/avif"
                srcSet="/images/optimized/north-east-wedding-dj-hero-1600.avif 1600w, /images/optimized/north-east-wedding-dj-hero-2400.avif 2400w"
                sizes="100vw"
              />
              <source
                type="image/webp"
                srcSet="/images/optimized/north-east-wedding-dj-hero-1600.webp 1600w, /images/optimized/north-east-wedding-dj-hero-2400.webp 2400w"
                sizes="100vw"
              />
              <img
                src="/images/optimized/north-east-wedding-dj-hero-fallback-1920.jpg"
                srcSet="/images/optimized/north-east-wedding-dj-hero-fallback-1920.jpg 1920w"
                sizes="100vw"
                width={1920}
                height={1076}
                alt="Wedding DJ decks overlooking a celebration"
                fetchPriority="high"
                decoding="async"
                className="hero-img h-full w-full object-cover"
              />
            </picture>
          </div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="site-hero-content relative z-10 text-center text-white px-4 max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-violet-100 md:text-sm">
            Based in Teesside | Yorkshire, Durham, Cumbria & Northumberland
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            YOUR NIGHT<br />
            <span className="text-violet-300">YOUR VIBE</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-100 max-w-2xl mx-auto">
            Weddings & events across Yorkshire, Durham, Cumbria and Northumberland, expertly soundtracked
          </p>
          <LocalServiceMessage />
          <Link
            href="/enquire"
            className="mt-10 inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 font-semibold tracking-wider hover:bg-slate-200 transition"
          >
            ENQUIRE NOW
          </Link>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-200">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2">
              25 years DJ experience
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2">
              PAT tested equipment
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2">
              £5m public liability
            </span>
          </div>
        </div>
      </section>

      {/* Choose Your Vibe Section */}
      <section id="vibes" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Choose Your Vibe
            </h2>
            <p className="text-slate-300 text-lg">
              Premium DJ services tailored to your celebration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Vibe 1 */}
            <div className="group cursor-pointer relative overflow-hidden rounded-lg h-64 md:h-80">
              <Image
                src="/images/images/church-wedding-ceremony.jpeg"
                alt="Ceremony & Reception"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-end p-6">
                <h3 className="text-white text-xl font-bold">CEREMONY & RECEPTION</h3>
              </div>
            </div>

            {/* Vibe 2 */}
            <div className="group cursor-pointer relative overflow-hidden rounded-lg h-64 md:h-80">
              <Image
                src="/images/images/colourful-dj-mixer-decks.jpeg"
                alt="Wedding Reception"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-end p-6">
                <h3 className="text-white text-xl font-bold">WEDDING RECEPTION</h3>
              </div>
            </div>

            {/* Vibe 3 */}
            <div className="group cursor-pointer relative overflow-hidden rounded-lg h-64 md:h-80">
              <Image
                src="/images/images/wedding-dj-decks-confetti-dancefloor.jpeg"
                alt="DJ & Lighting"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-end p-6">
                <h3 className="text-white text-xl font-bold">DJ & LIGHTING</h3>
              </div>
            </div>

            {/* Vibe 4 */}
            <div className="group cursor-pointer relative overflow-hidden rounded-lg h-64 md:h-80">
              <Image
                src="/images/images/wedding-dancefloor-party-crowd.jpeg"
                alt="Full Production"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-end p-6">
                <h3 className="text-white text-xl font-bold">FULL PRODUCTION</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Professional Musicians & DJs
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Happily Ever After-Parties is a professionally run wedding DJ service built on genuine musical experience, careful planning and a proper love for a full dancefloor. With 25 years of DJ experience across the UK, every booking is shaped around the room, the guests and the moments that keep your celebration moving all night.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                The service is backed by college and university qualifications in music and audio technology, so every show is handled with the technical care, sound quality and attention to detail your event deserves.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Happily Ever After-Parties NE LTD is fully insured with up to £5m public liability cover, and all equipment is PAT tested before every event for added peace of mind.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900 p-6 shadow-sm border border-slate-800">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-3">Trust</p>
                <p className="text-lg font-semibold text-white">£5m public liability insurance</p>
              </div>
              <div className="rounded-3xl bg-slate-900 p-6 shadow-sm border border-slate-800">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-3">Safety</p>
                <p className="text-lg font-semibold text-white">Fully PAT tested equipment</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-[2rem] h-96">
              <Image
                src="/images/images/wedding-couple-rain-umbrella.jpeg"
                alt="Wedding couple under an umbrella"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-white/70 mb-2">Insurance</p>
                  <p className="text-xl font-semibold text-white">Peace of mind for your day</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-1">
              <div className="relative overflow-hidden rounded-[2rem] h-48">
                <Image
                  src="/images/images/pat-tested-dj-equipment.jpeg"
                  alt="PAT tested equipment"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex items-end">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-white/70 mb-2">Safety</p>
                    <p className="text-lg font-semibold text-white">Fully PAT tested equipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">What Couples Say</h2>
            <p className="text-slate-300 text-lg">Real stories from real celebrations</p>
          </div>

          <div className="reviews-slider relative overflow-hidden">
            <div className="reviews-track">
              {testimonialGroups.map((group, groupIndex) => (
                <div
                  key={`group-${groupIndex}`}
                  className="reviews-group"
                >
                  {group.map((testimonial, testimonialIndex) => (
                    <div
                      key={`${testimonial.names}-${groupIndex}-${testimonialIndex}`}
                      className="review-card bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm"
                    >
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-amber-400">★</span>
                        ))}
                      </div>
                      <p className="text-slate-300 font-light mb-6 italic leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <p className="font-semibold text-white">{testimonial.names}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
              Priced around your plans
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Every event is quoted individually
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">
              Your quote is shaped around the venue, date, timings, travel, access, music brief and
              the kind of atmosphere you want to create. That keeps things clear, fair and tailored
              to the celebration rather than squeezed into a fixed package.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-violet-500/40 bg-slate-900 p-8 shadow-[0_24px_60px_-40px_rgba(139,92,246,0.9)]">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">
                Your timings
              </p>
              <p className="text-slate-300 leading-relaxed">
                Early setup, evening-only, longer parties and late finishes all have different
                requirements, so the quote reflects the time actually needed.
              </p>
            </div>

            <div className="rounded-lg border border-violet-500/40 bg-slate-900 p-8 shadow-[0_24px_60px_-40px_rgba(139,92,246,0.9)]">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">
                Your venue
              </p>
              <p className="text-slate-300 leading-relaxed">
                Access, room size, travel, sound limits and turnaround times can all affect the
                setup. Getting those details right makes the night run smoothly.
              </p>
            </div>

            <div className="rounded-lg border border-violet-500/40 bg-slate-900 p-8 shadow-[0_24px_60px_-40px_rgba(139,92,246,0.9)]">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">
                Your soundtrack
              </p>
              <p className="text-slate-300 leading-relaxed">
                From a simple evening reception to a more involved celebration, the music brief,
                planning and production are built around the feel you want.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-400">
            Send the date, venue and a rough idea of what you need. You&apos;ll get a clear,
            no-pressure quote based on your requirements.
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faq" className="border-y border-slate-800 bg-slate-900 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
              Good to know
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Questions couples often ask
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-slate-300">
              The practical details, without the mystery. Anything more specific can be covered in
              your enquiry.
            </p>
          </div>
          <div className="divide-y divide-slate-700 border-y border-slate-700">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-white">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="text-2xl font-light text-violet-300 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pt-4 font-light leading-relaxed text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/images/north-east-wedding-dj-hero.jpeg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Create an unforgettable celebration
          </h2>
          <p className="text-xl font-light text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Planning an event and not sure where to start with the entertainment? Let&apos;s make it easy. Tell us about your plans and we&apos;ll help you find the perfect vibe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/enquire"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 font-bold tracking-wider hover:bg-white hover:text-slate-900 transition"
            >
              ENQUIRE NOW
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 font-bold tracking-wider hover:bg-white hover:text-slate-900 transition"
            >
              LISTEN TO SAMPLE MIXES
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 font-bold tracking-wider hover:bg-white hover:text-slate-900 transition"
            >
              HOW QUOTES WORK
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 mb-12">
            <div className="flex flex-col items-center gap-2">
              <WhatsAppLink
                href={`https://wa.me/${phoneNumberInternational}`}
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-sm transition hover:brightness-110"
                style={{ backgroundColor: "#25D366" }}
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </WhatsAppLink>
              <span className="text-sm text-gray-300">(WhatsApp Business ready)</span>
            </div>
              <a
                href={spotifyProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-emerald-300/30 bg-black/45 px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-2xl shadow-black/30 backdrop-blur-md transition hover:border-emerald-300/70 hover:bg-white/10"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1DB954] text-slate-950">
                  <SpotifyIcon />
                </span>
                Sample playlists
              </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-700">
            <div>
              <p className="text-lg font-bold mb-2">
                <WhatsAppLink
                  href={`https://wa.me/${phoneNumberInternational}`}
                  className="hover:underline"
                >
                  {phone}
                </WhatsAppLink>
              </p>
              <p className="text-gray-300">Call or WhatsApp</p>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">
                <a
                  href={mailtoHref}
                  className="hover:underline"
                >
                  {email}
                </a>
              </p>
              <p className="text-gray-300">Email us directly</p>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">Happily Ever After-Parties NE LTD</p>
              <p className="text-gray-300">Company No. 17153234</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm space-y-2">
          <div className="flex justify-center pb-4">
            <BrandLogo showName={false} markClassName="p-2" />
          </div>
          <p>© 2026 Happily Ever After-Parties NE LTD. All rights reserved. | Fully insured & PAT tested for events across Yorkshire, Durham, Cumbria and Northumberland</p>
          <p className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link href="/blog" className="transition hover:text-white">Wedding planning journal</Link>
            <Link href="/privacy" className="transition hover:text-white">Privacy policy</Link>
          </p>
          <p>Ltd. Company No. 17153234</p>
        </div>
      </footer>
    </main>
  );
}
