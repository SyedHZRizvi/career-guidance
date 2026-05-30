import { PRESSURE_QUESTIONS_BY_SITUATION } from "../data/questions.js";
import { Title, NavRow } from "./Profile.jsx";

export default function Pressure({ answers, update, next, back }) {
  const isStudent = answers.situation === "student" || !answers.situation;
  const PRESSURE_QUESTIONS = isStudent
    ? PRESSURE_QUESTIONS_BY_SITUATION.student
    : PRESSURE_QUESTIONS_BY_SITUATION.adult;

  const get = (qid) => {
    if (qid === "family-expectations") return answers.familyExpects;
    if (qid === "pressure-level") return answers.pressureLevel;
    if (qid === "pressure-source") return answers.pressureSources;
    if (qid === "comfort") return answers.canTalkToFamily;
    return null;
  };

  const set = (qid, value) => {
    if (qid === "family-expectations") update({ familyExpects: value });
    if (qid === "pressure-level") update({ pressureLevel: value });
    if (qid === "pressure-source") update({ pressureSources: value });
    if (qid === "comfort") update({ canTalkToFamily: value });
  };

  const ready =
    answers.pressureLevel !== null &&
    answers.pressureLevel !== undefined &&
    answers.canTalkToFamily !== null &&
    answers.canTalkToFamily !== undefined;

  return (
    <div className="card">
      <Title
        eyebrow="Step 5 of 6"
        title="What pressure are you carrying?"
        sub={
          isStudent
            ? "This part matters more than you'd think. Be honest. Only you ever see this."
            : "Real life comes with real constraints: partners, dependents, bills, expectations. Be honest. Only you ever see this."
        }
      />

      <div className="space-y-8">
        {PRESSURE_QUESTIONS.map((q, qi) => (
          <PressureQuestion key={q.id} q={q} qi={qi} value={get(q.id)} onChange={(v) => set(q.id, v)} />
        ))}
      </div>

      <div className="mt-8">
        <NavRow back={back} next={next} disabled={!ready} />
      </div>
    </div>
  );
}

function PressureQuestion({ q, qi, value, onChange }) {
  const isMulti = !!q.multi;

  const toggleMulti = (id) => {
    const cur = value || [];
    if (cur.includes(id)) onChange(cur.filter((x) => x !== id));
    else onChange([...cur, id]);
  };

  return (
    <div>
      <div className="mb-3 flex items-start gap-3">
        <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
          {qi + 1}
        </div>
        <div className="font-display text-lg font-semibold text-gray-900">
          {q.question}
          {isMulti && <span className="ml-2 text-xs font-normal text-gray-500">(pick any)</span>}
        </div>
      </div>
      <div className={`grid gap-2 pl-10 ${q.id === "pressure-level" ? "sm:grid-cols-5" : "sm:grid-cols-2"}`}>
        {q.options.map((o) => {
          let on;
          if (isMulti) on = (value || []).includes(o.id);
          else if (q.id === "pressure-level") on = value === o.value;
          else if (q.id === "comfort") on = value === o.value;
          else on = value === o.id;
          return (
            <button
              key={o.id}
              className={`choice-chip text-sm ${on ? "selected" : ""}`}
              onClick={() => {
                if (isMulti) toggleMulti(o.id);
                else if ("value" in o) onChange(o.value);
                else onChange(o.id);
              }}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
