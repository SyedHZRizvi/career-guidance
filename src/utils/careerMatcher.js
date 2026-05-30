import { CAREERS } from "../data/careers.js";

// Compute trait scores from a student's strength-question answers.
export function computeTraitProfile(strengthAnswers) {
  const profile = {
    realistic: 0,
    investigative: 0,
    artistic: 0,
    social: 0,
    enterprising: 0,
    conventional: 0,
  };
  for (const answer of Object.values(strengthAnswers || {})) {
    if (!answer?.traits) continue;
    for (const [trait, value] of Object.entries(answer.traits)) {
      profile[trait] = (profile[trait] || 0) + value;
    }
  }
  return profile;
}

// Careers that require long fresh-from-scratch schooling. Penalised for
// career-changers, returning workers, and older users.
const LONG_RETRAINING_CAREERS = new Set([
  "doctor",
  "lawyer",
  "scientist-researcher",
  "architect",
]);

// Careers that historically welcome career-changers and self-taught entrants.
const TRANSITION_FRIENDLY_CAREERS = new Set([
  "software-engineer",
  "data-scientist",
  "designer",
  "content-creator",
  "entrepreneur",
  "trades-skilled",
  "healthcare-allied",
  "teacher-educator",
]);

// Careers with relatively stable / predictable income — good when dependents are involved.
const STABLE_INCOME_CAREERS = new Set([
  "trades-skilled",
  "healthcare-allied",
  "teacher-educator",
  "civil-services",
  "business-finance",
  "software-engineer",
  "civil-engineer",
]);

// Careers with highly variable income (great upside, but risky for breadwinners).
const SPECULATIVE_CAREERS = new Set(["entrepreneur", "content-creator"]);

// Compute a contextual multiplier (1.0 = no change) based on the user's
// life stage and responsibilities. Applied to the raw match score.
function contextualMultiplier(career, ctx) {
  let mult = 1.0;
  const dependents = parseInt(ctx.dependents) || 0;
  const age = parseInt(ctx.age) || 0;
  const sit = ctx.situation;

  // Career changers / returning / between jobs: re-skilling matters.
  if (sit === "career-change" || sit === "returning" || sit === "unemployed") {
    if (LONG_RETRAINING_CAREERS.has(career.id)) mult *= 0.65;
    if (TRANSITION_FRIENDLY_CAREERS.has(career.id)) mult *= 1.18;
  }

  // Currently employed and exploring — same direction but milder adjustments.
  if (sit === "employed") {
    if (LONG_RETRAINING_CAREERS.has(career.id)) mult *= 0.85;
    if (TRANSITION_FRIENDLY_CAREERS.has(career.id)) mult *= 1.06;
  }

  // Multiple dependents — favour stable, predictable paychecks.
  if (dependents >= 2) {
    if (STABLE_INCOME_CAREERS.has(career.id)) mult *= 1.12;
    if (SPECULATIVE_CAREERS.has(career.id)) mult *= 0.8;
  } else if (dependents === 1) {
    if (STABLE_INCOME_CAREERS.has(career.id)) mult *= 1.05;
    if (SPECULATIVE_CAREERS.has(career.id)) mult *= 0.9;
  }

  // Age signals — only applied if the user shared their age.
  if (age >= 35) {
    if (career.id === "doctor") mult *= 0.45; // realistically too late from scratch
    if (career.id === "lawyer") mult *= 0.8;
    if (career.id === "scientist-researcher") mult *= 0.85;
  }

  return mult;
}

function scoreCareer(career, ctx) {
  const { traits, interests, subjectLikes, subjectDislikes } = ctx;

  // Trait alignment — cosine-like
  let traitDot = 0;
  let traitMag = 0;
  let careerMag = 0;
  for (const key of Object.keys(career.traits)) {
    const careerVal = career.traits[key] || 0;
    const studentVal = traits[key] || 0;
    traitDot += careerVal * studentVal;
    traitMag += studentVal * studentVal;
    careerMag += careerVal * careerVal;
  }
  const traitScore = traitMag && careerMag ? traitDot / Math.sqrt(traitMag * careerMag) : 0;

  // Interest overlap
  const interestOverlap =
    career.interests.filter((i) => interests.includes(i)).length /
    Math.max(career.interests.length, 1);

  // Subject affinity
  const likedHit = career.subjects.filter((s) => subjectLikes.includes(s)).length;
  const dislikedHit = career.subjects.filter((s) => subjectDislikes.includes(s)).length;
  const subjectScore =
    likedHit / Math.max(career.subjects.length, 1) -
    0.5 * (dislikedHit / Math.max(career.subjects.length, 1));

  const baseRaw = 0.5 * traitScore + 0.3 * interestOverlap + 0.2 * subjectScore;
  const baseScore = Math.max(0, Math.min(1, baseRaw)) * 100;

  // Apply contextual life-stage multiplier
  const mult = contextualMultiplier(career, ctx);
  const score = Math.max(0, Math.min(100, baseScore * mult));

  return {
    score,
    breakdown: {
      traitFit: Math.round(traitScore * 100),
      interestOverlap: Math.round(interestOverlap * 100),
      subjectFit: Math.round(subjectScore * 100),
      contextual: Math.round((mult - 1) * 100),
    },
  };
}

export function rankCareers(answers, opts = { limit: 5 }) {
  const traits = computeTraitProfile(answers.strengthAnswers);
  const ctx = {
    traits,
    interests: answers.interests || [],
    subjectLikes: answers.easySubjects || [],
    subjectDislikes: answers.hardSubjects || [],
    situation: answers.situation,
    age: answers.age,
    dependents: answers.dependents,
    familyStatus: answers.familyStatus,
  };

  const scored = CAREERS.map((career) => {
    const result = scoreCareer(career, ctx);
    return { career, ...result };
  })
    .sort((a, b) => b.score - a.score)
    .slice(0, opts.limit);

  return { traitProfile: traits, ranked: scored };
}

export function topTraits(traitProfile, n = 3) {
  return Object.entries(traitProfile)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([key]) => key);
}

// Build a structured payload that's safe + useful to send to Claude for the venting step.
export function buildContextSnapshot(answers) {
  const { traitProfile, ranked } = rankCareers(answers, { limit: 3 });
  return {
    situation: answers.situation,
    careerStage: answers.careerStage,
    age: answers.age,
    familyStatus: answers.familyStatus,
    dependents: answers.dependents,
    grade: answers.grade,
    country: answers.country,
    performance: answers.performance,
    easySubjects: answers.easySubjects,
    hardSubjects: answers.hardSubjects,
    interests: answers.interests,
    topTraits: topTraits(traitProfile),
    pressureLevel: answers.pressureLevel,
    pressureSources: answers.pressureSources,
    familyExpects: answers.familyExpects,
    canTalkToFamily: answers.canTalkToFamily,
    topCareerMatches: ranked.map((r) => r.career.name),
  };
}
