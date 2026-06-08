import { useState } from "react";
import { Heart, Loader2, MessageCircle, ShieldCheck, Sparkles, Key, EyeOff, Eye } from "lucide-react";
import { VENT_PROMPTS_BY_SITUATION } from "../data/questions.js";
import { COUNTRIES } from "../data/countries.js";
import { Title, NavRow } from "./Profile.jsx";
import { buildContextSnapshot } from "../utils/careerMatcher.js";
import {
  fallbackEmpatheticResponse,
  generateEmpatheticResponse,
  getStoredApiKey,
  storeApiKey,
} from "../utils/claudeApi.js";

export default function Vent({ answers, update, next, back }) {
  const [promptIdx, setPromptIdx] = useState(0);
  const VENT_PROMPTS =
    VENT_PROMPTS_BY_SITUATION[answers.situation] ||
    VENT_PROMPTS_BY_SITUATION.default;

  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showKeyConfig, setShowKeyConfig] = useState(false);
  const [apiKey, setApiKey] = useState(() => getStoredApiKey());
  const [showKey, setShowKey] = useState(false);

  const country = answers.country ? COUNTRIES[answers.country] : null;
  const hasText = (answers.ventText || "").trim().length > 0;

  const handleListen = async () => {
    setLoading(true);
    setError("");
    setResponse("");
    const context = buildContextSnapshot(answers);

    try {
      if (apiKey) {
        const text = await generateEmpatheticResponse({
          apiKey,
          ventText: answers.ventText,
          context,
        });
        setResponse(text);
      } else {
        // Use rule-based fallback. Small delay so it feels like the
        // companion is thinking — not instant which would feel canned.
        await new Promise((r) => setTimeout(r, 800));
        setResponse(fallbackEmpatheticResponse({ ventText: answers.ventText, context }));
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Falling back to offline mode.");
      setResponse(fallbackEmpatheticResponse({ ventText: answers.ventText, context }));
    } finally {
      setLoading(false);
    }
  };

  const saveKey = () => {
    storeApiKey(apiKey.trim());
    setShowKeyConfig(false);
  };

  return (
    <div className="card">
      <Title
        eyebrow="Step 6 of 6"
        title="What's actually on your mind?"
        sub="Write whatever's been sitting with you. Nothing here is shared, and nothing is required. Many people tell us this turns out to be the most valuable part."
      />

      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-600">
        <span className="font-medium text-gray-700">Need a starting point? Try:</span>
        {VENT_PROMPTS.map((p, i) => (
          <button
            key={i}
            className={`rounded-full border px-3 py-1 text-xs transition-all ${
              promptIdx === i
                ? "border-brand-400 bg-brand-50 text-brand-800"
                : "border-gray-200 bg-white/60 text-gray-600 hover:border-brand-200"
            }`}
            onClick={() => {
              setPromptIdx(i);
              if (!hasText) update({ ventText: "" });
            }}
          >
            Prompt {i + 1}
          </button>
        ))}
      </div>

      <div className="mb-2 rounded-2xl bg-white/70 p-4 italic text-gray-700 ring-1 ring-white/60">
        "{VENT_PROMPTS[promptIdx]}"
      </div>

      <textarea
        className="textarea mt-3 min-h-[180px]"
        placeholder="Write as much or as little as you want. No grammar police, no judgment."
        value={answers.ventText}
        onChange={(e) => update({ ventText: e.target.value })}
      />

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
        <span className="inline-flex items-center gap-1">
          <ShieldCheck className="h-3.5 w-3.5" /> Stays on your device unless you click "Listen"
        </span>
        <button
          onClick={() => setShowKeyConfig((v) => !v)}
          className="inline-flex items-center gap-1 text-brand-700 hover:underline"
        >
          <Key className="h-3.5 w-3.5" /> {apiKey ? "AI companion active" : "Use AI companion (optional)"}
        </button>
      </div>

      {showKeyConfig && (
        <div className="mt-4 rounded-2xl bg-brand-50/60 p-4 ring-1 ring-brand-100">
          <p className="text-sm text-gray-700">
            For a more personalised, empathetic response, paste your Anthropic API key. It's
            stored only in your browser. Without a key, you'll still get a thoughtful (offline)
            response.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type={showKey ? "text" : "password"}
                className="input pr-10"
                placeholder="sk-ant-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500"
                onClick={() => setShowKey((v) => !v)}
                aria-label="Toggle key visibility"
              >
                {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <button className="btn-secondary" onClick={saveKey}>
              Save
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Get a key at console.anthropic.com → API Keys. Don't have one? No worries, the
            offline companion works too.
          </p>
          <p className="mt-1 text-xs text-amber-800">
            <span className="font-semibold">Security tip:</span> Set a spending limit on
            your key in the Anthropic console. Your key is stored only in this browser's
            localStorage and sent directly to Anthropic — never to any other server.
          </p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          className="btn-secondary"
          onClick={handleListen}
          disabled={!hasText || loading}
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Reading carefully...
            </>
          ) : (
            <>
              <MessageCircle className="h-4 w-4" /> Listen to me
            </>
          )}
        </button>
        {hasText && !response && !loading && (
          <span className="self-center text-sm text-gray-500">
            ↑ Optional. Tap it only if you'd like a thoughtful response back.
          </span>
        )}
      </div>

      {error && (
        <div className="mt-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-800 ring-1 ring-amber-200">
          {error}
        </div>
      )}

      {response && (
        <div className="mt-6 rounded-3xl bg-gradient-to-br from-brand-50 via-fuchsia-50 to-pink-50 p-6 ring-1 ring-brand-100 animate-fade-in">
          <div className="mb-1 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
            <Sparkles className="h-4 w-4" /> Pathfinder AI companion
          </div>
          <p className="mb-3 text-[11px] text-gray-400">
            This is an AI-generated response, not professional mental health support. If you are
            in crisis, please contact a qualified counsellor or a local helpline.
          </p>
          <div className="whitespace-pre-wrap text-[15px] leading-relaxed text-gray-800">
            {response}
          </div>
        </div>
      )}

      {country?.resources?.length > 0 && (
        <div className="mt-6 rounded-2xl bg-white/70 p-4 ring-1 ring-white/60">
          <div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-gray-800">
            <Heart className="h-4 w-4 text-rose-500" /> If you're going through a really hard time
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            {country.resources.map((r) => (
              <li key={r.name}>
                <span className="font-medium">{r.name}:</span> {r.detail}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8">
        <NavRow back={back} next={next} nextLabel="See my paths" />
      </div>
    </div>
  );
}
