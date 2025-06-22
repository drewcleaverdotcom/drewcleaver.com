import Link from 'next/link';
import Footer from '../components/Footer';

export default function Custom404() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-[#ffe717]">
      <main className="flex flex-grow flex-col items-center justify-center text-center p-4 space-y-6">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="text-2xl max-w-md">Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="mt-4 inline-block px-6 py-3 bg-[#ffe717] text-black rounded hover:bg-[#ffec3d]">Return Home</Link>
      </main>
      <Footer />
    </div>
  );
}
