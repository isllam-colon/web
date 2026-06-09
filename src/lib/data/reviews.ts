import type { Review } from "@/types";

export const reviews: Review[] = [
  {
    id: "1",
    author: "Sara M.",
    location: "Dubai",
    rating: 5,
    text: {
      en: "The Serenity Set is everything. Soft, flattering, and I get compliments every time I wear it to pilates.",
      ar: "طقم سيرينيتي رائع. ناعم وأنيق وأتلقى إطراءات في كل حصة بيلاتس.",
    },
    productSlug: "serenity-set-blush",
    date: "2025-04-12",
  },
  {
    id: "2",
    author: "Layla K.",
    location: "London",
    rating: 5,
    text: {
      en: "Finally activewear that feels premium without looking like a gym bro brand. The fit is incredible.",
      ar: "أخيراً ملابس رياضية فاخرة دون مظهر رجالي. القصة مذهلة.",
    },
    date: "2025-03-28",
  },
  {
    id: "3",
    author: "Emma R.",
    location: "Los Angeles",
    rating: 5,
    text: {
      en: "I live in my Elevate Leggings. Squat-proof, pocket for my phone, and they look chic with an oversized tee.",
      ar: "أعيش في ليجنغ إلفيت. مقاوم للشفافية، جيب للهاتف، وأنيق مع تيشيرت واسع.",
    },
    productSlug: "elevate-legging",
    date: "2025-05-01",
  },
  {
    id: "4",
    author: "Nour A.",
    location: "Cairo",
    rating: 5,
    text: {
      en: "The modest swim set is beautiful and practical. Exactly what I was looking for.",
      ar: "طقم السباحة المحتشم جميل وعملي. بالضبط ما كنت أبحث عنه.",
    },
    productSlug: "grace-modest-swim",
    date: "2025-04-20",
  },
];
