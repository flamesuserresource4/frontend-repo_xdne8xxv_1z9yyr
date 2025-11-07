import { useState } from 'react';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-b from-white to-amber-50/50">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-zinc-900 text-3xl font-semibold sm:text-4xl">Don't Miss Out on the Founders' Rate.</h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-700">
          The public launch is coming soon at $30/month. Join the waitlist today to secure your permanent $25/month discount. No commitment, just a smarter future.
        </p>

        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm">
          {submitted ? (
            <div className="rounded-lg bg-emerald-50 p-4 text-emerald-800">
              You're on the list. We'll be in touch with your invite soon.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-zinc-300/70 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-lg bg-blue-700 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Reserve My Spot
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
