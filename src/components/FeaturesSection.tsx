'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, MapPin, Zap, Eye, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Eye,
    title: 'Fully Anonymous',
    description: 'No real names, no profiles. Your identity stays yours.',
  },
  {
    icon: MapPin,
    title: 'Hyper-Local',
    description: 'Connect with people physically near you — your campus, your neighborhood.',
  },
  {
    icon: Zap,
    title: 'Real-Time',
    description: 'Messages and karma happen instantly via live WebSocket connections.',
  },
  {
    icon: Shield,
    title: 'Community Moderation',
    description: 'Karma-based voting and active moderation keep conversations healthy.',
  },
  {
    icon: MessageCircle,
    title: 'No Social Graph',
    description: 'No followers, no feeds, no algorithmic noise. Just the people around you.',
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const mockupsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
      }
    );

    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.feature-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        }
      );
    }

    if (mockupsRef.current) {
      const mockups = mockupsRef.current.querySelectorAll('.mockup-card');
      gsap.fromTo(
        mockups,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: mockupsRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        }
      );
    }
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 md:py-32 px-8 md:px-16 bg-secondary"
    >
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <div ref={headingRef} className="text-center space-y-4 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-accent font-medium">Why Proxima</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Anonymous. Local. Real-Time.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Proxima is the location-based chat app built for campus communities and local neighborhoods — no accounts, no algorithms, just the conversation happening around you right now.
          </p>
        </div>

        {/* Feature Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="feature-card bg-background rounded-xl p-6 border border-border hover:border-accent/50 transition-colors duration-300 space-y-4"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Screenshot Placeholders */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground text-center">See It In Action</h3>
          <div ref={mockupsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Nearby Chatrooms', caption: 'See rooms within your radius' },
              { label: 'Anonymous Chat', caption: 'No names, no pressure' },
              { label: 'Karma & Voting', caption: 'Community keeps quality up' },
            ].map(({ label, caption }) => (
              <div
                key={label}
                className="mockup-card bg-background rounded-2xl border border-border overflow-hidden"
              >
                {/* Placeholder screen */}
                <div className="aspect-[9/16] bg-gradient-to-br from-background via-secondary to-background flex flex-col items-center justify-center gap-3 relative">
                  <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: 'radial-gradient(circle, hsl(260 85% 62%) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                  />
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-accent/60" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">Screenshot Coming Soon</p>
                </div>
                <div className="p-4 border-t border-border">
                  <p className="font-medium text-foreground text-sm">{label}</p>
                  <p className="text-gray-400 text-xs mt-1">{caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
