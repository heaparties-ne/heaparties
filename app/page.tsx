"use client";

import Image from "next/image";

// Assemble contact details client-side to avoid raw scraping in HTML
const phoneParts = ["07356", "211274"];
const phone = phoneParts.join(" ");
const phoneNumberInternational = phone.replace(/\s/g, "").replace(/^0/, "44");
const emailLocal = "enquiries";
const emailDomain = "heaparties-ne.co.uk";
const email = `${emailLocal}@${emailDomain}`;
const mailSubject = encodeURIComponent("Website Enquiry");
const mailtoHref = `mailto:${email}?subject=${mailSubject}`;
const mixcloudUrl = "https://www.mixcloud.com/BoroDJ69/";
const mixcloudBrandColor = "#5000FF";

function MixcloudIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="-2 -3 32 24"
      className="h-4 w-7 shrink-0 translate-y-0.5 overflow-visible"
      fill="none"
    >
      <path
        d="M8.2 14.5h11.9a5.5 5.5 0 0 0 .4-11 7.2 7.2 0 0 0-13.6 2A4.6 4.6 0 0 0 8.2 14.5Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 14.5h1.8M23.7 14.5h1.8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
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
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight text-white">
              HAPPILY EVER AFTER-PARTIES NE LTD
            </div>
            <div className="hidden md:flex gap-8 text-slate-300 text-sm font-medium">
              <a href="#vibes" className="hover:text-white transition">Vibes</a>
              <a href="#gallery" className="hover:text-white transition">Gallery</a>
              <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
              <a href="#contact" className="hover:text-white transition">Enquire</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-16">
        {/* Background image with Ken Burns effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="kenburns-wrapper absolute inset-0">
            <Image
              src="/images/images/image8.jpeg"
              alt="Hero background"
              fill
              sizes="100vw"
              className="object-cover hero-img"
            />
          </div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Light flicker overlays (pure CSS, pointer-events-none) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="light light-1 absolute inset-0"></div>
            <div className="light light-2 absolute inset-0"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            YOUR NIGHT<br />
            <span className="text-violet-300">YOUR VIBE</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-100 mb-10 max-w-2xl mx-auto">
            Premium wedding DJ services for unforgettable celebrations
          </p>
          <a
            href={mailtoHref}
            className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 font-semibold tracking-wider hover:bg-slate-200 transition"
          >
            ENQUIRE NOW
          </a>
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
                src="/images/images/image14.jpeg"
                alt="Ceremony & Reception"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-end p-6">
                <h3 className="text-white text-xl font-bold">CEREMONY & RECEPTION</h3>
              </div>
            </div>

            {/* Vibe 2 */}
            <div className="group cursor-pointer relative overflow-hidden rounded-lg h-64 md:h-80">
              <Image
                src="/images/images/image2.jpeg"
                alt="Wedding Reception"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-end p-6">
                <h3 className="text-white text-xl font-bold">WEDDING RECEPTION</h3>
              </div>
            </div>

            {/* Vibe 3 */}
            <div className="group cursor-pointer relative overflow-hidden rounded-lg h-64 md:h-80">
              <Image
                src="/images/images/image3.jpeg"
                alt="DJ & Lighting"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-end p-6">
                <h3 className="text-white text-xl font-bold">DJ & LIGHTING</h3>
              </div>
            </div>

            {/* Vibe 4 */}
            <div className="group cursor-pointer relative overflow-hidden rounded-lg h-64 md:h-80">
              <Image
                src="/images/images/image4.jpeg"
                alt="Full Production"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-end p-6">
                <h3 className="text-white text-xl font-bold">FULL PRODUCTION</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Events
            </h2>
            <p className="text-slate-300 text-lg">
              Beautiful celebrations we&apos;ve been part of
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Gallery 1 - Large */}
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl h-80 md:h-[560px] group">
              <Image
                src="/images/images/image5.jpeg"
                alt="Featured Event"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-2xl font-bold">Premium Wedding</h3>
                  <p className="text-gray-200 mt-2">Featured celebration</p>
                </div>
              </div>
            </div>

            {/* Gallery 2 */}
            <div className="relative overflow-hidden rounded-3xl h-72 group">
              <Image
                src="/images/images/image6.jpeg"
                alt="Gallery Event 2"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Gallery 3 */}
            <div className="relative overflow-hidden rounded-3xl h-72 group">
              <Image
                src="/images/images/image7.jpeg"
                alt="Gallery Event 3"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Gallery 4 */}
            <div className="relative overflow-hidden rounded-3xl h-72 group">
              <Image
                src="/images/images/image9.jpeg"
                alt="Gallery Event 4"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Gallery 5 */}
            <div className="relative overflow-hidden rounded-3xl h-72 group">
              <Image
                src="/images/images/image1.jpeg"
                alt="Gallery Event 5"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Gallery 6 */}
            <div className="relative overflow-hidden rounded-3xl h-72 group">
              <Image
                src="/images/images/image11.jpeg"
                alt="Gallery Event 6"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
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
              <p className="text-xl text-slate-300 font-light leading-relaxed mb-6">
                Founded by musicians and live music specialists, we bring professional expertise and genuine passion to every event. With 25 years of DJ experience across the UK, we know how to keep your celebration moving all night.
              </p>
              <p className="text-lg text-slate-300 font-light leading-relaxed mb-6">
                I hold both college and university qualifications in music and audio technology, ensuring every show is technically flawless and sonically rich.
              </p>
              <p className="text-lg text-slate-300 font-light leading-relaxed">
                Happily Ever After-Parties NE LTD is fully insured with up to £5m public liability cover. If worst happens, you’re covered, and all equipment is PAT tested before every event.
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
                src="/images/images/image10.jpeg"
                alt="Featured celebration"
                fill
                sizes="100vw"
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
                  src="/images/images/image12.jpeg"
                  alt="PAT tested equipment"
                  fill
                  sizes="100vw"
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
            <div className="reviews-track flex w-[200%]">
              {/* Group 1 */}
              <div className="reviews-group flex gap-8 w-1/2">
                <div className="review-card bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm">
                  <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-amber-400">★</span>))}</div>
                  <p className="text-slate-300 font-light mb-6 italic leading-relaxed">&ldquo;Absolutely incredible. They brought the energy and kept our guests dancing all night.&rdquo;</p>
                  <p className="font-semibold text-white">Sarah & Michael</p>
                </div>

                <div className="review-card bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm">
                  <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-amber-400">★</span>))}</div>
                  <p className="text-slate-300 font-light mb-6 italic leading-relaxed">&ldquo;From start to finish, they handled everything perfectly. The lighting transformed our venue.&rdquo;</p>
                  <p className="font-semibold text-white">Jessica & David</p>
                </div>

                <div className="review-card bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm">
                  <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-amber-400">★</span>))}</div>
                  <p className="text-slate-300 font-light mb-6 italic leading-relaxed">&ldquo;Professional, reliable, and genuinely cared about making our day special.&rdquo;</p>
                  <p className="font-semibold text-white">Emma & James</p>
                </div>
              </div>

              {/* Group 2 */}
              <div className="reviews-group flex gap-8 w-1/2">
                <div className="review-card bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm">
                  <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-amber-400">★</span>))}</div>
                  <p className="text-slate-300 font-light mb-6 italic leading-relaxed">&ldquo;Fantastic communication and a brilliant set — everyone danced until the end.&rdquo;</p>
                  <p className="font-semibold text-white">Olivia & Mark</p>
                </div>

                <div className="review-card bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm">
                  <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-amber-400">★</span>))}</div>
                  <p className="text-slate-300 font-light mb-6 italic leading-relaxed">&ldquo;Exceeded expectations — the vibe was perfect and the dancefloor was full.&rdquo;</p>
                  <p className="font-semibold text-white">Hannah & Luke</p>
                </div>

                <div className="review-card bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm">
                  <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-amber-400">★</span>))}</div>
                  <p className="text-slate-300 font-light mb-6 italic leading-relaxed">&ldquo;Amazing service and atmosphere — would recommend to anyone.&rdquo;</p>
                  <p className="font-semibold text-white">Mia & Tom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/images/image8.jpeg"
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
            <a
              href={mailtoHref}
              className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 font-bold tracking-wider hover:bg-slate-200 transition"
            >
              ENQUIRE NOW
            </a>
            <button className="border-2 border-white text-white px-8 py-4 font-bold tracking-wider hover:bg-white hover:text-slate-900 transition">
              VIEW PACKAGES
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex flex-col items-center gap-2">
              <a
                href={`https://wa.me/${phoneNumberInternational}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-sm transition hover:brightness-110"
                style={{ backgroundColor: "#25D366" }}
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
              <span className="text-sm text-gray-300">(WhatsApp Business ready)</span>
            </div>
              <a
                href={mixcloudUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-sm transition hover:brightness-110"
                style={{ backgroundColor: mixcloudBrandColor }}
              >
                <MixcloudIcon />
                Listen on Mixcloud
              </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-700">
            <div>
              <p className="text-lg font-bold mb-2">
                <a
                  href={`https://wa.me/${phoneNumberInternational}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {phone}
                </a>
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
          <p>© 2026 Happily Ever After-Parties NE LTD. All rights reserved. | Fully insured & PAT tested for UK events</p>
          <p>Ltd. Company No. 17153234</p>
        </div>
      </footer>
    </main>
  );
}
