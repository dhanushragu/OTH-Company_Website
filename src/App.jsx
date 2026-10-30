import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientsSection from './components/ClientsSection';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import ServicesSection from './components/ServicesSection';
import ConsultationSection from './components/ConsultationSection';
import SolutionsSection from './components/SolutionsSection';
import ProductExpertiseSection from './components/ProductExpertiseSection';
import EcosystemSection from './components/EcosystemSection';
import WhyOfficeHubSection from './components/WhyOfficeHubSection';
import ProcessSection from './components/ProcessSection';
import BookSection from './components/BookSection';
import VideoTestimonialSection from './components/VideoTestimonialSection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app-layout">
      {isLoading && <PageLoader onLoadingComplete={() => setIsLoading(false)} />}
      <Navbar />
      <main>
        <Hero />
        <ClientsSection />
        <AboutSection />
        <BenefitsSection />
        <ServicesSection />
        <ConsultationSection />
        <SolutionsSection />
        <ProductExpertiseSection />
        <EcosystemSection />
        <WhyOfficeHubSection />
        <ProcessSection />
        <BookSection />
        <TestimonialSection />
        <VideoTestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
