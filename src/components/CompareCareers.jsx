import { useMemo, useState } from "react";
import { Scale, Sparkles, X } from "lucide-react";
import { CAREER_INTEL, CAREER_REALITY, SKILLS } from "../data/careerIntel.js";
import { CAREERS } from "../data/careers.js";

export default function CompareCareers({ answers, ranked }) {
  const country = answers.country;
  const candidates = (ranked || []).map((r) => r.career);
  const [selected, setSelected] = useState(() =>
    candidates.slice(0, 2).map((c) => c.id)
  );

  const toggle = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((s) => s !== id));
    } else if (selected.length < 3) {
      setSelected([...selected, id]);
    }
  };

  const chosen = selected
    .map((id) => candidates.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <div className="card border-2 border-amber-100 bg-gradient-to-br from-white/90 via-amber-50/30 to-orange-50/30">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">
        <Scale className="h-3.5 w-3.5" /> Side-by-side comparison
      </div>
      <h3 className="font-display text-2xl font-bold text-gray-900">
        Can't decide between paths? Compare them directly.
      </h3>
      <p className="mt-2 text-gray-700">
        Pick up to 3 of your top careers to see them measured against each other across
        salary, hours, stress, AI risk, and more.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {candidates.map((c) => (
          <button
            key={c.id}
            onClick={() => toggle(c.id)}
            disabled={!selected.includes(c.id) && selected.length >= 3}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
              selected.includes(c.id)
                ? "bg-amber-500 text-white shadow-md shadow-amber-300/40"
                : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-40"
            }`}
          >
            <span>{c.emoji}</span>
            {c.name}
            {selected.includes(c.id) && <X className="h-3 w-3" />}
          </button>
        ))}
      </div>

      {chosen.length >= 2 && (
        <div className="mt-5 overflow-x-auto">
          <ComparisonGrid careers={chosen} country={country} />
        </div>
      )}

      {chosen.length < 2 && (
        <div className="mt-5 rounded-2xl bg-white p-6 text-center text-sm text-gray-600 ring-1 ring-gray-200">
          Pick at least 2 careers above to start comparing.
        </div>
      )}
    </div>
  );
}

function ComparisonGrid({ careers, country }) {
  const rows = [
    { label: "Match score" }, // computed externally; we just show via traits intensity
    { label: "Entry salary", get: (c) => CAREER_INTEL[c.id]?.salary?.[country]?.entry || "—" },
    { label: "Senior salary", get: (c) => CAREER_INTEL[c.id]?.salary?.[country]?.senior || "—" },
    { label: "Typical hours", get: (c) => CAREER_REALITY[c.id]?.reality?.hours || "—" },
    { label: "Stress level", get: (c) => CAREER_REALITY[c.id]?.reality?.stress || "—" },
    { label: "Remote-friendly", get: (c) => CAREER_REALITY[c.id]?.reality?.remote || "—" },
    { label: "Travel", get: (c) => CAREER_REALITY[c.id]?.reality?.travel || "—" },
    { label: "AI / automation risk", get: (c) => CAREER_REALITY[c.id]?.aiRisk?.level || "—" },
    {
      label: "Core skills required",
      get: (c) =>
        (CAREER_INTEL[c.id]?.requiredSkills || [])
          .map((s) => SKILLS[s]?.label || s)
          .join(", ") || "—",
    },
    {
      label: "Outlook",
      get: (c) => (CAREERS.find((x) => x.id === c.id) || {}).growthOutlook || "—",
    },
  ];

  return (
    <table className="w-full min-w-[600px] border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="w-40"></th>
          {careers.map((c) => (
            <th key={c.id} className="rounded-2xl bg-amber-100 p-3 text-left">
              <div className="text-2xl">{c.emoji}</div>
              <div className="mt-1 font-display font-bold text-gray-900">{c.name}</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.slice(1).map((r) => (
          <tr key={r.label}>
            <td className="rounded-xl bg-white p-3 text-xs font-semibold uppercase tracking-wider text-gray-500 ring-1 ring-gray-100 align-top">
              {r.label}
            </td>
            {careers.map((c) => (
              <td
                key={c.id}
                className="rounded-xl bg-white p-3 text-sm leading-relaxed text-gray-800 ring-1 ring-gray-100 align-top"
              >
                {r.get(c)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
