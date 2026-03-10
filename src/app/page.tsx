import Link from 'next/link';
import StatCard from '@/components/ui/StatCard';
import TrustMarquee from '@/components/ui/TrustMarquee';
import PathwayCard from '@/components/ui/PathwayCard';
import ServiceCard from '@/components/ui/ServiceCard';
import FundCard from '@/components/ui/FundCard';
import ESGPillar from '@/components/ui/ESGPillar';
import CTABanner from '@/components/ui/CTABanner';
import { client } from '@/sanity/lib/client';
import { getServices, getFunds, getImpactStats } from '@/sanity/lib/queries';

export const revalidate = 60;

export default async function Home() {
  const [sanityServices, sanityFunds, sanityStats] = await Promise.all([
    client.fetch(getServices).catch(() => []),
    client.fetch(getFunds).catch(() => []),
    client.fetch(getImpactStats).catch(() => []),
  ]);

  return (
    <>
      {/* ───────── 1. Hero ───────── */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        {/* Decorative gradient circles */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,150,136,0.12)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(26,95,170,0.1)_0%,transparent_70%)]" />

        <div className="container relative z-10 grid items-center gap-12 max-[900px]:grid-cols-1 grid-cols-2">
          {/* Left column */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-teal/10 px-4 py-1.5 text-sm font-semibold text-teal">
              Namibia&apos;s Growth Partner
            </span>
            <h1 className="font-heading text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.1] text-ink">
              Building enterprises.
              <br />
              <span className="bg-gradient-to-r from-teal to-blue bg-clip-text text-transparent">
                Investing in futures.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
              BFS is a multi-disciplinary enterprise development group providing
              venture building, fund management, and consulting services across
              Namibia and the SADC region.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/opportunities"
                className="inline-flex items-center justify-center rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-sm)] transition-all duration-200 hover:bg-teal-dark hover:shadow-[var(--shadow-md)]"
              >
                Explore Opportunities
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition-all duration-200 hover:bg-navy hover:text-white"
              >
                Book a Discussion
              </Link>
            </div>
          </div>

          {/* Right column – stat grid */}
          <div className="grid grid-cols-2 gap-4">
            {sanityStats.length >= 4 ? (
              sanityStats.map((stat: { value: number; prefix?: string; suffix?: string; label: string; accent?: boolean; decimal?: boolean }, i: number) => (
                <StatCard
                  key={i}
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  label={stat.label}
                  accent={stat.accent}
                  decimal={stat.decimal}
                />
              ))
            ) : (
              <>
                <StatCard value={1032} suffix="+" label="SMEs Trained" accent />
                <StatCard value={6200} suffix="+" label="Jobs Created" />
                <StatCard value={578} label="Facilities Financed" />
                <StatCard
                  value={1.8}
                  prefix="N$"
                  suffix="B"
                  label="Invested"
                  decimal
                  accent
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* ───────── 2. Trust Marquee ───────── */}
      <TrustMarquee />

      {/* ───────── 3. Audience Pathways ───────── */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-teal/10 px-4 py-1.5 text-sm font-semibold text-teal">
              How Can We Help
            </span>
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-ink">
              Find Your Pathway
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Whether you&apos;re growing a business, seeking returns, or
              looking for advisory expertise, we have a path for you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 max-[900px]:grid-cols-1 max-[1100px]:grid-cols-2 grid-cols-4">
            <PathwayCard
              icon="&#x2696;"
              title="Entrepreneur"
              description="Access training, funding, and mentorship to grow your business from the ground up."
              linkText="Explore Services"
              linkHref="/services"
              colorIndex={0}
            />
            <PathwayCard
              icon="&#x25B3;"
              title="Investor"
              description="Discover structured debt funds and impact-aligned investment opportunities."
              linkText="View Opportunities"
              linkHref="/opportunities"
              colorIndex={1}
            />
            <PathwayCard
              icon="&#x25CA;"
              title="Advisory Client"
              description="Leverage our multi-disciplinary consulting expertise for your organisation."
              linkText="Our Services"
              linkHref="/services"
              colorIndex={2}
            />
            <PathwayCard
              icon="&#x2605;"
              title="Job Seeker"
              description="Join a purpose-driven team building Namibia's future enterprise landscape."
              linkText="View Careers"
              linkHref="/careers"
              colorIndex={3}
            />
          </div>
        </div>
      </section>

      {/* ───────── 4. Core Services ───────── */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-orange/20 px-4 py-1.5 text-sm font-semibold text-orange">
              What We Do
            </span>
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-white">
              Multi-Disciplinary Expertise
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              From venture building to investment management, our integrated
              approach delivers lasting impact across Namibia&apos;s economy.
            </p>
          </div>

          <div className="mt-12 grid gap-6 max-[900px]:grid-cols-1 grid-cols-2">
            {sanityServices.length > 0 ? (
              sanityServices.map((service: { tag?: string; title: string; description?: string }, i: number) => (
                <ServiceCard
                  key={service.title}
                  tag={service.tag || ''}
                  title={service.title}
                  description={service.description || ''}
                  colorIndex={i}
                />
              ))
            ) : (
              <>
                <ServiceCard
                  tag="Core Practice"
                  title="Venture Building"
                  description="End-to-end enterprise development including training, mentorship, and access to market for SMEs."
                  colorIndex={0}
                />
                <ServiceCard
                  tag="Fund Management"
                  title="Investment Management"
                  description="Structured debt fund solutions providing capital to underserved sectors of the Namibian economy."
                  colorIndex={1}
                />
                <ServiceCard
                  tag="Advisory"
                  title="Consulting Services"
                  description="Strategic advisory, feasibility studies, and project management for public and private sector clients."
                  colorIndex={2}
                />
                <ServiceCard
                  tag="Sector Focus"
                  title="Energy Consulting"
                  description="Specialised energy sector consulting covering renewable energy, regulatory compliance, and project development."
                  colorIndex={3}
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* ───────── 5. Fund Highlights ───────── */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-teal/10 px-4 py-1.5 text-sm font-semibold text-teal">
              Investment Vehicles
            </span>
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-ink">
              Our Debt Funds
            </h2>
          </div>

          <div className="mt-12 grid gap-6 max-[900px]:grid-cols-1 grid-cols-2">
            {sanityFunds.length > 0 ? (
              sanityFunds.map((fund: { badge?: string; name: string; description?: string; statValue?: string; statLabel?: string; isNumeric?: boolean; countTarget?: number; countPrefix?: string; countSuffix?: string }) => (
                <FundCard
                  key={fund.name}
                  badge={fund.badge || ''}
                  name={fund.name}
                  description={fund.description || ''}
                  statValue={fund.statValue || ''}
                  statLabel={fund.statLabel || ''}
                  isNumeric={fund.isNumeric}
                  countTarget={fund.countTarget}
                  countPrefix={fund.countPrefix}
                  countSuffix={fund.countSuffix}
                />
              ))
            ) : (
              <>
                <FundCard
                  badge="Flagship Fund"
                  name="NamPro Fund"
                  description="Namibia's premier SME debt fund providing growth capital to qualifying enterprises across key economic sectors."
                  statValue="N$430M"
                  statLabel="Under management"
                  isNumeric
                  countTarget={430}
                  countPrefix="N$"
                  countSuffix="M"
                />
                <FundCard
                  badge="Bridging Finance"
                  name="NamPro II"
                  description="Short-term contract-linked financing enabling SMEs to execute on secured contracts and tenders."
                  statValue="Contract-Linked"
                  statLabel="Execution financing"
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* ───────── 6. ESG Section ───────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container grid items-start gap-12 max-[900px]:grid-cols-1 grid-cols-2">
          {/* Left column */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-teal/10 px-4 py-1.5 text-sm font-semibold text-teal">
              Responsible Investment
            </span>
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-ink">
              ESG at the Core of Everything We Do
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate">
              Our investment philosophy is rooted in environmental stewardship,
              social impact, and strong governance. Every decision we make is
              guided by these principles.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
              <ESGPillar
                title="Environmental"
                description="Climate-conscious lending and green economy support."
                colorIndex={0}
              />
              <ESGPillar
                title="Social"
                description="Job creation, skills development, and community upliftment."
                colorIndex={1}
              />
              <ESGPillar
                title="Governance"
                description="Transparent reporting and IFC-aligned standards."
                colorIndex={2}
              />
            </div>
          </div>

          {/* Right column – ESG stats grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center rounded-xl border border-teal/20 bg-gradient-to-br from-[rgba(0,150,136,0.08)] to-transparent p-6 text-center">
              <span className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-teal">
                1,032+
              </span>
              <span className="mt-2 text-sm font-medium text-slate">
                SMEs Empowered
              </span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl border border-blue/20 bg-gradient-to-br from-[rgba(26,95,170,0.08)] to-transparent p-6 text-center">
              <span className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-blue">
                6,200+
              </span>
              <span className="mt-2 text-sm font-medium text-slate">
                Jobs Sustained
              </span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl border border-orange/20 bg-gradient-to-br from-[rgba(242,128,53,0.08)] to-transparent p-6 text-center">
              <span className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-orange">
                IFC
              </span>
              <span className="mt-2 text-sm font-medium text-slate">
                Standards Compliant
              </span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl border border-navy/20 bg-gradient-to-br from-[rgba(9,25,43,0.08)] to-transparent p-6 text-center">
              <span className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-navy">
                100%
              </span>
              <span className="mt-2 text-sm font-medium text-slate">
                Namibian Legislation Aligned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 7. CTA Banner ───────── */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <CTABanner
            title="Ready to Build Something Meaningful?"
            description="Whether you're an entrepreneur seeking growth capital, an investor looking for impact-aligned returns, or an organisation in need of advisory expertise — we're ready to talk."
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-orange px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-sm)] transition-all duration-200 hover:bg-orange-warm hover:shadow-[var(--shadow-md)]"
            >
              Start a Conversation
            </Link>
            <Link
              href="/opportunities"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              Browse Opportunities
            </Link>
          </CTABanner>
        </div>
      </section>
    </>
  );
}
