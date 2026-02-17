'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type Status = 'done' | 'in-progress' | 'planned';

const roadmap: { status: Status; label: string; description: string }[] = [
  { status: 'done', label: 'Proximity-based chatrooms', description: 'Join rooms within a configurable radius of your current location.' },
  { status: 'done', label: 'Anonymous sessions', description: 'No account required. No names stored.' },
  { status: 'done', label: 'Real-time messaging', description: 'Live WebSocket communication with instant delivery.' },
  { status: 'done', label: 'Karma & voting system', description: 'Upvote and downvote messages to surface the best content.' },
  { status: 'in-progress', label: 'Map view', description: 'Visual map of active chatrooms near you.' },
  { status: 'in-progress', label: 'Reporting & moderation tools', description: 'In-app reporting with moderator review queue.' },
  { status: 'planned', label: 'Campus verification', description: 'Optional .edu email verification for campus-only rooms.' },
  { status: 'planned', label: 'Direct messages', description: 'Anonymous 1-on-1 conversations with nearby users.' },
  { status: 'planned', label: 'Room creation controls', description: 'Custom radius, topic tags, and time-limited rooms.' },
  { status: 'planned', label: 'iOS & Android apps', description: 'Native mobile apps for a smoother experience.' },
];

const statusConfig: Record<Status, { icon: typeof CheckCircle2; color: string; label: string }> = {
  done: { icon: CheckCircle2, color: 'text-green-400', label: 'Shipped' },
  'in-progress': { icon: Clock, color: 'text-accent', label: 'In Progress' },
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">What&apos;s coming</h2>
          <p className="text-gray-400 text-lg">We ship fast and in the open. Here&apos;s what we&apos;ve built and where we&apos;re headed.</p>
        </div>

        {/* Legend */}
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
                className="roadmap-item flex items-start gap-4 p-4 rounded-xl border border-border bg-secondary hover:border-accent/30 transition-colors duration-200"
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
          Roadmap is subject to change. We don&apos;t promise timelines we can&apos;t keep.
        </p>

      </div>
    </section>
  );
}
