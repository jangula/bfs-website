import { ReactNode } from 'react';

interface CTABannerProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function CTABanner({ title, description, children }: CTABannerProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#09192b_0%,#0e3f78_50%,#00796b_100%)] p-12 text-center">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/[0.04]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/[0.03]" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-40 w-40 rounded-full bg-white/[0.02]" />

      <div className="relative z-10">
        <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-white">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
          {description}
        </p>
        {children && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
