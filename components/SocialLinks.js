import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex justify-center gap-6 ${className}`.trim()}>
      <a
        href="https://www.linkedin.com/in/drewcleaver"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/drew.cleaver"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <FaInstagram />
      </a>
      <a
        href="https://github.com/drewcleaverdotcom"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <FaGithub />
      </a>
    </div>
  );
}
