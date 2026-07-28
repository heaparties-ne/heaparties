"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentPreferences = {
  analytics: boolean;
  advertising: boolean;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const storageKey = "hea_cookie_consent";
const rejectedPreferences: ConsentPreferences = {
  analytics: false,
  advertising: false,
};

function updateGoogleConsent(preferences: ConsentPreferences) {
  window.gtag?.("consent", "update", {
    ad_storage: preferences.advertising ? "granted" : "denied",
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_user_data: preferences.advertising ? "granted" : "denied",
    ad_personalization: preferences.advertising ? "granted" : "denied",
  });
}

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [hasSavedChoice, setHasSavedChoice] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>(rejectedPreferences);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const saved = localStorage.getItem(storageKey);
        if (!saved) {
          setIsOpen(true);
          return;
        }

        const parsed = JSON.parse(saved) as ConsentPreferences;
        const restored = {
          analytics: parsed.analytics === true,
          advertising: parsed.advertising === true,
        };
        setPreferences(restored);
        setHasSavedChoice(true);
        updateGoogleConsent(restored);
      } catch {
        setIsOpen(true);
      }
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const savePreferences = (nextPreferences: ConsentPreferences) => {
    localStorage.setItem(storageKey, JSON.stringify(nextPreferences));
    setPreferences(nextPreferences);
    setHasSavedChoice(true);
    setShowPreferences(false);
    setIsOpen(false);
    updateGoogleConsent(nextPreferences);
  };

  const openSettings = () => {
    setShowPreferences(true);
    setIsOpen(true);
  };

  return (
    <>
      {isOpen ? (
        <div
          className="fixed inset-x-0 bottom-0 z-[100] border-t border-violet-400/30 bg-slate-950/98 p-4 text-slate-100 shadow-[0_-20px_60px_-25px_rgba(139,92,246,0.75)] backdrop-blur-xl sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
        >
          <div className="mx-auto max-w-5xl">
            <h2 id="cookie-consent-title" className="text-xl font-bold text-white">
              Your privacy choices
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">
              We use necessary storage to run the website. With your permission, Google measurement
              helps us understand which adverts lead to enquiries.{" "}
              <Link href="/privacy" className="text-violet-300 hover:text-violet-200">
                Read our privacy policy
              </Link>
              .
            </p>

            {showPreferences ? (
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
                  <p className="font-semibold text-white">Necessary</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    Required for privacy choices and core website functions.
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Always on
                  </p>
                </div>
                <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-700 bg-slate-900 p-4">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(event) =>
                      setPreferences((current) => ({
                        ...current,
                        analytics: event.target.checked,
                      }))
                    }
                    className="mt-1 h-4 w-4 accent-violet-400"
                  />
                  <span>
                    <span className="font-semibold text-white">Analytics</span>
                    <span className="mt-1 block text-xs leading-relaxed text-slate-400">
                      Helps measure website use and conversions.
                    </span>
                  </span>
                </label>
                <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-700 bg-slate-900 p-4">
                  <input
                    type="checkbox"
                    checked={preferences.advertising}
                    onChange={(event) =>
                      setPreferences((current) => ({
                        ...current,
                        advertising: event.target.checked,
                      }))
                    }
                    className="mt-1 h-4 w-4 accent-violet-400"
                  />
                  <span>
                    <span className="font-semibold text-white">Advertising</span>
                    <span className="mt-1 block text-xs leading-relaxed text-slate-400">
                      Helps measure and improve Google advertising.
                    </span>
                  </span>
                </label>
              </div>
            ) : null}

            <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">
              <button
                type="button"
                onClick={() => savePreferences(rejectedPreferences)}
                className="min-h-11 rounded border border-slate-500 px-5 py-2.5 font-semibold text-white transition hover:bg-slate-800"
              >
                Reject optional
              </button>
              <button
                type="button"
                onClick={() =>
                  showPreferences
                    ? savePreferences(preferences)
                    : setShowPreferences(true)
                }
                className="min-h-11 rounded border border-violet-300 px-5 py-2.5 font-semibold text-violet-200 transition hover:bg-violet-950"
              >
                {showPreferences ? "Save choices" : "Manage choices"}
              </button>
              <button
                type="button"
                onClick={() => savePreferences({ analytics: true, advertising: true })}
                className="min-h-11 rounded bg-white px-5 py-2.5 font-bold text-slate-950 transition hover:bg-slate-200"
              >
                Accept optional
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {hasSavedChoice && !isOpen ? (
        <button
          type="button"
          onClick={openSettings}
          className="fixed bottom-3 left-3 z-[90] rounded-full border border-slate-600 bg-slate-950/95 px-4 py-2 text-xs font-semibold text-slate-200 shadow-lg backdrop-blur transition hover:border-violet-300 hover:text-white"
        >
          Cookie settings
        </button>
      ) : null}
    </>
  );
}
