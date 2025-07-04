import Image from 'next/image';
import Link from 'next/link';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import EmailSignup from '../components/EmailSignup';
import SocialLinks from '../components/SocialLinks';

export default function Home() {
  const buttonClass =
    'w-full text-center border-2 rounded py-2 transition-colors duration-200 border-[#FFE717] bg-black text-[#FFE717] hover:border-[#00CC88] hover:text-[#00CC88]';
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
            className="mt-4 text-2xl sm:text-3xl md:text-4xl font-normal text-center"
          >
            Founder. Strategist. Big Ideas Writer.
          </h1>
        </header>

        <div className="flex w-full max-w-xs sm:max-w-sm flex-col gap-4 mt-4">
          <Link href="/about" className={buttonClass}>
            About Me
          </Link>
          <Link href="/contact" className={buttonClass}>
            Contact Me
          </Link>
          <a
            href="https://calendly.com/drewcleaver"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            Book Time
          </a>
          <a
            href="https://linkedin.com/in/drewcleaver"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/drewcleaverdotcom"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            GitHub
          </a>
          <a
            href="https://drewcleaver.kit.com/products/lifetime-sub"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            Unlock Lifetime Writing Access
          </a>
          <Link href="/resume" className={buttonClass}>
            View Résumé
          </Link>
        </div>

        <div className="mt-6 w-full max-w-xs sm:max-w-sm">
          <EmailSignup />
          <SocialLinks className="mt-4 text-2xl" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
