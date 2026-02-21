'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = 'February 21, 2026';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-8 md:px-16 py-16">
        <Link href="/">
          <Button
            variant="ghost"
            className="bg-transparent text-foreground hover:bg-secondary hover:text-secondary-foreground font-normal mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Back to Home
          </Button>
        </Link>

        <div className="space-y-2 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Terms of Service
          </h1>
          <p className="text-gray-500 text-sm">Last Updated: {lastUpdated}</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of
            <span className="text-foreground font-medium"> Proxima </span>
            (the &ldquo;Service&rdquo;). By using Proxima, you agree to these Terms.
          </p>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">1) Eligibility</h2>
            <p>
              You must be at least <span className="text-foreground font-medium">13 years old</span> (or the minimum legal age
              required where you live) to use the Service. If you use the Service, you represent that you meet this requirement.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">2) Accounts and Security</h2>
            <p>
              To use Proxima, you may need to create an account with an email address, username, and password and verify your
              email.
            </p>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate information</li>
              <li>Keep your credentials secure</li>
              <li>Notify us of unauthorized access</li>
            </ul>
            <p>You are responsible for activity under your account.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">3) Location-Based Features</h2>
            <p>
              Proxima uses location to enable nearby experiences (map, range-based chatrooms, proximity features). Some features
              require location permission, and optional background location may be offered.
            </p>
            <p>You understand that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>If you deny location permission, some features may be unavailable</li>
              <li>If you enable background location, the Service may process location while the app is not active</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4) User Content</h2>
            <p>
              &ldquo;User Content&rdquo; includes messages, posts, comments, votes, and other content you submit.
            </p>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Your responsibility</h3>
              <p>You are solely responsible for your User Content and the consequences of posting it.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">License to Proxima</h3>
              <p>
                You grant Proxima a worldwide, non-exclusive, royalty-free license to host, store, reproduce, modify (for
                formatting/display), publish, and distribute your User Content only as needed to operate, provide, and improve
                the Service.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5) Community Rules (Prohibited Conduct)</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Harass, threaten, stalk, or encourage violence</li>
              <li>Post hate speech or discriminatory abuse</li>
              <li>
                Share or solicit personal data (doxxing), including addresses, phone numbers, private emails, or financial details
              </li>
              <li>Post illegal content, sexual exploitation content, or content involving minors</li>
              <li>Impersonate others or misrepresent affiliation</li>
              <li>Spam, manipulate votes, or attempt to artificially inflate karma/engagement</li>
              <li>Attempt to bypass proximity/range restrictions or tamper with the app</li>
              <li>Reverse engineer, scrape, or attack the Service (including automated scripts/bots)</li>
            </ul>
            <p>We may remove content and/or suspend accounts for violations.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">6) Moderation and Enforcement</h2>
            <p>
              Proxima may (but is not required to) monitor, review, remove, or limit access to User Content at our discretion to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Enforce these Terms</li>
              <li>Comply with law</li>
              <li>Protect users and the Service</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">7) Account Suspension and Termination</h2>
            <p>
              We may suspend or terminate your access to the Service at any time if we believe you violated these Terms or if
              necessary to protect the Service or other users.
            </p>
            <p>
              You may request account deletion. Deletion may not remove all content you posted (for example, content may remain
              to preserve conversations or for legal/safety reasons).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">8) Third-Party Services</h2>
            <p>
              The Service may rely on third-party services (for example, maps, email delivery, hosting). Proxima is not
              responsible for third-party services, and your use may be subject to their terms and policies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">9) Disclaimers</h2>
            <p className="uppercase text-gray-400 tracking-wide text-xs">
              The Service is provided “as is” and “as available.”
            </p>
            <p>
              To the maximum extent permitted by law, Proxima disclaims all warranties, express or implied, including
              merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p>Proxima does not guarantee:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Continuous, uninterrupted access</li>
              <li>That content is accurate, safe, or appropriate</li>
              <li>That nearby users are who they claim to be</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">10) Limitation of Liability</h2>
            <p className="uppercase text-gray-400 tracking-wide text-xs">
              Limitation applies to the maximum extent permitted by law.
            </p>
            <p>
              To the maximum extent permitted by law, Proxima will not be liable for indirect, incidental, special, consequential,
              or punitive damages, or any loss of data, profits, or reputation, arising from your use of the Service.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">11) Indemnification</h2>
            <p>
              You agree to indemnify and hold Proxima harmless from claims, liabilities, damages, and expenses (including legal
              fees) arising from your use of the Service, your User Content, or your violation of these Terms or the law.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">12) Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The “Last Updated” date will change. Continued use after changes means
              you accept the updated Terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">13) Governing Law</h2>
            <p>
              These Terms are governed by the laws of the <span className="text-foreground font-medium">State of Florida, USA</span>
              , excluding conflict of laws principles.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">14) Contact</h2>
            <p>
              For questions about these Terms, contact us at{' '}
              <a href="mailto:support@proximachat.com" className="text-accent hover:underline">
                support@proximachat.com
              </a>
              .
            </p>
          </div>

          <div className="pt-6 border-t border-border/60 text-gray-500 text-sm">
            <p>This page is provided for informational purposes and does not constitute legal advice.</p>
          </div>
        </div>
      </div>
    </div>
  );
}