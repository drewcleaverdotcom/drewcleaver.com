import Link from 'next/link';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-color)] text-[var(--text-color)]">
      <SEO title="About - Drew Cleaver | Building Big Ideas For the Future" />
      <main className="container mx-auto flex-grow p-4 flex flex-col gap-8">
        <h1 className="text-4xl sm:text-5xl font-normal">About Me</h1>

        <p className="max-w-3xl text-neutral-200">
          I’m Drew Cleaver—founder, strategist, and big ideas writer. I build honest businesses, write like it matters, and help good people win.
        </p>

        <section className="max-w-3xl space-y-4">
          <h2 className="text-3xl">Mission</h2>
          <p className="text-neutral-200">
            To build the world I want to live in—one project, one conversation, and one truth at a time.
          </p>
        </section>

        <section className="max-w-3xl space-y-4">
          <h2 className="text-3xl">Vision</h2>
          <p className="text-neutral-200">
            A more free, emotionally intelligent, and radically honest society—led by creative operators who do the work. I believe the future belongs to those who can build, explain, and protect what matters.
          </p>
        </section>

        <section className="max-w-3xl space-y-4">
          <h2 className="text-3xl">Operating Values</h2>
          <ul className="list-disc pl-5 space-y-2 text-neutral-200">
            <li>Health over hustle</li>
            <li>Structure breeds freedom</li>
            <li>Kindness is clarity—not coddling</li>
            <li>Build what you wish existed</li>
            <li>Truth is oxygen</li>
            <li>Legacy &gt; vanity</li>
          </ul>
        </section>

        <section className="max-w-3xl space-y-4">
          <h2 className="text-3xl">Current Projects</h2>
          <ul className="space-y-2 text-neutral-200">
            <li>
              <strong className="text-[var(--text-color)]">DrewCleaver.com</strong>
               – Basecamp for my ideas, clients, and digital sovereignty project
            </li>
            <li>
              <strong className="text-[var(--text-color)]">Higher Hangers</strong>
               – Patented hanger company launched from a college dorm
            </li>
          </ul>
        </section>

        <section className="max-w-3xl space-y-4">
          <h2 className="text-3xl">Let’s Connect</h2>
          <p className="text-neutral-200">
            I’m open to meaningful work, client partnerships, press, interviews, or just good conversation.{' '}
            <a
              href="https://calendly.com/drewcleaver"
              className="underline hover:text-[var(--hover-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book time
            </a>{' '}
            with me or{' '}
            <Link href="/contact" className="underline hover:text-[var(--hover-color)]">
              reach out
            </Link>{' '}
            via my contact form.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
