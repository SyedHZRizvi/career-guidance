import { useState } from "react";
import {
  ArrowRight,
  HeartHandshake,
  Lock,
  Sparkles,
  MessageCircle,
  Compass as CompassIcon,
  ChevronDown,
  ChevronUp,
  Shield,
  FileText,
} from "lucide-react";
import Logo from "./Logo.jsx";

export default function Welcome({ next, answers, restart }) {
  const hasProgress = Boolean(
    answers.country || answers.grade || answers.interests?.length
  );
  const [legalOpen, setLegalOpen] = useState(false);

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
            title="Private by default"
            body="Your answers stay on your device. No accounts, no data collection, no tracking. Optional AI features transmit only what you share directly to the Anthropic API — nothing is stored on our servers."
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

        {/* Legal / Privacy / Terms section */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white/70 text-xs text-gray-600">

          {/* Always-visible summary bar */}
          <div className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="leading-relaxed">
              <span className="font-semibold text-gray-800">Disclaimer:</span>{" "}
              Pathfinder provides general career information only — not professional career,
              medical, legal, or financial advice. Salary figures are directional estimates.
              If you are experiencing a mental-health crisis, please contact a qualified
              professional or a local crisis helpline immediately.{" "}
              <span className="font-semibold text-amber-700">
                Age 13+ only. Users under 18 should use this tool with a parent or
                guardian's awareness.
              </span>
            </p>
            <button
              onClick={() => setLegalOpen((v) => !v)}
              className="flex shrink-0 items-center gap-1 self-start rounded-lg px-3 py-1.5 text-xs font-medium text-brand-700 ring-1 ring-brand-200 transition hover:bg-brand-50 sm:self-auto"
              aria-expanded={legalOpen}
            >
              {legalOpen ? (
                <><ChevronUp className="h-3.5 w-3.5" /> Hide</>
              ) : (
                <><ChevronDown className="h-3.5 w-3.5" /> Privacy &amp; Terms</>
              )}
            </button>
          </div>

          {/* Expandable full Privacy Notice + Terms of Use */}
          {legalOpen && (
            <div className="border-t border-gray-200 px-4 py-4 leading-relaxed space-y-4">

              {/* Privacy Notice */}
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-800">
                  <Shield className="h-4 w-4 text-emerald-600" />
                  Privacy Notice
                </div>
                <p>
                  <span className="font-medium text-gray-700">What we collect:</span>{" "}
                  Pathfinder stores your answers, name, and progress{" "}
                  <span className="font-medium">only in your browser's localStorage</span>{" "}
                  (on your own device). No personal data is transmitted to or stored on any
                  server controlled by this project.
                </p>
                <p className="mt-2">
                  <span className="font-medium text-gray-700">AI features (optional):</span>{" "}
                  If you choose to use the AI Companion (Vent), AI Career Coach, or Mock
                  Interview features, the text you type is sent to the{" "}
                  <a href="https://www.anthropic.com/privacy" target="_blank" rel="noreferrer" className="underline text-brand-700">
                    Anthropic API
                  </a>{" "}
                  using your own API key. Anthropic's Privacy Policy governs how that data
                  is handled. Nothing is stored on our servers. Your API key is stored only
                  in your browser's localStorage and is never transmitted to anyone except
                  Anthropic directly.
                </p>
                <p className="mt-2">
                  <span className="font-medium text-gray-700">Hosting:</span>{" "}
                  This application is hosted on GitHub Pages. GitHub's{" "}
                  <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer" className="underline text-brand-700">
                    General Privacy Statement
                  </a>{" "}
                  applies to the hosting infrastructure.
                </p>
                <p className="mt-2">
                  <span className="font-medium text-gray-700">Cookies and tracking:</span>{" "}
                  None. Pathfinder uses no cookies, no analytics trackers, no advertising
                  scripts, and no third-party SDKs that collect personal data.
                </p>
                <p className="mt-2">
                  <span className="font-medium text-gray-700">Clearing your data:</span>{" "}
                  You can delete all locally stored data at any time via your browser's
                  settings (Site Data / LocalStorage for this domain).
                </p>
                <p className="mt-2">
                  <span className="font-medium text-gray-700">Children and minors:</span>{" "}
                  This tool is intended for users aged 13 and above. Users under 18 are
                  advised to use Pathfinder with a parent or guardian's knowledge and
                  consent. We do not knowingly collect data from children under 13
                  (COPPA / UK Children's Code / India DPDP s.9 / PIPEDA). If you believe
                  a child under 13 has provided data through this tool, please contact us
                  so we can facilitate deletion.
                </p>
                <p className="mt-2">
                  <span className="font-medium text-gray-700">
                    Note for users in mainland China:
                  </span>{" "}
                  This application is hosted on GitHub Pages, which may be inaccessible
                  within mainland China due to network restrictions. It has not been
                  specifically designed or registered for use under China's PIPL or DSL.
                  Users who access this tool from mainland China do so at their own
                  discretion.
                </p>
                <p className="mt-2">
                  <span className="font-medium text-gray-700">Contact:</span>{" "}
                  For privacy requests (access, correction, deletion), please open an
                  issue at{" "}
                  <a href="https://github.com/SyedHZRizvi/career-guidance" target="_blank" rel="noreferrer" className="underline text-brand-700">
                    github.com/SyedHZRizvi/career-guidance
                  </a>
                  .
                </p>
              </div>

              {/* Terms of Use */}
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-800">
                  <FileText className="h-4 w-4 text-brand-600" />
                  Terms of Use &amp; Limitation of Liability
                </div>
                <p>
                  <span className="font-medium text-gray-700">General information only:</span>{" "}
                  Pathfinder is a free, open-source career exploration tool. All content,
                  career descriptions, salary figures, and AI-generated responses are
                  provided for general informational and educational purposes only. Nothing
                  on this platform constitutes professional career counselling, psychological
                  advice, financial advice, legal advice, or medical advice.
                </p>
                <p className="mt-2">
                  <span className="font-medium text-gray-700">Salary figures:</span>{" "}
                  Salary and earnings ranges shown are directional estimates compiled from
                  public sources. They vary significantly by country, city, employer,
                  experience level, and market conditions. They should not be relied upon
                  for financial planning or employment negotiations.
                </p>
                <p className="mt-2">
                  <span className="font-medium text-gray-700">AI-generated content:</span>{" "}
                  Responses generated by the Claude AI model (Anthropic) are automated and
                  have not been individually reviewed. AI outputs can be inaccurate,
                  incomplete, or culturally inappropriate. Always verify AI advice with
                  qualified professionals before acting on it.
                </p>
                <p className="mt-2">
                  <span className="font-medium text-gray-700">Mental health:</span>{" "}
                  Pathfinder is not a crisis service and is not a substitute for mental
                  health support. If you are experiencing a mental-health emergency, please
                  contact a qualified professional or an emergency helpline in your country.
                </p>
                <p className="mt-2">
                  <span className="font-medium text-gray-700">Limitation of liability:</span>{" "}
                  To the fullest extent permitted by applicable law, the creator and
                  contributors of this open-source project accept no liability for any
                  direct, indirect, incidental, or consequential loss arising from your
                  use of, or reliance on, any information or AI-generated content provided
                  by Pathfinder. Your use of this tool is entirely at your own risk.
                </p>
                <p className="mt-2">
                  <span className="font-medium text-gray-700">Acceptable use:</span>{" "}
                  Pathfinder is provided free of charge for personal, non-commercial use.
                  You may not scrape, republish, or sell any part of the content or
                  AI-generated responses without permission.
                </p>
                <p className="mt-2">
                  <span className="font-medium text-gray-700">Open source:</span>{" "}
                  Source code is available under the MIT License at{" "}
                  <a href="https://github.com/SyedHZRizvi/career-guidance" target="_blank" rel="noreferrer" className="underline text-brand-700">
                    github.com/SyedHZRizvi/career-guidance
                  </a>
                  .
                </p>
              </div>

            </div>
          )}
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
