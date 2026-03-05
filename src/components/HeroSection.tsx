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
          <AuroraText>Proxima</AuroraText>
        </h1>

        <p className="animate-element text-lg md:text-xl font-light text-gray-200 max-w-2xl mb-3 leading-relaxed">
          Join chatrooms at your campus, your neighborhood, wherever you are right now.
          Post to the feed, go fully anonymous, or just vibe with whoever&apos;s nearby.
        </p>
        <p className="animate-element text-sm md:text-base text-gray-400 max-w-xl mb-12">
          No followers. No algorithms. Just what&apos;s happening near you.
        </p>

        <div className="animate-element flex flex-row items-center gap-4 mb-6">
          {/* App Store */}
          <a
            href="https://apps.apple.com/app/id6759777891"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-xl hover:bg-white/90 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] leading-tight opacity-70">Download on the</p>
              <p className="text-sm font-semibold leading-tight">App Store</p>
            </div>
          </a>

          {/* Google Play — blurred, coming soon */}
          <div className="relative">
            <div className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-xl blur-[2px] select-none pointer-events-none">
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.22.99.15l13.18-7.41-2.83-2.83L3.18 23.76zM.54 1.15C.2 1.54 0 2.1 0 2.82v18.36c0 .72.2 1.28.54 1.67l.09.08 10.28-10.28v-.24L.63 1.07l-.09.08zM20.46 10.37l-2.85-1.6-3.17 3.17 3.17 3.18 2.88-1.62c.82-.46.82-1.21-.03-1.67v-.46zM4.17.24l13.18 7.41-2.83 2.83L3.18.24C3.53.17 3.87.22 4.17.4z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight opacity-70">Get it on</p>
                <p className="text-sm font-semibold leading-tight">Google Play</p>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xs font-semibold bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">Releasing this week</span>
            </div>
          </div>
        </div>

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
