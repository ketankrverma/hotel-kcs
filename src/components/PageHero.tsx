import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  imageSrc?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbLabel,
  imageSrc = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
}: PageHeroProps) {
  return (
    <section className="relative h-64 sm:h-80 md:h-96 w-full flex items-center justify-center overflow-hidden bg-forest-950">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover object-center opacity-30 mix-blend-overlay scale-105"
        priority
      />

      {/* Luxury dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-gold-400/90">
          <Link href="/" className="hover:text-gold-200 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gold-500/60" />
          <span className="text-white/80">{breadcrumbLabel}</span>
        </nav>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-gold-200/90 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>

        {/* Subtle decorative separator */}
        <div className="pt-2 flex items-center justify-center space-x-2">
          <span className="h-[1px] w-12 bg-gold-500/40" />
          <span className="w-1.5 h-1.5 rotate-45 bg-gold-400" />
          <span className="h-[1px] w-12 bg-gold-500/40" />
        </div>
      </div>
    </section>
  );
}

