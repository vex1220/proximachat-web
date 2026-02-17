'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: 'How anonymous is it?',
    a: 'Completely. Proxima does not require an account, email address, phone number, or any identifying information to use. You are assigned a temporary session identity that changes over time. No real names, no profile photos.',
  },
  {
    q: 'Do you track my precise location?',
    a: 'No. Proxima uses approximate location (typically within a few hundred meters to a kilometer) to place you in nearby chatrooms. We do not log or store your precise GPS coordinates, and location data is not retained after your session ends.',
  },
  {
    q: 'How do you prevent harassment?',
    a: 'Proxima uses a community karma system where other users can downvote harmful messages, which reduces their visibility. Users can report content directly, and moderators review flagged content promptly. Repeat violators are session-banned. Full details are in our Community Guidelines.',
  },
  {
    q: 'Can posts and messages be deleted?',
    a: 'Yes. You can delete your own messages at any time during your session. Reported content that violates our guidelines is removed by moderators. We do not retain message logs indefinitely — see our Privacy Policy for retention details.',
  },
  {
    q: 'Is Proxima only for students?',
    a: "No — Proxima works for any location-based community. While campus communities are a key focus, anyone in a neighborhood, venue, or local area can join and participate in nearby chatrooms.",
  },
  {
    q: 'What stops bad actors from creating new sessions?',
    a: 'Session bans are reinforced by device fingerprinting and rate limiting at the network level. While no system is perfect, our combination of community moderation and technical controls significantly raises the friction for repeat offenders.',
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
