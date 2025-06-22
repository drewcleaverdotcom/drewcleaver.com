import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your email"
        className="px-3 py-2 text-black rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
        disabled={status === 'loading'}
      >
        Sign Up
      </button>
      {status === 'success' && (
        <p className="text-green-500">Thanks for signing up!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
