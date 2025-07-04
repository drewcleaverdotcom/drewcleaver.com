import { useEffect, useRef } from 'react';

export default function EmailSignup() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const script = document.createElement('script');
    script.src = 'https://drewcleaver.kit.com/094bcad70e/index.js';
    script.async = true;
    script.setAttribute('data-uid', '094bcad70e');
    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} className="flex justify-center" />;
}
