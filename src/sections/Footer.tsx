import { useState } from "react";
import { Sparkles, Twitter, Linkedin, Instagram, Github, Send, MapPin } from "lucide-react";
import { footerLinks } from "../lib/data";
import { site } from "../config/site";

export function Footer({ onToast }: { onToast: (m: string) => void }) {
  const [email, setEmail] = useState("");
  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onToast("Subscribed! Check your inbox for tips & offers.");
    setEmail("");
  };

  return (
    <footer className="relative border-t border-[var(--border)] pt-16 pb-8 overflow-hidden">
      <div className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* newsletter CTA */}
        <div className="glass rounded-3xl p-7 sm:p-10 glow-ring mb-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-bold">Get growth tips & exclusive offers</h3>
            <p className="mt-2 text-[var(--text-soft)]">Join 5,000+ founders. No spam, unsubscribe anytime.</p>
          </div>
          <form onSubmit={subscribe} className="flex w-full max-w-md gap-2">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="flex-1 rounded-full bg-[var(--bg-soft)] border border-[var(--border)] px-5 py-3 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all" />
            <button type="submit" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 hover:scale-105 transition-transform">
              Subscribe <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* links */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-blue-500 text-white shadow-lg shadow-violet-500/30">
                <Sparkles className="h-4 w-4" />
              </span>
              Budget<span className="gradient-text">Lancing</span>
            </a>
            <p className="mt-4 text-sm text-[var(--text-soft)] max-w-xs">
              {site.tagline}. We help startups, businesses, and creators build and grow — faster.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-[var(--text-soft)]">
              <MapPin className="h-4 w-4 text-violet-500" /> {site.location}
            </div>
            <div className="mt-5 flex gap-2">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href={Object.values(site.social)[i]} aria-label="social link" className="grid place-items-center h-9 w-9 rounded-full glass hover:scale-110 hover:text-violet-500 transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm">{title}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-[var(--text-soft)] hover:text-violet-500 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-soft)]">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Built with AI-powered workflows. Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
