import type { UGCItem } from "@/types";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=400&h=500&q=80&fit=crop`;

export const ugcItems: UGCItem[] = [
  {
    id: "1",
    image: img("photo-1518310389532-640caeb06c0d"),
    handle: "@sara_moves",
    caption: { en: "Pilates morning in Serenity", ar: "صباح بيلاتس في سيرينيتي" },
  },
  {
    id: "2",
    image: img("photo-1571019613454-1cb2f99b2d8b"),
    handle: "@layla_fit",
    caption: { en: "Studio to street", ar: "من الاستوديو للشارع" },
  },
  {
    id: "3",
    image: img("photo-1594381898411-846e7d193883"),
    handle: "@emma_style",
    caption: { en: "Off-duty RUBE", ar: "راحة مع RUBE" },
  },
  {
    id: "4",
    image: img("photo-1574680096145-d05b474e53a4"),
    handle: "@nour_active",
    caption: { en: "Movement is confidence", ar: "الحركة ثقة" },
  },
  {
    id: "5",
    image: img("photo-1538805060514-97d9ccac4d3c"),
    handle: "@rube.community",
    caption: { en: "Summer in Grace", ar: "صيف مع جريس" },
  },
  {
    id: "6",
    image: img("photo-1518310389532-640caeb06c0d"),
    handle: "@rube.community",
    caption: { en: "Tag us #WearRUBE", ar: "شاركونا #WearRUBE" },
  },
];
