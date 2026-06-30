import { TrendingDown, Clock, AlertTriangle, ShieldOff } from "lucide-react";
import { problems } from "../lib/data";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";

const icons = [TrendingDown, Clock, AlertTriangle, ShieldOff];

export function Problem() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold text-rose-500">The Problem</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Freelance marketplaces are <span className="gradient-text">expensive & slow</span>
          </h2>
          <p className="mt-4 text-[var(--text-soft)] text-lg">
            Fiverr and Upwork promise affordable talent — but the reality is inflated pricing, endless bidding, and unpredictable quality. Here's what founders actually deal with:
          </p>
        </Reveal>

        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5" amount={0.15}>
          {problems.map((p, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={p.title}>
                <div className="group h-full glass rounded-2xl p-6 hover:-translate-y-1 hover:glow-ring transition-all">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-rose-500/10 text-rose-500 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-soft)]">{p.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.1} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl glass p-8 sm:p-10 text-center glow-ring">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-transparent to-violet-500/10 pointer-events-none" />
            <p className="relative font-display text-xl sm:text-2xl font-semibold">
              The average marketplace project costs <span className="text-rose-500">2-3x more</span> and takes <span className="text-rose-500">3x longer</span> than promised.
            </p>
            <p className="relative mt-3 text-[var(--text-soft)]">BudgetLancing was built to fix exactly this.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
