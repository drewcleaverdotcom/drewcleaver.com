import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

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
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/"
            aria-label="LinkedIn"
            className="hover:text-[#ffe717]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            aria-label="Twitter"
            className="hover:text-[#ffe717]"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            className="hover:text-[#ffe717]"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
