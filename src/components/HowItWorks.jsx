export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Join the List',
      desc: 'Reserve your spot as a Founder today.',
    },
    {
      number: '2',
      title: 'Get Your Invite',
      desc: "You'll get priority access to the V1 launch.",
    },
    {
      number: '3',
      title: 'Lock In Your Rate',
      desc: 'Enjoy Idunn and your exclusive $25/mo rate, forever.',
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-zinc-900 text-3xl font-semibold sm:text-4xl">How It Works</h2>
        <p className="mt-3 text-zinc-700">A simple, three-step process to get early access.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {steps.map((s) => (
          <div key={s.number} className="rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-800">
              <span className="text-sm font-semibold">{s.number}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">{s.title}</h3>
            <p className="mt-2 text-sm text-zinc-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
