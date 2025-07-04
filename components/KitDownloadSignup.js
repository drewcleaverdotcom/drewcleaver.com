import { useEffect, useRef, useState } from 'react';
import SocialLinks from './SocialLinks';

export default function KitDownloadSignup() {
  const containerRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const script = document.createElement('script');
    script.src = 'https://drewcleaver.kit.com/f122a238d5/index.js';
    script.async = true;
    script.setAttribute('data-uid', 'f122a238d5');
    containerRef.current.appendChild(script);

    const handleSubmit = () => setSubmitted(true);

    const checkForm = setInterval(() => {
      const form = containerRef.current?.querySelector('form');
      if (form) {
        form.addEventListener('submit', handleSubmit);
        clearInterval(checkForm);
      }
    }, 250);

    return () => {
      clearInterval(checkForm);
      const form = containerRef.current?.querySelector('form');
      if (form) form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  const buttonClass =
    'w-full text-center border-2 rounded py-2 transition-colors duration-200 border-[#FFE717] bg-black text-[#FFE717] hover:bg-[#FFE717] hover:text-black';

  return (
    <div className="flex flex-col items-center gap-4">
      <div ref={containerRef} className="w-full" />
      {submitted && (
        <a
          href="/Cleaver-Drew-Resume-ATX-Public-2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          Download Résumé
        </a>
      )}
      <SocialLinks className="justify-center mt-2 text-2xl" />
    </div>
  );
}
