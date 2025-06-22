import Image from 'next/image';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-[#ffe717]">
      <main className="flex flex-col flex-grow items-center justify-center gap-6">
        <Image
          src="/DrewCconsultingLOGOcanary.png"
          alt="DC Consulting Logo"
          width={300}
          height={300}
        />
        <h1 className="mt-4 text-4xl font-normal">Welcome to DrewCleaver.com</h1>
      </main>
      <Footer />
    </div>
  );
}
