// Generates starter CV outlines + LinkedIn headline + LinkedIn bio tailored
// to the user's top career match and their personal context.
//
// This is a STARTER, not a finished CV. It gives users the skeleton to fill in.

import { CAREER_INTEL, SKILLS } from "../data/careerIntel.js";

const SITUATION_TONE = {
  student: "Aspiring",
  employed: "Experienced",
  unemployed: "Driven",
  "career-change": "Pivoting",
  returning: "Returning",
};

export function buildLinkedInHeadline({ answers, career }) {
  const tone = SITUATION_TONE[answers.situation] || "Aspiring";
  const interestWord = (answers.interests || [])[0] || "impact";
  return `${tone} ${career.name} | Passionate about ${interestWord} | Building toward meaningful work`;
}

export function buildLinkedInBio({ answers, career }) {
  const name = answers.name?.trim() || "Your name";
  const intel = CAREER_INTEL[career.id];
  const skills = (intel?.requiredSkills || [])
    .slice(0, 4)
    .map((s) => SKILLS[s]?.label || s)
    .join(", ");

  const opener =
    answers.situation === "student"
      ? `I'm ${name}, a student exploring a future in ${career.name.toLowerCase()}.`
      : answers.situation === "career-change"
      ? `I'm ${name}, transitioning into ${career.name.toLowerCase()} from a different field — bringing fresh perspective and real-world experience.`
      : answers.situation === "returning"
      ? `I'm ${name}, returning to professional work as a ${career.name.toLowerCase()} after a thoughtful career break.`
      : answers.situation === "unemployed"
      ? `I'm ${name}, currently between roles and focused on my next move as a ${career.name.toLowerCase()}.`
      : `I'm ${name}, a ${career.name.toLowerCase()} focused on building meaningful work.`;

  const middle = skills
    ? `I'm actively developing my skills in ${skills.toLowerCase()}, and I learn fastest by building real things.`
    : "I learn fastest by building real things and seeking honest feedback.";

  const closing =
    "Always open to a 15-minute conversation about ideas, projects, or just learning what others are working on. Reach out — I respond.";

  return `${opener}\n\n${middle}\n\n${closing}`;
}

export function buildCvOutline({ answers, career }) {
  const name = answers.name?.trim() || "Your name";
  const intel = CAREER_INTEL[career.id];
  const skills = (intel?.requiredSkills || [])
    .map((s) => SKILLS[s]?.label || s);

  const summary =
    answers.situation === "student"
      ? `Motivated ${answers.grade || "student"} pursuing a future in ${career.name.toLowerCase()}. Quick learner with strong fundamentals in ${(answers.easySubjects || []).slice(0, 3).join(", ") || "core subjects"}. Seeking opportunities to apply skills to real projects.`
      : answers.situation === "career-change"
      ? `Experienced professional transitioning into ${career.name.toLowerCase()}. Brings transferable strengths and adult judgement to a new field. Actively upskilling in ${skills.slice(0, 3).join(", ").toLowerCase()}.`
      : answers.situation === "returning"
      ? `Returning ${career.name.toLowerCase()} after a planned career break. Bringing refreshed perspective, modern toolkit, and the maturity to deliver from day one.`
      : answers.situation === "unemployed"
      ? `Focused ${career.name.toLowerCase()} actively seeking the right next role. Strong foundation in ${skills.slice(0, 3).join(", ").toLowerCase()}. Open to interesting opportunities.`
      : `${career.name} focused on building meaningful work. Comfortable across ${skills.slice(0, 3).join(", ").toLowerCase()}.`;

  return `${name.toUpperCase()}
${career.name}
[city, country] · [email] · [LinkedIn URL] · [portfolio URL]

──────────────────────────────────────────────────────
SUMMARY
${summary}

──────────────────────────────────────────────────────
CORE SKILLS
${skills.map((s) => `• ${s}`).join("\n")}

──────────────────────────────────────────────────────
EXPERIENCE / PROJECTS

[Most recent role / project] — [Company / context]
[Start date] to [End date]
  • [Specific thing you did, with a number where possible]
  • [Specific outcome or impact]
  • [Tool, technology, or skill you used]

[Previous role / project] — [Company / context]
[Start date] to [End date]
  • [Specific thing you did]
  • [Specific outcome]

──────────────────────────────────────────────────────
EDUCATION

[Degree or qualification] — [Institution]
[Start year] to [End year or "Present"]
  • [Relevant coursework, project, or honour]

──────────────────────────────────────────────────────
INTERESTS BEYOND WORK
${(answers.interests || []).map((i) => `• ${i}`).join("\n") || "• [What you love doing outside work]"}
`;
}
