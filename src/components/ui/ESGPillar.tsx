const pillarColors = [
  {
    bg: 'bg-gradient-to-br from-[rgba(0,150,136,0.12)] to-[rgba(0,150,136,0.04)]',
    border: 'border-teal/20',
    title: 'text-teal-dark',
  },
  {
    bg: 'bg-gradient-to-br from-[rgba(26,95,170,0.12)] to-[rgba(26,95,170,0.04)]',
    border: 'border-blue/20',
    title: 'text-blue',
  },
  {
    bg: 'bg-gradient-to-br from-[rgba(242,128,53,0.12)] to-[rgba(242,128,53,0.04)]',
    border: 'border-orange/20',
    title: 'text-orange-warm',
  },
];

interface ESGPillarProps {
  title: string;
  description: string;
  colorIndex?: number;
}

export default function ESGPillar({
  title,
  description,
  colorIndex = 0,
}: ESGPillarProps) {
  const colors = pillarColors[colorIndex % pillarColors.length];

  return (
    <div
      className={`rounded-xl border p-5 ${colors.bg} ${colors.border} transition-shadow duration-300 hover:shadow-[var(--shadow-md)]`}
    >
      <h3 className={`font-heading text-base font-bold ${colors.title}`}>
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
    </div>
  );
}
