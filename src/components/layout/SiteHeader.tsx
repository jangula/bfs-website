'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About & Impact' },
  { href: '/opportunities', label: 'Opportunities' },
  { href: '/services', label: 'Services' },
  { href: '/documents', label: 'Documents' },
  { href: '/news', label: 'News' },
  { href: '/careers', label: 'Careers' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-ink/[0.08] backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_4px_12px_rgba(9,25,43,0.08)]' : ''
      }`}
      style={{ backgroundColor: 'rgba(250, 248, 245, 0.88)' }}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo & brand */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/images/bfs-logo.png"
              alt="BFS Logo"
              width={38}
              height={38}
              className="rounded-sm"
              onError={(e) => {
                // Hide broken image, fallback text will show
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="font-heading font-bold text-base text-ink tracking-tight">
              Business Financial Solutions
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden min-[900px]:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'bg-navy text-white'
                    : 'text-slate hover:bg-mist'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden min-[900px]:inline-flex items-center px-5 py-2 bg-teal text-white text-sm font-semibold rounded-full hover:bg-teal-dark transition-colors duration-200"
            >
              Get in Touch
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              className="inline-flex min-[900px]:hidden items-center justify-center w-10 h-10 rounded-lg text-ink hover:bg-mist transition-colors"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="min-[900px]:hidden border-t border-ink/[0.08] bg-cream/95 backdrop-blur-md">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'bg-navy text-white'
                    : 'text-slate hover:bg-mist'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-teal text-white text-sm font-semibold rounded-full hover:bg-teal-dark transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
