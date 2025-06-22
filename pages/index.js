import Image from 'next/image';
import NewsletterForm from '../components/NewsletterForm';

export default function Home() {
  return (
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
        <NewsletterForm />
    </div>
  );
}
