import { Sun, Zap, Shield, Leaf, DollarSign, Wrench } from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Residential Solar",
    description: "Custom solar systems designed for Australian homes. Maximize savings with premium panels tailored to your roof.",
  },
  {
    icon: Zap,
    title: "Battery Storage",
    description: "Store excess solar energy for use at night. Achieve true energy independence with top-tier battery solutions.",
  },
  {
    icon: Shield,
    title: "Solar Monitoring",
    description: "Track your energy production in real-time. Smart monitoring systems to optimize your solar investment.",
  },
  {
    icon: Leaf,
    title: "Green Energy Solutions",
    description: "Complete eco-friendly home upgrades. Reduce your carbon footprint while increasing property value.",
  },
  {
    icon: DollarSign,
    title: "Finance Options",
    description: "Flexible payment plans available. Start saving immediately with 0% finance options.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description: "Expert servicing for all solar systems. Keep your panels performing at peak efficiency year-round.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Solar Solutions for{" "}
            <span className="text-gradient-solar">Every Need</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From installation to maintenance, we provide end-to-end solar services 
            to power your sustainable future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-solar flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
