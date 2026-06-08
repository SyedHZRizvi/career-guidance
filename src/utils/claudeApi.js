// Optional Claude API integration for the venting / empathy step.
// The student's API key is stored only in localStorage (their browser).
// We do NOT proxy through any server — the call goes directly to Anthropic.

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-haiku-4-5-20251001";

const SYSTEM_PROMPT = `You are a warm, non-judgmental career counsellor. The user may be based in any of these countries: India, Pakistan, Bangladesh, Sri Lanka, Afghanistan, UAE, Iran, Iraq, Lebanon, China, UK, USA, Canada, Australia, or another country. You talk to people of ALL life stages: school students, university students, working adults, people between jobs, career changers, and those returning to work after a break.

The user has just shared something personal about their career anxieties, family pressure, financial constraints, or feelings about their current situation.

Your job is to RESPOND TO THEM the way a kind, wise older friend would. Someone who actually understands what they're going through. NOT to lecture, not to give a list of generic tips, not to be preachy.

Rules:
1. Read the situation context (student vs employed vs unemployed vs career-changer vs returning) and any age/family/dependents info. Adjust tone accordingly. Don't talk to a 38-year-old parent like a school student, and don't talk to a Grade 11 student like a mid-career manager.
2. Start by reflecting back what you heard them say (one sentence) so they feel HEARD.
3. Acknowledge the difficulty WITHOUT minimising ("that's valid", "this is harder than people realise", "it makes sense").
4. Offer one specific, gentle reframe or question that opens new thinking. Not a lecture.
5. Mention ONE concrete next step they could try this week. Small, doable, sized to their life stage.
6. End with a single line of genuine encouragement.
7. Be culturally aware: in South Asian families, defiance can feel impossible. Don't tell them to "just talk to your parents/partner". They've tried. Suggest small alternatives.
8. For adults with dependents: never suggest reckless leaps. Always frame moves as sequenced bridges, not jumps.
9. For career changers / returning workers: validate the courage involved. Don't make them feel late.
10. NEVER suggest cutting off family, lying to a partner, hiding huge financial decisions, or making impulsive job exits.
11. CRITICAL SAFETY RULE: If the user mentions self-harm, suicide, wanting to die, or any crisis signal, STOP all career guidance immediately. Your ENTIRE response must be: (a) one short sentence acknowledging what they said without minimising, (b) a clear statement that this tool cannot provide crisis support, and (c) the crisis helplines relevant to their country. Use these: Pakistan: Umang 0317-4288665 or Rozan 0800-22444. India: iCall 9152987821 or Vandrevala Foundation 1860-2662-345. Bangladesh: Kaan Pete Roi 9612-119-911. Sri Lanka: Sumithrayo +94 11 269 6666. UAE: Estijaba 800-1717. Lebanon: Embrace 1564. Iran: Behzisti 1480. UK: Samaritans 116 123 or text SHOUT to 85258. USA: call or text 988. Canada: 1-833-456-4566. Australia: Lifeline 13 11 14. All other countries: befrienders.org. Do NOT add career content after the helplines.
12. Keep total response to 120–200 words. Conversational tone. No lists or headers. No emojis.
13. Use British English for UK and Australia; American English for US and Canada; Indian English for India and South Asia; locally appropriate English elsewhere.
14. Important style rule: do NOT use em-dashes (—) or " - " as sentence breaks anywhere. They read as AI-generated. Use periods, commas, colons, or rewrite the sentence. Numeric ranges like "5–7 minutes" are fine.`;

export function getStoredApiKey() {
  try {
    return localStorage.getItem("pathfinder.anthropic_key") || "";
  } catch {
    return "";
  }
}

export function storeApiKey(key) {
  try {
    if (key) localStorage.setItem("pathfinder.anthropic_key", key);
    else localStorage.removeItem("pathfinder.anthropic_key");
  } catch {
    // ignore — private browsing or storage disabled
  }
}

// Multi-turn conversation: career coach chat.
// Persists context + history so the user can return later.
const COACH_SYSTEM_PROMPT = `You are a warm, sharp career coach. Your user is talking to you through Pathfinder, a career-guidance app, and has shared their full profile (situation, age, interests, pressure level, top career matches). You'll see that context as the first user message.

Style rules:
- Conversational, not formal. Short paragraphs.
- Ask ONE clarifying question if you genuinely need it. Don't pile on.
- Give concrete, sized-to-their-life advice, not generic motivation.
- For South-Asian users especially, never recommend defiance with family. Help find bridges.
- Reference real platforms, courses, search terms — not vague suggestions.
- Keep replies under 200 words unless they ask for depth.
- Do NOT use em-dashes (—) as sentence breaks anywhere. Use periods, commas, colons. Numeric ranges like "5–7" are fine.
- No emojis, no headers, no bullet lists unless the user asks for a list.`;

