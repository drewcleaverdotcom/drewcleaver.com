import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'privacy-policy.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  return { props: { content: fileContents } };
}

export default function PrivacyPolicy({ content }) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-[#ffe717]">
      <SEO title="Privacy Policy - Drew Cleaver | Founder. Strategist. Big Ideas Writer." />
      <main className="container mx-auto flex-grow p-4 prose prose-invert">
        <ReactMarkdown>{content}</ReactMarkdown>
      </main>
      <Footer />
    </div>
  );
}
