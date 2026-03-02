'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, MapPin, Zap, Eye, MessageCircle, Radio } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Eye,
    title: 'Go Anonymous, Anytime',
    description:
      'Sign in with a display ID and flip on Anonymous Mode whenever you want. Post, chat, and comment without your name attached — the choice is always yours.',
  },
  {
    icon: MapPin,
    title: 'Map-First Discovery',
    description:
      'Open the map and see every active location around you. Tap any spot to browse its feed and chatrooms. Your world, laid out in front of you.',
  },
  {
    icon: MessageCircle,
    title: 'Location Feeds & Posts',
    description:
      'Post photos, GIFs, and text to any location you\'re at. Comment, upvote, downvote — the best content rises naturally. Your feed radius is fully in your control.',
  },
  {
    icon: Zap,
    title: 'Live Chatrooms',
    description:
      'Every location has a real-time chatroom powered by WebSockets. Send images and GIFs, reply to specific messages, vote on what you love — all happening live.',
  },
  {
    icon: Radio,
    title: 'Nearby Broadcast',
    description:
      'Send a message to anyone within your proximity radius — no group chat setup, no friending required. Just a direct signal to whoever\'s around you right now.',
  },
  {
    icon: Shield,
    title: 'Built-In Safety',
    description:
      'Block users, mute locations you\'re over, report bad content — and our moderation system handles the rest. You\'re in control of your experience.',
  },
];

const screenshots = [
  {
    src: '/screenshot-chatroom.png',
    label: 'Location Chatrooms',
    caption: 'Share images & GIFs, vote on messages, reply in real time',
  },
  {
    src: '/screenshot-nearby.png',
    label: 'Nearby Broadcast',
    caption: 'Message anyone within your proximity radius',
  },
  {
    src: '/screenshot-map.png',
    label: 'Map View',
    caption: 'Discover every active location around you',
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

        <div ref={headingRef} className="text-center space-y-4 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-accent font-medium">What Proxima Does</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Pseudonymous. Local. Real-Time.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Everything you need to connect with the people and places around you — with the freedom to be as anonymous as you want.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="feature-card bg-background rounded-xl p-6 border border-border hover:border-primary/40 transition-colors duration-300 space-y-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold text-foreground">See It In Action</h3>
            <p className="text-gray-400">Real screenshots from the app</p>
          </div>
          <div ref={mockupsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {screenshots.map(({ src, label, caption }) => (
              <div
                key={label}
                className="mockup-card bg-background rounded-2xl border border-border overflow-hidden"
              >
                <div className="aspect-[9/16] overflow-hidden bg-secondary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 border-t border-border">
                  <p className="font-semibold text-foreground text-sm">{label}</p>
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