export async function coachChat({ apiKey, messages, context }) {
  if (!apiKey) throw new Error("No API key configured");

  // Convert simple message format to Anthropic format. We prepend the context
  // to the first user message so the model sees it once.
  const apiMessages = messages.map((m, i) => {
    if (i === 0 && m.role === "user") {
      return {
        role: "user",
        content:
          `Profile context (do not repeat this back, just understand):\n${JSON.stringify(
            context,
            null,
            2
          )}\n\nMy first message:\n${m.content}`,
      };
    }
    return m;
  });

  const response = await fetch(ANTHROPIC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 800,
      system: COACH_SYSTEM_PROMPT,
      messages: apiMessages,
    }),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`Claude API error (${response.status}): ${errText.slice(0, 200)}`);
  }
  const data = await response.json();
  return data?.content?.[0]?.text?.trim() || "";
}

// Mock interview: AI plays the interviewer for the user's top career.
const INTERVIEWER_SYSTEM_PROMPT = `You are an experienced hiring manager interviewing the user for the role of {ROLE}. The user has chosen to practise interviewing for this role.

Conduct a realistic but supportive practice interview:
1. Open with a brief friendly intro. Set expectations: "I'll ask 5 to 7 questions, then give you honest feedback."
2. Ask ONE question at a time. Wait for the user's answer.
3. After each answer, give brief feedback (1 to 2 sentences): what worked, what could improve.
4. Then ask the next question. Progress from easy openers (tell me about yourself) to behavioural (tell me about a time) to role-specific.
5. After 5 to 7 questions, give a final summary: 3 strengths, 2 things to work on, and ONE specific action they can take this week.

Tone: kind but direct, like a senior person who actually wants you to succeed. No fluff.

Rules:
- Never break character mid-interview.
- Keep each question + feedback under 120 words.
- Do NOT use em-dashes (—) as sentence breaks. Use periods, commas, colons.`;

export async function mockInterview({ apiKey, role, messages }) {
  if (!apiKey) throw new Error("No API key configured");
  const sys = INTERVIEWER_SYSTEM_PROMPT.replace("{ROLE}", role);

  const response = await fetch(ANTHROPIC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 600,
      system: sys,
      messages,
    }),
  });
  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`Claude API error (${response.status}): ${errText.slice(0, 200)}`);
  }
  const data = await response.json();
  return data?.content?.[0]?.text?.trim() || "";
}

export async function generateEmpatheticResponse({ apiKey, ventText, context }) {
  if (!apiKey) throw new Error("No API key configured");

  const userMessage = [
    "Here's what the student shared:",
    "",
    `"${ventText}"`,
    "",
    "Brief context about them (do not parrot this back, just understand):",
    JSON.stringify(context, null, 2),
  ].join("\n");

  const response = await fetch(ANTHROPIC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
    }),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`Claude API error (${response.status}): ${errText.slice(0, 200)}`);
  }

  const data = await response.json();
  const text = data?.content?.[0]?.text?.trim() || "";
  return text;
}

// ─── Crisis keyword pattern ────────────────────────────────────────────────────
// Deliberately broad: we would rather fire this for a false positive (someone
// says "kill it" about a presentation) than miss a genuine crisis.
// The real Claude API system prompt (Rule 11) already handles this path when an
// API key is configured. This guard covers the offline / no-key path.
const CRISIS_KEYWORDS =
  /suicid|kill\s*(my|him|her|them|our)sel[fv]|self.{0,6}harm|cut(ting)?\s*(my(self)?|wrists?)|hurt(ing)?\s*my(self)?|end\s*(my|this)\s*(life|existence)|don.{0,4}t\s*want\s*to\s*(live|exist|be\s*here|wake\s*up)|no\s*reason\s*to\s*live|want\s*to\s*(die|disappear|not\s*exist)|give\s*up\s*on\s*(my\s*)?life|life\s*is\s*(not\s*worth|worthless)|take\s*my\s*(own\s*)?life|jump\s*(off|from)|hang\s*(my)?self|overdose|od\s*on/i;

