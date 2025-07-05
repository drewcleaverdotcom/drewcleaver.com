import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-color)] text-[var(--text-color)]">
      <SEO title="Contact - Drew Cleaver | Founder. Strategist. Big Ideas Writer." />
      <main className="flex flex-grow flex-col items-center justify-center gap-6 p-4">
        <h1 className="text-4xl">Contact</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
