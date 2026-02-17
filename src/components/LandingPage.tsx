'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import FAQSection from './FAQSection';
import RoadmapSection from './RoadmapSection';
import ContactSection from './ContactSection';
import DonationSection from './DonationSection';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main ref={mainRef} className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <RoadmapSection />
      <FAQSection />
      <ContactSection />
      <DonationSection />
      <Footer />
    </main>
  );
}
