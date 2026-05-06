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
    initials: 'KN',
    name: 'Kauna Ndilula',
    role: 'Executive Chairperson',
    bio: 'Executive Chairperson of the BFS Group of Companies, providing governance and strategic leadership across the firm’s investment management, advisory, and venture-building activities.',
  },
  {
    initials: 'AK',
    name: 'Anna Kangombe',
    role: 'Managing Director',
    bio: 'PhD in Public and Development Management (Stellenbosch). 21+ years across private investment, public sector development cooperation, and academia. Has led BFS as Managing Director since 2020, driving market expansion and the development of eight investment funds.',
  },
  {
    initials: 'CvD',
    name: 'Christina von Doderer',
    role: 'Chief Investment Officer',
    bio: 'MBA, Munich. Investment professional with c.20 years executing equity, debt, and M&A transactions in Europe and Africa, formerly Director at GE Capital. Leads BFS’ >N$300m mandate from a German multi-family office and helped launch the Namibia Innovation !Hub.',
  },
  {
    initials: 'TK',
    name: 'Theopolina Kapani-Emvula',
    role: 'Chief Executive Officer, BFS Fund Manager',
    bio: 'Civil engineer and project finance advisor with deep experience across infrastructure, oil & gas, and transportation sectors. Has delivered projects for Shell, BP, Vodafone, and Deutsche Telekom across Europe and lectured at the Namibia University of Science and Technology.',
  },
  {
    initials: 'AH',
    name: 'Alushe T. Hitula',
    role: 'Consulting Head of Advisory',
    bio: 'MPhil in Business Management (Pretoria); PhD candidate in Sustainable Blue Economy Development. 22+ years of consulting and leadership across SADC for FAO, NEPAD/AU, the SADC Secretariat, AfDB, and WWF. Sits on BFS EXCO and leads expansion into Mozambique and Southern Africa.',
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
          name: m.name,
          role: m.role,
          bio: m.bio,
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {team.map((member: any) => (
              <div
                key={member.name || member.initials}
                className="flex flex-col items-center rounded-xl border border-[#d6d1c9] bg-white p-6 text-center shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-mid text-sm font-bold text-white">
                  {member.initials}
                </div>
                {member.name && (
                  <h4 className="mt-4 font-heading text-base font-bold text-ink">
                    {member.name}
                  </h4>
                )}
                {member.role && (
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-teal">
                    {member.role}
                  </p>
                )}
                {member.bio && (
                  <p className="mt-3 text-sm leading-relaxed text-slate">{member.bio}</p>
                )}
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
