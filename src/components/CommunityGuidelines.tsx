'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertTriangle, CheckCircle2, Flag, Info } from 'lucide-react';

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function GuidelineSection({ icon, title, children }: SectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      </div>
      <div className="pl-12 space-y-3 text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
}

export default function CommunityGuidelines() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-8 md:px-16 py-16">

        <Link href="/">
          <Button variant="ghost" className="mb-8 bg-transparent text-foreground hover:bg-secondary hover:text-secondary-foreground font-normal">
            <ArrowLeft className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Back to Home
          </Button>
        </Link>

        <div className="space-y-3 mb-12">
          <p className="text-sm uppercase tracking-widest text-accent font-medium">Community Standards</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Community Guidelines</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Proxima is built on anonymity, and that only works if everyone plays by these rules. These guidelines protect you and the community around you.
          </p>
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>

        <div className="space-y-12">

          {/* The Core Principle */}
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 text-gray-300 leading-relaxed">
            <p className="font-semibold text-foreground mb-2">The short version</p>
            <p>Be a real human. Don&apos;t say anything here you wouldn&apos;t say to someone&apos;s face. Anonymity is a privilege, not a shield for cruelty.</p>
          </div>

          <GuidelineSection
            icon={<AlertTriangle className="w-4 h-4 text-red-400" strokeWidth={1.5} />}
            title="Prohibited Content"
          >
            <p>The following will result in immediate content removal and session banning:</p>
            <ul className="space-y-2 mt-3">
              {[
                'Harassment, targeted abuse, or threats of violence against any person',
                'Doxxing — sharing or soliciting real names, addresses, phone numbers, or any identifying information',
                'Hate speech: content that attacks or demeans people based on race, ethnicity, religion, gender, sexual orientation, disability, or national origin',
                'Sexual content involving minors (CSAM) — reported immediately to law enforcement',
                'Spam, scams, or coordinated inauthentic behavior',
                'Sharing of others\' private communications or images without consent',
                'Facilitating or encouraging illegal activity',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </GuidelineSection>

          <GuidelineSection
            icon={<Info className="w-4 h-4 text-accent" strokeWidth={1.5} />}
            title="Protecting Your Anonymity"
          >
            <p>Proxima is designed to be anonymous — protect that for yourself and others:</p>
            <ul className="space-y-2 mt-3">
              {[
                'Don\'t share your real name, location beyond what the app provides, phone number, or social media handles',
                'Don\'t ask others for their personal information — this includes names, schools, exact addresses',
                'If someone shares personal information voluntarily, don\'t screenshot or redistribute it',
                'If you feel someone is trying to identify you, report and disengage',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </GuidelineSection>

          <GuidelineSection
            icon={<Flag className="w-4 h-4 text-yellow-400" strokeWidth={1.5} />}
            title="Reporting & Moderation"
          >
            <p>
              Every message has a report button. When you report content, it enters a review queue visible to our moderation team. We aim to review all reports within <strong className="text-foreground">24 hours</strong>.
            </p>
            <p className="mt-3">
              Community karma voting (upvotes/downvotes) acts as a first layer of automatic moderation. Content with significantly negative karma is collapsed and deprioritized automatically.
            </p>
            <p className="mt-3">
              Moderators can remove content, issue warnings, and issue session bans. Severe or repeated violations result in device-level restrictions.
            </p>
            <p className="mt-3">
              Appeals can be sent to <a href="mailto:support@proximachat.com" className="text-accent hover:underline">support@proximachat.com</a>.
            </p>
          </GuidelineSection>

          <GuidelineSection
            icon={<CheckCircle2 className="w-4 h-4 text-green-400" strokeWidth={1.5} />}
            title="What We Encourage"
          >
            <ul className="space-y-2">
              {[
                'Local discussions: events, recommendations, lost items, community news',
                'Genuine questions and helpful answers',
                'Respectful disagreement and debate',
                'Creative expression, humor, and casual conversation',
                'Welcoming new users and helping them understand community norms',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </GuidelineSection>

          <div className="border-t border-border pt-8 text-sm text-gray-500 space-y-2">
            <p>These guidelines may be updated. Continued use of Proxima means you accept the current guidelines.</p>
            <p>Questions? <a href="mailto:support@proximachat.com" className="text-accent hover:underline">support@proximachat.com</a></p>
          </div>

        </div>
      </div>
    </div>
  );
}
