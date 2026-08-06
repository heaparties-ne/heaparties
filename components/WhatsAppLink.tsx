"use client";

import type { CSSProperties, ReactNode } from "react";

type WhatsAppLinkProps = {
  href: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function WhatsAppLink({
  href,
  className,
  style,
  children,
}: WhatsAppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={() => {
        window.gtag?.("event", "conversion", {
          send_to: "AW-18328463194/Wo5RCPi3z9McENrO2KNE",
          value: 1.0,
          currency: "GBP",
        });
      }}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}
