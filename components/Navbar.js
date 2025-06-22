import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-[#ffe717] border-b border-[#ffe717]">
      <div className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          DrewCleaver.com
        </Link>
        <button
          className="md:hidden focus:outline-none"
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
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
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
        </div>
      )}
    </nav>
  );
}
