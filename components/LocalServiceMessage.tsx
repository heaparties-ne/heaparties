"use client";

import { useEffect, useState } from "react";

export default function LocalServiceMessage() {
  const [city, setCity] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const runWhenIdle =
      window.requestIdleCallback ||
      ((callback: IdleRequestCallback) => window.setTimeout(callback, 1200));

    const idleId = runWhenIdle(() => {
      fetch("/api/location", { signal: controller.signal })
        .then((response) => (response.ok ? response.json() : null))
        .then((data: { city?: string } | null) => setCity(data?.city || ""))
        .catch(() => undefined);
    });

    return () => {
      controller.abort();
      if (typeof idleId === "number") {
        window.clearTimeout(idleId);
      } else {
        window.cancelIdleCallback?.(idleId);
      }
    };
  }, []);

  if (!city) return null;

  return (
    <p className="mt-4 text-sm font-medium text-violet-100">
      Planning a celebration near {city}? You&apos;re right in our service area.
    </p>
  );
}
