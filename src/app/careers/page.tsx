import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/ui/PageBanner';
import CTABanner from '@/components/ui/CTABanner';
import PathwayCard from '@/components/ui/PathwayCard';
import CareersSection from '@/components/ui/CareersSection';
import { client } from '@/sanity/lib/client';
import { getCareers } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Careers | BFS',
  description:
    'Join the BFS team. Explore open roles and career opportunities at Business Financial Solutions in Namibia.',
};

const roles = [
  {
    title: 'Investment Analyst',
    description:
      'Conduct financial analysis, evaluate investment proposals, and support deal structuring across our managed funds. Ideal for detail-oriented professionals with strong modelling skills.',
    location: 'Windhoek',
    closingDate: '2026-03-15',
    type: 'Full-time',
  },
  {
    title: 'Partnerships Coordinator',
    description:
      'Manage stakeholder relationships, coordinate co-investment partnerships, and support fundraising activities. A key liaison role between BFS and our network of partners.',
    location: 'Windhoek',
    closingDate: '2026-04-30',
    type: 'Contract',
  },
  {
    title: 'Energy Sector Consultant',
    description:
      'Provide sector expertise on renewable energy and energy efficiency investments. Advise on technical feasibility, regulatory landscape, and market sizing for energy-related deals.',
    location: 'Windhoek',
    closingDate: '2026-05-31',
    type: 'Full-time',
  },
  {
    title: 'Programme Officer',
    description:
      'Oversee programme delivery for SME development initiatives, monitor impact metrics, and coordinate with implementing partners across regions.',
    location: 'Windhoek',
    closingDate: '2024-05-24',
    type: 'Full-time',
  },
  {
    title: 'Community Engagement Lead',
    description:
      'Lead community outreach and stakeholder engagement for BFS-funded projects in northern Namibia. Build local partnerships and ensure inclusive project delivery.',
    location: 'Oshakati',
    closingDate: '2024-11-05',
    type: 'Full-time',
  },
];

export default async function CareersPage() {
  const sanityCareers = await client.fetch(getCareers).catch(() => []);
  const careerRoles =
    sanityCareers && sanityCareers.length > 0
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sanityCareers.map((c: any) => ({
          title: c.title,
          description: c.description,
          location: c.location,
          closingDate: c.closingDate,
          type: c.type,
        }))
      : roles;

  return (
    <>
      {/* Hero Banner */}
      <PageBanner
        eyebrow="Join Our Team"
        title="Careers at BFS"
        description="We are building a team of purpose-driven professionals who are passionate about unlocking economic potential across Namibia. Explore our open positions and find your role in shaping the future."
      >
        <a
          href="mailto:hr@bfs.com.na"
          className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
        >
          Contact HR
        </a>
        <Link
          href="#roles"
          className="inline-flex items-center justify-center rounded-full border border-[#d6d1c9] bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-navy/30"
        >
          View Open Roles
        </Link>
      </PageBanner>

      {/* Open Roles Section */}
      <section id="roles" className="bg-white py-16">
        <div className="container">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal">
            Open Positions
          </p>
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-extrabold text-ink">
            Current Opportunities
          </h2>
          <p className="mt-3 mb-10 max-w-2xl text-base leading-relaxed text-slate">
            Browse our current vacancies below. All roles are based in Namibia
            unless otherwise stated.
          </p>

          <CareersSection roles={careerRoles} />
        </div>
      </section>

      {/* Why BFS Section */}
      <section className="py-16">
        <div className="container">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal">
            Why BFS
          </p>
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-extrabold text-ink">
            Why Work With Us
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate">
            At BFS, you will be part of a team that is directly shaping
            economic development outcomes in Namibia.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <PathwayCard
              icon="\u{1F30D}"
              title="Mission Impact"
              description="Every role at BFS contributes to tangible development outcomes -- from job creation to sector transformation. Your work matters beyond the bottom line."
              linkText="Our Mission"
              linkHref="/about"
              colorIndex={0}
            />
            <PathwayCard
              icon="\u{1F4C8}"
              title="Professional Growth"
              description="Access hands-on experience across investment analysis, deal structuring, and programme management. We invest in our people as much as our portfolio."
              linkText="Our Services"
              linkHref="/services"
              colorIndex={1}
            />
            <PathwayCard
              icon="\u{1F91D}"
              title="Leadership Access"
              description="Work alongside senior investment professionals and industry leaders. Our flat structure means exposure to high-level decision-making from day one."
              linkText="Meet the Team"
              linkHref="/about"
              colorIndex={2}
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="container">
          <CTABanner
            title="Don't See the Right Role?"
            description="We are always looking for talented individuals who share our vision. Send us your CV and a cover letter, and we will keep you in mind for future opportunities."
          >
            <a
              href="mailto:hr@bfs.com.na"
              className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
            >
              Send Your CV
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </CTABanner>
        </div>
      </section>
    </>
  );
}
