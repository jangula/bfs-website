import Link from 'next/link';

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/documents', label: 'Documents' },
  { href: '/news', label: 'News' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

const investLinks = [
  { href: '/opportunities', label: 'Opportunities' },
  { href: '#', label: 'Investor Portal' },
  { href: '#', label: 'Advisory Portal' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container">
        {/* Footer grid */}
        <div
          className="grid gap-8 pb-10"
          style={{
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          }}
        >
          {/* Column 1: Brand */}
          <div className="max-[768px]:col-span-full">
            <h3 className="font-heading font-bold text-lg mb-3">
              Business Financial Solutions
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Empowering investors and businesses with innovative financial
              solutions. Building bridges between capital and opportunity across
              Southern Africa.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="max-[768px]:col-span-2 max-[480px]:col-span-full">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Invest */}
          <div className="max-[768px]:col-span-2 max-[480px]:col-span-full">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Invest
            </h4>
            <ul className="space-y-2.5">
              {investLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="max-[768px]:col-span-full">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-white/60 text-sm">
              <li>
                <a
                  href="tel:+27123456789"
                  className="hover:text-white transition-colors duration-200"
                >
                  +27 12 345 6789
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bfs.co.za"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@bfs.co.za
                </a>
              </li>
              <li className="leading-relaxed">
                Pretoria, Gauteng
                <br />
                South Africa
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Business Financial Solutions. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
