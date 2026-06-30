import {
  Globe, Smartphone, Bot, MessageSquare, Workflow, PenLine,
  Megaphone, Search, Facebook, Palette, Sparkles, Layers,
  ShoppingCart, Code,
} from "lucide-react";
import { site } from "../config/site";

/* ---------------- Services ---------------- */
export const services = [
  { icon: Globe, title: "Website Development", desc: "Lightning-fast, SEO-ready websites built with modern frameworks that convert visitors into customers.", tags: ["React", "Next.js", "CMS"] },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native-quality iOS & Android apps with seamless UX, offline support, and scalable architecture.", tags: ["iOS", "Android", "PWA"] },
  { icon: Bot, title: "AI Agent Development", desc: "Autonomous AI agents that handle research, outreach, and operations 24/7 — trained on your business.", tags: ["GPT-4o", "RAG", "Tools"] },
  { icon: MessageSquare, title: "AI Chatbots", desc: "Conversational chatbots for support, sales, and lead qualification — deployed on your site or WhatsApp.", tags: ["24/7", "Multilingual"] },
  { icon: Workflow, title: "AI Automation", desc: "Automate repetitive workflows — invoices, reports, follow-ups — with intelligent, no-code pipelines.", tags: ["Zapier", "n8n", "APIs"] },
  { icon: PenLine, title: "SEO Content Writing", desc: "Rank-driving articles and landing copy crafted by AI, refined by humans, optimized for intent.", tags: ["Keywords", "Schema"] },
  { icon: Megaphone, title: "Digital Marketing", desc: "Full-funnel campaigns across search and social that grow traffic, leads, and revenue predictably.", tags: ["Strategy", "Growth"] },
  { icon: Search, title: "Google Ads", desc: "High-ROI Google Ads management — keyword research, landing pages, and continuous optimization.", tags: ["PPC", "ROAS"] },
  { icon: Facebook, title: "Facebook Ads", desc: "Meta ad campaigns engineered for conversions with creative testing and audience scaling.", tags: ["Meta", "Retargeting"] },
  { icon: Palette, title: "UI/UX Design", desc: "User-centered interfaces and design systems that feel intuitive, premium, and on-brand.", tags: ["Figma", "Design Systems"] },
  { icon: Sparkles, title: "Logo Design", desc: "Distinctive, timeless logos crafted to anchor your brand identity across every touchpoint.", tags: ["Vector", "Brand"] },
  { icon: Layers, title: "Branding", desc: "Complete brand systems — voice, visuals, and guidelines — that make you instantly recognizable.", tags: ["Identity", "Guidelines"] },
  { icon: Globe, title: "Landing Pages", desc: "High-converting landing pages built to capture leads and launch campaigns in days, not weeks.", tags: ["CRO", "A/B"] },
  { icon: ShoppingCart, title: "Ecommerce Websites", desc: "Conversion-optimized online stores with secure checkout, inventory, and integrated payments.", tags: ["Shopify", "WooCommerce"] },
  { icon: Code, title: "Custom Software Solutions", desc: "Tailored software — dashboards, APIs, internal tools — built to fit your exact workflow.", tags: ["SaaS", "APIs"] },
];

/* ---------------- Pricing ---------------- */
export const pricingPlans = [
  {
    name: "Starter", price: 199, period: "/ project", tagline: "Perfect for launching your first presence", featured: false,
    features: ["1 service of your choice", "3-day delivery", "2 revision rounds", "Source files included", "Email support", "Mobile responsive"],
    cta: "Start with Starter",
  },
  {
    name: "Professional", price: 499, period: "/ project", tagline: "For growing businesses that need more", featured: true,
    features: ["Up to 3 combined services", "5-day delivery", "Unlimited revisions", "Priority support", "AI-powered workflow", "Dedicated project manager", "30-day post-launch support"],
    cta: "Choose Professional",
  },
  {
    name: "Enterprise", price: null, period: "Custom", tagline: "Tailored solutions for scale", featured: false,
    features: ["Unlimited services", "Custom timeline", "Dedicated team", "SLA & priority SLAs", "Onboarding & training", "Quarterly strategy reviews", "24/7 priority support"],
    cta: "Request a Custom Quote",
  },
];

