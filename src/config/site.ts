// Central, configurable company variables for BudgetLancing.
// Update these values to rebrand or reconfigure the entire site.

export const site = {
  name: "BudgetLancing",
  tagline: "Premium AI & Digital Services at Budget-Friendly Prices",
  heroHeadline: ["Stop Overpaying", "Freelancers for", "AI Services"],
  description:
    "Professional AI & digital services at budget-friendly prices. Website development, mobile apps, AI agents, chatbots, automation, SEO content, digital marketing, UI/UX & branding — delivered fast by experts.",
  url: "https://budgetlancing.com",
  email: "hello@budgetlancing.com",
  phone: "+1 (555) 123-4567",
  phoneRaw: "+15551234567",
  whatsapp: "15551234567",
  whatsappMsg: "Hi BudgetLancing, I'd like a free consultation about my project.",
  responseTime: "Within 24 hours, guaranteed",
  priceRange: "$$",
  rating: 4.9,
  reviewCount: 120,
  location: "Remote-first • Serving 14+ countries",
  social: {
    twitter: "#",
    linkedin: "#",
    instagram: "#",
    github: "#",
  },
  startingPrice: 199,
  avgDelivery: "3-5 days",
  founded: 2023,
} as const;

export const scrollTo = (id: string) =>
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMsg)}`;
