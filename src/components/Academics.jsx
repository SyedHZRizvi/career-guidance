import { SUBJECT_TAGS } from "../data/careers.js";
import {
  CURRENT_STATUS_BY_SITUATION,
  SKILL_LABELS_BY_SITUATION,
} from "../data/questions.js";
import { Title, NavRow } from "./Profile.jsx";

export default function Academics({ answers, update, next, back }) {
  const situation = answers.situation || "student";
  const isStudent = situation === "student";

  const status =
    CURRENT_STATUS_BY_SITUATION[situation] || CURRENT_STATUS_BY_SITUATION.student;
  const labels =
    SKILL_LABELS_BY_SITUATION[isStudent ? "student" : "default"] ||
    SKILL_LABELS_BY_SITUATION.default;

  const ready =
    answers.performance &&
    (answers.easySubjects.length > 0 || answers.hardSubjects.length > 0);

  const toggleIn = (key, id) => {
    const cur = answers[key] || [];
    const other = key === "easySubjects" ? "hardSubjects" : "easySubjects";
    const otherList = (answers[other] || []).filter((s) => s !== id);
    if (cur.includes(id)) {
      update({ [key]: cur.filter((s) => s !== id), [other]: otherList });
    } else {
      update({ [key]: [...cur, id], [other]: otherList });
    }
  };

  return (
    <div className="card">
      <Title eyebrow="Step 2 of 6" title={labels.title} sub={labels.sub} />

      <div className="mb-8">
        <label className="label">{status.question}</label>
        <div className="grid gap-3 sm:grid-cols-2">
          {status.options.map((p) => (
            <button
              key={p.id}
              className={`choice-chip ${
                answers.performance === p.id ? "selected" : ""
              }`}
              onClick={() => update({ performance: p.id })}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <label className="label">
          <span className="text-green-700">{labels.easyLabel}</span>
          <span className="font-normal text-gray-400"> (pick all that apply)</span>
        </label>
        <SubjectGrid
          selected={answers.easySubjects}
          onToggle={(id) => toggleIn("easySubjects", id)}
          mood="like"
        />
      </div>

      <div className="mb-8">
        <label className="label">
          <span className="text-rose-700">{labels.hardLabel}</span>
          <span className="font-normal text-gray-400"> (pick all that apply)</span>
        </label>
        <SubjectGrid
          selected={answers.hardSubjects}
          onToggle={(id) => toggleIn("hardSubjects", id)}
          mood="dislike"
        />
      </div>

      <NavRow back={back} next={next} disabled={!ready} />
    </div>
  );
}

function SubjectGrid({ selected, onToggle, mood }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {SUBJECT_TAGS.map((s) => {
        const on = selected.includes(s.id);
        const moodCls =
          mood === "like"
            ? on
              ? "border-green-500 bg-green-50 text-green-800 ring-2 ring-green-200"
              : ""
            : on
              ? "border-rose-500 bg-rose-50 text-rose-800 ring-2 ring-rose-200"
              : "";
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => onToggle(s.id)}
            className={`choice-chip flex items-center gap-2 ${moodCls}`}
          >
            <span className="text-xl">{s.emoji}</span>
            <span className="text-sm">{s.label}</span>
          </button>
        );
      })}
    </div>
  );
}
