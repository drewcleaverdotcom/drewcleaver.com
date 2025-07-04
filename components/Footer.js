import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-color)] text-[var(--text-color)] py-6 mt-auto text-sm">
      <p className="text-center text-sm">
        © 2025 Drew Cleaver ·{' '}
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>{' '}
        ·{' '}
        <Link href="/terms-of-service" className="hover:underline">
          Terms
        </Link>
      </p>
    </footer>
  );
}
