import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass =
    'border-2 rounded px-2 py-1 transition-colors duration-200 border-[#FFE717] bg-black text-[#FFE717] hover:border-[#00CC88] hover:text-[#00CC88]';

  return (
    <nav className="bg-[var(--bg-color)] text-[var(--text-color)] border-b border-[var(--border-color)]">
      <div className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link href="/" className="hidden md:block text-lg font-normal">
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
        <div className="hidden md:flex space-x-4">
          <Link href="/about" className={linkClass}>
            About Me
          </Link>
          <Link href="/contact" className={linkClass}>
            Contact Me
          </Link>
          <a
            href="https://calendly.com/drewcleaver"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Book Time
          </a>
          <a
            href="https://linkedin.com/in/drewcleaver"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/drewcleaverdotcom"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            GitHub
          </a>
          <a
            href="https://drewcleaver.kit.com/products/lifetime-sub"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Unlock Writing
          </a>
          <Link href="/resume" className={linkClass}>
            Résumé
          </Link>
          <ThemeToggle />
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col space-y-2 px-4 pb-4 md:hidden">
          <Link href="/about" className={linkClass} onClick={toggleMenu}>
            About Me
          </Link>
          <Link href="/contact" className={linkClass} onClick={toggleMenu}>
            Contact Me
          </Link>
          <a
            href="https://calendly.com/drewcleaver"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            onClick={toggleMenu}
          >
            Book Time
          </a>
          <a
            href="https://linkedin.com/in/drewcleaver"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            onClick={toggleMenu}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/drewcleaverdotcom"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            onClick={toggleMenu}
          >
            GitHub
          </a>
          <a
            href="https://drewcleaver.kit.com/products/lifetime-sub"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            onClick={toggleMenu}
          >
            Unlock Writing
          </a>
          <Link href="/resume" className={linkClass} onClick={toggleMenu}>
            Résumé
          </Link>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
