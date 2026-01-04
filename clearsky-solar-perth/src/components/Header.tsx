import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-solar flex items-center justify-center">
            <Sun className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className={`text-xl font-bold ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
            Clear Sky Solar
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className={`font-medium transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"
            }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className={`font-medium transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"
            }`}
          >
            Blog
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`font-medium transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"
            }`}
          >
            Contact
          </button>
          <Button
            variant={isScrolled ? "hero" : "hero-outline"}
            onClick={() => scrollToSection("contact")}
          >
            Get Free Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground font-medium py-2 text-left hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="text-foreground font-medium py-2 text-left hover:text-primary transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground font-medium py-2 text-left hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button variant="hero" onClick={() => scrollToSection("contact")}>
              Get Free Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
