import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Award,
  Book,
  Bot,
  Briefcase,
  Copy,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MapPin,
  MessageSquare,
  PhoneCall,
  Printer,
  RotateCcw,
  Sparkles,
  TrendingUp,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react";

// Inline LinkedIn glyph (lucide-react in this project predates the LinkedIn icon).
function LinkedInIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.89 1.62-1.83 3.34-1.83 3.57 0 4.23 2.35 4.23 5.4v6.32zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0z" />
    </svg>
  );
}
import { rankCareers, topTraits } from "../utils/careerMatcher.js";
import { TRAITS, INTEREST_TAGS } from "../data/careers.js";
import { COUNTRIES } from "../data/countries.js";
import { CAREER_RESOURCES } from "../data/careerResources.js";
import {
  GLOBAL_MENTOR_PLATFORMS,
  COUNTRY_CAREER_SUPPORT,
  linkedInSearchUrl,
  OUTREACH_SCRIPT,
  MENTORSHIP_PRINCIPLES,
} from "../data/mentorship.js";
import {
  CAREER_INTEL,
  CAREER_REALITY,
  INCLUSIVE_COMMUNITIES,
  JOB_BOARDS,
  SKILLS,
  inferUserSkills,
  demandLabel,
  demandColor,
  getInclusiveResources,
} from "../data/careerIntel.js";
import { CAREERS } from "../data/careers.js";
import {
  loadSnapshots,
  saveSnapshot,
  compareSnapshots,
  formatDate,
} from "../utils/progressTracker.js";
import {
  buildLinkedInHeadline,
  buildLinkedInBio,
  buildCvOutline,
} from "../utils/cvBuilder.js";
import CoachAndInterview from "./CoachAndInterview.jsx";
import CompareCareers from "./CompareCareers.jsx";
import FamilyLetter from "./FamilyLetter.jsx";

