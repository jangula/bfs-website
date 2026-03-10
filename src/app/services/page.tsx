import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/ui/PageBanner';
import CTABanner from '@/components/ui/CTABanner';
// Sanity integration — currently the service schema only has title/tag/description,
// so the detailed page structure (paragraphs, visuals, CTAs) remains hardcoded.
// When the service schema is expanded with richer fields, this data can override
// the hardcoded content below.
// import { client } from '@/sanity/lib/client';
// import { getServices } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Programs & Services | BFS',
};

export const revalidate = 60;

const services = [
  {
    eyebrow: 'Core Practice',
    title: 'Venture Building',
    paragraphs: [
      'We provide end-to-end support for early and growth-stage enterprises. Our venture building practice combines funding access, mentorship, market linkages, and operational structuring to help Namibian entrepreneurs scale sustainably.',
      'From idea validation through to growth capital deployment, we walk alongside founders at every stage of their journey, providing the tools and connections needed to build resilient, competitive businesses.',
    ],
    cta: { label: 'Enquire About Programs', href: '/contact' },
    visual: {
      gradient: 'from-teal-dark via-teal to-blue',
      heading: '1,032+ SMEs Trained',
      subtitle:
        'Building enterprise capacity across Namibia through structured support and capital deployment.',
    },
    bg: 'bg-white',
  },
  {
    eyebrow: 'Fund Management',
    title: 'Investment Management',
    paragraphs: [
      'BFS manages debt funds including the NamPro Fund and NamPro II, structured to provide growth capital and bridging finance for Namibian SMEs. Our funds are anchored by institutional investors including the GIPF.',
      'Our investment management practice combines rigorous due diligence with developmental intent, ensuring that capital deployment creates both financial returns and measurable socio-economic impact.',
    ],
    cta: { label: 'View Opportunities', href: '/opportunities' },
    visual: {
      gradient: 'from-navy via-navy-mid to-teal',
      heading: 'N$430M Under Management',
      subtitle:
        'NamPro Fund supporting SME suppliers across sectors anchored by GIPF.',
    },
    bg: 'bg-cream',
  },
  {
    eyebrow: 'Advisory',
    title: 'Consulting Services',
    paragraphs: [
      'Strategic advisory for corporates, government entities, and development partners. Our consulting practice covers economic development strategy, transaction support, policy advisory, and institutional capacity building.',
      'We bring a practitioner\u2019s perspective to consulting engagements, informed by our direct experience as investors and enterprise builders.',
    ],
    cta: { label: 'Discuss Your Needs', href: '/contact' },
    visual: {
      gradient: 'from-blue via-navy-mid to-orange',
      heading: 'Strategic Advisory',
      subtitle:
        'Policy, transactions, and development consulting for public and private sector clients.',
    },
    bg: 'bg-white',
  },
  {
    eyebrow: 'Sector Focus',
    title: 'Energy Consulting',
    paragraphs: [
      'Specialised advisory on energy sector development, renewable energy transitions, regulatory frameworks, and project structuring. We help clients navigate the evolving energy landscape with commercially sound, sustainable strategies.',
      'Our energy practice supports both project developers and policymakers in structuring bankable energy projects and frameworks that advance Namibia\u2019s energy transition goals.',
    ],
    cta: { label: 'Explore Energy Advisory', href: '/contact' },
    visual: {
      gradient: 'from-orange-warm via-orange to-teal',
      heading: 'Energy Transition',
      subtitle:
        'Renewable energy, regulatory advisory, and project development support.',
    },
    bg: 'bg-cream',
  },
];

export default async function ServicesPage() {
  // Sanity services fetch removed — detailed content requires schema expansion.
  // Re-enable when the service schema supports richer fields.

  return (
    <main>
      {/* Page Banner */}
      <PageBanner
        eyebrow="Our Solutions"
        title="Programs & Services"
        description="Four integrated practice areas delivering comprehensive advisory, investment, and enterprise development solutions for Namibian growth."
      />

      {/* Service Detail Sections */}
      {services.map((service, index) => {
        const isEven = index % 2 !== 0;

        return (
          <section key={service.title} className={`${service.bg} py-16`}>
            <div className="container">
              <div
                className={`grid gap-12 md:grid-cols-2 md:items-center ${
                  isEven ? 'md:flex md:flex-row-reverse' : ''
                }`}
              >
                {/* Text */}
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal">
                    {service.eyebrow}
                  </p>
                  <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight text-ink">
                    {service.title}
                  </h2>
                  {service.paragraphs.map((p, i) => (
                    <p key={i} className="mt-4 text-base leading-relaxed text-slate">
                      {p}
                    </p>
                  ))}
                  <Link
                    href={service.cta.href}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
                  >
                    {service.cta.label}
                  </Link>
                </div>

                {/* Visual */}
                <div
                  className={`relative flex min-h-[20rem] flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br ${service.visual.gradient} p-8`}
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/[0.04]" />
                  <h3 className="font-heading text-2xl font-extrabold text-white">
                    {service.visual.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {service.visual.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container">
          <CTABanner
            title="Need a Tailored Solution?"
            description="Our team combines investment, advisory, and enterprise development expertise. Let us understand your challenge and propose the right approach."
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white/90"
            >
              Start a Conversation
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn About BFS
            </Link>
          </CTABanner>
        </div>
      </section>
    </main>
  );
}
