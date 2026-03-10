interface OpportunityCardProps {
  title: string;
  description: string;
  sector: string;
  investmentRange: string;
  stage: string;
}

const sectorColors: Record<string, string> = {
  agriculture: 'bg-teal',
  energy: 'bg-orange',
  digital: 'bg-blue',
  sme: 'bg-navy',
};

export default function OpportunityCard({
  title,
  description,
  sector,
  investmentRange,
  stage,
}: OpportunityCardProps) {
  const barColor = sectorColors[sector.toLowerCase()] ?? 'bg-teal';

  return (
    <article className="relative bg-white border border-black/[0.08] rounded-md p-6 shadow-[0_1px_3px_rgba(9,25,43,0.06)] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-[3px] hover:shadow-[0_20px_50px_rgba(9,25,43,0.1)] overflow-hidden">
      {/* Sector-colored top bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-md ${barColor}`}
      />

      <h3 className="font-heading text-[1.05rem] font-bold mb-2">{title}</h3>

      <p className="text-[0.9rem] text-slate leading-[1.55] mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-[0.4rem]">
        <span className="inline-flex px-[0.6rem] py-[0.22rem] rounded-full text-[0.74rem] font-semibold bg-mist text-slate">
          {sector}
        </span>
        <span className="inline-flex px-[0.6rem] py-[0.22rem] rounded-full text-[0.74rem] font-semibold bg-mist text-slate">
          {investmentRange}
        </span>
        <span className="inline-flex px-[0.6rem] py-[0.22rem] rounded-full text-[0.74rem] font-semibold bg-mist text-slate">
          {stage}
        </span>
      </div>
    </article>
  );
}
