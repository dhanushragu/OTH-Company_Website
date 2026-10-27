import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientsSection from './components/ClientsSection';
import ProcessSection from './components/ProcessSection';
import TestimonialSection from './components/TestimonialSection';
import BookSection from './components/BookSection';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <ClientsSection />
        <ProcessSection />
        <BookSection />
        <TestimonialSection />
      </main>
    </div>
  );
}

export default App;
