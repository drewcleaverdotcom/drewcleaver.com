import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black gap-300">
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
  );
}
