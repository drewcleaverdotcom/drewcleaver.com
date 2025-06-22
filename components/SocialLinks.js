import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex gap-6 ${className}`.trim()}>
      <a
        href="https://www.linkedin.com/"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <FaInstagram />
      </a>
      <a
        href="https://github.com/"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <FaGithub />
      </a>
      <a
        href="https://linktr.ee/"
        aria-label="Linktree"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <SiLinktree />
      </a>
    </div>
  );
}
