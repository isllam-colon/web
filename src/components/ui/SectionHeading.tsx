import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 sm:mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="heading-display text-3xl text-charcoal sm:text-4xl lg:text-[2.5rem]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 max-w-lg text-sm leading-relaxed text-stone sm:text-base",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
