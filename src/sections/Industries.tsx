import { Rocket, Store, Lightbulb, Briefcase, ShoppingBag, Video } from "lucide-react";
import { industries } from "../lib/data";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";
import { scrollTo } from "../config/site";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  rocket: Rocket, store: Store, lightbulb: Lightbulb, briefcase: Briefcase, "shopping-bag": ShoppingBag, video: Video,
};

export function Industries() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold text-violet-500">Who We Serve</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Built for <span className="gradient-text">ambitious teams</span>
          </h2>
          <p className="mt-4 text-[var(--text-soft)] text-lg">
            From solo founders to scaling agencies — we tailor every project to your industry and goals.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" amount={0.1}>
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon];
            return (
              <StaggerItem key={ind.title}>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="group h-full w-full text-left glass rounded-2xl p-6 hover:-translate-y-1.5 hover:glow-ring transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500/15 to-blue-500/10 text-violet-500 group-hover:from-violet-500 group-hover:to-fuchsia-500 group-hover:text-white transition-all duration-300">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <h3 className="font-display font-semibold text-lg">{ind.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-[var(--text-soft)]">{ind.desc}</p>
                </button>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
