'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Do I need an account to use Proxima?",
    a: "Yes — Proxima uses email and password sign-in. Your email is never shown to anyone. Other users see your display ID, or just \"Anonymous\" when you have Anonymous Mode turned on.",
  },
  {
    q: "How does Anonymous Mode work?",
    a: "Proxima is pseudonymous by default — you pick a display ID, not your real name. Flip on Anonymous Mode in Settings and your display ID disappears from everything you post or send. You can turn it on and off whenever you want.",
  },
  {
    q: "What is the Nearby tab?",
    a: "Nearby lets you broadcast a message to everyone physically around you within your proximity radius. Think of it like shouting into the crowd at a game — anyone close enough can see it. You can also send images and GIFs.",
  },
  {
    q: "How does the map work?",
    a: "The map shows every active location near you — your campus buildings, neighborhoods, venues, and more. Tap any pin to see its live feed and jump into its chatroom. Your own location pin is never shown to other users.",
  },
  {
    q: "Can I share photos and GIFs?",
    a: "Yes. You can attach images and GIFs to posts, comments, chatroom messages, and nearby broadcasts. GIF search is built right into the composer.",
  },
  {
    q: "What if I don't want to see a certain location?",
    a: "Mute it. Hit the three-dot menu on any location and mute it — it disappears from your feed until you unmute it. You can manage all your muted locations in Safety & Privacy settings.",
  },
  {
    q: "Do you store my GPS coordinates?",
    a: "Proxima uses your location to place you in nearby rooms and power the Nearby tab. For Nearby messages, coordinates are stored to support the feature and keep things safe. Your exact GPS pin is never shown publicly to other users.",
  },
  {
    q: "How does Proxima handle safety and moderation?",
    a: "Content goes through automated moderation, users can report anything that violates the rules, and admins can remove content or suspend accounts. You can also block individual users and mute locations you're done with.",
  },
  {
    q: "Can I delete my account?",
    a: "Yes, from Settings you can request full account deletion. Your content is removed from the app and your identifying account data is scrubbed. Check the Privacy Policy for the full details.",
  },
  {
    q: "Where is Proxima available?",
    a: "Proxima launched with a curated set of locations starting at FSU and Tallahassee. New locations are being added as we grow — if you want your campus or neighborhood added, reach out.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bodyRef.current) return;
    if (open) {
      gsap.to(bodyRef.current, { height: 'auto', opacity: 1, duration: 0.35, ease: 'power2.out' });
    } else {
      gsap.to(bodyRef.current, { height: 0, opacity: 0, duration: 0.25, ease: 'power2.in' });
    }
  }, [open]);

  return (
    <div className="faq-item border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-background hover:bg-secondary transition-colors duration-200 focus:outline-none"
        aria-expanded={open}
      >
        <span className="text-foreground font-medium text-sm md:text-base pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          strokeWidth={1.5}
        />
      </button>
      <div ref={bodyRef} style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
        <p className="px-6 pb-5 pt-2 text-gray-400 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(headingRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
    });
    if (listRef.current) {
      gsap.fromTo(listRef.current.querySelectorAll('.faq-item'), { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: listRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      });
    }
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-20 md:py-32 px-8 md:px-16 bg-background">
      <div className="max-w-3xl mx-auto space-y-12">

        <div ref={headingRef} className="text-center space-y-3">
          <p className="text-sm uppercase tracking-widest text-accent font-medium">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Your questions, answered</h2>
          <p className="text-gray-400 text-lg">Everything you need to know about how Proxima works.</p>
        </div>

        <div ref={listRef} className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={i} index={i} q={item.q} a={item.a} />
          ))}
        </div>

      </div>
    </section>
  );
}
