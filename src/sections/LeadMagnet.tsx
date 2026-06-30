import { CalendarCheck, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { scrollTo, site } from "../config/site";

const perks = [
  { icon: Clock, label: "30-minute call", sub: "At a time that suits you" },
  { icon: ShieldCheck, label: "No obligation", sub: "Just expert advice & a quote" },
  { icon: CalendarCheck, label: "Free action plan", sub: "Tailored to your goals" },
];

export function LeadMagnet() {
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glow-ring">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-blue-600" />
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/20 blur-3xl animate-blob" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

            <div className="relative grid lg:grid-cols-2 gap-8 p-8 sm:p-12 items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  Free Consultation
                </span>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  Get a free 30-min strategy call
                </h2>
                <p className="mt-3 text-white/85 text-lg max-w-lg">
                  Talk to an expert, get a clear roadmap, and a transparent quote — no pressure, no sales fluff.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {perks.map((p) => (
                    <div key={p.label} className="flex items-center gap-2.5 rounded-2xl bg-white/10 backdrop-blur px-4 py-3">
                      <p.icon className="h-5 w-5 text-white" />
                      <div>
                        <div className="text-sm font-semibold text-white">{p.label}</div>
                        <div className="text-xs text-white/70">{p.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-semibold text-violet-700 shadow-xl hover:scale-[1.02] transition-all"
                >
                  Book My Free Call
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi! I'd like to book a free strategy call.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 backdrop-blur border border-white/30 px-7 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all"
                >
                  Chat on WhatsApp Instead
                </a>
                <p className="text-center text-xs text-white/70">Replies within {site.responseTime.toLowerCase()}.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
