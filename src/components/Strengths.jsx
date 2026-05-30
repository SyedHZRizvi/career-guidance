import { STRENGTH_QUESTIONS } from "../data/questions.js";
import { Title, NavRow } from "./Profile.jsx";

export default function Strengths({ answers, update, next, back }) {
  const ready =
    Object.keys(answers.strengthAnswers || {}).length === STRENGTH_QUESTIONS.length;

  const pick = (qid, option) => {
    update({
      strengthAnswers: {
        ...(answers.strengthAnswers || {}),
        [qid]: option,
      },
    });
  };

  return (
    <div className="card">
      <Title
        eyebrow="Step 4 of 6"
        title="What kind of person are you, really?"
        sub="Four quick questions. No right answers. Just pick what genuinely fits."
      />

      <div className="space-y-8">
        {STRENGTH_QUESTIONS.map((q, qi) => (
          <div key={q.id}>
            <div className="mb-3 flex items-start gap-3">
              <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {qi + 1}
              </div>
              <div className="font-display text-lg font-semibold text-gray-900">
                {q.question}
              </div>
            </div>
            <div className="grid gap-2 pl-10 sm:grid-cols-2">
              {q.options.map((o) => {
                const on = answers.strengthAnswers?.[q.id]?.id === o.id;
                return (
                  <button
                    key={o.id}
                    className={`choice-chip text-sm ${on ? "selected" : ""}`}
                    onClick={() => pick(q.id, o)}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <NavRow back={back} next={next} disabled={!ready} />
      </div>
    </div>
  );
}
