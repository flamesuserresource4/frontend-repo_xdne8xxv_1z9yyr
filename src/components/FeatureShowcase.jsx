export default function FeatureShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-zinc-900 text-3xl font-semibold sm:text-4xl">A Toolkit That Actually Works Together</h2>
        <p className="mt-3 text-zinc-700">Powerful features displayed with stylized product mockups so you can feel the experience.</p>
      </div>

      {/* Feature 1: Left image, right text */}
      <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
        <div className="order-1 lg:order-none">
          {/* Mockup: AI Journaling */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative w-[320px] -rotate-3 rounded-[2.2rem] border border-zinc-200 bg-zinc-50 p-2 shadow-xl">
              <div className="rounded-[1.8rem] border border-zinc-200 bg-white">
                <div className="mx-auto mt-2 h-6 w-32 rounded-full bg-zinc-200" />
                <div className="px-4 py-3">
                  <h4 className="text-sm font-semibold text-zinc-900">AI Journaling</h4>
                  <div className="mt-2 rounded-xl border border-zinc-200 bg-emerald-50/60 p-3 text-sm text-zinc-800">
                    "Today I felt scattered, but the walk helped." <span className="text-emerald-700">→ Calm trend improving</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="h-2 w-full rounded-full bg-emerald-100">
                      <div className="h-2 w-2/3 rounded-full bg-emerald-600" />
                    </div>
                    <p className="text-[10px] text-zinc-500">Mood over time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-zinc-900">AI-Powered Journaling</h3>
          <p className="mt-3 text-zinc-700">Understand your thoughts and track your mood with an AI that truly listens. Capture moments, receive gentle insights, and watch your patterns become clear and actionable.</p>
        </div>
      </div>

      {/* Feature 2: Right image, left text */}
      <div className="mt-16 grid items-center gap-8 lg:grid-cols-2">
        <div className="lg:pr-12">
          <h3 className="text-2xl font-semibold text-zinc-900">Smart Routine Trackers</h3>
          <p className="mt-3 text-zinc-700">Build habits that stick. From hydration to meditation, we track what matters and keep it beautifully simple. Progress you can feel, not just count.</p>
        </div>
        <div className="order-1 lg:order-none">
          {/* Mockup: Routine Tracker */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative w-[320px] rotate-3 rounded-[2.2rem] border border-zinc-200 bg-zinc-50 p-2 shadow-xl">
              <div className="rounded-[1.8rem] border border-zinc-200 bg-white">
                <div className="mx-auto mt-2 h-6 w-32 rounded-full bg-zinc-200" />
                <div className="px-4 py-3">
                  <h4 className="text-sm font-semibold text-zinc-900">Routine Tracker</h4>
                  <div className="mt-2 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-zinc-200 bg-amber-50 p-3">
                      <p className="text-[10px] text-amber-800">Hydration</p>
                      <p className="text-sm font-semibold text-zinc-900">5 / 8</p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-white p-3">
                      <p className="text-[10px] text-zinc-500">Meditation</p>
                      <p className="text-sm font-semibold text-zinc-900">12 min</p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-emerald-50 p-3">
                      <p className="text-[10px] text-emerald-700">Steps</p>
                      <p className="text-sm font-semibold text-zinc-900">8,420</p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-white p-3">
                      <p className="text-[10px] text-zinc-500">Sleep</p>
                      <p className="text-sm font-semibold text-zinc-900">7h 45m</p>
                    </div>
                  </div>
                  <div className="mt-3 text-[11px] text-zinc-500">Gentle reminders keep you consistent.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
