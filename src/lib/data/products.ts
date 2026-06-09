import type { Product } from "@/types";

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&fit=crop`;

export const products: Product[] = [
  {
    id: "1",
    slug: "serenity-set-blush",
    name: { en: "Serenity Set — Blush", ar: "طقم سيرينيتي — وردي" },
    description: {
      en: "Our signature matching set in buttery-soft fabric. Sculpting high-waist legging with a supportive crossover bralette designed for pilates, strength training, and everyday wear.",
      ar: "طقمنا المميز بقماش ناعم كالزبدة. ليجنغ عالي الخصر مع حمالة صدر متقاطعة للبيلاتس والتمرين والارتداء اليومي.",
    },
    shortDescription: {
      en: "Buttery-soft matching set",
      ar: "طقم متناسق فائق النعومة",
    },
    price: 128,
    compareAtPrice: 148,
    category: "sets",
    images: [
      img("photo-1518310389532-640caeb06c0d"),
      img("photo-1571019613454-1cb2f99b2d8b"),
    ],
    hoverImage: img("photo-1594381898411-846e7d193883"),
    lifestyleImages: [
      img("photo-1518310389532-640caeb06c0d", 1200),
      img("photo-1574680096145-d05b474e53a4", 1200),
    ],
    variants: [
      { id: "1-s-blush", size: "S", color: "Blush", colorHex: "#E7C9D1", stock: 12 },
      { id: "1-m-blush", size: "M", color: "Blush", colorHex: "#E7C9D1", stock: 18 },
      { id: "1-l-blush", size: "L", color: "Blush", colorHex: "#E7C9D1", stock: 8 },
    ],
    fabric: {
      en: "78% Nylon, 22% Spandex — moisture-wicking, four-way stretch",
      ar: "78٪ نايلون، 22٪ سباندكس — يمتص الرطوبة ويتمدد بأربع اتجاهات",
    },
    fit: {
      en: "Second-skin feel with gentle compression. True to size.",
      ar: "إحساس كالجلد الثاني مع ضغط لطيف. المقاسات دقيقة.",
    },
    benefits: {
      en: ["Squat-proof", "No front seam", "Removable padding", "UPF 50+"],
      ar: ["مقاوم للشفافية", "بدون خياطة أمامية", "حشو قابل للإزالة", "حماية UPF 50+"],
    },
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 284,
  },
  {
    id: "2",
    slug: "flow-crop-tee",
    name: { en: "Flow Crop Tee", ar: "تيشيرت فلو قصير" },
    description: {
      en: "Relaxed crop with a flattering drape. Perfect layered over your favorite set or styled with high-rise denim off-duty.",
      ar: "قصة مريحة مع انسيابية أنيقة. مثالي فوق الطقم المفضل أو مع جينز عالي الخصر.",
    },
    shortDescription: { en: "Relaxed flattering crop", ar: "قصة مريحة وأنيقة" },
    price: 48,
    category: "tops",
    images: [img("photo-1594381898411-846e7d193883"), img("photo-1518310389532-640caeb06c0d")],
    hoverImage: img("photo-1571019613454-1cb2f99b2d8b"),
    lifestyleImages: [img("photo-1594381898411-846e7d193883", 1200)],
    variants: [
      { id: "2-s-oat", size: "S", color: "Oat", colorHex: "#FAF8F6", stock: 20 },
      { id: "2-m-oat", size: "M", color: "Oat", colorHex: "#FAF8F6", stock: 15 },
      { id: "2-s-blush", size: "S", color: "Blush", colorHex: "#E7C9D1", stock: 10 },
    ],
    fabric: { en: "95% Modal, 5% Spandex", ar: "95٪ مودال، 5٪ سباندكس" },
    fit: { en: "Relaxed fit. Size down for a closer crop.", ar: "قصة مريحة. اختاري مقاساً أصغر للقصة الأقرب." },
    benefits: { en: ["Breathable", "Anti-pill", "Easy care"], ar: ["تنفس ممتاز", "مقاوم للكُرات", "عناية سهلة"] },
    isBestSeller: true,
    rating: 4.8,
    reviewCount: 156,
  },
  {
    id: "3",
    slug: "elevate-legging",
    name: { en: "Elevate Legging", ar: "ليجنغ إلفيت" },
    description: {
      en: "Our best-selling legging with a sculpting high waist and hidden pocket. Designed for movement that looks as good on the street as in the studio.",
      ar: "ليجنغنا الأكثر مبيعاً بخصر عالي وجيب مخفي. مصمم للحركة بأناقة في الشارع والاستوديو.",
    },
    shortDescription: { en: "Sculpting high-waist legging", ar: "ليجنغ عالي الخصر" },
    price: 78,
    category: "bottoms",
    images: [img("photo-1571019613454-1cb2f99b2d8b"), img("photo-1574680096145-d05b474e53a4")],
    hoverImage: img("photo-1518310389532-640caeb06c0d"),
    lifestyleImages: [img("photo-1571019613454-1cb2f99b2d8b", 1200)],
    variants: [
      { id: "3-s-charcoal", size: "S", color: "Charcoal", colorHex: "#2B2B2B", stock: 14 },
      { id: "3-m-charcoal", size: "M", color: "Charcoal", colorHex: "#2B2B2B", stock: 22 },
      { id: "3-l-charcoal", size: "L", color: "Charcoal", colorHex: "#2B2B2B", stock: 9 },
    ],
    fabric: { en: "Premium compression knit", ar: "نسيج ضغط فاخر" },
    fit: { en: "High-rise, 25\" inseam. True to size.", ar: "خصر عالي، طول 25 بوصة. مقاس دقيق." },
    benefits: { en: ["Hidden pocket", "No camel toe", "Sweat-wicking"], ar: ["جيب مخفي", "خياطة أمامية مسطحة", "يمتص العرق"] },
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 412,
  },
  {
    id: "4",
    slug: "grace-modest-swim",
    name: { en: "Grace Modest Swim Set", ar: "طقم سباحة جريس المحتشم" },
    description: {
      en: "Full-coverage swim set with quick-dry performance fabric. Elegant, modest, and made for sun-soaked days.",
      ar: "طقم سباحة بتغطية كاملة وقماش سريع الجفاف. أنيق ومحتشم لأيام الشمس.",
    },
    shortDescription: { en: "Modest full-coverage swim", ar: "سباحة محتشمة بتغطية كاملة" },
    price: 98,
    category: "modest-swimwear",
    images: [img("photo-1538805060514-97d9ccac4d3c"), img("photo-1518310389532-640caeb06c0d")],
    hoverImage: img("photo-1538805060514-97d9ccac4d3c"),
    lifestyleImages: [img("photo-1538805060514-97d9ccac4d3c", 1200)],
    variants: [
      { id: "4-s-dusty", size: "S", color: "Dusty Rose", colorHex: "#DDBBC5", stock: 8 },
      { id: "4-m-dusty", size: "M", color: "Dusty Rose", colorHex: "#DDBBC5", stock: 11 },
    ],
    fabric: { en: "Recycled nylon blend, chlorine-resistant", ar: "مزيج نايلون معاد تدويره، مقاوم للكلور" },
    fit: { en: "Modest coverage with adjustable ties", ar: "تغطية محتشمة مع أربطة قابلة للتعديل" },
    benefits: { en: ["UPF 50+", "Quick-dry", "Modest cut"], ar: ["UPF 50+", "جفاف سريع", "قصة محتشمة"] },
    isNew: true,
    rating: 4.7,
    reviewCount: 89,
  },
  {
    id: "5",
    slug: "luxe-bralette",
    name: { en: "Luxe Bralette", ar: "حمالة لوكس" },
    description: {
      en: "Light support bralette with delicate straps and a soft brushed interior. Your go-to for pilates and low-impact days.",
      ar: "حمالة دعم خفيف بحمالات رقيقة وبطانة ناعمة. مثالية للبيلاتس والأيام الهادئة.",
    },
    shortDescription: { en: "Light support bralette", ar: "حمالة دعم خفيف" },
    price: 52,
    category: "tops",
    images: [img("photo-1574680096145-d05b474e53a4"), img("photo-1594381898411-846e7d193883")],
    hoverImage: img("photo-1574680096145-d05b474e53a4"),
    lifestyleImages: [img("photo-1574680096145-d05b474e53a4", 1200)],
    variants: [
      { id: "5-s-soft", size: "S", color: "Soft Pink", colorHex: "#F1DDE2", stock: 16 },
      { id: "5-m-soft", size: "M", color: "Soft Pink", colorHex: "#F1DDE2", stock: 12 },
    ],
    fabric: { en: "Seamless knit with brushed interior", ar: "نسيج سلس ببطانة ناعمة" },
    fit: { en: "Light support. Best for A–C cup.", ar: "دعم خفيف. مناسب للمقاسات A–C." },
    benefits: { en: ["Wire-free", "Removable pads", "Soft straps"], ar: ["بدون سلك", "حشو قابل للإزالة", "حمالات ناعمة"] },
    isNew: true,
    rating: 4.8,
    reviewCount: 67,
  },
  {
    id: "6",
    slug: "harmony-set-sage",
    name: { en: "Harmony Set — Sage", ar: "طقم هارموني — سيج" },
    description: {
      en: "Earth-toned set with a square-neck top and flare-legging silhouette. Effortlessly chic from reformer to brunch.",
      ar: "طقم بألوان ترابية مع توب عنق مربع وليجنغ بقصة واسعة. أنيق من الريفورمر إلى الفطور.",
    },
    shortDescription: { en: "Square-neck flare set", ar: "طقم عنق مربع وقصة واسعة" },
    price: 135,
    category: "sets",
    images: [img("photo-1518310389532-640caeb06c0d"), img("photo-1571019613454-1cb2f99b2d8b")],
    hoverImage: img("photo-1574680096145-d05b474e53a4"),
    lifestyleImages: [img("photo-1518310389532-640caeb06c0d", 1200)],
    variants: [
      { id: "6-s-sage", size: "S", color: "Sage", colorHex: "#B8C4B8", stock: 7 },
      { id: "6-m-sage", size: "M", color: "Sage", colorHex: "#B8C4B8", stock: 10 },
    ],
    fabric: { en: "Sustainable bamboo blend", ar: "مزيج خيزران مستدام" },
    fit: { en: "Flattering square neck. True to size.", ar: "عنق مربع أنيق. مقاس دقيق." },
    benefits: { en: ["Eco fabric", "Flare leg", "Matching set"], ar: ["قماش صديق للبيئة", "رجل واسعة", "طقم متكامل"] },
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 124,
  },
  {
    id: "7",
    slug: "cloud-shorts",
    name: { en: "Cloud Shorts", ar: "شورت كلاود" },
    description: {
      en: "High-rise bike shorts with a seamless waistband. Your summer essential for hot yoga and coffee runs.",
      ar: "شورت بايك عالي الخصر بحزام سلس. أساسي للصيف واليوغا والمشاوير.",
    },
    shortDescription: { en: "Seamless high-rise shorts", ar: "شورت عالي الخصر سلس" },
    price: 58,
    category: "bottoms",
    images: [img("photo-1574680096145-d05b474e53a4"), img("photo-1571019613454-1cb2f99b2d8b")],
    hoverImage: img("photo-1594381898411-846e7d193883"),
    lifestyleImages: [img("photo-1574680096145-d05b474e53a4", 1200)],
    variants: [
      { id: "7-s-blush", size: "S", color: "Blush", colorHex: "#E7C9D1", stock: 15 },
      { id: "7-m-blush", size: "M", color: "Blush", colorHex: "#E7C9D1", stock: 18 },
    ],
    fabric: { en: "Seamless compression", ar: "ضغط سلس" },
    fit: { en: "5\" inseam, high rise", ar: "طول 5 بوصة، خصر عالي" },
    benefits: { en: ["No roll-down", "Squat-proof", "Breathable"], ar: ["لا ينزلق", "مقاوم للشفافية", "تنفس ممتاز"] },
    rating: 4.7,
    reviewCount: 98,
  },
  {
    id: "8",
    slug: "aura-wrap-top",
    name: { en: "Aura Wrap Top", ar: "توب أورا ملفوف" },
    description: {
      en: "Elegant wrap-style top that ties at the waist. Transitions seamlessly from studio to street.",
      ar: "توب ملفوف أنيق يربط عند الخصر. ينتقل بسلاسة من الاستوديو للشارع.",
    },
    shortDescription: { en: "Studio-to-street wrap", ar: "لفة من الاستوديو للشارع" },
    price: 62,
    category: "new-arrivals",
    images: [img("photo-1594381898411-846e7d193883"), img("photo-1518310389532-640caeb06c0d")],
    hoverImage: img("photo-1571019613454-1cb2f99b2d8b"),
    lifestyleImages: [img("photo-1594381898411-846e7d193883", 1200)],
    variants: [
      { id: "8-s-cream", size: "S", color: "Cream", colorHex: "#FAF8F6", stock: 9 },
      { id: "8-m-cream", size: "M", color: "Cream", colorHex: "#FAF8F6", stock: 11 },
    ],
    fabric: { en: "Luxury ribbed modal", ar: "مودال مضلع فاخر" },
    fit: { en: "Adjustable wrap tie", ar: "ربطة ملفوفة قابلة للتعديل" },
    benefits: { en: ["Versatile styling", "Soft drape", "Machine washable"], ar: ["تنسيق متعدد", "انسيابية ناعمة", "قابل للغسيل"] },
    isNew: true,
    rating: 4.8,
    reviewCount: 34,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all" || category === "shop") return products;
  return products.filter((p) => p.category === category);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.isBestSeller);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return products.slice(0, limit);
  return products
    .filter((p) => p.slug !== slug && p.category === product.category)
    .slice(0, limit);
}
