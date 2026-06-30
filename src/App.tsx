import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Toast } from "./components/Toast";
import { Hero } from "./sections/Hero";
import { Problem } from "./sections/Problem";
import { Comparison } from "./sections/Comparison";
import { WhyUs } from "./sections/WhyUs";
import { Services } from "./sections/Services";
import { Industries } from "./sections/Industries";
import { Pricing } from "./sections/Pricing";
import { Portfolio } from "./sections/Portfolio";
import { Process } from "./sections/Process";
import { Testimonials } from "./sections/Testimonials";
import { LeadMagnet } from "./sections/LeadMagnet";
import { FAQ } from "./sections/FAQ";
import { CTABand } from "./sections/CTABand";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { useToast } from "./lib/useToast";
import { useTheme } from "./lib/hooks";
import { site } from "./config/site";

export default function App() {
  const { msg, show } = useToast();
  useTheme();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: site.name,
      description: site.description,
      url: site.url,
      email: site.email,
      telephone: site.phoneRaw,
      priceRange: site.priceRange,
      areaServed: "Global",
      serviceType: [
        "Website Development", "Mobile App Development", "AI Agent Development",
        "AI Chatbots", "AI Automation", "SEO Content Writing", "Digital Marketing",
        "Google Ads", "Facebook Ads", "UI/UX Design", "Logo Design", "Branding",
        "Landing Pages", "Ecommerce Websites", "Custom Software Solutions",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(site.rating),
        reviewCount: String(site.reviewCount),
      },
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Comparison />
        <WhyUs />
        <Services />
        <Industries />
        <Pricing />
        <Portfolio />
        <Process />
        <Testimonials />
        <LeadMagnet />
        <FAQ />
        <CTABand />
        <Contact onSubmit={show} />
      </main>
      <Footer onToast={show} />
      <WhatsAppButton />
      <Toast msg={msg} />
    </div>
  );
}
