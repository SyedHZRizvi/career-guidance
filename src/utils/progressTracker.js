// Lightweight snapshot system that captures the user's state when they
// reach the Results screen. Lets us show "how your thinking has evolved"
// across multiple visits.

const KEY = "pathfinder.snapshots";
const MAX_SNAPSHOTS = 20;

export function loadSnapshots() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveSnapshot({ answers, topMatches }) {
  try {
    const list = loadSnapshots();
    const snap = {
      ts: Date.now(),
      situation: answers.situation,
      country: answers.country,
      grade: answers.grade,
      careerStage: answers.careerStage,
      age: answers.age,
      familyStatus: answers.familyStatus,
      dependents: answers.dependents,
      interests: answers.interests,
      easySubjects: answers.easySubjects,
      hardSubjects: answers.hardSubjects,
      pressureLevel: answers.pressureLevel,
      topMatches: (topMatches || []).slice(0, 3).map((m) => ({
        id: m.career.id,
        name: m.career.name,
        score: Math.round(m.score),
      })),
    };

    // Don't double-record if user just refreshed in the last 30s.
    const last = list[list.length - 1];
    if (last && Date.now() - last.ts < 30_000) {
      list[list.length - 1] = snap;
    } else {
      list.push(snap);
    }

    while (list.length > MAX_SNAPSHOTS) list.shift();
    localStorage.setItem(KEY, JSON.stringify(list));
    return list;
  } catch {
    return [];
  }
}

export function clearSnapshots() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}

// Compare two snapshots and return a list of human-readable diff bullets.
export function compareSnapshots(prev, current) {
  if (!prev || !current) return [];
  const diffs = [];

  if (prev.topMatches?.[0]?.id !== current.topMatches?.[0]?.id) {
    diffs.push({
      kind: "shift",
      text: `Your top match shifted from "${prev.topMatches?.[0]?.name}" to "${current.topMatches?.[0]?.name}".`,
    });
  }

  if (prev.situation !== current.situation) {
    diffs.push({
      kind: "situation",
      text: `Life situation changed from "${prev.situation}" to "${current.situation}".`,
    });
  }

  const prevInterests = new Set(prev.interests || []);
  const newInterests = (current.interests || []).filter((i) => !prevInterests.has(i));
  if (newInterests.length) {
    diffs.push({
      kind: "interests",
      text: `New interests added: ${newInterests.join(", ")}.`,
    });
  }

  if (prev.pressureLevel !== current.pressureLevel) {
    const direction = (current.pressureLevel ?? 0) < (prev.pressureLevel ?? 0) ? "down" : "up";
    diffs.push({
      kind: "pressure",
      text: `Pressure level moved ${direction} (from ${prev.pressureLevel} to ${current.pressureLevel}).`,
    });
  }

  return diffs;
}

export function formatDate(ts) {
  try {
    return new Date(ts).toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}
