"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 lg:mb-16", centered && "text-center")}>
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 rounded-full">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight",
          light ? "text-white" : "text-navy-800"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl",
            centered && "mx-auto",
            light ? "text-gray-300" : "text-gray-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
