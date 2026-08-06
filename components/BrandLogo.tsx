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
    <div className={`inline-flex items-center justify-center ${className}`}>
      <Image
        src="/images/optimized/hea-logo-mark-white-384.webp"
        alt="Happily Ever After-Parties NE"
        width={276}
        height={384}
        unoptimized
        className="brand-logo-mark h-24 w-24 scale-[1.6] object-contain drop-shadow-[0_10px_30px_rgba(255,255,255,0.18)] md:h-28 md:w-28"
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
    <Link href={href} className="brand-logo inline-flex items-center gap-3">
      <LogoMark className={markClassName} />
      {showName ? (
        <span className={`brand-logo-name text-xl font-bold tracking-tight text-white md:text-2xl ${textClassName}`}>
          HAPPILY EVER AFTER-PARTIES NE LTD
        </span>
      ) : null}
    </Link>
  );
}
