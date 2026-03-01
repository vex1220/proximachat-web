'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: 'Do I need an account?',
    a: 'Yes. Proxima uses email + password for sign-in. Your email is never shown publicly — people see your display ID (or "Anonymous" when you post anonymously).',
  },
  {
    q: 'How does anonymity work?',
    a: 'Proxima is pseudonymous by default (no real name required). You can enable Anonymous Mode to post or chat without showing your display ID.',
  },
  {
    q: 'How does location work?',
    a: 'Proxima uses your device's foreground location to show nearby locations and power the Nearby tab. You control your feed radius and proximity radius in Settings.',
  },
  {
    q: 'Do you store my precise GPS coordinates?',
    a: "For the Nearby feature, messages are saved with latitude/longitude for functionality and safety. We don't display your exact GPS pin to other users.",
  },
  {
    q: 'How do you keep Proxima safe?',
    a: 'Content is checked with automated moderation, users can report posts/messages, and admins can remove content or suspend accounts. You can also block users and mute locations.',
  },
  {
    q: 'Can I delete my content or my account?',
    a: 'Yes. You can delete your account from Settings. When you delete your account, your content is removed from the app and identifying account data is scrubbed. See the Privacy Policy for details.',
  },
  {
    q: 'Where is Proxima available?',
    a: 'Proxima launches with a curated set of locations (starting with Tallahassee/FSU). The experience expands as new locations are added.',
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
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
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
          <p className="text-gray-400 text-lg">Everything you need to know about how Proxima works and keeps you safe.</p>
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
