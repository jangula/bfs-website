'use client';

interface RoleCardProps {
  title: string;
  description: string;
  location: string;
  closingDate: string;
  type: string;
}

export default function RoleCard({
  title,
  description,
  location,
  closingDate,
  type,
}: RoleCardProps) {
  const closing = new Date(closingDate);
  const now = new Date();
  const isOpen = closing >= now;

  return (
    <article className="bg-white border border-black/[0.08] rounded-md p-6 shadow-[0_1px_3px_rgba(9,25,43,0.06)] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:shadow-[0_8px_30px_rgba(9,25,43,0.08)]">
      {/* Status badge */}
      <span
        className={`inline-flex px-[0.55rem] py-[0.2rem] rounded-full text-[0.75rem] font-bold mb-[0.6rem] ${
          isOpen
            ? 'bg-[#e4f7f1] text-[#0a7b64]'
            : 'bg-[#fbe5e0] text-[#ab4029]'
        }`}
      >
        {isOpen ? 'Open' : 'Closed'}
      </span>

      <h3 className="font-heading text-[1.05rem] font-bold mb-[0.4rem]">
        {title}
      </h3>

      <p className="text-[0.9rem] text-slate leading-[1.5] mb-[0.8rem]">
        {description}
      </p>

      <div className="flex flex-wrap gap-3 text-[0.82rem] text-slate">
        <span className="inline-flex items-center gap-[0.3rem]">
          {'\u{1F4CD}'} {location}
        </span>
        <span className="inline-flex items-center gap-[0.3rem]">
          {'\u{1F4C5}'}{' '}
          {isOpen
            ? `Closes: ${closing.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}`
            : `Closed: ${closing.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}`}
        </span>
        <span>{type}</span>
      </div>
    </article>
  );
}
