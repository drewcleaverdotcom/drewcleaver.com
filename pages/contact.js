import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-color)] text-[var(--text-color)]">
      <SEO title="Contact - Drew Cleaver Consulting" />
      <main className="flex flex-grow flex-col items-center justify-center">
        <h1 className="text-4xl">Contact Page</h1>
      </main>
      <Footer />
    </div>
  );
}
