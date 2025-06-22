import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-[#ffe717]">
      <main className="flex flex-grow flex-col items-center justify-center">
        <h1 className="text-4xl">About Page</h1>
      </main>
      <Footer />
    </div>
  );
}
