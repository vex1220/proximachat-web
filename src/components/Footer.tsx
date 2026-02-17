import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-12 pb-8 px-8 md:px-16 border-t border-border">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Top row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div className="space-y-3">
            <p className="font-semibold text-foreground">Product</p>
            <nav className="flex flex-col gap-2">
              <a href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="/#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              <a href="/#roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</a>
            </nav>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-foreground">Community</p>
            <nav className="flex flex-col gap-2">
              <Link href="/guidelines" className="text-gray-400 hover:text-white transition-colors">Community Guidelines</Link>
              <a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="mailto:support@proximachat.com" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </nav>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-foreground">Legal</p>
            <nav className="flex flex-col gap-2">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            </nav>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-foreground">Press</p>
            <nav className="flex flex-col gap-2">
              <Link href="/press" className="text-gray-400 hover:text-white transition-colors">Press Kit</Link>
              <a href="mailto:support@proximachat.com" className="text-gray-400 hover:text-white transition-colors">Media Inquiries</a>
            </nav>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} Proxima. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Anonymous by design. Local by nature.
          </p>
        </div>

      </div>
    </footer>
  );
}