/* ---------------- Portfolio / Case Studies ---------------- */
export const portfolio = [
  { title: "ShopSphere — Ecommerce Store", category: "Ecommerce", image: "/images/portfolio-1.jpg", result: "+180% conversion", desc: "A Shopify-based storefront with AI product recommendations and one-page checkout.", metrics: [{ k: "Conversion", v: "+180%" }, { k: "AOV", v: "+34%" }, { k: "Load time", v: "1.1s" }] },
  { title: "FitTrack — Mobile App", category: "Mobile App", image: "/images/portfolio-2.jpg", result: "50k+ downloads", desc: "Cross-platform fitness app with workout tracking, social feeds, and subscriptions.", metrics: [{ k: "Downloads", v: "50k+" }, { k: "Retention", v: "62%" }, { k: "Rating", v: "4.8★" }] },
  { title: "Lumen — Brand Identity", category: "Branding", image: "/images/portfolio-3.jpg", result: "Full rebrand", desc: "Complete visual identity, logo system, and guidelines for a SaaS startup.", metrics: [{ k: "Brand recall", v: "+47%" }, { k: "Assets", v: "120+" }, { k: "Timeline", v: "6 days" }] },
  { title: "InsightDash — Analytics Platform", category: "Software", image: "/images/portfolio-4.jpg", result: "3x faster reporting", desc: "Custom analytics dashboard with real-time data pipelines and role-based access.", metrics: [{ k: "Report speed", v: "3x" }, { k: "Data sources", v: "14" }, { k: "Users", v: "800+" }] },
  { title: "Aura — UI/UX System", category: "Design", image: "/images/portfolio-5.jpg", result: "Design system", desc: "A scalable, accessible design system for a fintech product across web and mobile.", metrics: [{ k: "Components", v: "85" }, { k: "A11y", v: "AA+" }, { k: "Handoff", v: "4 days" }] },
  { title: "LaunchPad — SaaS Landing", category: "Web", image: "/images/portfolio-6.jpg", result: "+42% signups", desc: "High-converting landing page for a SaaS launch with A/B-tested copy and CRO.", metrics: [{ k: "Signups", v: "+42%" }, { k: "Bounce", v: "-28%" }, { k: "LCP", v: "0.9s" }] },
];

/* ---------------- Comparison Table ---------------- */
export const comparison = {
  columns: ["Feature", "Fiverr / Upwork", "BudgetLancing"],
  rows: [
    { feature: "Average project cost", competitor: "$800 – $3,000+", us: "$199 – $499" },
    { feature: "Typical delivery time", competitor: "2 – 6 weeks", us: "3 – 7 days" },
    { feature: "Dedicated project manager", competitor: false, us: true },
    { feature: "AI-powered workflows", competitor: false, us: true },
    { feature: "In-house expert team", competitor: false, us: true },
    { feature: "Transparent fixed pricing", competitor: false, us: true },
    { feature: "Unlimited revisions (Pro)", competitor: false, us: true },
    { feature: "30-day post-launch support", competitor: false, us: true },
    { feature: "Full source file ownership", competitor: "Sometimes", us: true },
  ],
};

/* ---------------- Industries ---------------- */
export const industries = [
  { icon: "rocket", title: "Startups", desc: "Launch MVPs, landing pages, and AI tools fast — without burning runway." },
  { icon: "store", title: "Small Businesses", desc: "Get a professional online presence and automation that saves hours weekly." },
  { icon: "lightbulb", title: "Entrepreneurs", desc: "Turn ideas into reality with affordable, end-to-end digital execution." },
  { icon: "briefcase", title: "Agencies", desc: "White-label our team to scale capacity and margins without hiring." },
  { icon: "shopping-bag", title: "Ecommerce Stores", desc: "Boost conversions with optimized stores, ads, and AI product search." },
  { icon: "video", title: "Content Creators", desc: "Brands, websites, and funnels built to grow and monetize your audience." },
];

/* ---------------- Process ---------------- */
export const processSteps = [
  { step: "01", title: "Discovery", desc: "We dive deep into your goals, audience, and market to define a clear roadmap." },
  { step: "02", title: "Proposal", desc: "You receive a transparent scope, timeline, and fixed quote — no surprises." },
  { step: "03", title: "Development", desc: "Our team builds your solution using AI-powered workflows for speed and quality." },
  { step: "04", title: "Review", desc: "Collaborate with live previews and structured feedback loops until it's perfect." },
  { step: "05", title: "Delivery", desc: "We launch your project with full source files, documentation, and handoff." },
  { step: "06", title: "Support", desc: "Ongoing support, optimization, and iteration to keep you ahead." },
];

