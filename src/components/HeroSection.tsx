'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import AuroraText from './AuroraText';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll('.animate-element');
      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.3,
        }
      );
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://c.animaapp.com/mlqu7ewhRQBwwq/img/ai_1.mp4"
          poster="https://c.animaapp.com/mlqu7ewhRQBwwq/img/ai_1-poster.png"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/100" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full px-8 md:px-16 text-center"
      >
        <h1 className="animate-element text-5xl md:text-7xl font-bold mb-6 text-white">
          Welcome to <AuroraText>Proxima</AuroraText>
        </h1>

        <p className="animate-element text-lg md:text-xl font-light text-gray-100 max-w-2xl mb-12">
          Discover the future of digital connection. Experience innovation that
          brings you closer to what matters most.
        </p>

        <Button
          onClick={scrollToAbout}
          className="animate-element bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-normal transition-all duration-300 ease-in-out hover:scale-103"
          size="lg"
        >
          Learn More
        </Button>

        <div className="animate-element absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-white animate-bounce" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}
