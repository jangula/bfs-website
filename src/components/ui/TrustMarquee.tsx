const items = [
  { number: '1,032', label: 'SMEs Trained' },
  { number: '6,200+', label: 'Jobs Created' },
  { number: '578', label: 'Facilities Financed' },
  { number: 'N$1.8 Billion', label: 'Invested' },
  { number: null, label: 'IFC Compliant' },
  { number: null, label: 'ESG Integrated' },
  { number: null, label: 'GIPF Anchored' },
];

function MarqueeItem({ number, label }: { number: string | null; label: string }) {
  return (
    <span className="mx-8 inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-white/80">
      {number && <span className="font-heading font-extrabold text-orange">{number}</span>}
      {label}
    </span>
  );
}

export default function TrustMarquee() {
  return (
    <div className="overflow-hidden bg-navy py-4">
      <div className="flex animate-marquee">
        {/* First set */}
        {items.map((item, i) => (
          <MarqueeItem key={`a-${i}`} number={item.number} label={item.label} />
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((item, i) => (
          <MarqueeItem key={`b-${i}`} number={item.number} label={item.label} />
        ))}
      </div>
    </div>
  );
}
