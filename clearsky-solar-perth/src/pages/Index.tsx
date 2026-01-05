import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Clear Sky Solar",
    "description": "Perth's trusted solar panel installation company. Save up to 70% on electricity bills with premium solar solutions.",
    "url": "https://clearskysolar.com.au",
    "telephone": "1300415457",
    "email": "support@htevolution.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Midland",
      "addressRegion": "WA",
      "postalCode": "6056",
      "addressCountry": "AU"
    },
    "areaServed": "Western Australia",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
  };

  return (
    <>
      <Helmet>
        <title>Clear Sky Solar | Perth's #1 Solar Panel Installation Company | WA</title>
        <meta name="description" content="Save up to 70% on electricity bills with Clear Sky Solar. Perth's trusted solar panel installation experts. Free quotes, 25-year warranty, CEC accredited. Call 1300 415 457." />
        <meta name="keywords" content="solar panels Perth, solar installation WA, solar energy Western Australia, solar panel installers Perth, residential solar Perth, Clear Sky Solar" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://clearskysolar.com.au" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Clear Sky Solar | Perth's #1 Solar Panel Installation" />
        <meta property="og:description" content="Save up to 70% on electricity bills with premium solar installations. Free quotes available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clearskysolar.com.au" />
        <meta property="og:locale" content="en_AU" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clear Sky Solar | Perth Solar Installation" />
        <meta name="twitter:description" content="Save up to 70% on electricity bills with premium solar installations." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <WhyChooseSection />
          <TestimonialsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
