import Link from 'next/link';

const colorVariants = [
  {
    border: 'group-hover:border-t-teal',
    iconBg: 'bg-[rgba(0,150,136,0.1)]',
    iconText: 'text-teal',
    link: 'text-teal',
  },
  {
    border: 'group-hover:border-t-blue',
    iconBg: 'bg-[rgba(26,95,170,0.1)]',
    iconText: 'text-blue',
    link: 'text-blue',
  },
  {
    border: 'group-hover:border-t-orange',
    iconBg: 'bg-[rgba(242,128,53,0.1)]',
    iconText: 'text-orange',
    link: 'text-orange',
  },
  {
    border: 'group-hover:border-t-navy',
    iconBg: 'bg-[rgba(9,25,43,0.1)]',
    iconText: 'text-navy',
    link: 'text-navy',
  },
];

interface PathwayCardProps {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  colorIndex?: number;
}

export default function PathwayCard({
  icon,
  title,
  description,
  linkText,
  linkHref,
  colorIndex = 0,
}: PathwayCardProps) {
  const colors = colorVariants[colorIndex % colorVariants.length];

  return (
    <div
      className={`group relative flex flex-col rounded-xl border border-[#d6d1c9] border-t-[3px] border-t-transparent bg-white p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)] ${colors.border}`}
    >
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-sm text-2xl ${colors.iconBg}`}
      >
        <span>{icon}</span>
      </div>
      <h3 className="font-heading text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
        {description}
      </p>
      <Link
        href={linkHref}
        className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${colors.link} transition-colors hover:underline`}
      >
        {linkText}
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
