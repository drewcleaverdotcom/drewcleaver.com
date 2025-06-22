import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black gap-4 sm:gap-6 p-4 sm:p-8">
      <Image
        src="/DrewCconsultingLOGOcanary.png"
        alt="DC Consulting Logo"
        width={300}
        height={300}
        className="w-40 sm:w-56 md:w-72"
      />
      <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-normal text-[#ffe717] text-center">
        Welcome to DrewCleaver.com
      </h1>
    </div>
  );
}
