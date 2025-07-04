import { useState } from 'react';

export default function EmailSignupPlaceholder() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Email signup coming soon!');
    setEmail('');
  };
  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col items-center gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your email"
        className="w-full px-3 py-2 text-black rounded"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-[#ffe717] text-black rounded hover:bg-[#ffec3d]"
      >
        Sign Up
      </button>
    </form>
  );
}
