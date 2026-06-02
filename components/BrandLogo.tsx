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
        src="/logo.png"
        alt="Happily Ever After-Parties NE"
        width={144}
        height={144}
        className="h-24 w-24 object-contain invert brightness-200 drop-shadow-[0_10px_30px_rgba(255,255,255,0.18)] md:h-28 md:w-28"
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
