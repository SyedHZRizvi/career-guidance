import { INTEREST_TAGS } from "../data/careers.js";
import { Title, NavRow } from "./Profile.jsx";

export default function Interests({ answers, update, next, back }) {
  const ready = answers.interests.length >= 2;

  const toggle = (id) => {
    const cur = answers.interests || [];
    if (cur.includes(id)) update({ interests: cur.filter((x) => x !== id) });
    else if (cur.length < 6) update({ interests: [...cur, id] });
  };

  return (
    <div className="card">
      <Title
        eyebrow="Step 3 of 6"
        title="What lights you up?"
        sub="Pick 2 to 6 things that genuinely interest you, even if school or society doesn't reward them yet."
      />

      <div className="mb-2 text-sm text-gray-500">
        Selected: <span className="font-semibold text-brand-700">{answers.interests.length}</span> / 6
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {INTEREST_TAGS.map((tag) => {
          const on = answers.interests.includes(tag.id);
          return (
            <button
              key={tag.id}
              className={`choice-chip flex items-center gap-3 text-left ${on ? "selected" : ""}`}
              onClick={() => toggle(tag.id)}
            >
              <span className="text-2xl">{tag.emoji}</span>
              <span>{tag.label}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 rounded-2xl bg-brand-50/70 p-4 text-sm text-brand-800 ring-1 ring-brand-100">
        💡 <strong>Tip:</strong> Pick what excites you when nobody's watching, not what
        you think you "should" pick. This step matters more than any other.
      </p>

      <div className="mt-6">
        <NavRow back={back} next={next} disabled={!ready} />
      </div>
    </div>
  );
}
