'use client';

import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

interface FundCardProps {
  badge: string;
  name: string;
  description: string;
  statValue: string;
  statLabel: string;
  isNumeric?: boolean;
  countTarget?: number;
  countPrefix?: string;
  countSuffix?: string;
}

function AnimatedStat({
  target,
  prefix = '',
  suffix = '',
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const { count, ref } = useAnimatedCounter({ target });

  return (
    <span ref={ref} className="font-heading text-2xl font-extrabold text-teal">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function FundCard({
  badge,
  name,
  description,
  statValue,
  statLabel,
  isNumeric = false,
  countTarget = 0,
  countPrefix = '',
  countSuffix = '',
}: FundCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-[#d6d1c9] bg-white shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]">
      {/* Top gradient bar */}
      <div className="h-1.5 bg-gradient-to-r from-teal via-blue to-navy" />

      <div className="flex flex-1 flex-col p-6">
        {/* Badge pill */}
        <span className="mb-3 inline-block w-fit rounded-full bg-[rgba(0,150,136,0.1)] px-3 py-1 text-xs font-semibold text-teal">
          {badge}
        </span>

        <h3 className="font-heading text-lg font-bold text-ink">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
          {description}
        </p>

        {/* Bottom stat */}
        <div className="mt-5 border-t border-[#d6d1c9] pt-4">
          {isNumeric ? (
            <AnimatedStat
              target={countTarget}
              prefix={countPrefix}
              suffix={countSuffix}
            />
          ) : (
            <span className="font-heading text-2xl font-extrabold text-teal">
              {statValue}
            </span>
          )}
          <p className="mt-1 text-xs font-medium text-slate">{statLabel}</p>
        </div>
      </div>
    </div>
  );
}
