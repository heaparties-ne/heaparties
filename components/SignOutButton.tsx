"use client";

import { useState } from "react";

export default function SignOutButton() {
  const [signingOut, setSigningOut] = useState(false);

  const signOut = async () => {
    setSigningOut(true);

    try {
      await fetch("/api/logout", { method: "POST" });
    } finally {
      window.location.replace("/login");
    }
  };

  return (
    <button
      type="button"
      onClick={signOut}
      disabled={signingOut}
      className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 transition hover:text-white disabled:opacity-50"
    >
      {signingOut ? "Signing out..." : "Sign out"}
    </button>
  );
}
