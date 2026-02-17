import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 px-8 md:px-16 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-300">
            © {currentYear} Proxima. All rights reserved.
          </p>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-300 hover:text-white transition-colors duration-200 ease-in-out focus:outline-none focus:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-gray-300 hover:text-white transition-colors duration-200 ease-in-out focus:outline-none focus:underline"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
