"use client";

import { useState } from "react";
import type { Dictionary, Locale } from "@/types";
import { Button } from "@/components/ui/Button";

interface NewsletterFormProps {
  locale: Locale;
  dict: Dictionary;
  compact?: boolean;
  dark?: boolean;
}


export function NewsletterForm({ locale, dict, compact = false, dark = false }: NewsletterFormProps) {
  const home = dict.home as Record<string, string>;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    // Stub: wire to backend later.
    await new Promise((r) => setTimeout(r, 400));

    setStatus("done");
  }

  const containerClass = compact 
    ? "flex flex-col sm:flex-row gap-2 justify-start"
    : "flex flex-col sm:flex-row gap-3 justify-center";

  const inputClass = compact
    ? "w-full sm:w-64 rounded-card bg-off-white border border-charcoal/10 px-3 py-2 text-sm text-charcoal outline-none focus:border-dusty-pink"
    : "w-full sm:w-80 rounded-card bg-off-white border border-charcoal/10 px-4 py-3 text-charcoal outline-none focus:border-dusty-pink";

  const darkInputClass = dark
    ? "bg-charcoal/20 border-off-white/20 text-off-white placeholder:text-off-white/50 focus:border-mauve-light"
    : inputClass;

  return (
    <form onSubmit={onSubmit} className={containerClass}>
      <label htmlFor="newsletter-email" className="sr-only">Email</label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={home.newsletterPlaceholder ?? "Email address"}
        className={darkInputClass}
        aria-label="Email address for newsletter subscription"
        required
      />
      <Button
        type="submit"
        locale={locale}
        variant={dark ? "secondary" : "secondary"}
        className={compact ? "sm:shrink-0 text-xs" : "sm:shrink-0"}
        disabled={status === "submitting" || status === "done"}
      >
        {status === "done" ? home.newsletterSuccess ?? "Subscribed" : home.newsletterCta ?? "Subscribe"}
      </Button>
    </form>
  );
}

