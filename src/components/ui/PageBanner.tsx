import { ReactNode } from 'react';

interface PageBannerProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export default function PageBanner({
  eyebrow,
  title,
  description,
  children,
}: PageBannerProps) {
  return (
    <section className="pt-[3.5rem] pb-[2.5rem]">
      <div className="mx-auto max-w-[680px] px-5">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal">
          {eyebrow}
        </p>
        <h1 className="font-heading text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.1] text-ink">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate">
          {description}
        </p>
        {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
