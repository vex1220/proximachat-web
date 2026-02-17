'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    gsap.fromTo(contentRef.current, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — wire to your backend or a service like Formspree
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 px-8 md:px-16 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-accent font-medium">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Get in touch</h2>
            <p className="text-gray-300 leading-relaxed">
              Have a question, a report, or want to collaborate? We&apos;re a small team and we read every message.
            </p>

            <a
              href="mailto:support@proximachat.com"
              className="inline-flex items-center gap-3 text-accent hover:text-white transition-colors duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="font-medium">support@proximachat.com</span>
            </a>

            <div className="pt-4 space-y-3 text-sm text-gray-400">
              <p>📬 General support &amp; questions</p>
              <p>🚨 Safety reports handled within 24 hours</p>
              <p>🤝 Partnership and campus org inquiries welcome</p>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-background rounded-2xl border border-border p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <CheckCircle className="w-10 h-10 text-accent" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-foreground">Message sent!</h3>
                <p className="text-gray-400 text-sm">We&apos;ll get back to you within 1–2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300" htmlFor="contact-name">Name <span className="text-gray-500">(optional)</span></label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-gray-500 focus:outline-none focus:border-accent/60 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300" htmlFor="contact-email">Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-gray-500 focus:outline-none focus:border-accent/60 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300" htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-gray-500 focus:outline-none focus:border-accent/60 transition-colors resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 font-normal transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" strokeWidth={1.5} />
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
