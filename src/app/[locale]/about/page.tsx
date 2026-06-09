import { FadeIn } from "@/components/ui/FadeIn";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/types";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.about.title };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div>
      {/* Hero section with gradient design */}
      <div className="relative min-h-screen bg-gradient-to-br from-charcoal via-charcoal-mid to-stone overflow-hidden pt-16 flex items-center">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-dusty-pink rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-mauve rounded-full blur-3xl opacity-5" />
        
        {/* Animated grid pattern background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <pattern id="grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Content */}
        <div className="container-rube relative z-10 py-20">
          <FadeIn className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-dusty-pink/20 border border-dusty-pink/40 backdrop-blur-sm">
              <p className="label-caps text-xs text-dusty-pink font-semibold tracking-wider">Our Story</p>
            </div>

            <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl text-off-white font-bold tracking-tight mb-6">
              {dict.about.title}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-off-white/80 max-w-2xl">
              {dict.about.subtitle}
            </p>

            {/* Accent line */}
            <div className="mt-10 flex items-center gap-3">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-dusty-pink to-baby-pink" />
              <span className="text-sm font-medium tracking-widest label-caps text-dusty-pink/60">
                Since 2023
              </span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Story section */}
      <div className="container-rube py-20 max-w-3xl">
        <FadeIn>
          <p className="text-base leading-relaxed text-stone sm:text-lg mb-8">{dict.about.story}</p>
          <p className="text-base leading-relaxed text-stone sm:text-lg">{dict.about.mission}</p>
        </FadeIn>
      </div>

      {/* Values grid with design-driven cards */}
      <div className="bg-gradient-to-b from-cream to-off-white py-20">
        <div className="container-rube">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-display text-4xl sm:text-5xl text-charcoal mb-4">What we stand for</h2>
            <div className="flex justify-center gap-3">
              <div className="h-1 w-12 rounded-full bg-dusty-pink" />
              <div className="h-1 w-12 rounded-full bg-baby-pink" />
            </div>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Inclusive Sizing",
                desc: "Every woman, every body. Our pieces are designed to flatter across sizes XS–XL.",
                icon: "✓",
                color: "bg-dusty-pink",
              },
              {
                title: "Premium Fabrics",
                desc: "We use only high-performance, sustainable textiles that move with you and last.",
                icon: "✓",
                color: "bg-baby-pink",
              },
              {
                title: "Modest by Design",
                desc: "Full coverage options that never compromise on style or movement freedom.",
                icon: "✓",
                color: "bg-mauve-light",
              },
            ].map((v, idx) => (
              <FadeIn key={v.title}>
                <div className="group relative">
                  {/* Decorative background */}
                  <div className={`absolute -inset-3 ${v.color} rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300 blur`} />
                  
                  <div className="relative rounded-2xl bg-off-white p-8 border border-light-grey/50 hover:border-dusty-pink/30 transition h-full">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${v.color} text-off-white font-bold text-lg mb-4`}>
                      {v.icon}
                    </div>
                    <h3 className="font-bold text-charcoal text-lg tracking-tight mb-3">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-stone">{v.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Feature banner with wordmark design */}
      <div className="relative min-h-[400px] bg-gradient-to-r from-charcoal to-charcoal-mid overflow-hidden flex items-center py-20">
        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-dusty-pink rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-baby-pink rounded-full blur-3xl opacity-5" />

        <div className="container-rube relative z-10 text-center">
          <FadeIn>
            <p className="label-caps text-dusty-pink/60 mb-4 text-sm tracking-wider">Crafted with care</p>
            <h2 className="heading-display text-5xl sm:text-6xl text-off-white font-bold mb-8 tracking-tight">
              Made for your body
            </h2>
            <p className="text-lg text-off-white/70 max-w-2xl mx-auto mb-12">
              Every piece is thoughtfully designed with you in mind—from studio to street, we've got you covered.
            </p>
            
            {/* Decorative wordmark */}
            <div className="inline-block px-8 py-6 rounded-2xl border border-dusty-pink/30 bg-white/5 backdrop-blur-sm">
              <p className="wordmark text-4xl text-off-white">rube</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
