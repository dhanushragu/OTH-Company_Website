import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientsSection from './components/ClientsSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ConsultationSection from './components/ConsultationSection';
import SolutionsSection from './components/SolutionsSection';
import WhyOfficeHubSection from './components/WhyOfficeHubSection';
import ProcessSection from './components/ProcessSection';
import BookSection from './components/BookSection';
import TestimonialSection from './components/TestimonialSection';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <ClientsSection />
        <AboutSection />
        <ServicesSection />
        <ConsultationSection />
        <SolutionsSection />
        <WhyOfficeHubSection />
        <ProcessSection />
        <BookSection />
        <TestimonialSection />
      </main>
    </div>
  );
}

export default App;
