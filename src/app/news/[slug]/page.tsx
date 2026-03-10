import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageBanner from '@/components/ui/PageBanner';
import { client } from '@/sanity/lib/client';
import { getNewsPost } from '@/sanity/lib/queries';

export const revalidate = 60;

interface Article {
  title: string;
  slug: string;
  publishedDate: string;
  author: string;
  content: string;
}

const articles: Record<string, Article> = {
  'nampro-ii-launch': {
    title: 'BFS Launches NamPro II Bridging Finance Fund',
    slug: 'nampro-ii-launch',
    publishedDate: '2024-08-15',
    author: 'BFS Communications',
    content: `Business Financial Solutions is proud to announce the launch of NamPro II, our second-generation bridging finance fund designed to address a critical gap in Namibia's SME financing landscape.

NamPro II provides short-term capital solutions for small and medium enterprises awaiting contract payments, procurement disbursements, or invoice settlements. The fund builds on the success of the original NamPro facility, which financed over 200 SME transactions since inception.

Key features of NamPro II include expanded ticket sizes ranging from N$500,000 to N$15 million, streamlined approval processes with decisions within 10 working days, and flexible repayment structures aligned to contract payment cycles.

The fund is anchored by institutional investors committed to Namibian economic development, with BFS serving as the fund manager responsible for origination, credit assessment, and portfolio management.

"NamPro II represents a significant step forward in our mission to unlock growth capital for Namibian enterprises," said the BFS Managing Director. "By bridging the gap between contract award and payment, we enable SMEs to take on larger projects and grow their operations."

Eligible businesses can apply through our Document Center or contact the investment team directly for a preliminary assessment.`,
  },
  'sme-milestone': {
    title: '1,000+ SMEs Trained Through Enterprise Development Programme',
    slug: 'sme-milestone',
    publishedDate: '2024-07-20',
    author: 'BFS Communications',
    content: `BFS has reached a landmark milestone with over 1,000 small and medium enterprises completing its flagship enterprise development programme since inception.

The programme, which operates across all 14 regions of Namibia, equips business owners with practical skills in financial literacy, corporate governance, business planning, and growth strategy. Participants receive hands-on mentoring from BFS advisors alongside classroom-based instruction.

This milestone reflects BFS's commitment to building sustainable enterprises that can contribute to job creation and economic diversification. Of the SMEs trained, over 60% have reported measurable revenue growth within 12 months of completing the programme.

The enterprise development initiative operates in partnership with government agencies, development finance institutions, and private sector partners who share BFS's vision for an inclusive Namibian economy.

"Training alone is not enough," noted the programme director. "We combine skills development with access to finance, market linkages, and ongoing advisory support to ensure that entrepreneurs can translate knowledge into business outcomes."

BFS plans to expand the programme to reach 2,000 additional SMEs over the next 24 months, with particular focus on youth-owned and women-led enterprises in underserved regions.`,
  },
  'gipf-partnership': {
    title: 'BFS Partners with GIPF for Expanded SME Financing',
    slug: 'gipf-partnership',
    publishedDate: '2024-06-10',
    author: 'BFS Communications',
    content: `Business Financial Solutions and the Government Institutions Pension Fund have formalised a strategic partnership to expand access to growth financing for Namibian small and medium enterprises.

Under the agreement, GIPF will allocate capital to BFS-managed funds focused on SME development, enabling BFS to increase its lending capacity and reach more businesses across Namibia's diverse economic landscape.

The partnership leverages GIPF's mandate to invest in assets that generate both financial returns and positive socioeconomic impact, aligned with Namibia's national development plans and Vision 2030 objectives.

BFS will continue to serve as the fund manager, responsible for deal origination, credit assessment, portfolio management, and impact reporting. The firm's track record in SME financing and enterprise development positions it well to deploy capital effectively.

"This partnership demonstrates the power of collaboration between institutional investors and specialist fund managers," said the BFS team. "Together, we can unlock significantly more capital for the enterprises that drive Namibia's economy."

The expanded financing capacity will support SMEs across sectors including agriculture, manufacturing, services, and technology, with particular emphasis on businesses that create employment and contribute to economic inclusion.`,
  },
  'energy-practice': {
    title: 'Energy Sector Advisory Practice Launched',
    slug: 'energy-practice',
    publishedDate: '2024-05-05',
    author: 'BFS Communications',
    content: `BFS has formally launched its dedicated energy advisory practice, positioning the firm to support Namibia's rapidly evolving energy sector with specialised transaction support, regulatory guidance, and project development services.

The energy practice builds on BFS's existing consulting capabilities and responds to growing demand for independent advisory services in Namibia's renewable energy, oil and gas, and green hydrogen sectors.

Services offered through the new practice include financial modelling and feasibility analysis for energy projects, transaction advisory for project financing and M&A, regulatory compliance and licensing support, stakeholder engagement and community benefit planning, and ESG impact assessment for energy developments.

"Namibia's energy sector is at an inflection point," said the practice lead. "From the green hydrogen opportunity to renewable energy IPPs and upstream oil and gas exploration, there is enormous demand for experienced advisory support that understands both the technical and regulatory landscape."

The practice will serve a range of clients including project developers, institutional investors, government agencies, and international energy companies seeking to enter the Namibian market.

BFS's energy advisory team brings together professionals with experience across power generation, transmission infrastructure, regulatory frameworks, and development finance, providing clients with integrated support from project concept through to financial close.`,
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const sanityArticle = await client.fetch(getNewsPost, { slug: params.slug }).catch(() => null);
  const article = sanityArticle || articles[params.slug];
  return {
    title: article ? `${article.title} | BFS` : 'Article Not Found | BFS',
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const sanityArticle = await client.fetch(getNewsPost, { slug: params.slug }).catch(() => null);
  const article = sanityArticle
    ? {
        title: sanityArticle.title,
        slug: sanityArticle.slug?.current,
        publishedDate: sanityArticle.publishedDate,
        author: sanityArticle.author || 'BFS Communications',
        content: typeof sanityArticle.body === 'string'
          ? sanityArticle.body
          : sanityArticle.excerpt || '',
      }
    : articles[params.slug];

  if (!article) {
    notFound();
  }

  return (
    <>
      <PageBanner
        eyebrow="News & Updates"
        title={article.title}
        description={new Date(article.publishedDate).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      />

      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto max-w-[720px]">
            <div className="mb-8 flex items-center gap-4 text-sm text-slate">
              <span>By {article.author}</span>
              <span className="h-1 w-1 rounded-full bg-slate/40" />
              <span>
                {new Date(article.publishedDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>

            <div className="max-w-none text-slate leading-relaxed">
              {article.content.split('\n\n').map((paragraph: string, i: number) => (
                <p key={i} className="mb-5">{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 border-t border-black/[0.08] pt-8">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-teal-dark"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to News
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
