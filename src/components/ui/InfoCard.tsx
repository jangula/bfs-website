import type { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <article className="bg-white border border-black/[0.08] rounded-md p-6 shadow-[0_1px_3px_rgba(9,25,43,0.06)]">
      <h3 className="font-heading text-base font-bold mb-2">{title}</h3>
      <div className="text-[0.88rem] text-slate leading-[1.6] [&_ul]:m-0 [&_ul]:pl-[1.1rem] [&_li]:mb-[0.35rem] [&_p]:m-0 [&_p+p]:mt-2">
        {children}
      </div>
    </article>
  );
}
