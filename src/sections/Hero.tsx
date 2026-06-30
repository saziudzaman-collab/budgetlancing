import { motion } from "framer-motion";
import { ArrowRight, Play, Star, ShieldCheck, Zap } from "lucide-react";
import { stats } from "../lib/data";
import { useCountUp, useInView } from "../lib/hooks";
import { scrollTo, site } from "../config/site";

function StatItem({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) {
  const n = useCountUp(value, inView);
  return (
    <div className="text-center">
      <div className="font-display text-3xl sm:text-4xl font-bold gradient-text">{n}{suffix}</div>
      <div className="mt-1 text-xs sm:text-sm text-[var(--text-soft)]">{label}</div>
    </div>
  );
}

export function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-violet-600/20 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute -top-20 right-0 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-3xl animate-blob pointer-events-none" style={{ animationDelay: "4s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium"
          >
            <span className="flex -space-x-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
            </span>
            Rated {site.rating}/5 by {site.reviewCount}+ founders
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
          >
            {site.heroHeadline[0]}{" "}
            <span className="gradient-text">{site.heroHeadline[1]}</span>{" "}
            {site.heroHeadline[2]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-base sm:text-lg text-[var(--text-soft)]"
          >
            {site.tagline}. Skip the overpriced freelance marketplaces — BudgetLancing delivers agency-grade websites, apps, AI agents, and marketing, built by experts, powered by AI, priced for startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("#portfolio")}
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold hover:scale-105 transition-all"
            >
              <Play className="h-4 w-4" />
              View Our Work
            </button>
          </motion.div>

          {/* trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[var(--text-soft)]"
          >
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-green-500" /> Full source ownership</span>
            <span className="inline-flex items-center gap-1.5"><Zap className="h-4 w-4 text-violet-500" /> 3-day delivery</span>
            <span className="inline-flex items-center gap-1.5"><Star className="h-4 w-4 text-amber-400 fill-amber-400" /> 4.9/5 rating</span>
          </motion.div>

          <div ref={ref} className="mt-10 grid grid-cols-4 gap-4">
            {stats.map((s) => <StatItem key={s.label} {...s} inView={inView} />)}
          </div>
        </div>

        {/* hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-blue-500/30 blur-2xl" />
            <img
              src="/images/hero-ai.png"
              alt="AI-powered digital services illustration by BudgetLancing"
              className="relative rounded-[2rem] glass glow-ring object-cover w-full h-full animate-float-slow"
            />
            {/* floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="absolute -left-4 top-10 glass rounded-2xl px-4 py-3 glow-ring animate-float-slow"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-xs text-[var(--text-soft)]">Avg. delivery</div>
              <div className="font-display font-bold text-lg gradient-text">{site.avgDelivery}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
              className="absolute -right-4 bottom-10 glass rounded-2xl px-4 py-3 glow-ring animate-float-slow"
              style={{ animationDelay: "2s" }}
            >
              <div className="text-xs text-[var(--text-soft)]">Starting at</div>
              <div className="font-display font-bold text-lg gradient-text">${site.startingPrice}</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* marquee trust bar */}
      <div className="relative mt-20 border-y border-[var(--border)] py-5 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 px-6">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 text-[var(--text-soft)] text-sm font-medium">
              {["Startups", "Small Businesses", "Entrepreneurs", "Agencies", "Ecommerce Stores", "Content Creators"].map((t) => (
                <span key={t} className="whitespace-nowrap">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
