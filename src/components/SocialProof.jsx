import { User } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
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
    </section>
  );
}
