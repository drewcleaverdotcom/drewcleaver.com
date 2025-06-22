import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Drew Cleaver Consulting | Political Strategy, Business Automation, Spiritual Insight</title>
        <meta
          name="description"
          content="Drew Cleaver Consulting offers expert political strategy, business automation, and spiritual insight to help organizations thrive."
        />
        <meta
          name="keywords"
          content="Drew Cleaver Consulting, political strategy, business automation, spiritual insight"
        />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-black gap-4 sm:gap-6 p-4 sm:p-8">
        <header aria-labelledby="main-title" className="text-center">
          <Image
            src="/DrewCconsultingLOGOcanary.png"
            alt="Drew Cleaver Consulting logo"
            width={300}
            height={300}
            className="w-40 sm:w-56 md:w-72"
          />
          <h1 id="main-title" className="mt-4 text-3xl sm:text-4xl md:text-5xl font-normal text-[#ffe717] text-center">
            Welcome to DrewCleaver.com
          </h1>
        </header>
      </main>
    </>
  );
}
