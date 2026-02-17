'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import AuroraText from './AuroraText';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-white transition-colors duration-200"
    >
      {copied ? <CheckCircle className="w-3.5 h-3.5" strokeWidth={1.5} /> : <Copy className="w-3.5 h-3.5" strokeWidth={1.5} />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

const oneLiners = [
  'Proxima is the anonymous, location-based chat app for campus communities and local neighborhoods.',
  'Real conversations with the people around you — no accounts, no names, no algorithms.',
  'Proxima connects you to the conversations happening near you, right now.',
];

const colors = [
  { name: 'Background', hex: '#1a1f3a', var: '--background' },
  { name: 'Primary', hex: '#2b3dcc', var: '--primary' },
  { name: 'Accent', hex: '#7c3aed', var: '--accent' },
  { name: 'Foreground', hex: '#fafafa', var: '--foreground' },
];

export default function PressKit() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-8 md:px-16 py-16">

        <Link href="/">
          <Button variant="ghost" className="mb-8 bg-transparent text-foreground hover:bg-secondary hover:text-secondary-foreground font-normal">
            <ArrowLeft className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Back to Home
          </Button>
        </Link>

        <div className="space-y-3 mb-14">
          <p className="text-sm uppercase tracking-widest text-accent font-medium">Press & Brand</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Press Kit</h1>
          <p className="text-gray-400 text-lg">
            Everything you need to write about or promote Proxima. Questions? <a href="mailto:support@proximachat.com" className="text-accent hover:underline">support@proximachat.com</a>
          </p>
        </div>

        <div className="space-y-14">

          {/* Logo */}
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">Logo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Dark bg logo */}
              <div className="bg-secondary rounded-xl border border-border p-10 flex flex-col items-center gap-4">
                <span className="text-3xl font-bold">
                  <AuroraText>Proxima</AuroraText>
                </span>
                <span className="text-xs text-gray-500">Wordmark — Dark</span>
                <button className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-white transition-colors">
                  <Download className="w-3.5 h-3.5" strokeWidth={1.5} /> Download SVG
                </button>
              </div>
              {/* Light bg logo */}
              <div className="bg-white rounded-xl border border-border p-10 flex flex-col items-center gap-4">
                <span className="text-3xl font-bold text-gray-900">Proxima</span>
                <span className="text-xs text-gray-400">Wordmark — Light</span>
                <button className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors">
                  <Download className="w-3.5 h-3.5" strokeWidth={1.5} /> Download SVG
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Please don&apos;t alter the logo colors, proportions, or add effects. Don&apos;t place the logo on busy or low-contrast backgrounds.
            </p>
          </section>

          {/* Brand Colors */}
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">Brand Colors</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {colors.map(c => (
                <div key={c.name} className="space-y-3">
                  <div
                    className="w-full aspect-square rounded-xl border border-border"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.name}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500 font-mono">{c.hex}</p>
                      <CopyButton text={c.hex} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Short Descriptions */}
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">Short Descriptions</h2>
            <p className="text-gray-400 text-sm">Use these verbatim or adapt them as needed.</p>
            <div className="space-y-4">
              {oneLiners.map((line, i) => (
                <div key={i} className="bg-secondary rounded-xl border border-border p-5 flex items-start justify-between gap-4">
                  <p className="text-gray-300 text-sm leading-relaxed">&ldquo;{line}&rdquo;</p>
                  <CopyButton text={line} />
                </div>
              ))}
            </div>
          </section>

          {/* Screenshots */}
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">Screenshots</h2>
            <div className="bg-secondary rounded-xl border border-border p-8 text-center space-y-3">
              <p className="text-gray-400 text-sm">App screenshots will be available here once the mobile app launches.</p>
              <p className="text-gray-500 text-xs">In the meantime, contact us at <a href="mailto:support@proximachat.com" className="text-accent hover:underline">support@proximachat.com</a> for media assets.</p>
            </div>
          </section>

          {/* Key Facts */}
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">Key Facts</h2>
            <div className="bg-secondary rounded-xl border border-border divide-y divide-border">
              {[
                ['Founded', '2024'],
                ['Category', 'Social / Communication'],
                ['Platforms', 'Web (iOS & Android coming soon)'],
                ['Business model', 'Donation-supported, exploring campus licensing'],
                ['Headquarters', 'United States'],
                ['Contact', 'support@proximachat.com'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between px-6 py-4 text-sm">
                  <span className="text-gray-400">{label}</span>
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
