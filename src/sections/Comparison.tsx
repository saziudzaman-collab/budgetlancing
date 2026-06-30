import { Check, X, Sparkles } from "lucide-react";
import { comparison } from "../lib/data";
import { Reveal } from "../components/Reveal";
import { scrollTo } from "../config/site";

type Cell = string | boolean;

function CellValue({ v, highlight }: { v: Cell; highlight?: boolean }) {
  if (typeof v === "boolean") {
    return v ? (
      <span className={`inline-grid place-items-center h-6 w-6 rounded-full ${highlight ? "bg-violet-500/20 text-violet-500" : "bg-green-500/15 text-green-500"}`}>
        <Check className="h-4 w-4" />
      </span>
    ) : (
      <span className="inline-grid place-items-center h-6 w-6 rounded-full bg-rose-500/10 text-rose-500">
        <X className="h-4 w-4" />
      </span>
    );
  }
  return <span className={`text-sm font-medium ${highlight ? "text-[var(--text)]" : "text-[var(--text-soft)]"}`}>{v}</span>;
}

export function Comparison() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold text-violet-500">The Difference</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Why founders switch from <span className="gradient-text">Fiverr & Upwork</span>
          </h2>
          <p className="mt-4 text-[var(--text-soft)] text-lg">
            Same talent pool, smarter process, fraction of the cost. Here's the honest side-by-side.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="glass rounded-3xl overflow-hidden glow-ring">
            {/* header row */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr] items-center gap-2 sm:gap-4 px-4 sm:px-7 py-5 border-b border-[var(--border)]">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--text-soft)]">Feature</span>
              <span className="text-center text-xs sm:text-sm font-semibold text-[var(--text-soft)]">Fiverr / Upwork</span>
              <span className="text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-1 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-violet-500/30">
                  <Sparkles className="h-3.5 w-3.5" /> BudgetLancing
                </span>
              </span>
            </div>
            {/* rows */}
            {comparison.rows.map((r, i) => (
              <div
                key={r.feature}
                className={`grid grid-cols-[1.4fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr] items-center gap-2 sm:gap-4 px-4 sm:px-7 py-4 ${
                  i % 2 === 0 ? "bg-[var(--border)]/30" : ""
                }`}
              >
                <span className="text-sm font-medium text-[var(--text)]">{r.feature}</span>
                <span className="text-center"><CellValue v={r.competitor} /></span>
                <span className="text-center"><CellValue v={r.us} highlight /></span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 text-center">
          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all"
          >
            Switch to BudgetLancing →
          </button>
        </Reveal>
      </div>
    </section>
  );
}
