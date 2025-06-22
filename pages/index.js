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
      <div className="flex min-h-screen flex-col items-center justify-center bg-black gap-6">
        <Image
          src="/DrewCconsultingLOGOcanary.png"
          alt="DC Consulting Logo"
          width={300}
          height={300}
        />
        <h1 className="mt-4 text-4xl font-normal text-[#ffe717]">
          Welcome to DrewCleaver.com
        </h1>
      </div>
    </>
  );
}
