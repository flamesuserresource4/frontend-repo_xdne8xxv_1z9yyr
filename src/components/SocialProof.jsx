export default function SocialProof() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <img
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop"
            alt="Founder"
            className="h-20 w-20 flex-none rounded-xl object-cover"
          />
          <div>
            <h3 className="text-zinc-900 text-xl font-semibold">From a Founder, for the Community.</h3>
            <p className="mt-2 text-zinc-700">
              I'm [Your Name], host of the [Your Podcast Name] podcast. Like you, I was lost in the 'wellness' chaos. I'm building Idunn in public to finally bring us the transparency and simplicity we deserve.
            </p>
          </div>
        </div>
      </div>

      {/* Podcast strip */}
      <div className="mt-8 rounded-2xl border border-zinc-200/70 bg-zinc-50 p-4">
        <p className="text-center text-xs font-medium tracking-wide text-zinc-600">Listen to our podcast on</p>
        <div className="mt-4 flex items-center justify-center gap-8 sm:gap-12">
          {/* Apple Podcasts */}
          <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Apple Podcasts">
            <circle cx="12" cy="12" r="10" fill="#5E5CE6"/>
            <circle cx="12" cy="12" r="6" fill="white"/>
            <circle cx="12" cy="12" r="2" fill="#5E5CE6"/>
            <text x="28" y="16" fontFamily="Inter, system-ui" fontSize="12" fill="#3f3f46">Apple Podcasts</text>
          </svg>
          {/* Spotify */}
          <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Spotify">
            <circle cx="12" cy="12" r="10" fill="#1DB954"/>
            <path d="M7 10c3-1 7-1 10 1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M7 12.5c3-1 7-.5 10 .8" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity=".8"/>
            <path d="M7 15c3-.6 7 0 10 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity=".6"/>
            <text x="28" y="16" fontFamily="Inter, system-ui" fontSize="12" fill="#3f3f46">Spotify</text>
          </svg>
          {/* YouTube */}
          <svg width="110" height="24" viewBox="0 0 110 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="YouTube">
            <rect x="4" y="6" width="16" height="12" rx="3" fill="#FF0000"/>
            <path d="M12 10l4 2-4 2v-4z" fill="white"/>
            <text x="28" y="16" fontFamily="Inter, system-ui" fontSize="12" fill="#3f3f46">YouTube</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
