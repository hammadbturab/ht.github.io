import { Shield, Sun, Battery, Award, Zap, CheckCircle, Home, MapPin, Wrench } from "lucide-react";

const credentials = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Sun, text: "Optimised for WA Sun" },
  { icon: Battery, text: "Battery-Ready Systems" },
  { icon: Award, text: "CEC-Approved Installers" },
  { icon: Zap, text: "Real-Time Monitoring" },
];

const benefits = [
  "CEC-Accredited Installers",
  "WA Licensed & Insured",
  "Tier-1 Solar Panels & Inverters",
  "Full Compliance Documentation Provided",
  "Monitoring & Optimisation Support",
];

const processSteps = [
  { step: 1, title: "Consultation & Energy Assessment" },
  { step: 2, title: "Custom System Design & Quote" },
  { step: 3, title: "Compliance & Rebate Management" },
  { step: 4, title: "Professional Installation" },
  { step: 5, title: "Monitoring & Optimisation Support" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted <span className="text-gradient-solar">Solar Experts</span> in Western Australia
          </h2>
          <p className="text-muted-foreground text-lg">
            📍 Serving Western Australia with systems designed for local roofs & WA grid requirements
          </p>
        </div>

        {/* Credentials Badge Strip */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {credentials.map((cred) => (
            <div
              key={cred.text}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border shadow-card"
            >
              <cred.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{cred.text}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Benefits Card */}
          <article className="p-8 rounded-2xl bg-card border border-border shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Our Commitment</h3>
            </div>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-foreground">
                  <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Savings Card */}
          <article className="p-8 rounded-2xl bg-card border border-border shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Estimated Savings</h3>
            </div>
            <div className="space-y-4">
              <div className="text-center p-4 rounded-xl bg-primary/10">
                <div className="text-3xl font-bold text-accent mb-1">Up to $2,800/year*</div>
                <div className="text-sm text-muted-foreground">Typical Perth Household</div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Sun className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Designed for maximum efficiency under WA sun conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Battery className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Battery-ready systems to reduce grid reliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Every installation includes rebates and STC management</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground italic">
                *Estimated savings based on historical energy usage and average solar production
              </p>
            </div>
          </article>

          {/* Process Card */}
          <article className="p-8 rounded-2xl bg-card border border-border shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Our Process</h3>
            </div>
            <ol className="space-y-4">
              {processSteps.map((item) => (
                <li key={item.step} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </span>
                  <span className="text-foreground">{item.title}</span>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
