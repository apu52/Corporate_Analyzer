
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ProfessionalHero from '@/components/home/ProfessionalHero';
import StatsSection from '@/components/home/StatsSection';
import AnalyticsSection from '@/components/home/AnalyticsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import PricingSection from '@/components/home/PricingSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';
import AboutSection from '@/components/home/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ProfessionalHero />
      <div id="stats">
        <StatsSection />
      </div>
      <div id="analytics">
        <AnalyticsSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
