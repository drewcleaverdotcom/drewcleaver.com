import Link from 'next/link';
import SocialLinks from './SocialLinks';
import { FaLinkedin, FaInstagram, FaGithub, FaLink } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-color)] text-[var(--text-color)] py-6 mt-auto">
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
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
        </nav>

        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/drewcleaver/"
            aria-label="LinkedIn"
            className="hover:text-[var(--hover-color)]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/drewcleaverdotcom"
            aria-label="GitHub"
            className="hover:text-[var(--hover-color)]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/drewcleaverdotcom/"
            aria-label="Instagram"
            className="hover:text-[var(--hover-color)]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linktr.ee/drewcleaver"
            aria-label="Linktree"
            className="hover:text-[var(--hover-color)]"
          >
            <FaLink />
          </a>
        </div>
      </div>
    </footer>
  );
}
