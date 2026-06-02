import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  textClassName?: string;
  markClassName?: string;
  showName?: boolean;
};

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-2xl bg-white/94 p-2 shadow-[0_20px_40px_-24px_rgba(255,255,255,0.8)] ring-1 ring-white/15 ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Happily Ever After-Parties NE"
        width={72}
        height={72}
        className="h-14 w-14 object-contain md:h-[4.5rem] md:w-[4.5rem]"
        priority
      />
    </div>
  );
}

export default function BrandLogo({
  href = "/",
  textClassName = "",
  markClassName = "",
  showName = true,
}: BrandLogoProps) {
  return (
    <Link href={href} className="inline-flex items-center gap-3">
      <LogoMark className={markClassName} />
      {showName ? (
        <span className={`text-xl font-bold tracking-tight text-white md:text-2xl ${textClassName}`}>
          HAPPILY EVER AFTER-PARTIES NE LTD
        </span>
      ) : null}
    </Link>
  );
}
