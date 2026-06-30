import { Star, Quote, TrendingUp } from "lucide-react";
import { testimonials } from "../lib/data";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";

export function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold text-violet-500">Testimonials</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Loved by founders & <span className="gradient-text">creators worldwide</span>
          </h2>
          <p className="mt-4 text-[var(--text-soft)] text-lg">
            Real results from real clients — here's what they say about working with BudgetLancing.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" amount={0.1}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="group h-full glass rounded-2xl p-6 hover:-translate-y-1.5 hover:glow-ring transition-all flex flex-col">
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-violet-500/30" />
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-1 text-[11px] font-semibold text-green-500">
                    <TrendingUp className="h-3 w-3" /> {t.metric}
                  </span>
                </div>
                <div className="flex gap-0.5 mt-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text)] flex-1">“{t.quote}”</p>
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                  <div className="grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white text-sm font-semibold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-[var(--text-soft)]">{t.role}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
