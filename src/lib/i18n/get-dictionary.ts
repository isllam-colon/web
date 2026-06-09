import type { Dictionary, Locale } from "@/types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/messages/en.json").then((m) => m.default as Dictionary),
  ar: () => import("@/messages/ar.json").then((m) => m.default as Dictionary),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
