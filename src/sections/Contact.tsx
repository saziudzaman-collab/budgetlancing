import { useState } from "react";
import { Mail, Phone, Send, MessageCircle, Clock, ShieldCheck, Zap } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { services } from "../lib/data";
import { site, whatsappHref } from "../config/site";

type FormState = {
  name: string; email: string; phone: string;
  service: string; budget: string; details: string;
};

const budgets = ["Under $500", "$500 - $1,500", "$1,500 - $5,000", "$5,000+"];

export function Contact({ onSubmit }: { onSubmit: (msg: string) => void }) {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", service: services[0].title, budget: budgets[1], details: "",
  });
  const [loading, setLoading] = useState(false);

  const set = (k: keyof FormState, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSubmit(`Thanks ${form.name.split(" ")[0] || "there"}! We'll reply within 24 hours.`);
      setForm({ name: "", email: "", phone: "", service: services[0].title, budget: budgets[1], details: "" });
    }, 1100);
  };

  const inputCls = "w-full rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all placeholder:text-[var(--text-soft)]";

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
        <Reveal>
          <span className="text-sm font-semibold text-violet-500">Get in Touch</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Let's build something <span className="gradient-text">great together</span>
          </h2>
          <p className="mt-4 text-[var(--text-soft)] text-lg">
            Tell us about your project and we'll send a free, no-obligation quote within 24 hours. No sales calls, no pressure.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@budgetlancing.com", href: "mailto:hello@budgetlancing.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: "https://wa.me/15551234567" },
              { icon: Clock, label: "Response Time", value: "Within 24 hours, guaranteed", href: "#" },
            ].map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 glass rounded-2xl p-4 hover:glow-ring hover:-translate-y-0.5 transition-all">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-soft)]">{c.label}</div>
                  <div className="font-semibold text-sm">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="glass rounded-3xl p-6 sm:p-8 glow-ring">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1.5 text-[var(--text-soft)]">Name *</label>
                <input required value={form.name} onChange={(e) => set("name", e.target.value)} className={inputCls} placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5 text-[var(--text-soft)]">Email *</label>
                <input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputCls} placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5 text-[var(--text-soft)]">Phone</label>
                <input value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputCls} placeholder="+1 555 000 0000" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5 text-[var(--text-soft)]">Service *</label>
                <select required value={form.service} onChange={(e) => set("service", e.target.value)} className={inputCls}>
                  {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium mb-1.5 text-[var(--text-soft)]">Budget Range</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgets.map((b) => (
                  <button type="button" key={b} onClick={() => set("budget", b)} className={`rounded-xl px-2 py-2.5 text-xs font-medium transition-all ${form.budget === b ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30" : "bg-[var(--bg-soft)] border border-[var(--border)] hover:border-violet-500/50"}`}>
                    {b}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="f-details" className="block text-xs font-medium mb-1.5 text-[var(--text-soft)]">Project Details *</label>
              <textarea id="f-details" required value={form.details} onChange={(e) => set("details", e.target.value)} rows={4} className={inputCls} placeholder="Tell us about your goals, timeline, and any requirements..." />
            </div>
            <button type="submit" disabled={loading} className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-[1.02] transition-all disabled:opacity-60 disabled:scale-100">
              {loading ? "Sending..." : <>Send Request <Send className="h-4 w-4" /></>}
            </button>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[var(--text-soft)]">
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-green-500" /> No obligation</span>
              <span className="inline-flex items-center gap-1"><Zap className="h-3.5 w-3.5 text-violet-500" /> Reply within 24h</span>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
