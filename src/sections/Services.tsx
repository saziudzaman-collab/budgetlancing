import { ArrowUpRight } from "lucide-react";
import { services } from "../lib/data";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";

const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold text-violet-500">Our Services</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything you need to <span className="gradient-text">build & grow</span>
          </h2>
          <p className="mt-4 text-[var(--text-soft)] text-lg">
            From websites and apps to AI agents and marketing — 15 services under one roof, each delivered with the same speed and quality.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" amount={0.08}>
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.title}>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="group relative h-full w-full text-left glass rounded-2xl p-6 hover:-translate-y-1.5 hover:glow-ring transition-all overflow-hidden"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-start justify-between">
                    <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500/15 to-fuchsia-500/10 text-violet-500 group-hover:from-violet-500 group-hover:to-fuchsia-500 group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-[var(--text-soft)] group-hover:text-violet-500 group-hover:rotate-45 transition-all" />
                  </div>
                  <h3 className="relative mt-5 font-display font-semibold text-lg">{s.title}</h3>
                  <p className="relative mt-2 text-sm text-[var(--text-soft)]">{s.desc}</p>
                  <div className="relative mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full bg-[var(--border)] px-2.5 py-1 text-[11px] font-medium text-[var(--text-soft)]">{t}</span>
                    ))}
                  </div>
                </button>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
