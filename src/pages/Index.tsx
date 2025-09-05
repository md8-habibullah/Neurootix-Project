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
import { motion } from "framer-motion";
import { fadeInUp, fadeInScale, staggerContainer } from "@/lib/animations";
import { easeInOut } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen bg-background"
    >
      <Navigation />

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HeroSection />
      </motion.section>


      <motion.section variants={fadeInUp}>
        <ServicesSection />
      </motion.section>

      <motion.section variants={fadeInUp}>
        <AISolutionsSection />
      </motion.section>

      <motion.section variants={fadeInScale}>
        <AboutSection />
      </motion.section>

      <motion.section variants={fadeInUp}>
        <PricingSection />
      </motion.section>

      <motion.section variants={fadeInUp}>
        <TestimonialsSection />
      </motion.section>

      {/* <motion.section variants={fadeInScale}><TeamSection /></motion.section> */}

      <motion.section variants={fadeInUp}>
        <ContactSection />
      </motion.section>

      <Footer />
    </motion.div>
  );
};

export default Index;
