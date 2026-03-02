'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function CommunityGuidelines() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = 'March 2, 2026';

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

        <div className="space-y-2 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Proxima Community Guidelines</h1>
          <p className="text-gray-400 text-lg">
            Proxima is a location-based community for real people nearby. Keep it safe, respectful, and useful.
          </p>
          <p className="text-gray-500 text-sm">Last Updated: {lastUpdated}</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            Proxima is a location-based community for real people nearby. These guidelines explain what&apos;s allowed and what isn&apos;t.
            If you use Proxima, you agree to follow them.
          </p>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">1) Be respectful</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>No harassment, bullying, intimidation, or targeted abuse.</li>
              <li>
                No hate speech or discrimination based on race, ethnicity, nationality, religion, sex, gender identity, sexual orientation,
                disability, or other protected traits.
              </li>
              <li>No threats of violence or encouragement of harm.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">2) Protect privacy and safety</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                No doxxing: don&apos;t share anyone&apos;s private info (address, phone, email, workplace, class schedule, license plates, etc.).
              </li>
              <li>Don&apos;t post screenshots or photos of people without their consent, especially in private contexts.</li>
              <li>No stalking, “find this person,” or attempts to identify anonymous users.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">3) Keep content appropriate</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>No pornography or explicit sexual content.</li>
              <li>No sexual content involving minors—ever.</li>
              <li>No graphic gore or content designed to shock.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">4) No illegal or dangerous content</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>No buying/selling illegal drugs, weapons, stolen goods, or other illegal services.</li>
              <li>No instructions that help someone commit wrongdoing or avoid law enforcement.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">5) No scams, impersonation, or manipulation</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>No scams, fraud, phishing, or “too good to be true” offers.</li>
              <li>Don&apos;t impersonate individuals, organizations, or public figures.</li>
              <li>No coordinated brigading, vote manipulation, or harassment campaigns.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">6) No spam or disruptive behavior</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>No repetitive posts, mass advertising, or automated activity.</li>
              <li>Promotions are allowed only if they&apos;re relevant, honest, and not spammy.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">7) Use reporting tools</h2>
            <p>If you see something that violates these guidelines, report it. If someone is bothering you, block them.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Enforcement</h2>
            <p>
              We may remove content, limit features, or suspend/ban accounts for violations. Severity and repeat behavior can lead to
              permanent bans. Attempts to evade enforcement may result in a permanent ban.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Emergencies and self-harm</h2>
            <p>
              If you or someone else is in immediate danger, contact local emergency services. If you&apos;re struggling with self-harm
              thoughts, consider reaching out to a trusted person or local support resources.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
            <p>
              Questions or appeals:{' '}
              <a href="mailto:support@proximachat.com" className="text-accent hover:underline">
                support@proximachat.com
              </a>
            </p>
            <p>
              Privacy Policy / Terms:{' '}
              <Link href="/privacy-policy" className="text-accent hover:underline">
                Privacy Policy
              </Link>
              {' / '}
              <Link href="/terms-of-service" className="text-accent hover:underline">
                Terms of Service
              </Link>
            </p>
          </div>

          <div className="pt-6 border-t border-border/60 text-gray-500 text-sm">
            <p>These guidelines may be updated. Continued use of Proxima means you accept the current guidelines.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
