import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/ui/PageBanner';
import CTABanner from '@/components/ui/CTABanner';
import FundCard from '@/components/ui/FundCard';
import PathwayCard from '@/components/ui/PathwayCard';
import OpportunityFilter from '@/components/ui/OpportunityFilter';
import { client } from '@/sanity/lib/client';
import { getOpportunities } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Investment Opportunities | BFS',
  description:
    'Explore investment and growth opportunities across agriculture, energy, digital, and SME sectors with BFS managed funds.',
};

const opportunities = [
  {
    title: 'Agri Processing Expansion Fund',
    description:
      'Supporting agri-processing enterprises to scale production, improve value-chain integration, and access export markets across Namibia.',
    sector: 'Agriculture',
    investmentRange: 'N$8M - N$25M',
    stage: 'Growth',
  },
  {
    title: 'Distributed Solar Cluster Pilot',
    description:
      'Funding distributed solar installations for commercial and industrial off-takers, reducing energy costs and carbon footprint.',
    sector: 'Energy',
    investmentRange: 'N$4M - N$12M',
    stage: 'Pilot',
  },
  {
    title: 'SME Digital Enablement Stack',
    description:
      'Enabling SMEs with digital tools for operations, payments, and market access through integrated technology platforms.',
    sector: 'Digital',
    investmentRange: 'N$2M - N$9M',
    stage: 'Expansion',
  },
  {
    title: 'Micro-Manufacturing Growth Pool',
    description:
      'Providing capital to micro-manufacturers for equipment upgrades, skills development, and market entry support.',
    sector: 'SME',
    investmentRange: 'N$1M - N$5M',
    stage: 'Entry',
  },
  {
    title: 'Cold-Chain Infrastructure Partnership',
    description:
      'Investing in cold-chain logistics and storage infrastructure to reduce post-harvest losses and improve food security.',
    sector: 'Agriculture',
    investmentRange: 'N$10M+',
    stage: 'Partnership',
  },
  {
    title: 'Energy Efficiency Retrofit Programme',
    description:
      'Financing energy efficiency retrofits for commercial buildings, reducing operational costs and environmental impact.',
    sector: 'Energy',
    investmentRange: 'N$3M - N$11M',
    stage: 'Scale-up',
  },
];

export default async function OpportunitiesPage() {
  const sanityOpps = await client.fetch(getOpportunities).catch(() => []);
  const opps =
    sanityOpps && sanityOpps.length > 0
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sanityOpps.map((o: any) => ({
          title: o.title,
          description: o.description,
          sector: o.sector,
          investmentRange: o.investmentRange,
          stage: o.stage,
        }))
      : opportunities;

  return (
    <>
      {/* Hero Banner */}
      <PageBanner
        eyebrow="Invest With Impact"
        title="Investment & Growth Opportunities"
        description="Discover high-impact investment opportunities across key sectors of the Namibian economy. BFS connects capital with ventures that drive sustainable growth and job creation."
      >
        <Link
          href="#funds"
          className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
        >
          View Funds
        </Link>
        <Link
          href="#opportunities"
          className="inline-flex items-center justify-center rounded-full border border-[#d6d1c9] bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-navy/30"
        >
          Explore Opportunities
        </Link>
      </PageBanner>

      {/* Managed Funds Section */}
      <section id="funds" className="bg-white py-16">
        <div className="container">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal">
            Managed Funds
          </p>
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-extrabold text-ink">
            Our Investment Vehicles
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate">
            BFS manages dedicated investment vehicles designed to channel capital
            into high-growth sectors and underserved markets across Namibia.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <FundCard
              badge="Flagship Fund"
              name="NamPro Fund"
              description="Our flagship fund investing in scalable Namibian enterprises across agriculture, energy, and manufacturing. Focused on growth-stage businesses with proven revenue models."
              statValue="N$430M"
              statLabel="Total Fund Size"
              isNumeric
              countTarget={430}
              countPrefix="N$"
              countSuffix="M"
            />
            <FundCard
              badge="Structured Finance"
              name="NamPro II"
              description="A structured finance vehicle linking investment returns to contract performance. Designed for infrastructure and project-linked opportunities with predictable cash flows."
              statValue="Contract-Linked"
              statLabel="Investment Structure"
            />
          </div>
        </div>
      </section>

      {/* Sector Opportunities Section */}
      <section id="opportunities" className="py-16">
        <div className="container">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal">
            Opportunity Pipeline
          </p>
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-extrabold text-ink">
            Sector Opportunities
          </h2>
          <p className="mt-3 mb-10 max-w-2xl text-base leading-relaxed text-slate">
            Browse current investment opportunities across our focus sectors.
            Filter by sector to find the right fit for your investment
            strategy.
          </p>

          <OpportunityFilter opportunities={opps} />
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16">
        <div className="container">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal">
            How It Works
          </p>
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-extrabold text-ink">
            Investment Engagement Process
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate">
            Our streamlined process ensures transparency and efficiency from
            initial discovery to deal structuring.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <PathwayCard
              icon="1"
              title="Discover & Qualify"
              description="Browse our opportunity pipeline, review sector focus areas, and identify investments that align with your mandate and risk appetite."
              linkText="View Opportunities"
              linkHref="#opportunities"
              colorIndex={0}
            />
            <PathwayCard
              icon="2"
              title="Express Interest"
              description="Submit an expression of interest through our portal. Our team will review your profile and schedule a preliminary discussion."
              linkText="Contact Us"
              linkHref="/contact"
              colorIndex={1}
            />
            <PathwayCard
              icon="3"
              title="Engage & Structure"
              description="Work with our investment team to conduct due diligence, negotiate terms, and structure a deal that delivers mutual value."
              linkText="Learn More"
              linkHref="/services"
              colorIndex={2}
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="container">
          <CTABanner
            title="Interested in Co-Investing?"
            description="Partner with BFS to access curated deal flow, sector expertise, and a proven track record of impactful investments in Namibia."
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Our Services
            </Link>
          </CTABanner>
        </div>
      </section>
    </>
  );
}
