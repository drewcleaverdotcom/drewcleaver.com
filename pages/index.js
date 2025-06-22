import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black gap-6">
      <header aria-labelledby="main-title" className="text-center">
        <Image
          src="/DrewCconsultingLOGOcanary.png"
          alt="Drew Cleaver Consulting logo"
          width={300}
          height={300}
        />
        <h1 id="main-title" className="mt-4 text-4xl font-normal text-[#ffe717]">
          Welcome to DrewCleaver.com
        </h1>
      </header>
    </main>
  );
}
