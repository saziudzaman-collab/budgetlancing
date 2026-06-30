import { Wallet, Users, Zap, Cpu, Headset, Puzzle } from "lucide-react";
import { whyUs } from "../lib/data";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  wallet: Wallet, users: Users, zap: Zap, cpu: Cpu, headset: Headset, puzzle: Puzzle,
};

export function WhyUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold text-violet-500">Why BudgetLancing</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Premium quality, <span className="gradient-text">without the premium price</span>
          </h2>
          <p className="mt-4 text-[var(--text-soft)] text-lg">
            We combine an in-house expert team with AI-powered workflows to deliver faster, cheaper, and better than anyone else.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" amount={0.12}>
          {whyUs.map((w) => {
            const Icon = iconMap[w.icon];
            return (
              <StaggerItem key={w.title}>
                <div className="group relative h-full glass rounded-2xl p-7 hover:-translate-y-1.5 transition-all overflow-hidden">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/30 mb-5 group-hover:scale-110 transition-transform">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h3 className="relative font-display font-semibold text-lg">{w.title}</h3>
                  <p className="relative mt-2 text-sm text-[var(--text-soft)]">{w.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
