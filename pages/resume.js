import Footer from '../components/Footer';
import SEO from '../components/SEO';
import KitDownloadSignup from '../components/KitDownloadSignup';

export default function Resume() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-color)] text-[var(--text-color)]">
      <SEO title="Résumé - Drew Cleaver" />
      <main className="flex flex-col flex-grow items-center p-4 text-center gap-6">
        <h1 className="text-4xl">Résumé</h1>
        <p className="max-w-md">
          Enter your email to receive my résumé. Once submitted, a download button will appear.
        </p>
        <div className="w-full max-w-xs sm:max-w-sm">
          <KitDownloadSignup />
        </div>
      </main>
      <Footer />
    </div>
  );
}