// Rule-based fallback used when no API key is configured.
// Picks a response template based on detected themes in the vent text.
export function fallbackEmpatheticResponse({ ventText, context }) {
  const lower = (ventText || "").toLowerCase();

  // ── CRISIS CHECK: must run before any other logic ──────────────────────────
  // If any crisis signal is detected we return ONLY a crisis card with helplines.
  // Returning generic career advice to someone in crisis is negligent under UK,
  // US, Canadian, Australian, and Indian duty-of-care law.
  if (CRISIS_KEYWORDS.test(lower)) {
    return `What you've shared sounds very serious, and I'm glad you put it into words.

Pathfinder is a career-guidance tool — it cannot provide the support this moment needs. Please reach out to a trained crisis counsellor right now. You don't have to go through this alone:

Pakistan: Umang 0317-4288665 (24/7) or Rozan 0800-22444
India: iCall 9152987821 or Vandrevala Foundation 1860-2662-345 (24/7)
Bangladesh: Kaan Pete Roi 9612-119-911
Sri Lanka: Sumithrayo +94 11 269 6666
UAE: Estijaba 800-1717 or Counselling helpline 800-4673
Lebanon: Embrace 1564
Iran: Behzisti Organisation 1480
Iraq: Jiyan Foundation +964 750 011 9993
UK: Samaritans 116 123 (free, 24/7) or text SHOUT to 85258
USA: Call or text 988 (Suicide and Crisis Lifeline, free, 24/7)
Canada: 1-833-456-4566 (Crisis Services Canada, 24/7)
Australia: Lifeline 13 11 14 or Beyond Blue 1300 22 4636
All other countries: befrienders.org lists a local line near you

What you are feeling right now can change. Trained counsellors are available. Please call one of the numbers above.`;
  }

  const themes = [];

  if (/parent|mom|dad|father|mother|family|abba|ammi|baba/.test(lower)) themes.push("family");
  if (/pressure|expect|push|force|comparison/.test(lower)) themes.push("pressure");
  if (/scared|afraid|fear|anxious|nervous|worried/.test(lower)) themes.push("fear");
  if (/love|passion|want|dream|wish/.test(lower)) themes.push("passion");
  if (/marks|grade|score|fail|tough|hard|study/.test(lower)) themes.push("academic");
  if (/friend|peer|classmate|cousin/.test(lower)) themes.push("peers");

  const opener = themes.includes("family")
    ? "What you're carrying right now, being torn between what your family wants and what you actually want, is one of the hardest things anyone navigating their future can face. It is not a small thing, and feeling it does not make you ungrateful."
    : themes.includes("pressure")
    ? "The pressure you're describing is real, and it's heavier than people often acknowledge. Carrying that every day takes a quiet kind of strength."
    : themes.includes("fear")
    ? "The fear you're describing makes complete sense. Big choices feel huge precisely because you care about your future."
    : "Thank you for putting that into words. What you said matters, and it sounds like it has been sitting with you for a while.";

  const reframe = themes.includes("family")
    ? "Here's something worth holding onto. Most parents aren't actually attached to a specific career. They're attached to the OUTCOMES they associate with it: stability, respect, security. If you can show them HOW your path delivers those same outcomes, the conversation begins to shift."
    : themes.includes("passion")
    ? "The thing you actually want to do? Please don't dismiss it. Even if you can't pursue it as your main path right now, finding small ways to keep it alive (a side project, a course, a community) often turns into the most important thing you'll do."
    : themes.includes("academic")
    ? "Your current marks are a snapshot, not a sentence. Some of the most successful people in every country struggled in school. What you do over the next two years matters far more than what has happened so far."
    : "There is almost always more flexibility in your situation than it feels like right now. The walls feel solid in the middle of the storm, but they often aren't.";

  let action;
  if (themes.includes("family")) {
    action =
      "One concrete thing to try this week. Write down ONE career path you're curious about, alongside actual income and stability data for it. Then share that data, calmly, with one adult who might become an ally. You don't need to win the whole argument. You just need to plant a seed.";
  } else if (themes.includes("fear")) {
    action =
      "One small thing to try this week: spend 30 minutes researching what a typical day looks like in a career you're curious about. Watch a 'day in the life' video on YouTube. Anxiety shrinks when reality replaces imagination.";
  } else {
    action =
      "One small thing to try this week: pick the SINGLE most pressing question on your mind, and spend 30 focused minutes finding three real perspectives on it (a video, an article, a person you can DM). Action eats anxiety.";
  }

  const closer =
    "You're being thoughtful about your future in a way many adults never are. That's not nothing. Keep going.";

  return [opener, reframe, action, closer].join("\n\n");
}
