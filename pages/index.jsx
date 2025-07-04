import Image from 'next/image';
import Link from 'next/link';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import EmailSignup from '../components/EmailSignup';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-color)] text-[var(--text-color)]">
      <SEO
        title="Drew Cleaver Consulting | Political Strategy, Business Automation, Spiritual Insight"
        description="Drew Cleaver Consulting offers expert political strategy, business automation, and spiritual insight to help organizations thrive."
        keywords="Drew Cleaver Consulting, political strategy, business automation, spiritual insight"
      />

      <main className="flex flex-col flex-grow items-center justify-center gap-6 p-4 sm:p-8">
        <header aria-labelledby="main-title" className="text-center">
          <Image
            src="/DrewCconsultingLOGOcanary.png"
            alt="Drew Cleaver Consulting logo"
            width={300}
            height={300}
            className="w-40 sm:w-56 md:w-72"
          />
          <h1
            id="main-title"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-normal text-center"
          >
            Welcome to DrewCleaver.com
          </h1>
        </header>

        <div className="flex w-full max-w-xs sm:max-w-sm flex-col gap-4 mt-4">
          <Link
            href="/about"
            className="w-full text-center border border-[var(--border-color)] rounded py-2 hover:bg-[var(--hover-color)] hover:text-[var(--bg-color)]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="w-full text-center border border-[var(--border-color)] rounded py-2 hover:bg-[var(--hover-color)] hover:text-[var(--bg-color)]"
          >
            Contact
          </Link>
          <Link
            href="/privacy-policy"
            className="w-full text-center border border-[var(--border-color)] rounded py-2 hover:bg-[var(--hover-color)] hover:text-[var(--bg-color)]"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="w-full text-center border border-[var(--border-color)] rounded py-2 hover:bg-[var(--hover-color)] hover:text-[var(--bg-color)]"
          >
            Terms of Service
          </Link>
        </div>

        <div className="mt-6 w-full max-w-xs sm:max-w-sm">
          <EmailSignup />
        </div>
      </main>

      <Footer />
    </div>
  );
}
