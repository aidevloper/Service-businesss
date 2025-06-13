import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features2 from './components/Features2';
import HowItWorks from './components/HowItWorks';
import ProductFeatures from './components/ProductFeatures';
import ComparisonTable from './components/ComparisonTable';
// import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import UrgencyBanner from './components/UrgencyBanner';
import StickyCTA from './components/StickyCTA';
import StickyOffer from './components/StickyOffer';

function App(): JSX.Element {
  const [isStickyOfferVisible, setIsStickyOfferVisible] = useState(true);

  useEffect(() => {
    // Enhanced smooth scrolling implementation
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          const headerOffset = 80; // Adjust this value based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add click event listener to handle smooth scrolling
    document.addEventListener('click', handleSmoothScroll);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 md:pt-28">
      <div className="hidden md:block">
        <UrgencyBanner />
      </div>
      <Header />
      <Hero />
      <Stats />
      <Features2 />
      <HowItWorks />
      <ProductFeatures />
      <ComparisonTable />
      <section id="pricing">
        <Pricing />
      </section>
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
      <StickyCTA isOfferVisible={isStickyOfferVisible} />
      <StickyOffer isVisible={isStickyOfferVisible} setIsVisible={setIsStickyOfferVisible} />
    </div>
  );
}

export default App;