export default function Results({ answers, back, restart }) {
  const [expandedId, setExpandedId] = useState(null);
  const { traitProfile, ranked } = useMemo(() => rankCareers(answers, { limit: 5 }), [answers]);
  const country = answers.country ? COUNTRIES[answers.country] : null;
  const tt = topTraits(traitProfile, 3);
  const name = answers.name?.trim() || "friend";
  const highPressure = (answers.pressureLevel ?? 0) >= 3;
  const lifeContext = buildLifeContext(answers);
  const userSkills = useMemo(() => inferUserSkills(answers), [answers]);

  // Snapshot the user's journey whenever they land on Results.
  const [snapshots, setSnapshots] = useState(() => loadSnapshots());
  useEffect(() => {
    const next = saveSnapshot({ answers, topMatches: ranked });
    setSnapshots(next);
    // We deliberately re-snapshot only when key inputs change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers.situation, answers.interests?.length, answers.pressureLevel]);

  return (
    <div className="space-y-6">
      <div className="card relative overflow-hidden">
        <div className="absolute -right-20 -top-10 h-56 w-56 rounded-full bg-gradient-to-br from-fuchsia-300/40 to-brand-300/40 blur-3xl" />

        <div className="relative">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            <Sparkles className="h-3.5 w-3.5" /> Your results
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Here's what I'm seeing for you, {name}.
          </h2>
          <p className="mt-3 text-gray-700">
            Based on what you shared about your interests, strengths, and what you find
            easy and hard, here are 5 career paths worth exploring, ordered by fit. Tap any of
            them to see how to actually get there from {country?.name || "your country"}.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {tt.map((t) => (
              <div key={t} className="rounded-2xl bg-white/70 p-4 ring-1 ring-white/60">
                <div className="text-2xl">{TRAITS[t].emoji}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  You lean
                </div>
                <div className="text-lg font-semibold text-gray-900">{TRAITS[t].label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <JourneyTimeline snapshots={snapshots} />

      <div className="space-y-3">
        {ranked.map((r, i) => (
          <CareerCard
            key={r.career.id}
            rank={i + 1}
            result={r}
            country={country}
            userSkills={userSkills}
            answers={answers}
            expanded={expandedId === r.career.id}
            onToggle={() =>
              setExpandedId(expandedId === r.career.id ? null : r.career.id)
            }
          />
        ))}
      </div>

      {lifeContext && <LifeContextCard lifeContext={lifeContext} />}

      {highPressure && country && (
        <PressureCard country={country} answers={answers} />
      )}

      <NextSteps answers={answers} country={country} lifeContext={lifeContext} />

      <CompareCareers answers={answers} ranked={ranked} />

      <FamilyLetter answers={answers} ranked={ranked} />

      <CoachAndInterview answers={answers} ranked={ranked} />

      <ConnectWithHumans answers={answers} country={country} ranked={ranked} />

      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <button className="btn-ghost" onClick={back}>
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <div className="flex flex-wrap items-center gap-2">
          <button
            className="btn-secondary"
            onClick={() => window.print()}
            title="Print or save as PDF"
          >
            <Printer className="h-4 w-4" /> Print / Save PDF
          </button>
          <button className="btn-secondary" onClick={restart}>
            <RotateCcw className="h-4 w-4" /> Start fresh
          </button>
        </div>
      </div>
    </div>
  );
}

function CareerCard({ rank, result, country, userSkills, answers, expanded, onToggle }) {
  const { career, score, breakdown } = result;
  const path = country ? career.pathByCountry?.[country.code] : null;
  const fit =
    score >= 70 ? "Excellent fit" : score >= 50 ? "Strong fit" : score >= 30 ? "Worth exploring" : "Stretch option";
  const fitColor =
    score >= 70 ? "text-emerald-700 bg-emerald-50 ring-emerald-200"
    : score >= 50 ? "text-brand-700 bg-brand-50 ring-brand-200"
    : score >= 30 ? "text-amber-700 bg-amber-50 ring-amber-200"
    : "text-gray-700 bg-gray-50 ring-gray-200";

  return (
    <div className={`card transition-all ${expanded ? "ring-2 ring-brand-300" : "hover:shadow-2xl"}`}>
      <button onClick={onToggle} className="flex w-full items-start gap-4 text-left">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-fuchsia-500 text-2xl text-white shadow-lg shadow-brand-500/30">
          {career.emoji}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              #{rank}
            </span>
            <h3 className="font-display text-xl font-bold text-gray-900">{career.name}</h3>
            <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ring-1 ${fitColor}`}>
              {fit} · {Math.round(score)}%
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-600">{career.short}</p>
        </div>
      </button>

      {expanded && (
        <div className="mt-5 space-y-4 border-t border-gray-100 pt-5 animate-fade-in">
          {path && (
            <Section icon={<MapPin className="h-4 w-4" />} title={`How to get there from ${country.name}`}>
              <p className="text-sm leading-relaxed text-gray-700">{path}</p>
            </Section>
          )}

          <Section icon={<TrendingUp className="h-4 w-4" />} title="Outlook">
            <p className="text-sm text-gray-700">{career.growthOutlook}</p>
          </Section>

          <Section icon={<Award className="h-4 w-4" />} title="Why this matches you">
            <div className="grid grid-cols-3 gap-2 text-sm">
              <Stat label="Traits" value={`${breakdown.traitFit}%`} />
              <Stat label="Interests" value={`${breakdown.interestOverlap}%`} />
              <Stat label="Subjects" value={`${breakdown.subjectFit}%`} />
            </div>
          </Section>

          <CareerDeepDive
            careerId={career.id}
            careerName={career.name}
            country={country}
            userSkills={userSkills}
            answers={answers}
          />

          <GoDeeperPanel careerId={career.id} careerName={career.name} country={country} />

          <CvLinkedInPanel career={career} answers={answers} />
        </div>
      )}
    </div>
  );
}

function CvLinkedInPanel({ career, answers }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(null);
  const headline = useMemo(() => buildLinkedInHeadline({ answers, career }), [answers, career]);
  const bio = useMemo(() => buildLinkedInBio({ answers, career }), [answers, career]);
  const cv = useMemo(() => buildCvOutline({ answers, career }), [answers, career]);

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <Section icon={<GraduationCap className="h-4 w-4" />} title="Starter CV and LinkedIn templates">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full rounded-2xl bg-white px-4 py-3 text-left ring-1 ring-gray-200 transition-colors hover:bg-brand-50"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-800">
            Generate a starter CV and LinkedIn copy tailored to this career
          </span>
          <span className="text-sm text-brand-700">{open ? "Hide" : "Show"}</span>
        </div>
        <p className="mt-1 text-xs text-gray-500">
          Based on what you've told me — your situation, interests, and the skills this
          career needs. It's a skeleton you fill in with your specifics.
        </p>
      </button>

      {open && (
        <div className="mt-3 space-y-4 animate-fade-in">
          <CopyableBlock
            title="LinkedIn headline"
            text={headline}
            copyKey="headline"
            copied={copied}
            onCopy={() => copy(headline, "headline")}
          />
          <CopyableBlock
            title="LinkedIn 'About' section"
            text={bio}
            copyKey="bio"
            copied={copied}
            onCopy={() => copy(bio, "bio")}
            tall
          />
          <CopyableBlock
            title="Starter CV outline"
            text={cv}
            copyKey="cv"
            copied={copied}
            onCopy={() => copy(cv, "cv")}
            tall
          />
          <p className="text-xs text-gray-500 italic">
            These are starting templates. The real magic happens when you replace the
            placeholders with specifics from your own life and work.
          </p>
        </div>
      )}
    </Section>
  );
}

function CopyableBlock({ title, text, copied, copyKey, onCopy, tall }) {
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-gray-200">
      <div className="mb-2 flex items-center justify-between">
        <div className="text-sm font-semibold text-gray-900">{title}</div>
        <button
          onClick={onCopy}
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-200 transition-colors hover:bg-brand-100"
        >
          <Copy className="h-3.5 w-3.5" />
          {copied === copyKey ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre
        className={`whitespace-pre-wrap rounded-xl bg-gray-50 p-3 text-sm leading-relaxed text-gray-800 ring-1 ring-gray-200 ${
          tall ? "max-h-96 overflow-y-auto" : ""
        }`}
      >
{text}
      </pre>
    </div>
  );
}

function JourneyTimeline({ snapshots }) {
  if (!snapshots || snapshots.length < 2) return null;
  const first = snapshots[0];
  const latest = snapshots[snapshots.length - 1];
  const prev = snapshots[snapshots.length - 2];
  const diffs = compareSnapshots(prev, latest);

  return (
    <div className="card border-2 border-amber-100 bg-gradient-to-br from-amber-50/40 via-white/80 to-rose-50/40">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">
        <TrendingUp className="h-3.5 w-3.5" /> Your journey so far
      </div>
      <h3 className="font-display text-2xl font-bold text-gray-900">
        You've been here {snapshots.length} times. Here's how your thinking has moved.
      </h3>

      <div className="mt-4 space-y-3">
        <TimelineRow
          when={formatDate(first.ts)}
          label="First visit"
          topMatch={first.topMatches?.[0]?.name}
        />
        {snapshots.length > 2 && (
          <div className="ml-3 border-l-2 border-dashed border-amber-200 py-1 pl-6 text-xs text-gray-500">
            ... {snapshots.length - 2} visits between
          </div>
        )}
        <TimelineRow
          when={formatDate(latest.ts)}
          label="Today"
          topMatch={latest.topMatches?.[0]?.name}
          highlight
        />
      </div>

      {diffs.length > 0 && (
        <div className="mt-5 rounded-2xl bg-white/80 p-4 ring-1 ring-amber-100">
          <div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-gray-800">
            <Sparkles className="h-4 w-4 text-amber-500" /> What's changed since last time
          </div>
          <ul className="space-y-1.5">
            {diffs.map((d, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-0.5 text-amber-500">→</span>
                <span>{d.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function TimelineRow({ when, label, topMatch, highlight }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl p-3 ring-1 ${
        highlight
          ? "bg-gradient-to-r from-amber-100 to-rose-100 ring-amber-200"
          : "bg-white/70 ring-white/60"
      }`}
    >
      <div
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
          highlight ? "bg-amber-500 text-white" : "bg-amber-100 text-amber-700"
        }`}
      >
        <TrendingUp className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          {label}
        </div>
        <div className="font-semibold text-gray-900">{when}</div>
      </div>
      {topMatch && (
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-wider text-gray-500">Top match</div>
          <div className="text-sm font-semibold text-brand-700">{topMatch}</div>
        </div>
      )}
    </div>
  );
}

function CareerDeepDive({ careerId, careerName, country, userSkills, answers }) {
  const intel = CAREER_INTEL[careerId];
  if (!intel) return null;
  const reality = CAREER_REALITY[careerId];
  const code = country?.code;
  const salary = code && intel.salary?.[code];
  const demand = code && intel.demand?.[code];
  const boards = (code && JOB_BOARDS[code]) || [];
  const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    intel.videoSearch
  )}`;
  const inclusiveResources = getInclusiveResources(careerId, answers);

  return (
    <>
      {reality && <RealityCheck reality={reality.reality} />}

      {reality && <ProsAndCons pros={reality.pros} cons={reality.cons} />}

      {reality && <AiRiskCard ai={reality.aiRisk} />}

      {reality && reality.pivots && (
        <PivotsCard pivots={reality.pivots} />
      )}

      {salary ? (
        <Section icon={<Wallet className="h-4 w-4" />} title={`Salary in ${country.name}`}>
          <div className="grid gap-2 sm:grid-cols-3">
            <SalaryTier label="Entry" value={salary.entry} />
            <SalaryTier label="Mid" value={salary.mid} />
            <SalaryTier label="Senior" value={salary.senior} />
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Directional ranges only. Actual pay varies hugely by city, employer, and individual.
            {demand && (
              <>
                {" "}
                Market right now:{" "}
                <span
                  className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ring-1 ${demandColor(
                    demand
                  )}`}
                >
                  {demandLabel(demand)}
                </span>
              </>
            )}
          </p>
        </Section>
      ) : country ? (
        <Section icon={<Wallet className="h-4 w-4" />} title={`Salary in ${country.name}`}>
          <div className="rounded-2xl bg-white p-4 ring-1 ring-gray-200">
            <p className="text-sm text-gray-700">
              We don't yet have curated salary bands for this career in {country.name}.
              The best live sources are Glassdoor, LinkedIn Salary, and the country's main
              job boards (linked below).
            </p>
            {demand && (
              <p className="mt-2 text-xs text-gray-500">
                Market signal for this country:{" "}
                <span
                  className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ring-1 ${demandColor(demand)}`}
                >
                  {demandLabel(demand)}
                </span>
              </p>
            )}
          </div>
        </Section>
      ) : null}

      <BuiltForYourReality answers={answers} career={{ id: careerId, name: careerName }} reality={reality} />

      <SkillGapAnalyser
        careerName={careerName}
        required={intel.requiredSkills || []}
        userSkills={userSkills}
      />

      {intel.roadmap?.length > 0 && (
        <SkillRoadmap careerId={careerId} roadmap={intel.roadmap} />
      )}

      <Section icon={<Sparkles className="h-4 w-4" />} title="See what the work actually looks like">
        <div className="grid gap-2 sm:grid-cols-2">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Day-in-the-life videos on YouTube
            </span>
            <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5" />
          </a>
          {boards.length > 0 && (
            <details className="rounded-xl bg-white px-4 py-3 ring-1 ring-brand-200">
              <summary className="cursor-pointer text-sm font-semibold text-brand-700">
                See open jobs in {country.name}
              </summary>
              <div className="mt-3 grid gap-2">
                {boards.map((b) => (
                  <a
                    key={b.name}
                    href={b.url(intel.jobSearchTerm || careerName)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-brand-50"
                  >
                    <span>{b.name}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
                  </a>
                ))}
              </div>
            </details>
          )}
        </div>
      </Section>

      {inclusiveResources.length > 0 && (
        <InclusiveResources resources={inclusiveResources} />
      )}

      {intel.stories?.length > 0 && (
        <Section icon={<HeartHandshake className="h-4 w-4" />} title="Real people who took this path">
          <div className="grid gap-3">
            {intel.stories.map((s) => (
              <a
                key={s.name}
                href={s.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-white p-4 ring-1 ring-gray-200 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-brand-200"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-semibold text-gray-900">{s.name}</div>
                    <div className="text-sm font-medium text-brand-700">{s.role}</div>
                    <div className="mt-0.5 text-xs text-gray-500">{s.country}</div>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{s.summary}</p>
              </a>
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-500 italic">
            Stories drawn from publicly documented biographies. Linked sources are independent
            and authoritative (typically Wikipedia or the person's own published work).
          </p>
        </Section>
      )}
    </>
  );
}

// Inclusive guidance that flexes based on the user's background, financial
// constraint, device access, education level, geographic mobility, and
// caregiving responsibilities. Surfaces only the cards that are relevant.
function BuiltForYourReality({ answers, career, reality }) {
  const cards = [];

  // Rural / small-town users
  if (answers?.background === "rural" || answers?.background === "small-town") {
    const remoteFriendly = /often|fully|very/i.test(reality?.reality?.remote || "");
    cards.push({
      key: "rural",
      emoji: "🌾",
      title: remoteFriendly
        ? "This career works from where you are"
        : "Rural-friendly entry strategy",
      body: remoteFriendly
        ? `Most ${career.name} work today happens remotely. You don't need to move to a big city to start. Build a strong online portfolio, take part in global online communities, and remote roles open up from anywhere with a decent internet connection.`
        : `This career typically clusters in cities, but you don't have to move on day one. Start by gaining the skills locally, building an online network, and pursuing remote internships. Once you're skilled, the move (if any) becomes easier.`,
    });
  }

  // Tight financial constraint → free-first paths
  if (answers?.financialConstraint === "tight") {
    cards.push({
      key: "tight-budget",
      emoji: "💰",
      title: "A path that works without a big budget",
      body:
        "All the most respected entry routes into this field have free tiers. Focus on freeCodeCamp, Khan Academy, CS50, YouTube series, and free certificates from Google and Microsoft. Spend zero rupees / dollars on courses for the first six months. Build a portfolio. Only invest money once you've proven to yourself that you stick with it.",
    });
  }

  // First-generation professional
  if (answers?.firstGen === "yes") {
    cards.push({
      key: "first-gen",
      emoji: "🌱",
      title: "You're the first. That's not a disadvantage.",
      body:
        "Many of the most successful people in every field were first-gen. Your edge: you bring fresh perspective and the kind of motivation that comes from carving the path yourself. Your gap: you don't have built-in family networks. Close it deliberately by reaching out to alumni networks, mentor platforms, and online communities. The path that took 'inherited' kids 10 minutes takes you a year of intentional networking. Worth it.",
    });
  }

  // Mobile-only / limited connectivity
  if (answers?.deviceAccess === "mobile-only" || answers?.deviceAccess === "laptop-limited") {
    cards.push({
      key: "mobile-first",
      emoji: "📱",
      title:
        answers.deviceAccess === "mobile-only"
          ? "A phone is enough to start"
          : "Build for patchy internet",
      body:
        answers.deviceAccess === "mobile-only"
          ? "You can absolutely begin this career using just a phone. Mimo, SoloLearn, Brilliant, and YouTube all work on mobile. Many freelancers in Bangladesh, Pakistan, India, and the Philippines started this way. You'll eventually want a laptop, but plenty of people earn enough early to afford one within their first year of work."
          : "Download courses, books, and resources when you have good internet, then learn offline. YouTube lets you download videos, Coursera has offline lecture access, and tools like Kiwix bundle entire knowledge libraries (including Wikipedia and Khan Academy) to use without any connectivity.",
    });
  }

  // Education-level inclusivity
  if (answers?.educationLevel === "self-taught" || answers?.educationLevel === "left-early" || answers?.educationLevel === "school-done" || answers?.educationLevel === "some-college") {
    const isPathFlexible = ["software-engineer", "designer", "content-creator", "entrepreneur", "trades-skilled", "data-scientist"].includes(career.id);
    cards.push({
      key: "no-degree-needed",
      emoji: "🎓",
      title: isPathFlexible
        ? "You do not need a degree for this path"
        : "Alternative routes into this field",
      body: isPathFlexible
        ? `${career.name}s with no formal degree are common and respected today. What hiring teams actually look at: your portfolio, your problem-solving in interviews, and proof you ship work. Build the proof; the degree becomes optional.`
        : `Most formal routes into this field require a degree, but there are alternative paths: assistant / paraprofessional roles, apprenticeships, vocational diplomas, or starting at a related field and pivoting in once you're established.`,
    });
  }

  // Caregiving responsibilities
  if ((answers?.caregiving || []).length > 0) {
    cards.push({
      key: "caregiver",
      emoji: "🤲",
      title: "Built for a life that includes caregiving",
      body:
        "Choose employers and contract structures that explicitly support caregivers. Look for: explicit flexible-hours policies, four-day work weeks, remote-first cultures, generous leave policies, and team norms that respect after-hours boundaries. Use the Caregiver-supportive employer lists in the communities below. Many freelance and consulting paths in this field offer the autonomy that traditional jobs don't.",
    });
  }

  // Geographic mobility constraint
  if (answers?.geoMobility === "must-stay") {
    cards.push({
      key: "local",
      emoji: "🏡",
      title: "How to thrive while staying local",
      body:
        "Search remote-first companies that hire from anywhere. The Remote OK and We Work Remotely job boards filter for fully remote roles. Many startups today don't care where you live. If local roles dry up, freelancing on Upwork, Fiverr, or Toptal lets you serve global clients from your home.",
    });
  }

  if (!cards.length) return null;

  return (
    <Section
      icon={<HeartHandshake className="h-4 w-4" />}
      title="Built for your reality"
    >
      <p className="mb-3 text-sm text-gray-600">
        Honest, specific guidance based on what you told us about your life and constraints.
      </p>
      <div className="grid gap-3">
        {cards.map((c) => (
          <div
            key={c.key}
            className="flex gap-3 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-4 ring-1 ring-emerald-200"
          >
            <div className="text-2xl">{c.emoji}</div>
            <div>
              <div className="font-semibold text-gray-900">{c.title}</div>
              <p className="mt-1 text-sm leading-relaxed text-gray-700">{c.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function RealityCheck({ reality }) {
  const rows = [
    { label: "Typical hours", value: reality.hours, emoji: "⏰" },
    { label: "Stress level", value: reality.stress, emoji: "🫀" },
    { label: "Remote-friendly", value: reality.remote, emoji: "🌐" },
    { label: "Travel", value: reality.travel, emoji: "✈️" },
    { label: "Lifestyle", value: reality.lifestyle, emoji: "🌱" },
  ];
  return (
    <Section icon={<Briefcase className="h-4 w-4" />} title="The reality of this work">
      <div className="grid gap-2 sm:grid-cols-2">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-start gap-3 rounded-xl bg-white p-3 ring-1 ring-gray-200"
          >
            <div className="text-xl">{r.emoji}</div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {r.label}
              </div>
              <div className="text-sm text-gray-800">{r.value}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ProsAndCons({ pros, cons }) {
  return (
    <Section icon={<Award className="h-4 w-4" />} title="Honest pros and cons">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-200">
          <div className="mb-2 text-sm font-semibold text-emerald-800">What's great</div>
          <ul className="space-y-1.5">
            {pros.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-800">
                <span className="text-emerald-600">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-rose-50 p-4 ring-1 ring-rose-200">
          <div className="mb-2 text-sm font-semibold text-rose-800">What's hard</div>
          <ul className="space-y-1.5">
            {cons.map((c, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-800">
                <span className="text-rose-600">!</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function AiRiskCard({ ai }) {
  const colorMap = {
    "very-low":   "from-emerald-100 to-emerald-50 text-emerald-800 ring-emerald-200",
    "low":        "from-emerald-50 to-lime-50 text-emerald-800 ring-emerald-200",
    "low-medium": "from-lime-50 to-amber-50 text-amber-800 ring-amber-200",
    "medium":     "from-amber-50 to-orange-50 text-amber-800 ring-amber-200",
    "medium-high": "from-orange-50 to-rose-50 text-orange-800 ring-orange-200",
    "high":       "from-rose-50 to-rose-100 text-rose-800 ring-rose-200",
  };
  const label = {
    "very-low":    "Very low",
    "low":         "Low",
    "low-medium":  "Low-medium",
    "medium":      "Medium",
    "medium-high": "Medium-high",
    "high":        "High",
  }[ai.level] || ai.level;

  return (
    <Section icon={<TrendingUp className="h-4 w-4" />} title="AI and automation risk (2025 – 2030)">
      <div
        className={`rounded-2xl bg-gradient-to-br ${colorMap[ai.level] || "from-gray-50 to-gray-100 text-gray-800 ring-gray-200"} p-4 ring-1`}
      >
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
          <Bot className="h-4 w-4" /> Risk level: {label}
        </div>
        <p className="text-sm leading-relaxed">{ai.summary}</p>
      </div>
    </Section>
  );
}

function PivotsCard({ pivots }) {
  const careersById = Object.fromEntries(CAREERS.map((c) => [c.id, c]));
  const items = pivots.map((id) => careersById[id]).filter(Boolean);
  if (!items.length) return null;
  return (
    <Section icon={<Sparkles className="h-4 w-4" />} title="Common pivots from here">
      <p className="mb-3 text-sm text-gray-600">
        If you start here, these are the careers you can realistically move into within 5 years.
      </p>
      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((c) => (
          <div
            key={c.id}
            className="flex items-start gap-3 rounded-xl bg-white p-3 ring-1 ring-gray-200"
          >
            <div className="text-2xl">{c.emoji}</div>
            <div>
              <div className="font-semibold text-gray-900">{c.name}</div>
              <div className="text-xs text-gray-600">{c.short}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function InclusiveResources({ resources }) {
  return (
    <Section icon={<HeartHandshake className="h-4 w-4" />} title="Communities that may matter to you">
      <p className="mb-3 text-sm text-gray-600">
        Based on the communities you said matter to you, here are real networks worth knowing.
      </p>
      <div className="grid gap-2">
        {resources.map((r) => (
          <a
            key={r.name + r.lens}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-3 rounded-xl bg-white p-3 ring-1 ring-gray-200 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-fuchsia-200"
          >
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-gray-900">{r.name}</span>
                <span className="rounded-full bg-fuchsia-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-fuchsia-700 ring-1 ring-fuchsia-200">
                  {r.lens}
                </span>
              </div>
              <div className="mt-0.5 text-sm leading-relaxed text-gray-600">{r.note}</div>
            </div>
            <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </Section>
  );
}

function SalaryTier({ label, value }) {
  return (
    <div className="rounded-xl bg-gradient-to-br from-brand-50 to-fuchsia-50 p-3 ring-1 ring-brand-100">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-brand-700">
        {label}
      </div>
      <div className="mt-1 font-display text-base font-bold text-gray-900">{value}</div>
    </div>
  );
}

function SkillGapAnalyser({ careerName, required, userSkills }) {
  if (!required.length) return null;
  const have = required.filter((s) => userSkills.includes(s));
  const need = required.filter((s) => !userSkills.includes(s));
  const pct = Math.round((have.length / required.length) * 100);

  return (
    <Section icon={<TrendingUp className="h-4 w-4" />} title="Your skill match">
      <div className="rounded-2xl bg-white p-4 ring-1 ring-gray-200">
        <div className="mb-3 flex items-center justify-between text-sm">
          <span className="font-semibold text-gray-800">
            You already have {have.length} of {required.length} core skills
          </span>
          <span className="font-display text-2xl font-extrabold text-brand-700">{pct}%</span>
        </div>
        <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-brand-500 transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
              You already have
            </div>
            <div className="flex flex-wrap gap-1.5">
              {have.length === 0 ? (
                <span className="text-sm text-gray-500">Nothing yet — that's normal.</span>
              ) : (
                have.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200"
                  >
                    ✓ {SKILLS[s]?.label || s}
                  </span>
                ))
              )}
            </div>
          </div>
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-rose-700">
              Skills to build
            </div>
            <div className="flex flex-wrap gap-1.5">
              {need.length === 0 ? (
                <span className="text-sm text-gray-500">All set on the basics. Now go deep.</span>
              ) : (
                need.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-rose-50 px-2 py-1 text-xs font-medium text-rose-700 ring-1 ring-rose-200"
                  >
                    + {SKILLS[s]?.label || s}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const ROADMAP_STORAGE = "pathfinder.roadmap";

function loadRoadmapProgress() {
  try {
    return JSON.parse(localStorage.getItem(ROADMAP_STORAGE) || "{}");
  } catch {
    return {};
  }
}
function saveRoadmapProgress(data) {
  try {
    localStorage.setItem(ROADMAP_STORAGE, JSON.stringify(data));
  } catch {
    // ignore
  }
}

function SkillRoadmap({ careerId, roadmap }) {
  const [progress, setProgress] = useState(() => loadRoadmapProgress()[careerId] || {});

  const toggle = (phaseIdx, milestoneIdx) => {
    const key = `${phaseIdx}-${milestoneIdx}`;
    const next = { ...progress, [key]: !progress[key] };
    setProgress(next);
    const all = loadRoadmapProgress();
    all[careerId] = next;
    saveRoadmapProgress(all);
  };

  const total = roadmap.reduce((sum, p) => sum + p.milestones.length, 0);
  const done = Object.values(progress).filter(Boolean).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <Section icon={<MapPin className="h-4 w-4" />} title="Your roadmap to get there">
      <div className="rounded-2xl bg-white p-4 ring-1 ring-gray-200">
        <div className="mb-4 flex items-center justify-between text-sm">
          <span className="font-semibold text-gray-800">
            {done} of {total} milestones complete
          </span>
          <span className="font-display text-lg font-bold text-brand-700">{pct}%</span>
        </div>
        <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500 transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="space-y-4">
          {roadmap.map((phase, pi) => (
            <div key={pi}>
              <div className="mb-2 inline-flex items-center gap-2">
                <div className="grid h-6 w-6 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                  {pi + 1}
                </div>
                <div className="font-semibold text-gray-900">{phase.phase}</div>
              </div>
              <div className="space-y-1 pl-8">
                {phase.milestones.map((m, mi) => {
                  const checked = !!progress[`${pi}-${mi}`];
                  return (
                    <label
                      key={mi}
                      className="flex cursor-pointer items-start gap-2 rounded-lg p-2 text-sm transition-colors hover:bg-brand-50"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(pi, mi)}
                        className="mt-0.5 h-4 w-4 cursor-pointer rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                      />
                      <span
                        className={
                          checked
                            ? "text-gray-500 line-through"
                            : "text-gray-700"
                        }
                      >
                        {m.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function GoDeeperPanel({ careerId, careerName, country }) {
  const res = CAREER_RESOURCES[careerId];
  if (!res) return null;
  const liUrl = linkedInSearchUrl(res.searchRole || careerName, country?.code);

  return (
    <Section icon={<Sparkles className="h-4 w-4" />} title="Go deeper online">
      <div className="grid gap-4 sm:grid-cols-2">
        <ResourceGroup
          icon={<Book className="h-4 w-4" />}
          title="Learn from the best"
          items={res.learn}
        />
        <ResourceGroup
          icon={<Users className="h-4 w-4" />}
          title="Communities to join"
          items={res.communities}
        />
      </div>

      <div className="mt-4 rounded-2xl bg-gradient-to-br from-brand-50 to-fuchsia-50 p-4 ring-1 ring-brand-100">
        <div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-800">
          <UserPlus className="h-4 w-4" /> Connect with real practitioners
        </div>
        <p className="text-sm leading-relaxed text-gray-700">
          The fastest way to understand any career is to talk to someone living it. Two
          good routes:
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <a
            href={liUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="inline-flex items-center gap-2">
              <LinkedInIcon className="h-4 w-4" /> Find {res.searchRole || careerName}s on LinkedIn
            </span>
            <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://adplist.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="inline-flex items-center gap-2">
              <HeartHandshake className="h-4 w-4" /> Free mentors on ADPList
            </span>
            <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </Section>
  );
}

function ResourceGroup({ icon, title, items }) {
  if (!items?.length) return null;
  return (
    <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-white/60">
      <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-gray-800">
        <span className="text-brand-600">{icon}</span>
        {title}
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.name}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-2 rounded-lg p-2 text-sm transition-colors hover:bg-brand-50"
            >
              <div>
                <div className="font-semibold text-gray-900">
                  {item.name}
                  {item.cost && (
                    <span className="ml-2 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-200">
                      {item.cost}
                    </span>
                  )}
                </div>
                <div className="mt-0.5 text-xs leading-relaxed text-gray-600">
                  {item.note}
                </div>
              </div>
              <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Section({ icon, title, children }) {
  return (
    <div>
      <div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-gray-800">
        <span className="text-brand-600">{icon}</span>
        {title}
      </div>
      {children}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-brand-50/70 p-3 text-center ring-1 ring-brand-100">
      <div className="text-xs uppercase tracking-wider text-gray-500">{label}</div>
      <div className="text-lg font-bold text-brand-700">{value}</div>
    </div>
  );
}

function PressureCard({ country, answers }) {
  const expectMap = {
    medicine: "🩺 Medicine",
    engineering: "⚙️ Engineering",
    "civil-services": "🏛️ Civil services",
    "business-family": "💼 Family business",
    law: "⚖️ Law",
    teaching: "📚 Teaching",
    finance: "📈 Finance",
    abroad: "✈️ Going abroad",
  };
  const expectations = (answers.familyExpects || [])
    .map((id) => expectMap[id])
    .filter(Boolean)
    .slice(0, 4);

  return (
    <div className="card border-2 border-rose-100 bg-gradient-to-br from-rose-50/60 via-white/80 to-amber-50/60">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rose-700">
        <Users className="h-3.5 w-3.5" /> On the pressure you mentioned
      </div>
      <h3 className="font-display text-2xl font-bold text-gray-900">
        It's okay to feel torn. You're not the only one.
      </h3>
      <p className="mt-3 text-gray-700">
        {country.culturalContext.reframing}
      </p>
      {expectations.length > 0 && (
        <p className="mt-3 text-sm text-gray-700">
          You mentioned your family hopes for: {expectations.join(", ")}. That's a real
          conversation to have over time, not a battle to win in a single day. Start by getting
          really clear on what YOU want, with data. The clearer you are, the easier the
          conversation gets.
        </p>
      )}
      <details className="mt-4 rounded-2xl bg-white/70 p-4 ring-1 ring-white/60">
        <summary className="cursor-pointer text-sm font-semibold text-gray-800">
          Common pressures students from {country.name} describe
        </summary>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
          {country.culturalContext.commonPressures.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </details>
    </div>
  );
}

function NextSteps({ answers, country, lifeContext }) {
  const interestLabels = (answers.interests || [])
    .map((id) => INTEREST_TAGS.find((t) => t.id === id))
    .filter(Boolean)
    .slice(0, 3);

  // The three cards adapt to the user's situation.
  const cards = lifeContext?.nextStepCards ||
    defaultStudentNextSteps(interestLabels);

  return (
    <div className="card">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
        <Lightbulb className="h-3.5 w-3.5" /> Try these this month
      </div>
      <h3 className="font-display text-2xl font-bold text-gray-900">
        {lifeContext?.nextStepHeading || "Three small experiments to learn more"}
      </h3>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {cards.map((c, i) => (
          <NextCard key={i} icon={c.icon} title={c.title} body={c.body} />
        ))}
      </div>

      {country?.educationSystem?.topInstitutions?.length > 0 && (
        <div className="mt-6 rounded-2xl bg-brand-50/60 p-4 text-sm text-gray-700 ring-1 ring-brand-100">
          <span className="font-semibold text-gray-800">
            Notable institutions in {country.name}:
          </span>{" "}
          {country.educationSystem.topInstitutions.slice(0, 6).join(" · ")}
        </div>
      )}
    </div>
  );
}

function defaultStudentNextSteps(interestLabels) {
  return [
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Shadow someone",
      body: "Reach out to 1 person doing one of your top career matches. Ask for a 15-min call. Most adults say yes if you ask kindly.",
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Try a course",
      body: "Pick one career and finish a free intro course (Coursera, freeCodeCamp, YouTube). Does it still excite you after 5 hours?",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Make something",
      body: interestLabels.length
        ? `Use ${interestLabels
            .map((t) => t.label.toLowerCase())
            .join(" + ")} to build a tiny project this month. Anything counts.`
        : "Build a tiny project, write something, or join a club related to your interests.",
    },
  ];
}

// LifeContext: pulled from situation/age/dependents to drive the
// life-stage-aware card and the bottom NextSteps.
function buildLifeContext(answers) {
  const sit = answers.situation;
  const dependents = parseInt(answers.dependents) || 0;
  const age = parseInt(answers.age) || 0;
  const familyStatus = answers.familyStatus;

  if (!sit) return null;

  if (sit === "student") {
    // Keep results clean — students get the default next steps + pressure card.
    return null;
  }

  const ctx = {
    title: "",
    sub: "",
    bullets: [],
    nextStepHeading: "Three moves to make this month",
    nextStepCards: [],
  };

  if (sit === "career-change") {
    ctx.title = "A career switch isn't a leap. It's a bridge.";
    ctx.sub =
      "The smart play is to keep one foot in stable ground while you build proof in the new direction. Below is the bridge.";
    ctx.bullets = [
      "Don't quit your job first. Build evidence (a side project, a freelance gig, a small portfolio) BEFORE the leap.",
      "Look at the people doing the new role 3 years ahead of you. Reverse-engineer the 3 most common entry routes (degree, bootcamp, internal transfer).",
      "Most career changes happen in 12–18 months, not 3. Plan accordingly so you don't burn out trying to rush.",
    ];
    ctx.nextStepCards = [
      {
        icon: <Briefcase className="h-5 w-5" />,
        title: "Coffee with 3 people",
        body: "Three 20-min chats with people in your target field. Ask: 'How did you actually get in?' Patterns will emerge fast.",
      },
      {
        icon: <GraduationCap className="h-5 w-5" />,
        title: "Pick ONE skill gap",
        body: "Identify the single biggest skill standing between you and the role. Pick one course, finish it in 4 weeks.",
      },
      {
        icon: <Sparkles className="h-5 w-5" />,
        title: "Ship one thing",
        body: "Build, write, or publish one small thing in the new field this month. A portfolio piece beats a CV claim.",
      },
    ];
  } else if (sit === "unemployed") {
    ctx.title = "Between jobs is a chapter, not a verdict.";
    ctx.sub =
      "Most successful careers contain at least one of these gaps. The goal now isn't 'any job'. It's making sure the next role leads somewhere good.";
    ctx.bullets = [
      "Apply less, network more. 70%+ of jobs are filled through referrals, not LinkedIn applications.",
      "Treat the job search like a job: fixed hours, a tracker, weekly review. Open-ended search burns confidence fast.",
      "Add ONE income-generating skill (freelance writing, tutoring, design, code) so you have a fallback while applying.",
    ];
    ctx.nextStepCards = [
      {
        icon: <Briefcase className="h-5 w-5" />,
        title: "DM 10 people",
        body: "Reach out to 10 people in roles you'd want. Don't ask for a job. Ask one specific question instead. Two or three of them will turn into real conversations.",
      },
      {
        icon: <GraduationCap className="h-5 w-5" />,
        title: "Plug one gap",
        body: "Pick ONE skill recruiters keep asking about and finish a credential (Google cert, Coursera, etc.) within 30 days.",
      },
      {
        icon: <Wallet className="h-5 w-5" />,
        title: "Bridge income",
        body: "Set up a small freelance/tutoring stream within 2 weeks. Even $200/week buys you the calm to not panic-accept the wrong job.",
      },
    ];
  } else if (sit === "returning") {
    ctx.title = "Coming back stronger. Not pretending the break didn't happen.";
    ctx.sub =
      "Your break IS your story. The trick is reframing it as growth (which it usually is) rather than apologising for it.";
    ctx.bullets = [
      "Rewrite your CV to lead with what you can DO today, not just what you did before. Skills-first format beats chronological.",
      "Returnship programmes (companies like Goldman, Amazon, Tata, IBM run them) are designed exactly for you. Apply to 3.",
      "A 4-week refresher course in your old field can shift you from 'rusty' to 'current' faster than you think.",
    ];
    ctx.nextStepCards = [
      {
        icon: <GraduationCap className="h-5 w-5" />,
        title: "Refresh ONE skill",
        body: "Pick the most stale skill on your CV. Take a refresher course (LinkedIn Learning, Coursera) and update your profile.",
      },
      {
        icon: <Briefcase className="h-5 w-5" />,
        title: "Find your returnship",
        body: "Search 'returnship + [your country]'. Apply to 3 within 2 weeks. These programmes are designed expecting a gap, so that part is already understood.",
      },
      {
        icon: <HeartHandshake className="h-5 w-5" />,
        title: "Reconnect with 5",
        body: "Reach out to 5 old colleagues. A simple 'I'm getting back into work, would love to catch up' opens more doors than job boards.",
      },
    ];
  } else if (sit === "employed") {
    ctx.title = "You don't need to quit to move forward.";
    ctx.sub =
      "When you've got a job, the smartest moves are usually internal pivots, side projects and one decisive skill bet. Not blowing the whole thing up.";
    ctx.bullets = [
      "Talk to your manager about ONE stretch project that pulls you toward the direction you want. Most people don't ask, and that's why they stay stuck.",
      "Set a 6-month skill goal that compounds. The right credential (PMP, AWS, design portfolio, etc.) re-prices you for the next role.",
      "Use evenings for evidence-building, not just learning. A small public portfolio beats a private skill.",
    ];
    ctx.nextStepCards = [
      {
        icon: <Briefcase className="h-5 w-5" />,
        title: "Internal pivot ask",
        body: "Set a 30-min chat with your manager. Ask: 'How could I move toward [direction]?' Their answer tells you everything.",
      },
      {
        icon: <GraduationCap className="h-5 w-5" />,
        title: "One compounding skill",
        body: "Pick ONE skill that will matter 3 years from now. Block 4 hours/week. Ignore everything else.",
      },
      {
        icon: <Sparkles className="h-5 w-5" />,
        title: "Public proof",
        body: "Start a tiny public footprint (blog, LinkedIn posts, GitHub, portfolio). Visibility multiplies opportunity.",
      },
    ];
  }

  // Layer in dependents / age context as additional bullets.
  if (dependents >= 1) {
    ctx.bullets.push(
      `With ${dependents === "4+" ? "several" : dependents} ${
        dependents === 1 ? "person" : "people"
      } depending on you, the order matters: build the new income stream BEFORE leaving the old one. Sequence > speed.`
    );
  }

  if (age && age >= 35) {
    ctx.bullets.push(
      "At your stage, experience is leverage, not a liability. Lean into transferable skills like managing people, judgement and networks. Those take juniors a decade to build."
    );
  } else if (age && age >= 50) {
    ctx.bullets.push(
      "Don't write off your runway. The average career now spans 50+ years, and roles in advisory, mentoring, consulting, and founding actively prefer experience."
    );
  }

  if (familyStatus === "married" || familyStatus === "partnered") {
    ctx.bullets.push(
      "Have ONE explicit conversation with your partner about: how much risk you're both okay with, what the 18-month plan looks like, and what success means. Vague agreements break under pressure."
    );
  }

  return ctx;
}

function LifeContextCard({ lifeContext }) {
  return (
    <div className="card border-2 border-brand-100 bg-gradient-to-br from-brand-50/40 via-white/80 to-fuchsia-50/40">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
        <HeartHandshake className="h-3.5 w-3.5" /> For where you actually are
      </div>
      <h3 className="font-display text-2xl font-bold text-gray-900">{lifeContext.title}</h3>
      <p className="mt-2 text-gray-700">{lifeContext.sub}</p>
      <ul className="mt-4 space-y-3">
        {lifeContext.bullets.map((b, i) => (
          <li key={i} className="flex gap-3 rounded-2xl bg-white/70 p-4 ring-1 ring-white/60">
            <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
              {i + 1}
            </div>
            <span className="text-sm leading-relaxed text-gray-700">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NextCard({ icon, title, body }) {
  return (
    <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-white/60">
      <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        {icon}
      </div>
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="mt-1 text-sm text-gray-600">{body}</div>
    </div>
  );
}

function ConnectWithHumans({ answers, country, ranked }) {
  const [tab, setTab] = useState("mentors");
  const [copied, setCopied] = useState(false);

  // Filter mentor platforms relevant to the user's top 3 career matches.
  const topIds = (ranked || []).slice(0, 3).map((r) => r.career.id);
  const relevantMentors = GLOBAL_MENTOR_PLATFORMS.filter((p) =>
    p.bestFor.some((id) => topIds.includes(id))
  );
  const mentorList = relevantMentors.length ? relevantMentors : GLOBAL_MENTOR_PLATFORMS.slice(0, 4);

  const counsellors =
    (country && COUNTRY_CAREER_SUPPORT[country.code]) || [];

  const copyScript = async () => {
    try {
      await navigator.clipboard.writeText(OUTREACH_SCRIPT);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore; some browsers block clipboard without user gesture
    }
  };

  const tabs = [
    { id: "mentors", label: "Find a mentor", icon: <HeartHandshake className="h-4 w-4" /> },
    { id: "counsellor", label: "Talk to a counsellor", icon: <PhoneCall className="h-4 w-4" /> },
    { id: "reach-out", label: "Reach out yourself", icon: <MessageSquare className="h-4 w-4" /> },
  ];

  return (
    <div className="card border-2 border-brand-100 bg-gradient-to-br from-white/90 via-brand-50/30 to-fuchsia-50/30">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
        <UserPlus className="h-3.5 w-3.5" /> Real humans, not just a website
      </div>
      <h3 className="font-display text-2xl font-bold text-gray-900">
        Want to talk to someone who's been there?
      </h3>
      <p className="mt-2 text-gray-700">
        The careers above are a starting map. The fastest progress comes from talking
        with people actually doing the work, or with a counsellor who can listen for an
        hour. Three honest routes:
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              tab === t.id
                ? "bg-brand-600 text-white shadow-md shadow-brand-500/30"
                : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-brand-50"
            }`}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-5 animate-fade-in" key={tab}>
        {tab === "mentors" && (
          <div className="space-y-3">
            <p className="text-sm leading-relaxed text-gray-700">
              These platforms host real people who have opted in to mentor strangers
              like you. We've ranked them by what's most relevant to your top career
              matches.
            </p>
            {mentorList.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-3 rounded-2xl bg-white p-4 ring-1 ring-gray-200 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-brand-200"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-gray-900">{p.name}</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-200">
                      {p.cost}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{p.note}</p>
                </div>
                <ExternalLink className="mt-1 h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        )}

        {tab === "counsellor" && (
          <div className="space-y-3">
            <p className="text-sm leading-relaxed text-gray-700">
              {country
                ? `Career counsellors and youth-support services available in ${country.name}. Mix of free helplines, government services, and paid platforms.`
                : "Career counsellors and support services. Mix of free and paid options."}
            </p>
            {counsellors.length === 0 && (
              <div className="rounded-xl bg-white/70 p-4 text-sm text-gray-600 ring-1 ring-white/60">
                Pick a country in the profile step to see local options.
              </div>
            )}
            {counsellors.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-3 rounded-2xl bg-white p-4 ring-1 ring-gray-200 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-brand-200"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-gray-900">{c.name}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ring-1 ${
                        c.cost.toLowerCase().includes("free")
                          ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                          : "bg-amber-50 text-amber-700 ring-amber-200"
                      }`}
                    >
                      {c.cost}
                    </span>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-600 ring-1 ring-gray-200">
                      {c.type}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{c.note}</p>
                </div>
                <ExternalLink className="mt-1 h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        )}

        {tab === "reach-out" && (
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-gray-700">
              You don't have to wait for someone to offer mentorship. Most senior
              practitioners will reply to a thoughtful 2-line message asking one
              specific question. Here's how to do it right.
            </p>

            <ul className="space-y-2">
              {MENTORSHIP_PRINCIPLES.map((p, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-xl bg-white/70 p-3 ring-1 ring-white/60 text-sm text-gray-700"
                >
                  <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                    {i + 1}
                  </div>
                  {p}
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-white p-4 ring-1 ring-brand-200">
              <div className="mb-3 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <MessageSquare className="h-4 w-4 text-brand-600" /> Cold-DM template (copy + adapt)
                </div>
                <button
                  onClick={copyScript}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-200 transition-colors hover:bg-brand-100"
                >
                  <Copy className="h-3.5 w-3.5" />
                  {copied ? "Copied!" : "Copy script"}
                </button>
              </div>
              <pre className="whitespace-pre-wrap rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-800 ring-1 ring-gray-200">
{OUTREACH_SCRIPT}
              </pre>
            </div>

            {ranked && ranked[0] && (
              <a
                href={linkedInSearchUrl(
                  CAREER_RESOURCES[ranked[0].career.id]?.searchRole || ranked[0].career.name,
                  country?.code
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-700 hover:shadow-xl"
              >
                <LinkedInIcon className="h-4 w-4" />
                Find your first 5 people on LinkedIn
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
