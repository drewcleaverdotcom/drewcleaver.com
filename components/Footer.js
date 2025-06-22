import Link from 'next/link';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-black text-[#ffe717] py-6 mt-auto">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between gap-4">
        <nav className="flex gap-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
        <SocialLinks className="text-2xl" />
      </div>
    </footer>
  );
}
