import { Phone, Mail, MapPin } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-foreground text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-solar flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">HT</span>
              </div>
              <span className="text-xl font-bold">HT EVOLUTION</span>
            </div>
            <p className="text-primary-foreground/70 max-w-md">
              Clear Sky Solar by HT Evolution - Perth's trusted solar installation experts. 
              Powering Western Australian homes with clean, sustainable energy.
            </p>
            <div className="text-sm text-primary-foreground/60">
          </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#services" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Services
              </a>
              <a href="#blog" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-4">
              <a href="tel:1300415457" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                1300 415 457
              </a>
              <a href="mailto:support@htevolution.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                support@htevolution.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Midland, WA 6056, Australia (Perth)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Clear Sky Solar by HT Evolution. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="https://htevolution.com/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">ABN 92 858 471 503</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;