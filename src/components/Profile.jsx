import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, UserCog } from "lucide-react";
import { COUNTRY_LIST, COUNTRIES } from "../data/countries.js";
import {
  PROFILE_GRADES,
  SITUATION_OPTIONS,
  CAREER_STAGES,
  FAMILY_STATUS_OPTIONS,
  ACCESSIBILITY_OPTIONS,
  FIRST_GEN_OPTIONS,
  FINANCIAL_CONSTRAINT_OPTIONS,
  GEO_MOBILITY_OPTIONS,
  IDENTITY_LENS_OPTIONS,
  FAITH_CONSIDERATION_OPTIONS,
  CAREGIVING_OPTIONS,
  BACKGROUND_OPTIONS,
  LANGUAGE_OPTIONS,
  EDUCATION_LEVEL_OPTIONS,
  DEVICE_ACCESS_OPTIONS,
} from "../data/questions.js";

export default function Profile({ answers, update, next, back }) {
  const country = answers.country ? COUNTRIES[answers.country] : null;
  const streams = country?.educationSystem?.schoolStreams || [];
  const isStudent = answers.situation === "student";

  // The student path needs a grade; the working/changing/returning paths
  // optionally collect a career stage but it's not required to continue.
  const ready =
    answers.country &&
    answers.situation &&
    (isStudent ? !!answers.grade : true);

  const [showOptional, setShowOptional] = useState(
    Boolean(answers.age || answers.familyStatus || answers.dependents)
  );
  const [showInclusion, setShowInclusion] = useState(
    Boolean(
      answers.accessibility?.length ||
        answers.firstGen ||
        answers.financialConstraint ||
        answers.geoMobility ||
        answers.identityLens?.length ||
        answers.faithConsiderations?.length ||
        answers.caregiving?.length ||
        answers.background ||
        answers.languages?.length ||
        answers.educationLevel ||
        answers.deviceAccess
    )
  );

  const toggleArr = (key, id) => {
    const cur = answers[key] || [];
    update({
      [key]: cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id],
    });
  };

  return (
    <div className="card">
      <Title eyebrow="Step 1 of 6" title="First, a bit about you" />

      <div className="mb-8">
        <label className="label">
          What should I call you?{" "}
          <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <input
          type="text"
          className="input"
          placeholder="e.g. Aarav, Sara, Alex..."
          value={answers.name}
          onChange={(e) => update({ name: e.target.value })}
        />
      </div>

      <div className="mb-8">
        <label className="label">Which country are you based in?</label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {COUNTRY_LIST.map((c) => (
            <button
              key={c.code}
              className={`choice-chip text-center ${
                answers.country === c.code ? "selected" : ""
              }`}
              onClick={() => update({ country: c.code, stream: "" })}
            >
              <div className="text-3xl">{c.flag}</div>
              <div className="mt-1 text-sm">{c.name}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <label className="label">Which best describes you right now?</label>
        <div className="grid gap-3 sm:grid-cols-2">
          {SITUATION_OPTIONS.map((s) => (
            <button
              key={s.id}
              className={`choice-chip ${
                answers.situation === s.id ? "selected" : ""
              }`}
              onClick={() =>
                update({
                  situation: s.id,
                  // Clear fields that no longer apply when situation changes.
                  ...(s.id === "student"
                    ? { careerStage: "" }
                    : { grade: "", stream: "" }),
                })
              }
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{s.emoji}</span>
                <div>
                  <div className="font-semibold">{s.label}</div>
                  <div className="mt-0.5 text-sm font-normal text-gray-500">
                    {s.note}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {isStudent && (
        <div className="mb-8">
          <label className="label">Where are you in your studies?</label>
          <div className="grid gap-3 sm:grid-cols-2">
            {PROFILE_GRADES.map((g) => (
              <button
                key={g.id}
                className={`choice-chip ${
                  answers.grade === g.id ? "selected" : ""
                }`}
                onClick={() => update({ grade: g.id })}
              >
                <div className="font-semibold">{g.label}</div>
                <div className="mt-1 text-sm font-normal text-gray-500">
                  {g.note}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {isStudent && streams.length > 0 && (
        <div className="mb-8">
          <label className="label">
            What stream / track are you in or planning to take?{" "}
            <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <div className="grid gap-3 sm:grid-cols-2">
            {streams.map((s) => (
              <button
                key={s.id}
                className={`choice-chip ${
                  answers.stream === s.id ? "selected" : ""
                }`}
                onClick={() =>
                  update({ stream: answers.stream === s.id ? "" : s.id })
                }
              >
                <div className="font-semibold">{s.name}</div>
                <div className="mt-1 text-sm font-normal text-gray-500">
                  {s.note}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {!isStudent && answers.situation && (
        <div className="mb-8">
          <label className="label">
            Where are you in your career?{" "}
            <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <div className="grid gap-3 sm:grid-cols-2">
            {CAREER_STAGES.map((s) => (
              <button
                key={s.id}
                className={`choice-chip ${
                  answers.careerStage === s.id ? "selected" : ""
                }`}
                onClick={() =>
                  update({
                    careerStage: answers.careerStage === s.id ? "" : s.id,
                  })
                }
              >
                <div className="font-semibold">{s.label}</div>
                <div className="mt-1 text-sm font-normal text-gray-500">
                  {s.note}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Optional, collapsible personal details section */}
      <div className="mb-2 rounded-2xl border-2 border-dashed border-brand-200 bg-white/40 p-5">
        <button
          type="button"
          onClick={() => setShowOptional((v) => !v)}
          className="flex w-full items-center justify-between gap-3 text-left"
        >
          <span className="inline-flex items-center gap-2 font-semibold text-brand-800">
            <UserCog className="h-4 w-4" />
            Tell me a bit more (optional, helps tailor advice)
          </span>
          {showOptional ? (
            <ChevronUp className="h-4 w-4 text-brand-700" />
          ) : (
            <ChevronDown className="h-4 w-4 text-brand-700" />
          )}
        </button>

        {showOptional && (
          <div className="mt-5 grid gap-5 animate-fade-in">
            <div>
              <label className="label">
                Your age{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                type="number"
                min="13"
                max="99"
                placeholder="e.g. 24"
                className="input max-w-[140px]"
                value={answers.age}
                onChange={(e) => update({ age: e.target.value })}
              />
            </div>

            <div>
              <label className="label">
                Family status{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {FAMILY_STATUS_OPTIONS.map((f) => (
                  <button
                    key={f.id}
                    className={`choice-chip text-sm ${
                      answers.familyStatus === f.id ? "selected" : ""
                    }`}
                    onClick={() =>
                      update({
                        familyStatus:
                          answers.familyStatus === f.id ? "" : f.id,
                      })
                    }
                  >
                    <span className="mr-2">{f.emoji}</span>
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label">
                How many people depend on you financially?{" "}
                <span className="font-normal text-gray-400">
                  (optional. Includes children, parents, anyone you support)
                </span>
              </label>
              <div className="flex flex-wrap gap-2">
                {["0", "1", "2", "3", "4+"].map((n) => (
                  <button
                    key={n}
                    className={`choice-chip min-w-[60px] text-center ${
                      answers.dependents === n ? "selected" : ""
                    }`}
                    onClick={() =>
                      update({
                        dependents: answers.dependents === n ? "" : n,
                      })
                    }
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <p className="rounded-xl bg-brand-50/70 p-3 text-xs text-brand-800 ring-1 ring-brand-100">
              🔒 Everything here is optional. These details help shape advice
              that fits your real life, and they never leave your device.
            </p>
          </div>
        )}
      </div>

      {/* Inclusivity section */}
      <div className="mb-2 mt-4 rounded-2xl border-2 border-dashed border-fuchsia-200 bg-white/40 p-5">
        <button
          type="button"
          onClick={() => setShowInclusion((v) => !v)}
          className="flex w-full items-center justify-between gap-3 text-left"
        >
          <span className="inline-flex items-center gap-2 font-semibold text-fuchsia-800">
            <UserCog className="h-4 w-4" />
            Real-life context (optional, makes advice more inclusive)
          </span>
          {showInclusion ? (
            <ChevronUp className="h-4 w-4 text-fuchsia-700" />
          ) : (
            <ChevronDown className="h-4 w-4 text-fuchsia-700" />
          )}
        </button>

        {showInclusion && (
          <div className="mt-5 grid gap-5 animate-fade-in">
            <div>
              <label className="label">
                Anything we should keep in mind about how you work or learn?{" "}
                <span className="font-normal text-gray-400">
                  (optional, helps us surface inclusive resources)
                </span>
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {ACCESSIBILITY_OPTIONS.map((a) => (
                  <button
                    key={a.id}
                    className={`choice-chip text-sm ${
                      answers.accessibility?.includes(a.id) ? "selected" : ""
                    }`}
                    onClick={() => toggleArr("accessibility", a.id)}
                  >
                    <span className="mr-2">{a.emoji}</span>
                    {a.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label">
                Are you the first in your family to pursue this kind of career?{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <div className="grid gap-2 sm:grid-cols-2">
                {FIRST_GEN_OPTIONS.map((f) => (
                  <button
                    key={f.id}
                    className={`choice-chip text-sm ${
                      answers.firstGen === f.id ? "selected" : ""
                    }`}
                    onClick={() =>
                      update({ firstGen: answers.firstGen === f.id ? "" : f.id })
                    }
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label">
                What's your financial picture like?{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <div className="grid gap-2">
                {FINANCIAL_CONSTRAINT_OPTIONS.map((f) => (
                  <button
                    key={f.id}
                    className={`choice-chip text-sm ${
                      answers.financialConstraint === f.id ? "selected" : ""
                    }`}
                    onClick={() =>
                      update({
                        financialConstraint:
                          answers.financialConstraint === f.id ? "" : f.id,
                      })
                    }
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label">
                Can you move for your career?{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <div className="grid gap-2">
                {GEO_MOBILITY_OPTIONS.map((g) => (
                  <button
                    key={g.id}
                    className={`choice-chip text-sm ${
                      answers.geoMobility === g.id ? "selected" : ""
                    }`}
                    onClick={() =>
                      update({
                        geoMobility: answers.geoMobility === g.id ? "" : g.id,
                      })
                    }
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label">
                Communities that matter to you?{" "}
                <span className="font-normal text-gray-400">
                  (optional, surfaces curated communities for these groups)
                </span>
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {IDENTITY_LENS_OPTIONS.map((i) => (
                  <button
                    key={i.id}
                    className={`choice-chip text-sm ${
                      answers.identityLens?.includes(i.id) ? "selected" : ""
                    }`}
                    onClick={() => toggleArr("identityLens", i.id)}
                  >
                    <span className="mr-2">{i.emoji}</span>
                    {i.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label">
                Faith or cultural workplace needs that matter to you?{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {FAITH_CONSIDERATION_OPTIONS.map((f) => (
                  <button
                    key={f.id}
                    className={`choice-chip text-sm ${
                      answers.faithConsiderations?.includes(f.id) ? "selected" : ""
                    }`}
                    onClick={() => toggleArr("faithConsiderations", f.id)}
                  >
                    <span className="mr-2">{f.emoji}</span>
                    {f.label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Surfaces employers and communities that respect prayer time, dietary
                needs, religious holidays, and modest dress.
              </p>
            </div>

            <div>
              <label className="label">
                Caring responsibilities at home?{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {CAREGIVING_OPTIONS.map((c) => (
                  <button
                    key={c.id}
                    className={`choice-chip text-sm ${
                      answers.caregiving?.includes(c.id) ? "selected" : ""
                    }`}
                    onClick={() => toggleArr("caregiving", c.id)}
                  >
                    <span className="mr-2">{c.emoji}</span>
                    {c.label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Helps us recommend careers and employers with the flexibility your life needs.
              </p>
            </div>

            <div>
              <label className="label">
                Where did you grow up?{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <div className="grid gap-2 sm:grid-cols-3">
                {BACKGROUND_OPTIONS.map((b) => (
                  <button
                    key={b.id}
                    className={`choice-chip text-sm ${
                      answers.background === b.id ? "selected" : ""
                    }`}
                    onClick={() =>
                      update({ background: answers.background === b.id ? "" : b.id })
                    }
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label">
                Languages you speak fluently?{" "}
                <span className="font-normal text-gray-400">
                  (optional, multilingualism is a real career asset)
                </span>
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {LANGUAGE_OPTIONS.map((l) => (
                  <button
                    key={l.id}
                    className={`choice-chip text-sm ${
                      answers.languages?.includes(l.id) ? "selected" : ""
                    }`}
                    onClick={() => toggleArr("languages", l.id)}
                  >
                    <span className="mr-2">{l.emoji}</span>
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label">
                Your education level?{" "}
                <span className="font-normal text-gray-400">
                  (optional, so we don't gatekeep paths that don't need a degree)
                </span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {EDUCATION_LEVEL_OPTIONS.map((e) => (
                  <button
                    key={e.id}
                    className={`choice-chip text-sm ${
                      answers.educationLevel === e.id ? "selected" : ""
                    }`}
                    onClick={() =>
                      update({
                        educationLevel:
                          answers.educationLevel === e.id ? "" : e.id,
                      })
                    }
                  >
                    <span className="mr-2">{e.emoji}</span>
                    {e.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label">
                What does your day-to-day setup look like?{" "}
                <span className="font-normal text-gray-400">
                  (optional, so advice fits your actual access)
                </span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {DEVICE_ACCESS_OPTIONS.map((d) => (
                  <button
                    key={d.id}
                    className={`choice-chip text-sm ${
                      answers.deviceAccess === d.id ? "selected" : ""
                    }`}
                    onClick={() =>
                      update({
                        deviceAccess: answers.deviceAccess === d.id ? "" : d.id,
                      })
                    }
                  >
                    <span className="mr-2">{d.emoji}</span>
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            <p className="rounded-xl bg-fuchsia-50/70 p-3 text-xs text-fuchsia-800 ring-1 ring-fuchsia-100">
              🌍 Sharing any of this is entirely your choice. We use it to surface
              relevant scholarships, accessible communities, faith-respecting workplaces,
              free / mobile-friendly resources, and inclusive paths. Nothing leaves your
              device.
            </p>
          </div>
        )}
      </div>

      <NavRow back={back} next={next} disabled={!ready} />
    </div>
  );
}

export function Title({ eyebrow, title, sub }) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-3 text-gray-600">{sub}</p>}
    </div>
  );
}

export function NavRow({ back, next, disabled, nextLabel = "Continue" }) {
  return (
    <div className="mt-4 flex items-center justify-between">
      <button className="btn-ghost" onClick={back}>
        <ArrowLeft className="h-4 w-4" /> Back
      </button>
      <button className="btn-primary" onClick={next} disabled={disabled}>
        {nextLabel} <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
