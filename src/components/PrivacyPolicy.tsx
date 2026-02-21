'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShieldCheck, MapPin, Database, Ban } from 'lucide-react';

export default function PrivacyPolicy() {
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
          <p className="text-gray-400 text-lg">
            How Proxima collects, uses, and protects information when you use the app.
          </p>
          <p className="text-gray-500 text-sm">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Privacy at a Glance */}
        <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 mb-12 space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Privacy at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: Ban,
                title: "We don't sell your data",
                body: "Proxima does not sell personal information. We use data to operate the service and keep it safe.",
              },
              {
                icon: MapPin,
                title: 'Location powers the app',
                body: 'Proxima uses precise location (GPS-level) to place you in nearby chatrooms and enable location-based features. Your exact coordinates are not shown publicly to other users.',
              },
              {
                icon: Database,
                title: 'We collect what we need',
                body: 'We collect account, content, and technical data needed to run and secure the service (e.g., authentication, chat, posts, abuse prevention, and reliability).',
              },
              {
                icon: ShieldCheck,
                title: 'Security-focused by design',
                body: 'We apply reasonable safeguards to protect data in transit and at rest, and we limit access to authorized personnel and providers.',
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

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <p>
            This Privacy Policy explains how <span className="text-foreground font-medium">Proxima</span> (“Proxima,” “we,” “us”)
            collects, uses, shares, and protects information when you use the Proxima mobile application and related services
            (the “Service”).
          </p>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">1) What Proxima Does</h2>
            <p>
              Proxima is a location-based community app that lets you view nearby locations, join location-based chatrooms,
              send messages, create posts and comments, and vote on content.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2) Information We Collect</h2>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">A. Information you provide</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-300">
                <li>
                  <span className="text-foreground font-medium">Account information</span>: email address, username (display name),
                  password (stored as a hashed value), and email verification status.
                </li>
                <li>
                  <span className="text-foreground font-medium">User content</span>: chat messages, posts, comments, votes, and any
                  feedback you submit.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">B. Location information</h3>
              <p>
                Proxima processes <span className="text-foreground font-medium">precise location</span> (GPS-level) to power nearby
                experiences. Depending on your device permissions and settings, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300">
                <li>
                  <span className="text-foreground font-medium">Foreground location</span> (while you use the app).
                </li>
                <li>
                  <span className="text-foreground font-medium">Background location</span> (only if you explicitly enable it and grant
                  “Always” location permission).
                </li>
              </ul>
              <p className="text-gray-300">
                We use location to determine proximity to chatrooms/locations, enable nearby features, and support real-time
                presence. <span className="text-foreground font-medium">Your exact GPS coordinates are not displayed publicly</span>{' '}
                to other users.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">C. Automatically collected technical data</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-300">
                <li>IP address and approximate region derived from it</li>
                <li>Device and app information (device model, OS version, app version)</li>
                <li>Timestamps, diagnostic logs, and performance data needed to operate and secure the Service</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">3) How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-300">
              <li>Provide and operate the Service (accounts, authentication, chat, posts, map features)</li>
              <li>Verify email addresses and prevent abuse</li>
              <li>Enable location-based features and enforce proximity/range restrictions</li>
              <li>Maintain safety, integrity, and security (fraud prevention, rate limiting, troubleshooting)</li>
              <li>Respond to support requests and feedback</li>
              <li>Comply with legal obligations and enforce our Terms</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4) How We Share Information</h2>
            <p>
              Proxima does <span className="text-foreground font-medium">not</span> sell your personal information.
            </p>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">A. With other users</h3>
              <p>
                Other users may see your username and the content you post (messages, posts, comments). Access to certain rooms
                or features may depend on proximity, but your exact GPS coordinates are not shown publicly.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">B. With service providers (processors)</h3>
              <p>
                We use third-party providers to help run the Service (for example, infrastructure/hosting, database services,
                email delivery for verification codes, and map rendering). These providers process data only to provide services
                to us and are required to protect it.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">C. For legal and safety reasons</h3>
              <p>
                We may disclose information if we believe it is necessary to comply with law, protect the rights and safety of
                users and Proxima, or investigate, prevent, or respond to abuse, fraud, or security incidents.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5) Your Choices and Controls</h2>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Location permissions</h3>
              <p>
                You can control location access at any time in your device settings. Some features may not function without
                location permission.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Background location</h3>
              <p>
                Background location is optional. If enabled, Proxima may update your location while the app is backgrounded to
                support nearby features. You can disable background location in your device settings.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Account deletion</h3>
              <p>
                You may request account deletion. When you request deletion, we will deactivate or mark your account as deleted
                so you can no longer use it. Some information may be retained to comply with legal obligations, protect safety,
                prevent fraud, and enforce our Terms. Content you posted may remain visible to preserve conversation integrity
                unless removed under moderation or legal requirements.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">6) Data Retention</h2>
            <p>
              We keep information only as long as necessary to provide the Service, maintain security, prevent abuse, resolve
              disputes, and comply with legal obligations. Retention may vary by data type (for example, account records vs.
              user-generated content).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">7) Security</h2>
            <p>
              We use reasonable administrative, technical, and organizational safeguards designed to protect information. No
              method of transmission or storage is 100% secure; we cannot guarantee absolute security.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">8) International Users</h2>
            <p>
              If you access Proxima from outside the United States, your information may be processed in the United States or
              other locations where we or our providers operate.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">9) Children&apos;s Privacy</h2>
            <p>
              Proxima is not intended for children under 13 (or a higher age if required in your jurisdiction). If you believe a
              child has provided personal information, contact us so we can address it.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">10) Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will update the “Last Updated” date and may provide
              additional notice in the app.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">11) Contact Us</h2>
            <p>
              If you have questions or requests about this Privacy Policy, contact us at{' '}
              <a
                href="mailto:support@proximachat.com"
                className="text-accent hover:underline"
              >
                support@proximachat.com
              </a>
              .
            </p>
          </div>

          <div className="pt-6 border-t border-border/60 text-gray-500 text-sm">
            <p>
              This page is provided for informational purposes and does not constitute legal advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}