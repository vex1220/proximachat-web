'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

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

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            This Privacy Policy page is a placeholder and will be updated with
            detailed information about how Proxima collects, uses, and protects
            your personal data.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">
            Information We Collect
          </h2>
          <p>Details about the types of information collected will be provided here.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">
            How We Use Your Information
          </h2>
          <p>Information about how we use collected data will be detailed in this section.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">
            Data Security
          </h2>
          <p>
            Our commitment to protecting your data and the measures we take will be
            outlined here.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us.</p>
        </div>
      </div>
    </div>
  );
}
