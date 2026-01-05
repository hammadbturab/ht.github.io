import { Button } from "@/components/ui/button";
import { Sun, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";
const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Modern solar panels on Australian home rooftop at golden hour" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 animate-fade-in">
            <Sun className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Perth's Trusted Solar Experts</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-slide-up">
            Power Your Home with{" "}
            <span className="text-gradient-solar">Clean Solar Energy</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl animate-slide-up" style={{
          animationDelay: "0.1s"
        }}>Save more than 70% on electricity bills with premium solar panel and battery installations. Join thousands of Western Australian families making the switch to sustainable energy.</p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{
          animationDelay: "0.2s"
        }}>
            <Button size="lg" variant="hero" onClick={scrollToContact}>
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="hero-outline" onClick={() => document.getElementById("services")?.scrollIntoView({
            behavior: "smooth"
          })}>
              Our Services
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4 animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Rebates</div>
              <div className="text-sm text-primary-foreground/70">STC Rebates Applied Upfront</div>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Warranty</div>
              <div className="text-sm text-primary-foreground/70">Up to 30 years</div>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Tier-1</div>
              <div className="text-sm text-primary-foreground/70">Panels & Premium Inverters</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;