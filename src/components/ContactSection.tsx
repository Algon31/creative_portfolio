import { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { profileConfig } from '../config/profile.ts';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = profileConfig.links.email;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const links = [
    { name: 'GitHub', url: profileConfig.links.github },
    { name: 'LinkedIn', url: profileConfig.links.linkedin },
    { name: 'Instagram', url: profileConfig.links.instagram },
    { name: 'Résumé / CV', url: profileConfig.links.resume },
  ];

  return (
    <section
      id="contact"
      aria-label="Contact and project commissions"
      className="relative min-h-[85vh] w-full px-6 sm:px-12 md:pl-28 lg:pl-36 md:pr-16 lg:pr-24 py-28 flex flex-col justify-between"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-4 h-4 rounded-sm bg-light" aria-hidden="true" />
          <span className="font-display font-semibold text-xs tracking-widest text-dark uppercase">
            Inquiries & Collaborations
          </span>
          <div className="h-[1px] flex-1 max-w-xs bg-dark/20" />
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-light tracking-tight leading-[0.9] mb-12">
          let's build something<br />unforgettable.
        </h2>

        {/* Geometric Interaction Card */}
        <div className="rounded-3xl bg-light text-dark p-8 sm:p-12 lg:p-16 border border-dark/10 shadow-[0_12px_40px_rgba(0,0,0,0.15)] flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark/5 border border-dark/10 text-xs font-sans font-semibold text-dark/75 mb-4">
              <span className="w-2 h-2 rounded-full bg-dark animate-pulse" />
              <span>Booking for Q1 & Q2 commissions</span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-dark tracking-tight mb-3">
              Direct Inquiries
            </h3>
            <p className="font-sans text-sm sm:text-base text-dark/80 leading-relaxed font-medium">
              Available for commercial video editing, creative direction, high-craft interactive web builds, and bespoke motion design.
            </p>
          </div>

          {/* Copyable Action Pill */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`mailto:${email}`}
              className="px-6 py-4 rounded-2xl bg-dark text-light font-sans font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-light hover:text-dark hover:border hover:border-dark transition-all duration-200 shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Send Message</span>
            </a>

            <button
              type="button"
              onClick={copyToClipboard}
              className="px-5 py-4 rounded-2xl border-2 border-dark/20 text-dark font-sans font-semibold text-sm tracking-wide flex items-center justify-center gap-2 hover:border-dark hover:bg-dark/5 transition-all duration-200"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-dark" />
                  <span className="font-bold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-dark/60" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* External Channels Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-light/70 hover:bg-light text-dark p-4 border border-dark/10 flex items-center justify-between transition-all duration-200 shadow-sm hover:shadow"
            >
              <span className="font-sans font-semibold text-xs sm:text-sm tracking-tight text-dark">
                {link.name}
              </span>
              <ArrowUpRight className="w-4 h-4 text-dark/50 group-hover:text-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer credits bar */}
      <div className="max-w-6xl mx-auto w-full mt-24 pt-8 border-t border-dark/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-dark/75 font-medium">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-sm bg-dark" />
          <span>&copy; {new Date().getFullYear()} Ravi Bhuvan. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Terracotta &bull; Cream &bull; Black</span>
          <span>Squares &bull; Circles &bull; Rectangles</span>
        </div>
      </div>
    </section>
  );
};
