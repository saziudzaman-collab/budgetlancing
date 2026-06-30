import { ArrowUpRight, TrendingUp } from "lucide-react";
import { portfolio } from "../lib/data";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";
import { scrollTo } from "../config/site";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold text-violet-500">Portfolio & Case Studies</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Work that <span className="gradient-text">delivers measurable results</span>
          </h2>
          <p className="mt-4 text-[var(--text-soft)] text-lg">
            Real projects with real outcomes — the websites, apps, and brands we've built for startups and businesses worldwide.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" amount={0.1}>
          {portfolio.map((p) => (
            <StaggerItem key={p.title}>
              <button onClick={() => scrollTo("#contact")} className="group block w-full text-left overflow-hidden rounded-2xl glass hover:-translate-y-1.5 hover:glow-ring transition-all h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} — BudgetLancing case study`}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute top-3 left-3 rounded-full glass px-3 py-1 text-[11px] font-medium text-white">{p.category}</div>
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-1 text-[11px] font-semibold text-white">
                    <TrendingUp className="h-3 w-3" /> {p.result}
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-semibold text-white text-lg">{p.title}</h3>
                      <ArrowUpRight className="h-5 w-5 text-white/70 group-hover:text-white group-hover:rotate-45 transition-all" />
                    </div>
                    <p className="mt-1 text-sm text-white/75">{p.desc}</p>
                  </div>
                </div>
                {/* metrics row */}
                <div className="grid grid-cols-3 divide-x divide-[var(--border)] border-t border-[var(--border)]">
                  {p.metrics.map((m) => (
                    <div key={m.k} className="px-3 py-3 text-center">
                      <div className="font-display text-sm font-bold gradient-text">{m.v}</div>
                      <div className="mt-0.5 text-[10px] uppercase tracking-wider text-[var(--text-soft)]">{m.k}</div>
                    </div>
                  ))}
                </div>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
