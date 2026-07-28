import type { Metadata } from "next";
import Link from "next/link";
import JournalNav from "../../components/JournalNav";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Happily Ever After-Parties NE LTD collects, uses and protects personal information.",
  robots: {
    index: false,
    follow: true,
  },
};

const sections = [
  {
    title: "Who is responsible for your information?",
    content: (
      <>
        Happily Ever After-Parties NE LTD is the data controller for personal information collected
        through this website and during enquiries. The company number is 17153234. Questions about
        privacy can be sent to{" "}
        <a className="text-violet-300 hover:text-violet-200" href="mailto:enquiries@heaparties-ne.co.uk">
          enquiries@heaparties-ne.co.uk
        </a>
        .
      </>
    ),
  },
  {
    title: "Information collected",
    content: (
      <>
        Information you provide may include your name, event date, venue or location, phone number,
        requirements and anything else included in your enquiry or later correspondence. When an
        enquiry form is submitted, the website uses IP-derived approximate location information,
        which may include town, region, country and approximate coordinates. The submitting IP
        address is not included in the enquiry email. A recognised North East town may be used to
        personalise a line on the home page; the website does not create a location history from
        this feature. The website may also process technical usage and performance information
        through Vercel Analytics and Speed Insights.
      </>
    ),
  },
  {
    title: "How and why information is used",
    content: (
      <>
        Information is used to respond to enquiries, check availability, prepare quotes, plan and
        provide booked services, keep business records, protect the website and understand how it
        performs. The legal bases relied upon are taking steps before entering a contract,
        performing a contract, complying with legal obligations and legitimate interests in
        operating, improving and protecting the business. Information will not be sold.
      </>
    ),
  },
  {
    title: "Who information may be shared with",
    content: (
      <>
        Information is shared only where reasonably necessary. Providers currently used include
        Vercel for website hosting, analytics and performance monitoring, and Resend for delivery of
        website enquiry emails. Information may also be shared with professional advisers,
        insurers, payment providers used for a booking, or public authorities where required by
        law. External services reached through links, including WhatsApp and Spotify, process
        information under their own privacy policies.
      </>
    ),
  },
  {
    title: "Google advertising and Customer Match",
    content: (
      <>
        Where separate consent has been given, contact information such as a name, email address,
        phone number or postal address may be securely shared with Google to provide advertising
        measurement services and Customer Match on our behalf. Google acts as a processor for
        Customer Match under the applicable Google Ads Data Processing Terms. Customer information
        uploaded for matching is transformed into hashed data and used to match records with Google
        accounts. We will only upload first-party information collected through a direct relationship
        with the individual and recorded as consented for this purpose. Advertising-data consent is
        optional, is not required to make an enquiry or booking, and may be withdrawn at any time by
        emailing us. Withdrawing consent does not affect processing that took place before withdrawal.
      </>
    ),
  },
  {
    title: "International processing",
    content: (
      <>
        Some service providers may process information outside the United Kingdom. Where this
        happens, the provider&apos;s contractual and legal safeguards are relied upon to protect the
        information in accordance with applicable data-protection law.
      </>
    ),
  },
  {
    title: "How long information is kept",
    content: (
      <>
        Unsuccessful or unconfirmed enquiry information is normally retained for up to 24 months
        after the last contact, unless there is a good reason to keep it longer. Information
        relating to confirmed bookings, invoices and financial records is normally retained for up
        to six years to meet contractual, tax, insurance and legal requirements. Technical records
        are retained according to the settings and policies of the relevant service provider.
      </>
    ),
  },
  {
    title: "Cookies and technical tools",
    content: (
      <>
        Necessary storage is used to remember privacy choices and provide essential website
        functions. Vercel Analytics and Speed Insights provide technical usage and performance
        information. Google Ads measurement is used to understand whether advertising leads to
        enquiries. Google advertising and analytics storage defaults to denied and is enabled only
        in line with the choices made through the cookie banner. Choices can be rejected, accepted,
        customised or changed later using the Cookie settings button.
      </>
    ),
  },
  {
    title: "Your rights",
    content: (
      <>
        Depending on the circumstances, you may have rights to access, correct, erase or restrict
        your information, object to its use, or request a portable copy. You can also withdraw
        consent where consent is the legal basis. To make a request, email the address above. You
        also have the right to complain to the UK Information Commissioner&apos;s Office at{" "}
        <a
          className="text-violet-300 hover:text-violet-200"
          href="https://ico.org.uk/make-a-complaint/"
          target="_blank"
          rel="noreferrer"
        >
          ico.org.uk
        </a>
        .
      </>
    ),
  },
  {
    title: "Changes to this policy",
    content: (
      <>
        This policy may be updated when the website, services or legal requirements change. The
        latest version will always appear on this page.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <JournalNav />
      <header className="border-b border-slate-800 px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            Your information
          </p>
          <h1 className="mt-4 text-5xl font-bold text-white md:text-7xl">Privacy policy</h1>
          <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-slate-300">
            A clear explanation of what information is collected, why it is needed and how it is
            protected.
          </p>
          <p className="mt-5 text-sm text-slate-400">Last updated: 23 July 2026</p>
        </div>
      </header>

      <div className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl divide-y divide-slate-800">
          {sections.map((section) => (
            <section key={section.title} className="grid gap-5 py-10 md:grid-cols-[0.7fr_1.3fr]">
              <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              <p className="text-lg font-light leading-relaxed text-slate-300">{section.content}</p>
            </section>
          ))}
          <div className="pt-10">
            <Link className="font-semibold text-violet-300 hover:text-violet-200" href="/">
              Return to the website
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
