import { useState } from 'react';

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
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-100 via-emerald-50 to-amber-50 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-amber-100 via-emerald-50 to-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text + CTA */}
          <div className="max-w-xl">
            <h1 className="font-medium tracking-tight text-zinc-900 text-4xl sm:text-5xl">
              Stop juggling five wellness apps.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-700">
              Idunn is the all-in-one ecosystem for your mind, body, and nutrition. All your tools, one subscription.
            </p>

            <div className="mt-8 rounded-2xl border border-zinc-200/70 bg-white/80 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
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
                    className="w-full rounded-lg border border-zinc-300/70 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100"
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

          {/* iPhone dashboard mockup (stylized) */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative mx-auto w-[320px] rotate-3 rounded-[2.2rem] border border-zinc-200 bg-zinc-50 p-2 shadow-2xl sm:rotate-6">
              <div className="rounded-[1.8rem] border border-zinc-200 bg-white">
                {/* Notch */}
                <div className="mx-auto mt-2 h-6 w-32 rounded-full bg-zinc-200" />
                {/* App header */}
                <div className="mt-3 px-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-emerald-700">Idunn</span>
                    <span className="text-[10px] text-zinc-400">Today</span>
                  </div>
                  <h4 className="mt-1 text-lg font-semibold text-zinc-900">Your Day, Simplified</h4>
                </div>
                {/* Dashboard cards */}
                <div className="mt-3 grid grid-cols-2 gap-3 px-4">
                  <div className="rounded-xl border border-zinc-200 bg-emerald-50 p-3">
                    <p className="text-[10px] text-emerald-700">Mood</p>
                    <p className="text-sm font-semibold text-zinc-900">Calm</p>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-amber-50 p-3">
                    <p className="text-[10px] text-amber-800">Hydration</p>
                    <p className="text-sm font-semibold text-zinc-900">5 / 8</p>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white p-3">
                    <p className="text-[10px] text-zinc-500">Meditation</p>
                    <p className="text-sm font-semibold text-zinc-900">12 min</p>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white p-3">
                    <p className="text-[10px] text-zinc-500">Steps</p>
                    <p className="text-sm font-semibold text-zinc-900">8,420</p>
                  </div>
                </div>
                {/* Footer nav */}
                <div className="mt-4 flex items-center justify-around border-t border-zinc-100 px-6 py-3">
                  <div className="h-1.5 w-8 rounded-full bg-emerald-600" />
                  <div className="h-1.5 w-8 rounded-full bg-zinc-200" />
                  <div className="h-1.5 w-8 rounded-full bg-zinc-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
