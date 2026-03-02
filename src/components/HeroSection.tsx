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
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/90" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full px-8 md:px-16 text-center"
      >
        <p className="animate-element text-xs uppercase tracking-[0.3em] text-cyan-400 font-medium mb-6 opacity-90">
          Location-based social chat
        </p>

        <h1 className="animate-element text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
          Talk to the people<br />
          around you on{' '}
          <AuroraText>Proxima</AuroraText>
        </h1>

        <p className="animate-element text-lg md:text-xl font-light text-gray-200 max-w-2xl mb-3 leading-relaxed">
          Join chatrooms at your campus, your neighborhood, wherever you are right now.
          Post to the feed, go fully anonymous, or just vibe with whoever&apos;s nearby.
        </p>
        <p className="animate-element text-sm md:text-base text-gray-400 max-w-xl mb-12">
          No followers. No algorithms. Just what&apos;s happening near you.
        </p>

        <Button
          onClick={scrollToAbout}
          className="animate-element bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-base font-medium transition-all duration-300 ease-in-out hover:scale-105 rounded-full"
          size="lg"
        >
          See How It Works
        </Button>

        <div className="animate-element absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}
