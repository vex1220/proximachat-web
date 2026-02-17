'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-8 md:px-16 py-16">
        <Link href="/">
          <Button
            variant="ghost"
            className="mb-transparent text-foreground hover:bg-secondary hover:text-secondary-foreground font-normal mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Terms of Service
        </h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            This Terms of Service page is a placeholder and will be updated with
            detailed terms and conditions governing the use of Proxima&apos;s services.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">
            Acceptance of Terms
          </h2>
          <p>
            By accessing and using Proxima, you accept and agree to be bound by
            the terms and provisions of this agreement.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">Use License</h2>
          <p>Details about the license granted to users will be provided here.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">Disclaimer</h2>
          <p>
            Disclaimers regarding the use of our services will be outlined in this
            section.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">Limitations</h2>
          <p>
            Limitations of liability and other restrictions will be detailed here.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">
            Contact Information
          </h2>
          <p>For questions about these Terms of Service, please contact us.</p>
        </div>
      </div>
    </div>
  );
}
