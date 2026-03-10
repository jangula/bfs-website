import type { Metadata } from 'next';
import PageBanner from '@/components/ui/PageBanner';
import ContactForm from '@/components/ui/ContactForm';
import InfoCard from '@/components/ui/InfoCard';

export const metadata: Metadata = {
  title: 'Contact | BFS',
};

export default function ContactPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Whether you're an investor, entrepreneur, or partner, our team ensures your inquiry reaches the right specialist. Select your inquiry type below for faster routing."
      />

      <section className="bg-white py-16">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left: Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: Info Panel */}
            <div className="flex flex-col gap-5">
              <InfoCard title="Visit Us">
                <p>
                  Business Financial Solutions (Pty) Ltd
                  <br />
                  10 Axali Doeseb Street
                  <br />
                  Windhoek, Namibia
                </p>
                <p>
                  <strong>Office hours:</strong> Mon&ndash;Fri, 08:00&ndash;17:00
                </p>
              </InfoCard>

              <InfoCard title="General & Funding">
                <p>
                  <a href="mailto:admin@bfs.com.na" className="text-teal hover:underline">
                    admin@bfs.com.na
                  </a>
                </p>
                <p className="text-slate text-sm">
                  General inquiries, funding applications, and partnership requests.
                </p>
              </InfoCard>

              <InfoCard title="Advisory Clients">
                <p>
                  <a href="mailto:raili@bfs.com.na" className="text-teal hover:underline">
                    raili@bfs.com.na
                  </a>
                </p>
                <p className="text-slate text-sm">
                  Consulting, energy advisory, and transaction support services.
                </p>
              </InfoCard>

              <InfoCard title="Investors">
                <p>
                  <a href="mailto:anna@bfs.com.na" className="text-teal hover:underline">
                    anna@bfs.com.na
                  </a>
                </p>
                <p className="text-slate text-sm">
                  Investment opportunities, fund performance, and investor relations.
                </p>
              </InfoCard>

              <InfoCard title="Response Times">
                <ul>
                  <li><strong>Auto-acknowledgement:</strong> Immediate</li>
                  <li><strong>First human response:</strong> Within 24 hours</li>
                  <li><strong>Qualified response:</strong> Within 5 working days</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
