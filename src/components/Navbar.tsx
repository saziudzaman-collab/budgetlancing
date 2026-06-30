import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollProgress, useActiveSection } from "../lib/hooks";
import { Menu, X, Sparkles } from "lucide-react";
import { navLinks, site } from "../lib/data";
import { scrollTo } from "../config/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const progress = useScrollProgress();
  const active = useActiveSection(navLinks.map((l) => l.href));
  const scrolled = progress > 0.01;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <motion.div
        className="h-0.5 origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-blue-500"
        style={{ scaleX: progress }}
      />
      <div className={scrolled ? "py-2 transition-all duration-300" : "py-4 transition-all duration-300"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className={scrolled ? "glass glow-ring flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5" : "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5"}>
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
              className="flex items-center gap-2 font-display font-bold text-lg"
              aria-label={`${site.name} home`}
            >
              <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-blue-500 text-white shadow-lg shadow-violet-500/30">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>Budget<span className="gradient-text">Lancing</span></span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                  className={active === l.href ? "relative rounded-lg px-3 py-2 text-sm font-medium text-[var(--text)] transition-colors" : "relative rounded-lg px-3 py-2 text-sm font-medium text-[var(--text-soft)] transition-colors hover:text-[var(--text)]"}
                >
                  {l.label}
                  {active === l.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-lg bg-[var(--border)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => scrollTo("#contact")}
                className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all"
              >
                Get a Quote
              </button>
              <MobileMenu />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="grid h-9 w-9 place-items-center rounded-full glass md:hidden"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open && (
        <div className="absolute left-4 right-4 top-16 mt-2 rounded-2xl glass p-3 glow-ring md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); scrollTo(l.href); setOpen(false); }}
              className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-[var(--border)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { scrollTo("#contact"); setOpen(false); }}
            className="mt-2 w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white"
          >
            Get a Quote
          </button>
        </div>
      )}
    </>
  );
}
