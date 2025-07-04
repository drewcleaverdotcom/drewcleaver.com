import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://formspree.io/f/xqabokqn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex w-full max-w-md flex-col gap-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="rounded border border-[var(--border-color)] px-3 py-2 text-black"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="rounded border border-[var(--border-color)] px-3 py-2 text-black"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        required
        className="rounded border border-[var(--border-color)] px-3 py-2 text-black"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded bg-[var(--hover-color)] px-4 py-2 font-semibold text-[var(--bg-color)] disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && (
        <p className="text-green-500">Thank you! Your message has been sent.</p>
      )}
      {status === 'error' && (
        <p className="text-red-500">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
