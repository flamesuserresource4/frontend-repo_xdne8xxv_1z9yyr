import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Subtle flowing gradient background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-100 via-emerald-50 to-amber-50 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-amber-100 via-emerald-50 to-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="font-medium tracking-tight text-zinc-900 text-4xl sm:text-5xl">
            Stop juggling five wellness apps.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-700">
            Idunn is the all-in-one ecosystem for your mind, body, and nutrition. All your tools, one subscription.
          </p>

          <div className="mt-10 rounded-2xl border border-zinc-200/70 bg-white/80 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <h3 className="text-zinc-900 text-lg font-semibold">
              The V1 is launching soon. Join the Founders' Waitlist.
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              Lock in your Founders' Rate: $25/month FOR LIFE (Public price: $30/month). This offer will never come again.
            </p>

            {submitted ? (
              <div className="mt-5 rounded-lg bg-emerald-50 p-4 text-emerald-800">
                You're on the list. We'll be in touch with your invite soon.
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
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
        </motion.div>
      </div>
    </section>
  );
}
