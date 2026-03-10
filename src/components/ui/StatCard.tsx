'use client';

import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimal?: boolean;
  accent?: boolean;
}

export default function StatCard({
  value,
  suffix = '',
  prefix = '',
  label,
  decimal = false,
  accent = false,
}: StatCardProps) {
  const { count, ref } = useAnimatedCounter({
    target: value,
    decimal,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center rounded-xl p-6 text-center transition-shadow duration-300 ${
        accent
          ? 'bg-gradient-to-br from-navy to-navy-mid text-white shadow-lg'
          : 'border border-[#d6d1c9] bg-white shadow-[var(--shadow-sm)]'
      }`}
    >
      <span
        className={`font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold leading-none ${
          accent ? 'text-white' : 'text-teal'
        }`}
      >
        {prefix}
        {decimal ? count.toFixed(1) : count.toLocaleString()}
        {suffix}
      </span>
      <span
        className={`mt-2 text-sm font-medium ${
          accent ? 'text-white/70' : 'text-slate'
        }`}
      >
        {label}
      </span>
    </div>
  );
}
