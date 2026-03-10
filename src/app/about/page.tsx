import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/ui/PageBanner';
import CTABanner from '@/components/ui/CTABanner';
import StatCard from '@/components/ui/StatCard';
import { client } from '@/sanity/lib/client';
import { getTeamMembers, getImpactStats } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'About & Impact | BFS',
};

const teamMembers = [
  {
    initials: 'MD',
    role: 'Managing Director',
    description: 'Strategic leadership and stakeholder relations',
  },
  {
    initials: 'CIO',
    role: 'Chief Investment Officer',
    description: 'Portfolio management and investment strategy',
  },
  {
    initials: 'CFO',
    role: 'Chief Financial Officer',
    description: 'Financial governance and fund reporting',
  },
  {
    initials: 'COO',
    role: 'Chief Operating Officer',
    description: 'Operations excellence and programme delivery',
  },
];

export default async function AboutPage() {
  const [sanityTeam, sanityStats] = await Promise.all([
    client.fetch(getTeamMembers).catch(() => []),
    client.fetch(getImpactStats).catch(() => []),
  ]);

  const team =
    sanityTeam && sanityTeam.length > 0
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sanityTeam.map((m: any) => ({
          initials: m.initials,
          role: m.role,
          description: m.name || m.role,
        }))
      : teamMembers;

  const stats =
    sanityStats && sanityStats.length > 0 ? sanityStats : null;

  return (
    <main>
      {/* Page Banner */}
      <PageBanner
        eyebrow="Our Story"
        title="Investing in Namibia's Future"
        description="BFS is a Namibian multi-disciplinary advisory and investment management firm. We partner with entrepreneurs, investors, and institutions to drive sustainable economic growth through venture building, investment management, consulting, and energy advisory."
      />

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Text */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal">
                Who We Are
              </p>
              <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight text-ink">
                A Namibian Firm with National Impact
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate">
                Business Financial Solutions operates at the intersection of development finance and
                private enterprise. We structure capital, advisory, and operational support to unlock
                growth across Namibia&apos;s most promising sectors.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate">
                Our approach integrates environmental, social, and governance principles into every
                engagement, ensuring that growth is sustainable, inclusive, and aligned with national
                development objectives.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate">
                With a portfolio spanning agriculture, energy, digital services, and SME development,
                we serve as a catalyst for enterprise growth and job creation at scale.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
              >
                Work With Us
              </Link>
            </div>

            {/* Visual */}
            <div className="flex min-h-[20rem] flex-col justify-end rounded-3xl bg-gradient-to-br from-navy via-navy-mid to-teal-dark p-8">
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/[0.04]" />
              <h3 className="font-heading text-2xl font-extrabold text-white">
                We Invest for the Future
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Integrating ESG factors, IFC compliance, and Namibian legislation into every
                decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto mb-10 max-w-[680px] text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal">
              Measurable Results
            </p>
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-ink">
              Our Impact in Numbers
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Evidence of sustained commitment to Namibian enterprise development and economic
              transformation.
            </p>
          </div>
          <div className="mx-auto grid max-w-[700px] grid-cols-2 gap-5">
            {stats ? (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              stats.map((s: any) => (
                <StatCard
                  key={s._id}
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  label={s.label}
                  decimal={s.decimal}
                  accent={s.accent}
                />
              ))
            ) : (
              <>
                <StatCard value={1032} suffix="+" label="SMEs Trained" />
                <StatCard value={6200} suffix="+" label="Jobs Created" />
                <StatCard value={578} label="Facilities Financed" />
                <StatCard value={1.8} prefix="N$" suffix="B" label="Total Investment Deployed" decimal accent />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto mb-10 max-w-[680px] text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal">
              Leadership
            </p>
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-ink">
              The Team
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Experienced professionals driving national development outcomes through disciplined
              investment and advisory.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {team.map((member: any) => (
              <div
                key={member.initials}
                className="flex flex-col items-center rounded-xl border border-[#d6d1c9] bg-white p-6 text-center shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-mid text-sm font-bold text-white">
                  {member.initials}
                </div>
                <h4 className="mt-4 font-heading text-base font-bold text-ink">
                  {member.role}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <CTABanner
            title="Partner With Namibia's Growth Catalyst"
            description="Connect with our team to explore how we can support your investment, enterprise, or advisory needs."
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white/90"
            >
              Get in Touch
            </Link>
          </CTABanner>
        </div>
      </section>
    </main>
  );
}
