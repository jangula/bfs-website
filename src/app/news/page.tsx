import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/ui/PageBanner';
import NewsCard from '@/components/ui/NewsCard';
import CTABanner from '@/components/ui/CTABanner';
import { client } from '@/sanity/lib/client';
import { getNewsPosts } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'News & Updates | BFS',
};

const articles = [
  {
    title: 'BFS Launches NamPro II Bridging Finance Fund',
    slug: 'nampro-ii-launch',
    publishedDate: '2024-08-15',
    excerpt:
      'Business Financial Solutions announces the launch of NamPro II, a new bridging finance fund designed to provide short-term capital solutions for Namibian SMEs awaiting contract payments or procurement disbursements.',
  },
  {
    title: '1,000+ SMEs Trained Through Enterprise Development Programme',
    slug: 'sme-milestone',
    publishedDate: '2024-07-20',
    excerpt:
      'BFS reaches a significant milestone with over 1,000 small and medium enterprises completing its enterprise development programme, equipping business owners with financial literacy, governance, and growth skills.',
  },
  {
    title: 'BFS Partners with GIPF for Expanded SME Financing',
    slug: 'gipf-partnership',
    publishedDate: '2024-06-10',
    excerpt:
      'A strategic partnership between BFS and the Government Institutions Pension Fund will unlock additional capital for SME financing, expanding access to growth funding across Namibia.',
  },
  {
    title: 'Energy Sector Advisory Practice Launched',
    slug: 'energy-practice',
    publishedDate: '2024-05-05',
    excerpt:
      'BFS formally launches its dedicated energy advisory practice, offering transaction support, regulatory guidance, and project development services for Namibia\'s growing renewable energy sector.',
  },
];

export default async function NewsPage() {
  const sanityPosts = await client.fetch(getNewsPosts).catch(() => []);
  const newsArticles =
    sanityPosts && sanityPosts.length > 0
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sanityPosts.map((post: any) => ({
          title: post.title,
          slug: post.slug?.current,
          excerpt: post.excerpt,
          publishedDate: post.publishedDate,
          coverImage: undefined,
        }))
      : articles;

  return (
    <main>
      <PageBanner
        eyebrow="Latest Updates"
        title="News & Updates"
        description="Stay informed about BFS initiatives, fund launches, enterprise development milestones, and strategic partnerships shaping Namibia's economic future."
      />

      <section className="bg-white py-16">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {newsArticles.map((article: any) => (
              <NewsCard
                key={article.slug}
                title={article.title}
                slug={article.slug}
                excerpt={article.excerpt}
                publishedDate={article.publishedDate}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <CTABanner
            title="Stay Informed"
            description="Subscribe to receive updates on BFS fund launches, enterprise development programmes, and strategic partnerships across Namibia."
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white/90"
            >
              Subscribe to Updates
            </Link>
          </CTABanner>
        </div>
      </section>
    </main>
  );
}
