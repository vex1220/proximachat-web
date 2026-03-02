'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && contentRef.current && imageRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
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
      id="about"
      ref={sectionRef}
      className="py-16 md:py-24 px-8 md:px-16 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={contentRef} className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-accent font-medium">About Proxima</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Built for the people<br />right next to you
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Proxima is a location-based social app built around where you actually are — your campus, your neighborhood, your favorite spots. Open the map, see what&apos;s nearby, and jump into the conversation happening right now.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Post to location feeds, hang out in real-time chatrooms, or broadcast a message to anyone within range. You choose your display name — and you can go fully anonymous whenever you want. No follower counts, no influencer culture, just genuine connection with the people around you.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Proxima started at FSU and is growing from there. Wherever you are, if there are people nearby, there&apos;s a conversation waiting.
            </p>
          </div>

          <div ref={imageRef} className="flex justify-center lg:justify-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://c.animaapp.com/mlqu7ewhRQBwwq/img/ai_2.png"
              alt="Proxima community visualization"
              className="w-full max-w-lg rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
