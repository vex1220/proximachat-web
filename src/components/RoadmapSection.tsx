'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type Status = 'done' | 'in-progress' | 'planned';

const roadmap: { status: Status; label: string; description: string }[] = [
  { status: 'done', label: 'Location-based chatrooms', description: 'Real-time rooms tied to physical locations — join any room within your radius.' },
  { status: 'done', label: 'Anonymous mode', description: 'Toggle anonymity at any time. Post and chat without your display ID showing.' },
  { status: 'done', label: 'Real-time messaging', description: 'Live WebSocket communication with instant delivery and typing indicators.' },
  { status: 'done', label: 'Karma & voting', description: 'Upvote and downvote posts, comments, and messages to surface the best content.' },
  { status: 'done', label: 'Map view', description: 'Visual map of all active locations around you — tap any pin to jump in.' },
  { status: 'done', label: 'Image & GIF sharing', description: 'Send photos and GIFs in chatrooms, posts, and nearby broadcasts.' },
  { status: 'done', label: 'Nearby broadcast', description: 'Message everyone within your proximity radius without revealing your exact location.' },
  { status: 'done', label: 'Muted locations', description: 'Mute any location so it stops showing up in your feed — full control over what you see.' },
  { status: 'done', label: 'Reporting & moderation', description: 'In-app reporting, automated content review, admin tools, and account suspensions.' },
  { status: 'in-progress', label: 'Campus verification', description: 'Optional .edu email verification for campus-only rooms and verified badges.' },
  { status: 'in-progress', label: 'Direct messages', description: 'Private 1-on-1 conversations with users you meet in the app.' },
  { status: 'planned', label: 'Custom rooms', description: 'Create your own room with a custom radius, topic tags, and expiration time.' },
  { status: 'planned', label: 'iOS & Android launch', description: 'Public launch on the App Store and Google Play.' },
];

const statusConfig: Record<Status, { icon: typeof CheckCircle2; color: string; label: string }> = {
  done: { icon: CheckCircle2, color: 'text-emerald-400', label: 'Shipped' },
  'in-progress': { icon: Clock, color: 'text-primary', label: 'In Progress' },
  planned: { icon: Circle, color: 'text-gray-500', label: 'Planned' },
};

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(headingRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
    });
    if (itemsRef.current) {
      gsap.fromTo(itemsRef.current.querySelectorAll('.roadmap-item'), { opacity: 0, x: -20 }, {
        opacity: 1, x: 0, duration: 0.5, stagger: 0.07, ease: 'power3.out',
        scrollTrigger: { trigger: itemsRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      });
    }
  }, []);

  return (
    <section id="roadmap" ref={sectionRef} className="py-20 md:py-32 px-8 md:px-16 bg-background">
      <div className="max-w-3xl mx-auto space-y-12">

        <div ref={headingRef} className="text-center space-y-3">
          <p className="text-sm uppercase tracking-widest text-accent font-medium">Roadmap</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">What we&apos;ve built</h2>
          <p className="text-gray-400 text-lg">We ship fast and in the open. Here&apos;s where we are and where we&apos;re headed.</p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center text-sm">
          {(['done', 'in-progress', 'planned'] as Status[]).map(s => {
            const { icon: Icon, color, label } = statusConfig[s];
            return (
              <span key={s} className="flex items-center gap-2 text-gray-400">
                <Icon className={`w-4 h-4 ${color}`} strokeWidth={1.5} />
                {label}
              </span>
            );
          })}
        </div>

        <div ref={itemsRef} className="space-y-3">
          {roadmap.map(({ status, label, description }) => {
            const { icon: Icon, color } = statusConfig[status];
            return (
              <div
                key={label}
                className="roadmap-item flex items-start gap-4 p-4 rounded-xl border border-border bg-secondary hover:border-primary/30 transition-colors duration-200"
              >
                <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${color}`} strokeWidth={1.5} />
                <div>
                  <p className="text-foreground font-medium text-sm">{label}</p>
                  <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-500">
          Roadmap reflects current priorities and may evolve as we grow.
        </p>

      </div>
    </section>
  );
}
