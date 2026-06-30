import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "../components/Reveal";

const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

export function CTABand() {
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14 text-center glow-ring">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-blue-600" />
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/20 blur-3xl animate-blob" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                <Sparkles className="h-3 w-3" /> Limited spots this month
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Ready to launch your project?
              </h2>
              <p className="mt-3 text-white/80 text-lg max-w-xl mx-auto">
                Get a free quote in 24 hours. No commitment, no pressure — just expert advice and a fair price.
              </p>
              <button
                onClick={() => scrollTo("#contact")}
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-violet-700 shadow-xl hover:scale-105 transition-all"
              >
                Get Your Free Quote
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
