import Link from 'next/link';
import Image from 'next/image';

interface NewsCardProps {
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
  publishedDate: string;
}

export default function NewsCard({
  title,
  slug,
  excerpt,
  coverImage,
  publishedDate,
}: NewsCardProps) {
  return (
    <Link href={`/news/${slug}`} className="group block">
      <article className="bg-white border border-black/[0.08] rounded-md overflow-hidden shadow-[0_1px_3px_rgba(9,25,43,0.06)] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:-translate-y-[3px] group-hover:shadow-[0_20px_50px_rgba(9,25,43,0.1)]">
        {/* Cover image or placeholder */}
        <div className="relative w-full h-48 bg-gradient-to-br from-mist to-sand overflow-hidden">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-heading font-bold text-2xl text-navy/20">
                BFS
              </span>
            </div>
          )}
        </div>

        <div className="p-5">
          {/* Date */}
          <p className="text-[0.78rem] font-semibold text-teal uppercase tracking-[0.14em] mb-2">
            {new Date(publishedDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>

          <h3 className="font-heading text-[1.05rem] font-bold mb-2 leading-tight group-hover:text-teal transition-colors duration-200">
            {title}
          </h3>

          <p className="text-[0.9rem] text-slate leading-[1.55] line-clamp-3">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
