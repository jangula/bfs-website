interface DocumentCardProps {
  title: string;
  description: string;
  category: string;
  fileUrl: string;
  publishedDate: string;
}

export default function DocumentCard({
  title,
  description,
  category,
  fileUrl,
  publishedDate,
}: DocumentCardProps) {
  return (
    <article className="bg-white border border-black/[0.08] rounded-md p-6 shadow-[0_1px_3px_rgba(9,25,43,0.06)] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-[3px] hover:shadow-[0_20px_50px_rgba(9,25,43,0.1)]">
      {/* PDF icon + title row */}
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[#fbe5e0] flex items-center justify-content text-[#ab4029] font-heading font-bold text-xs">
          <svg
            className="w-5 h-5 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 21h10a2 2 0 002-2V9l-5-5H7a2 2 0 00-2 2v13a2 2 0 002 2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 4v5h5"
            />
          </svg>
        </div>
        <div className="min-w-0">
          <h3 className="font-heading text-[1.05rem] font-bold leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Category pill */}
      <span className="inline-flex px-[0.6rem] py-[0.22rem] rounded-full text-[0.74rem] font-semibold bg-mist text-slate mb-3">
        {category}
      </span>

      <p className="text-[0.9rem] text-slate leading-[1.55] mb-3">
        {description}
      </p>

      {/* Date */}
      <p className="text-[0.82rem] text-slate mb-4">
        Published:{' '}
        {new Date(publishedDate).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>

      {/* Download link */}
      <a
        href={fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-black/[0.15] bg-white text-ink font-semibold text-[0.85rem] px-4 py-[0.55rem] transition-all duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-teal hover:text-teal hover:-translate-y-[2px]"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
          />
        </svg>
        Download PDF
      </a>
    </article>
  );
}
