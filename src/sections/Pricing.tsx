import { Check, Sparkles, ArrowRight } from "lucide-react";
import { pricingPlans } from "../lib/data";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";

const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold text-violet-500">Pricing</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Simple, transparent <span className="gradient-text">budget-friendly pricing</span>
          </h2>
          <p className="mt-4 text-[var(--text-soft)] text-lg">
            No hourly billing. No hidden fees. Pick a plan or request a custom quote — you'll know the full cost before we start.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid lg:grid-cols-3 gap-6 items-stretch" amount={0.12}>
          {pricingPlans.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <div
                className={`relative h-full flex flex-col rounded-3xl p-7 transition-all hover:-translate-y-1.5 ${
                  p.featured
                    ? "glass glow-ring ring-2 ring-violet-500/50 lg:scale-[1.03]"
                    : "glass hover:glow-ring"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-violet-500/30">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </span>
                )}
                <h3 className="font-display font-semibold text-lg">{p.name}</h3>
                <p className="mt-1 text-sm text-[var(--text-soft)]">{p.tagline}</p>
                <div className="mt-5 flex items-end gap-1">
                  {p.price !== null ? (
                    <>
                      <span className="font-display text-4xl font-bold">${p.price}</span>
                      <span className="text-sm text-[var(--text-soft)] mb-1">{p.period}</span>
                    </>
                  ) : (
                    <span className="font-display text-4xl font-bold">Custom</span>
                  )}
                </div>

                <ul className="mt-6 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className={`mt-0.5 grid place-items-center h-5 w-5 rounded-full ${p.featured ? "bg-violet-500/20 text-violet-500" : "bg-green-500/15 text-green-500"}`}>
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-[var(--text-soft)]">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo("#contact")}
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all hover:scale-[1.02] ${
                    p.featured
                      ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50"
                      : "glass hover:glow-ring"
                  }`}
                >
                  {p.cta}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-8 text-center text-sm text-[var(--text-soft)]">
          Need something different? <button onClick={() => scrollTo("#contact")} className="font-semibold text-violet-500 hover:underline">Request a custom quote →</button>
        </Reveal>
      </div>
    </section>
  );
}
