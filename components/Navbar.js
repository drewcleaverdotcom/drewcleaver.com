import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[var(--bg-color)] text-[var(--text-color)] border-b border-[var(--border-color)]">
      <div className="relative mx-auto flex max-w-4xl items-center justify-center p-4">
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center" aria-label="Home">
          <Image
            src="/DrewCconsultingLOGOcanary.png"
            alt="Drew Cleaver Consulting logo"
            width={120}
            height={120}
            className="h-8 w-auto sm:h-10"
            priority
          />
        </Link>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="hidden md:flex space-x-6 absolute right-4 top-1/2 -translate-y-1/2 items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col space-y-2 px-4 pb-4 md:hidden">
          <Link href="/" className="hover:underline" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="hover:underline" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/contact" className="hover:underline" onClick={toggleMenu}>
            Contact
          </Link>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
