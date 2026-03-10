const tagColors = [
  'bg-teal/20 text-teal',
  'bg-blue/20 text-blue',
  'bg-orange/20 text-orange',
  'bg-navy-mid/30 text-white/80',
];

interface ServiceCardProps {
  tag: string;
  title: string;
  description: string;
  colorIndex?: number;
}

export default function ServiceCard({
  tag,
  title,
  description,
  colorIndex = 0,
}: ServiceCardProps) {
  const tagColor = tagColors[colorIndex % tagColors.length];

  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.1]">
      <span
        className={`mb-4 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${tagColor}`}
      >
        {tag}
      </span>
      <h3 className="font-heading text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
        {description}
      </p>
    </div>
  );
}
