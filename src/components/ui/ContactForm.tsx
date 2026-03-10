'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';

type InquiryType =
  | 'investment'
  | 'entrepreneur'
  | 'advisory'
  | 'partnership'
  | 'career'
  | 'general';

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState<InquiryType>('investment');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || 'Failed to send');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleInquiryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInquiryType(e.target.value as InquiryType);
    setSubmitted(false);
  };

  return (
    <article className="bg-white border border-black/[0.08] rounded-lg p-8 shadow-[0_8px_30px_rgba(9,25,43,0.08)]">
      <h2 className="font-heading text-[1.4rem] font-extrabold mb-[0.3rem]">
        Start an Inquiry
      </h2>
      <p className="text-[0.9rem] text-slate mb-0">
        Fields adapt based on your inquiry type for better routing.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[0.85rem] mt-5">
          {/* Full name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-[0.82rem] font-semibold text-slate mb-[0.35rem]"
            >
              Full name *
            </label>
            <input
              id="fullName"
              name="fullName"
              required
              className="w-full border-[1.5px] border-black/[0.12] rounded-xs px-3 py-[0.65rem] text-[0.92rem] font-body bg-white transition-colors duration-200 focus:outline-none focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,150,136,0.1)]"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-[0.82rem] font-semibold text-slate mb-[0.35rem]"
            >
              Email address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border-[1.5px] border-black/[0.12] rounded-xs px-3 py-[0.65rem] text-[0.92rem] font-body bg-white transition-colors duration-200 focus:outline-none focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,150,136,0.1)]"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-[0.82rem] font-semibold text-slate mb-[0.35rem]"
            >
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+264"
              className="w-full border-[1.5px] border-black/[0.12] rounded-xs px-3 py-[0.65rem] text-[0.92rem] font-body bg-white transition-colors duration-200 focus:outline-none focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,150,136,0.1)]"
            />
          </div>

          {/* Organisation */}
          <div>
            <label
              htmlFor="organization"
              className="block text-[0.82rem] font-semibold text-slate mb-[0.35rem]"
            >
              Organisation
            </label>
            <input
              id="organization"
              name="organization"
              className="w-full border-[1.5px] border-black/[0.12] rounded-xs px-3 py-[0.65rem] text-[0.92rem] font-body bg-white transition-colors duration-200 focus:outline-none focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,150,136,0.1)]"
            />
          </div>

          {/* Inquiry type - full width */}
          <div className="sm:col-span-2">
            <label
              htmlFor="inquiryType"
              className="block text-[0.82rem] font-semibold text-slate mb-[0.35rem]"
            >
              Inquiry type *
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={inquiryType}
              onChange={handleInquiryChange}
              className="w-full border-[1.5px] border-black/[0.12] rounded-xs px-3 py-[0.65rem] text-[0.92rem] font-body bg-white transition-colors duration-200 focus:outline-none focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,150,136,0.1)]"
            >
              <option value="investment">Investment Inquiry</option>
              <option value="entrepreneur">
                Entrepreneur / Program Support
              </option>
              <option value="advisory">Advisory / Consulting</option>
              <option value="partnership">Partnership</option>
              <option value="career">Career / Recruitment</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

          {/* Conditional: Investment */}
          {inquiryType === 'investment' && (
            <div className="sm:col-span-2">
              <label
                htmlFor="ticketSize"
                className="block text-[0.82rem] font-semibold text-slate mb-[0.35rem]"
              >
                Estimated investment ticket size
              </label>
              <input
                id="ticketSize"
                name="ticketSize"
                placeholder="e.g., N$5M - N$12M"
                className="w-full border-[1.5px] border-black/[0.12] rounded-xs px-3 py-[0.65rem] text-[0.92rem] font-body bg-white transition-colors duration-200 focus:outline-none focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,150,136,0.1)]"
              />
            </div>
          )}

          {/* Conditional: Entrepreneur */}
          {inquiryType === 'entrepreneur' && (
            <div className="sm:col-span-2">
              <label
                htmlFor="businessStage"
                className="block text-[0.82rem] font-semibold text-slate mb-[0.35rem]"
              >
                Business stage
              </label>
              <select
                id="businessStage"
                name="businessStage"
                className="w-full border-[1.5px] border-black/[0.12] rounded-xs px-3 py-[0.65rem] text-[0.92rem] font-body bg-white transition-colors duration-200 focus:outline-none focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,150,136,0.1)]"
              >
                <option value="">Select stage...</option>
                <option value="idea">Idea / Early concept</option>
                <option value="pilot">Pilot / Proof of concept</option>
                <option value="growth">Growth stage</option>
                <option value="scale">Scale / Expansion</option>
              </select>
            </div>
          )}

          {/* Conditional: Advisory */}
          {inquiryType === 'advisory' && (
            <div className="sm:col-span-2">
              <label
                htmlFor="advisoryType"
                className="block text-[0.82rem] font-semibold text-slate mb-[0.35rem]"
              >
                Advisory area
              </label>
              <input
                id="advisoryType"
                name="advisoryType"
                placeholder="e.g., energy, transaction support, strategy"
                className="w-full border-[1.5px] border-black/[0.12] rounded-xs px-3 py-[0.65rem] text-[0.92rem] font-body bg-white transition-colors duration-200 focus:outline-none focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,150,136,0.1)]"
              />
            </div>
          )}

          {/* Conditional: Partnership */}
          {inquiryType === 'partnership' && (
            <div className="sm:col-span-2">
              <label
                htmlFor="partnerFocus"
                className="block text-[0.82rem] font-semibold text-slate mb-[0.35rem]"
              >
                Partnership focus
              </label>
              <input
                id="partnerFocus"
                name="partnerFocus"
                placeholder="e.g., skills development, co-investment, infrastructure"
                className="w-full border-[1.5px] border-black/[0.12] rounded-xs px-3 py-[0.65rem] text-[0.92rem] font-body bg-white transition-colors duration-200 focus:outline-none focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,150,136,0.1)]"
              />
            </div>
          )}

          {/* Conditional: Career */}
          {inquiryType === 'career' && (
            <div className="sm:col-span-2">
              <label
                htmlFor="careerArea"
                className="block text-[0.82rem] font-semibold text-slate mb-[0.35rem]"
              >
                Role family of interest
              </label>
              <input
                id="careerArea"
                name="careerArea"
                placeholder="e.g., investment, operations, energy, community"
                className="w-full border-[1.5px] border-black/[0.12] rounded-xs px-3 py-[0.65rem] text-[0.92rem] font-body bg-white transition-colors duration-200 focus:outline-none focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,150,136,0.1)]"
              />
            </div>
          )}

          {/* Message - always visible, full width */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-[0.82rem] font-semibold text-slate mb-[0.35rem]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Briefly describe your inquiry or request..."
              className="w-full border-[1.5px] border-black/[0.12] rounded-xs px-3 py-[0.65rem] text-[0.92rem] font-body bg-white transition-colors duration-200 resize-y min-h-[110px] focus:outline-none focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,150,136,0.1)]"
              rows={4}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-5">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full border-0 cursor-pointer font-semibold px-6 py-[0.82rem] text-[0.92rem] tracking-[-0.01em] transition-all duration-[250ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] bg-gradient-to-br from-teal to-teal-dark text-white shadow-[0_8px_32px_rgba(0,150,136,0.18)] hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(0,150,136,0.28)]"
          >
            {sending ? 'Sending...' : 'Submit Inquiry'}
          </button>
        </div>

        {/* Success message */}
        {submitted && (
          <div className="mt-[0.8rem] px-4 py-[0.8rem] rounded-xs bg-[#e4f7f1] text-[#0a7b64] text-[0.88rem] font-medium">
            Thank you for your inquiry. Our team will respond within 24 hours.
          </div>
        )}
        {error && (
          <div className="mt-[0.8rem] px-4 py-[0.8rem] rounded-xs bg-[#fbe5e0] text-[#ab4029] text-[0.88rem] font-medium">
            {error}
          </div>
        )}
      </form>
    </article>
  );
}