/* ---------------- Testimonials ---------------- */
export const testimonials = [
  { name: "Sarah Chen", role: "Founder, ShopSphere", quote: "BudgetLancing rebuilt our store in 5 days. Conversions jumped 180% in the first month — at a fraction of what agencies quoted.", rating: 5, avatar: "SC", metric: "+180% conversion" },
  { name: "Marcus Reid", role: "CEO, FitTrack", quote: "They delivered our mobile app faster and cheaper than three Upwork freelancers combined. The quality is genuinely premium.", rating: 5, avatar: "MR", metric: "50k+ downloads" },
  { name: "Priya Sharma", role: "Marketing Lead, Lumen", quote: "The AI chatbot they built handles 70% of our support tickets automatically. ROI in under two weeks.", rating: 5, avatar: "PS", metric: "70% auto-resolved" },
  { name: "David Okafor", role: "Founder, InsightDash", quote: "Professional, fast, and surprisingly affordable. Our analytics dashboard is now core to our product.", rating: 5, avatar: "DO", metric: "3x faster reporting" },
  { name: "Elena Rossi", role: "Creator, Aura", quote: "The design system they delivered is beautiful and consistent. It saved our team months of work.", rating: 5, avatar: "ER", metric: "85 components" },
  { name: "James Park", role: "Growth, LaunchPad", quote: "Our SaaS landing page converted at 42% on launch day. BudgetLancing knows conversion.", rating: 5, avatar: "JP", metric: "+42% signups" },
];

/* ---------------- FAQ ---------------- */
export const faqs = [
  { q: "How is BudgetLancing more affordable than Fiverr or Upwork?", a: "We use AI-powered workflows and an in-house expert team to eliminate the overhead, bidding wars, and platform fees that inflate freelance marketplace pricing. You get agency-quality work at freelancer prices." },
  { q: "What is the typical turnaround time?", a: "Most projects deliver in 3–7 days depending on scope. Landing pages and chatbots can ship in 48 hours, while custom software may take 2–4 weeks. You'll always get a fixed timeline before we start." },
  { q: "Do I own the source files and code?", a: "Absolutely. Every project includes full source files, documentation, and complete ownership. No lock-in, no hidden fees." },
  { q: "What if I'm not happy with the result?", a: "Every plan includes revision rounds, and the Professional plan offers unlimited revisions during development. We don't consider the job done until you're thrilled." },
  { q: "Can you work with my existing team or tech stack?", a: "Yes. We integrate seamlessly with in-house teams and work across React, Next.js, Node, Python, Shopify, WordPress, Figma, and more." },
  { q: "Do you offer ongoing support after launch?", a: "Yes — all plans include post-launch support (30 days on Professional, ongoing on Enterprise). We also offer affordable monthly maintenance retainers." },
  { q: "How do payments work?", a: "We typically take a 50% deposit to begin and 50% on delivery. Enterprise plans can be milestone-based. Secure payments via card, bank transfer, or Stripe." },
];

/* ---------------- Stats ---------------- */
export const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 120, suffix: "+", label: "Happy Clients" },
  { value: 14, suffix: "", label: "Countries Served" },
  { value: 4, suffix: "x", label: "Faster Delivery" },
];

/* ---------------- Problems ---------------- */
export const problems = [
  { title: "Sky-High Pricing", desc: "Freelance marketplaces charge premium rates with platform fees stacked on top — a simple website can cost thousands." },
  { title: "Slow Delivery", desc: "Endless bidding, miscommunication, and no-shows mean projects drag on for weeks longer than promised." },
  { title: "Inconsistent Quality", desc: "You're gambling on reviews. One great freelancer doesn't guarantee the next project goes the same way." },
  { title: "Zero Accountability", desc: "When things go wrong, you're stuck between a freelancer and a platform — with no real project owner." },
];

/* ---------------- Why Us ---------------- */
export const whyUs = [
  { icon: "wallet", title: "Affordable Pricing", desc: "Budget-friendly rates without compromising on quality — up to 60% less than traditional agencies." },
  { icon: "users", title: "Expert Team", desc: "A dedicated team of designers, developers, and AI specialists — not a rotating cast of freelancers." },
  { icon: "zap", title: "Fast Delivery", desc: "AI-powered workflows let us ship in days, not months, while keeping quality bar high." },
  { icon: "cpu", title: "AI-Powered Workflows", desc: "We leverage the latest AI tools to accelerate development, design, and content creation." },
  { icon: "headset", title: "Dedicated Support", desc: "A real project manager who knows your project — reachable on WhatsApp, email, or call." },
  { icon: "puzzle", title: "Custom Solutions", desc: "No templates. Every solution is tailored to your business, goals, and budget." },
];

/* ---------------- Nav ---------------- */
export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const footerLinks = {
  Services: ["Website Development", "Mobile App Development", "AI Chatbots", "AI Automation", "SEO Content", "Digital Marketing"],
  Company: ["About Us", "Portfolio", "Process", "Careers", "Contact"],
  Resources: ["Blog", "Case Studies", "FAQ", "Pricing", "Get a Quote"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"],
};

export { site };
