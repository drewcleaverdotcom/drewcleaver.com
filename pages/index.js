import Image from 'next/image';
import Head from 'next/head';
import SEO from '../components/SEO';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-color)] text-[var(--text-color)]">
      <SEO
        title="Drew Cleaver Consulting | Political Strategy, Business Automation, Spiritual Insight"
        description="Drew Cleaver Consulting offers expert political strategy, business automation, and spiritual insight to help organizations thrive."
        keywords="Drew Cleaver Consulting, political strategy, business automation, spiritual insight"
      />

      <main className="flex flex-col flex-grow items-center justify-center gap-4 sm:gap-6 p-4 sm:p-8">
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
        <NewsletterForm />
      </main>

      <Footer />
    </div>
  );
}
