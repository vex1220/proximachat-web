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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Proxima
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Proxima is designed to revolutionize the way you connect with the
              digital world. Our platform combines cutting-edge technology with
              intuitive design to deliver an experience that&apos;s both powerful and
              accessible.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Whether you&apos;re exploring new possibilities or deepening existing
              connections, Proxima provides the tools and insights you need to
              thrive in an ever-evolving digital landscape.
            </p>
          </div>

          {/* Right: Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://c.animaapp.com/mlqu7ewhRQBwwq/img/ai_2.png"
              alt="abstract geometric composition"
              className="w-full max-w-lg rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
