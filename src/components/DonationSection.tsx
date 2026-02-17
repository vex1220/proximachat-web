'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function DonationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 px-8 md:px-16 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-2 opacity-90" />

      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://c.animaapp.com/mlqu7ewhRQBwwq/img/ai_3.png"
          alt="person offering donation gesture"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Support Proxima
        </h2>

        <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
          Your support helps us continue building innovative solutions that
          connect people and empower communities. Every contribution makes a
          difference.
        </p>

        <div className="pt-4">
          <Button
            asChild
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-base font-normal transition-all duration-300 ease-in-out hover:scale-103"
            size="lg"
          >
            <a
              href="https://venmo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Donate via Venmo
              <ExternalLink className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
