import { useMemo, useState } from "react";
import { Copy, MessageCircle, Sparkles, Users } from "lucide-react";
import { CAREER_INTEL, CAREER_REALITY } from "../data/careerIntel.js";
import { COUNTRIES } from "../data/countries.js";

// A culture-aware, respectful letter the user can adapt and share with
// family who may be sceptical about their career path.
//
// Tone is calibrated specifically for South Asian family dynamics where
// blunt declarations don't work, but neither does staying silent.

function buildLetter({ answers, career }) {
  const name = answers.name?.trim() || "your name";
  const country = COUNTRIES[answers.country];
  const intel = CAREER_INTEL[career.id];
  const reality = CAREER_REALITY[career.id];
  const code = answers.country;
  const salary = intel?.salary?.[code];
  const isSouthAsian = ["IN", "PK"].includes(answers.country);

  const opener = isSouthAsian
    ? "Dear Ammi, Abbu / Mom, Dad,\n\nI know this conversation hasn't always been easy, and I want to begin by saying how grateful I am for everything you've sacrificed so I could have choices in life. That's exactly why I want to share this with you properly, instead of just announcing a decision."
    : "Dear Mum and Dad,\n\nI've been thinking carefully about my future, and I want to share where my mind has been landing. Not to argue with you, but because your view matters and I want this to be a conversation, not a surprise.";

  const middle = `After really thinking about who I am, what comes naturally to me, and what I see as a future I could thrive in, I've been drawn toward becoming a ${career.name}.

This isn't a whim. ${career.short}

Let me share what I've learned about what this actually means${
    country ? `, specifically in ${country.name}` : ""
  }:

${
  salary
    ? `• Income: starting roles typically earn ${salary.entry}, mid-career professionals reach ${salary.mid}, and senior ${career.name}s can earn ${salary.senior}. This isn't a path that leads to financial struggle.`
    : "• Income: this is a financially viable path."
}
${
  reality?.reality?.hours
    ? `• Reality of the work: ${reality.reality.hours}. ${reality.reality.lifestyle}`
    : ""
}
${
  reality?.aiRisk?.level
    ? `• Future outlook: AI is changing every job, including this one. The expert view is that the risk to ${career.name}s is ${reality.aiRisk.level}, and the skills involved keep humans valuable.`
    : ""
}
${
  intel?.pathByCountry?.[code]
    ? `• The path: ${intel.pathByCountry[code]}`
    : ""
}`;

  const concerns = isSouthAsian
    ? `\nI know what you may be worried about. You want me to have stability, a respectable position, the ability to support a family one day, and a life you don't have to worry about. I want exactly those things too. Please hear me when I say this path delivers them, not despite being what I love, but because it is.

The careers that felt safest a generation ago aren't always the safest today. The world has changed, and so have what counts as good, stable, respected jobs.`
    : `\nI know you may worry about whether this is the practical path. I've thought hard about the same questions. I'm not chasing a passion at the expense of stability. I'm choosing a path where the work I'll love also has real demand and a clear future.`;

  const closer = isSouthAsian
    ? `\nI'm not asking you to immediately agree. I'm asking you to keep talking with me, to ask the hard questions, and to walk with me as I take the first concrete steps. Your support, even sceptical support, would mean the world.

With love and respect,\n${name}`
    : `\nI'd really value the chance to talk this through with you properly when you're free. I have research, real numbers, and a plan. The decision is mine to make, but it would mean a lot to make it with you behind me.

With love,\n${name}`;

  return [opener, middle, concerns, closer].join("\n");
}

export default function FamilyLetter({ answers, ranked }) {
  const career = ranked?.[0]?.career;
  const [copied, setCopied] = useState(false);
  const letter = useMemo(
    () => (career ? buildLetter({ answers, career }) : ""),
    [answers, career]
  );

  if (!career) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(letter);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="card border-2 border-rose-100 bg-gradient-to-br from-white/90 via-rose-50/30 to-orange-50/30">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rose-800">
        <Users className="h-3.5 w-3.5" /> The conversation with family
      </div>
      <h3 className="font-display text-2xl font-bold text-gray-900">
        A respectful letter you can adapt for your family
      </h3>
      <p className="mt-2 text-gray-700">
        Talking to family about a career choice they didn't pick for you is one of the
        hardest conversations students face. Especially in South Asian families. This
        is a starting draft, tailored to your top match. Read it, adapt it, send it,
        or just print it for your own clarity.
      </p>

      <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-rose-200">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800">
            <MessageCircle className="h-4 w-4 text-rose-600" /> Letter draft
          </div>
          <button
            onClick={copy}
            className="inline-flex items-center gap-1.5 rounded-lg bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 ring-1 ring-rose-200 transition-colors hover:bg-rose-100"
          >
            <Copy className="h-3.5 w-3.5" />
            {copied ? "Copied!" : "Copy letter"}
          </button>
        </div>
        <pre className="max-h-96 overflow-y-auto whitespace-pre-wrap rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-800 ring-1 ring-gray-200">
{letter}
        </pre>
      </div>

      <div className="mt-3 rounded-2xl bg-rose-50/60 p-3 text-xs text-rose-800 ring-1 ring-rose-100">
        <Sparkles className="inline h-3.5 w-3.5" /> This is a starting point, not a
        finished letter. Replace the bullets with stories from your life. Add details
        only you would know. The personal beats the polished every time.
      </div>
    </div>
  );
}
