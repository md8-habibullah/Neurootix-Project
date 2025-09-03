import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AISolutionsSection from "@/components/AISolutionsSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
// import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AISolutionsSection />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      {/* <TeamSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
