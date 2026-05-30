import {
  ArrowRight,
  HeartHandshake,
  Lock,
  Sparkles,
  MessageCircle,
  Compass as CompassIcon,
  TrendingUp,
} from "lucide-react";
import Logo from "./Logo.jsx";

export default function Welcome({ next, answers, restart }) {
  const hasProgress = Boolean(
    answers.country || answers.grade || answers.interests?.length
  );

  return (
    <div className="card relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-300/50 to-brand-300/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-pink-300/50 to-brand-200/50 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-1/2 h-32 w-32 rounded-full bg-amber-200/30 blur-2xl" />

      <div className="relative">
        {/* Hero logo */}
        <div className="mb-6 flex justify-center sm:justify-start">
          <Logo size="xl" animated />
        </div>

        {/* Headline */}
        <h2 className="text-center font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-left sm:text-[3.25rem]">
          Find the path that{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-10 bg-gradient-to-r from-brand-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              fits you
            </span>
            <svg
              className="absolute -bottom-1 left-0 w-full"
              height="10"
              viewBox="0 0 200 10"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 7 Q 50 1, 100 5 T 198 4"
                stroke="url(#under-grad)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="under-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7c47ff" />
                  <stop offset="50%" stopColor="#d946ef" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          .
          <br />
          <span className="text-gray-800">Without the pressure.</span>
        </h2>

        {/* Sub-tagline */}
        <p className="mt-6 text-center text-lg leading-relaxed text-gray-700 sm:text-left">
          Your future deserves more than guesswork. Step into a quiet,
          judgement-free space to think clearly about what excites you, where
          your real strengths lie, and what's been quietly weighing on your
          mind. By the time you finish, you'll walk away with career paths
          chosen for who you actually are. And if you simply need to be heard,
          there's room for that too.
        </p>

        {/* Audience strip */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-gray-500 sm:justify-start">
          <span className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-gray-200">
            🎓 Students
          </span>
          <span className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-gray-200">
            💼 Professionals
          </span>
          <span className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-gray-200">
            🦋 Career changers
          </span>
          <span className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-gray-200">
            🌱 Returning to work
          </span>
        </div>

        {/* Feature cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Feature
            icon={<CompassIcon className="h-5 w-5" />}
            color="from-brand-500 to-fuchsia-500"
            title="Personalised"
            body="Real career paths matched to your interests, strengths, and life stage."
          />
          <Feature
            icon={<HeartHandshake className="h-5 w-5" />}
            color="from-rose-500 to-pink-500"
            title="Judgement-free"
            body="A safe space to share what you really feel. Pressure, doubts, dreams, all of it welcome here."
          />
          <Feature
            icon={<Lock className="h-5 w-5" />}
            color="from-emerald-500 to-teal-500"
            title="Private"
            body="Everything stays on your device. No accounts. No tracking. Ever."
          />
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
          <button className="btn-primary group" onClick={next}>
            <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
            Begin your journey
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          {hasProgress && (
            <button className="btn-ghost" onClick={restart}>
              Start over
            </button>
          )}
          <div className="ml-1 inline-flex items-center gap-2 text-sm text-gray-500">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span>Takes 5–7 minutes · No signup</span>
          </div>
        </div>

        {/* Reassuring footnote */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl bg-white/60 p-4 ring-1 ring-white/60">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
            <MessageCircle className="h-4 w-4" />
          </div>
          <p className="text-sm leading-relaxed text-gray-700">
            <span className="font-semibold text-gray-900">
              Not just another quiz.
            </span>{" "}
            No "based on your answer you should be a doctor." Just real
            questions, honest insights, and a place to be heard.
          </p>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, body, color }) {
  return (
    <div className="group rounded-2xl bg-white/80 p-5 ring-1 ring-white/60 transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-brand-200">
      <div
        className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}
      >
        {icon}
      </div>
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="mt-1 text-sm leading-relaxed text-gray-600">{body}</div>
    </div>
  );
}
