import { processSteps } from "../lib/data";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";

export function Process() {
  return (
    <section id="process" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold text-violet-500">Our Process</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            From idea to launch in <span className="gradient-text">6 simple steps</span>
          </h2>
          <p className="mt-4 text-[var(--text-soft)] text-lg">
            A clear, transparent process that keeps you informed and in control at every stage.
          </p>
        </Reveal>

        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" amount={0.1}>
            {processSteps.map((p) => (
              <StaggerItem key={p.step}>
                <div className="group relative glass rounded-2xl p-6 hover:-translate-y-1.5 hover:glow-ring transition-all h-full">
                  <div className="flex items-center gap-4">
                    <div className="relative grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white font-display font-bold shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform">
                      {p.step}
                    </div>
                    <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-[var(--text-soft)]">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
