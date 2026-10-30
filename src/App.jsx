import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientsSection from './components/ClientsSection';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import ServicesSection from './components/ServicesSection';
import ConsultationSection from './components/ConsultationSection';
import StreamlineConsultationBanner from './components/StreamlineConsultationBanner';
import SolutionsSection from './components/SolutionsSection';
import ProductExpertiseSection from './components/ProductExpertiseSection';
import EcosystemSection from './components/EcosystemSection';
import WhyOfficeHubSection from './components/WhyOfficeHubSection';
import ProcessSection from './components/ProcessSection';
import BookSection from './components/BookSection';
import TestimonialSection from './components/TestimonialSection';
import VideoTestimonialSection from './components/VideoTestimonialSection';
import KnowledgeCenterSection from './components/KnowledgeCenterSection';
import PartnersSponsorsSection from './components/PartnersSponsorsSection';
import CheatSheetBannerSection from './components/CheatSheetBannerSection';
import ConsultationBannerSection from './components/ConsultationBannerSection';
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
        <ServicesSection />
        <ConsultationSection />
        <StreamlineConsultationBanner />
        <BenefitsSection />
        <SolutionsSection />
        <ProductExpertiseSection />
        <EcosystemSection />
        <WhyOfficeHubSection />
        <ConsultationBannerSection />
        <ProcessSection />
        <BookSection />
        <TestimonialSection />
        <VideoTestimonialSection />
        <KnowledgeCenterSection />
        <PartnersSponsorsSection />
        <CheatSheetBannerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
