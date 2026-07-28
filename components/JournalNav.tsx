import Link from "next/link";
import BrandLogo from "./BrandLogo";

export default function JournalNav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <BrandLogo />
        <div className="flex items-center gap-5">
          <Link
            href="/blog"
            className="text-sm font-medium uppercase tracking-[0.24em] text-slate-300 transition hover:text-white"
          >
            Journal
          </Link>
          <Link
            href="/"
            className="hidden text-sm font-medium uppercase tracking-[0.24em] text-slate-300 transition hover:text-white sm:inline"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
