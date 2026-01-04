import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
const benefits = ["Reduce electricity bills by more than 70%", "Increase your property value", "25-year performance warranty", "CEC accredited installers", "Premium tier-1 solar panels", "Free energy assessment", "Government rebates assistance", "Local Perth-based support"];
const WhyChooseSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="py-24 bg-muted/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Perth's Most Trusted{" "}
                <span className="text-gradient-solar">Solar Installer</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                With over 500 successful installations across Western Australia, 
                Clear Sky Solar delivers quality, reliability, and exceptional value.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4">
              {benefits.map(benefit => <li key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>)}
            </ul>

            <Button size="lg" variant="hero" onClick={scrollToContact}>
              Get Your Free Quote Today
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-solar p-1">
              <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center overflow-hidden">
                <div className="text-center p-8 space-y-6">
                  <div className="text-8xl font-bold text-gradient-solar">70%</div>
                  <p className="text-xl text-foreground font-medium">Or More In Electricity Savings</p>
                  <p className="text-muted-foreground">
                    Our customers save thousands every year on their power bills
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default WhyChooseSection;