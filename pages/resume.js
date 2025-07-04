import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Resume() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-color)] text-[var(--text-color)]">
      <SEO title="Résumé - Drew Cleaver" />
      <main className="flex flex-grow flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl mb-4">Résumé</h1>
        <p>Coming soon.</p>
      </main>
      <Footer />
    </div>
  );
}
