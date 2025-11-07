import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import FinalCTA from './components/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-[Inter] text-zinc-900">
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-emerald-600" />
          <span className="text-lg font-semibold tracking-tight">Idunn</span>
        </div>
        <a href="#waitlist" className="rounded-md px-4 py-2 text-sm font-medium text-zinc-700 hover:text-zinc-900">
          Founders' Waitlist
        </a>
      </header>

      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <FinalCTA />
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Idunn. All rights reserved.</p>
          <p className="text-zinc-400">Calm. Human. Trustworthy.</p>
        </div>
      </footer>
    </div>
  );
}
