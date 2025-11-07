import { NotebookText, CheckSquare, Layers } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Journaling',
    description: 'Understand your thoughts and track your mood with an AI that listens.',
    icon: NotebookText,
  },
  {
    title: 'Smart Routine Trackers',
    description: 'Build habits that stick. From hydration to meditation, we track what matters.',
    icon: CheckSquare,
  },
  {
    title: 'Wellness Tool Aggregator',
    description: 'All your essential tools, unified in one clean interface. No more switching apps.',
    icon: Layers,
  },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-zinc-900 text-3xl font-semibold sm:text-4xl">Your Future All-in-One Toolkit</h2>
          <p className="mt-3 text-zinc-700">The V1 focuses on the tools you need every day. Simple, powerful, and all in one place.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
