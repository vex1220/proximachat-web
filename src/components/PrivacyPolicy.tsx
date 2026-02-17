'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShieldCheck, MapPin, Database, Ban } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-8 md:px-16 py-16">
        <Link href="/">
          <Button
            variant="ghost"
            className="mb-8 bg-transparent text-foreground hover:bg-secondary hover:text-secondary-foreground font-normal"
          >
            <ArrowLeft className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Back to Home
          </Button>
        </Link>

        <div className="space-y-3 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">How Proxima handles your data — and what we deliberately don&apos;t collect.</p>
        </div>

        {/* Privacy at a Glance */}
        <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 mb-12 space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Privacy at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: Ban,
                title: 'We don\'t sell your data',
                body: 'Full stop. Proxima does not sell, trade, or rent personal data to third parties. Ever.',
              },
              {
                icon: MapPin,
                title: 'Approximate location only',
                body: 'We use fuzzy location (neighborhood-level radius) to place you in chatrooms. Precise GPS coordinates are not stored.',
              },
              {
                icon: Database,
                title: 'Short retention',
                body: 'Message logs are not retained long-term. Session data is ephemeral and expires automatically.',
              },
              {
                icon: ShieldCheck,
                title: 'No accounts required',
                body: 'No email, no phone number, no name. Nothing that identifies you is required to use Proxima.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm mb-1">{title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            This Privacy Policy describes how Proxima collects, uses, and protects information in connection with our service. We will update this page with complete legal language before public launch.
          </p>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
            <p>Details about the types of information collected will be provided here, including approximate location data, session identifiers, and anonymized usage metrics.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
            <p>Information about how we use collected data — including routing you to local chatrooms, enforcing community guidelines, and improving the service — will be detailed in this section.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Data Retention</h2>
            <p>We will outline our specific retention periods here. Our goal is to retain the minimum data necessary for the minimum time necessary.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
            <p>
              Our commitment to protecting your data and the technical measures we take will be outlined here.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@proximachat.com" className="text-accent hover:underline">support@proximachat.com</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
