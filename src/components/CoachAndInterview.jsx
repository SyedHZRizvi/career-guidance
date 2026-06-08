import { useEffect, useRef, useState } from "react";
import {
  Bot,
  Briefcase,
  Key,
  Loader2,
  MessageCircle,
  Send,
  Shield,
  Sparkles,
  Trash2,
  User,
} from "lucide-react";
import {
  coachChat,
  mockInterview,
  getStoredApiKey,
  storeApiKey,
} from "../utils/claudeApi.js";
import { buildContextSnapshot } from "../utils/careerMatcher.js";

const COACH_STORAGE = "pathfinder.coach-chat";
const INTERVIEW_STORAGE = "pathfinder.interview-chat";

function loadHistory(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}
function saveHistory(key, list) {
  try {
    localStorage.setItem(key, JSON.stringify(list));
  } catch {
    // ignore
  }
}

export default function CoachAndInterview({ answers, ranked }) {
  const [tab, setTab] = useState("coach");
  const [apiKey, setApiKey] = useState(() => getStoredApiKey());
  const [keyVisible, setKeyVisible] = useState(false);

  const saveKey = () => {
    storeApiKey(apiKey.trim());
    setKeyVisible(false);
  };

  const tabs = [
    { id: "coach", label: "AI Career Coach", icon: <Bot className="h-4 w-4" /> },
    { id: "interview", label: "Mock Interview", icon: <Briefcase className="h-4 w-4" /> },
  ];

  return (
    <div className="card border-2 border-fuchsia-100 bg-gradient-to-br from-white/90 via-fuchsia-50/30 to-brand-50/30">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-800">
        <Sparkles className="h-3.5 w-3.5" /> Talk it through with AI
      </div>
      <h3 className="font-display text-2xl font-bold text-gray-900">
        Your personal coach and interview partner
      </h3>
      <p className="mt-2 text-gray-700">
        Have a real, ongoing conversation with an AI coach who remembers your profile.
        Or rehearse a job interview for your top career and get honest feedback. Your
        conversation history is saved only in your browser. Messages are sent to the
        Anthropic API when you interact — nothing is stored on our servers.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              tab === t.id
                ? "bg-fuchsia-600 text-white shadow-md shadow-fuchsia-500/30"
                : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-fuchsia-50"
            }`}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      {!apiKey && (
        <ApiKeyPrompt
          apiKey={apiKey}
          setApiKey={setApiKey}
          keyVisible={keyVisible}
          setKeyVisible={setKeyVisible}
          saveKey={saveKey}
        />
      )}

      {apiKey && (
        <div className="mt-5 animate-fade-in" key={tab}>
          {tab === "coach" ? (
            <CoachChat apiKey={apiKey} answers={answers} ranked={ranked} />
          ) : (
            <InterviewChat apiKey={apiKey} ranked={ranked} />
          )}
        </div>
      )}

      {apiKey && (
        <button
          className="mt-4 inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700"
          onClick={() => setKeyVisible(true)}
        >
          <Key className="h-3.5 w-3.5" />
          Change API key
        </button>
      )}
      {apiKey && keyVisible && (
        <ApiKeyPrompt
          apiKey={apiKey}
          setApiKey={setApiKey}
          keyVisible={keyVisible}
          setKeyVisible={setKeyVisible}
          saveKey={saveKey}
        />
      )}
    </div>
  );
}

function ApiKeyPrompt({ apiKey, setApiKey, keyVisible, setKeyVisible, saveKey }) {
  return (
    <div className="mt-5 rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-200">
      <div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-amber-900">
        <Key className="h-4 w-4" /> One-time setup
      </div>
      <p className="text-sm leading-relaxed text-amber-900">
        These two features run on the Anthropic API. Paste your API key once and it
        stays only in your browser. Get a key at{" "}
        <a
          href="https://console.anthropic.com/settings/keys"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline"
        >
          console.anthropic.com
        </a>
        .
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <input
          type={keyVisible ? "text" : "password"}
          className="input flex-1 min-w-[200px]"
          placeholder="sk-ant-..."
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <button className="btn-secondary" onClick={saveKey}>
          Save
        </button>
      </div>
      {/* API key security guidance */}
      <p className="mt-3 text-xs leading-relaxed text-amber-800">
        <span className="font-semibold">Security tip:</span> Use a key with a spending
        limit set in the Anthropic console. Never share your key or paste it into any
        site you do not trust. Your key is stored only in this browser's localStorage and
        is sent directly to Anthropic — never to any other server.
      </p>
    </div>
  );
}

function CoachChat({ apiKey, answers, ranked }) {
  const [history, setHistory] = useState(() => loadHistory(COACH_STORAGE));
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);

  const context = buildContextSnapshot(answers);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setError("");
    const next = [...history, { role: "user", content: text }];
    setHistory(next);
    saveHistory(COACH_STORAGE, next);
    setLoading(true);
    try {
      const reply = await coachChat({ apiKey, messages: next, context });
      const updated = [...next, { role: "assistant", content: reply }];
      setHistory(updated);
      saveHistory(COACH_STORAGE, updated);
    } catch (e) {
      setError(e.message || "Failed to reach Claude. Check your API key and try again.");
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setHistory([]);
    saveHistory(COACH_STORAGE, []);
    setError("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) send();
  };

  const suggestionPrompts = [
    "What's the single biggest blocker in my way right now?",
    "How do I have the conversation with my family about this?",
    "Build me a 90-day plan for my top career match.",
    "What kind of internship or first job should I aim for?",
  ];

  return (
    <div>
      {/* EU AI Act Art. 50 persistent disclosure — required for AI-generated content */}
      <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-medium text-fuchsia-800 ring-1 ring-fuchsia-200">
        <Shield className="h-3 w-3" />
        AI-powered · Responses generated by Claude (Anthropic) · Not professional advice
      </div>
      <div
        ref={scrollRef}
        className="max-h-[400px] min-h-[200px] overflow-y-auto rounded-2xl bg-white p-4 ring-1 ring-gray-200"
      >
        {history.length === 0 && !loading && (
          <div className="space-y-3">
            <p className="text-sm leading-relaxed text-gray-600">
              Hi {answers.name?.trim() || "there"}. I've got your profile in front of me.
              Ask me anything. Conversations are saved to your browser, so you can come
              back and continue any time.
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestionPrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => setInput(p)}
                  className="rounded-full bg-fuchsia-50 px-3 py-1.5 text-xs font-medium text-fuchsia-800 ring-1 ring-fuchsia-200 transition-colors hover:bg-fuchsia-100"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}
        {history.map((m, i) => (
          <ChatBubble key={i} role={m.role} content={m.content} />
        ))}
        {loading && (
          <div className="flex items-center gap-2 px-2 py-3 text-sm text-gray-500">
            <Loader2 className="h-4 w-4 animate-spin" /> Thinking...
          </div>
        )}
      </div>

      {error && (
        <div className="mt-3 rounded-xl bg-rose-50 p-3 text-sm text-rose-800 ring-1 ring-rose-200">
          {error}
        </div>
      )}

      <div className="mt-3 flex items-start gap-2">
        <textarea
          className="textarea min-h-[60px] flex-1"
          placeholder="Type your question. Cmd / Ctrl + Enter to send."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
        />
        <div className="flex flex-col gap-2">
          <button
            className="btn-primary"
            onClick={send}
            disabled={!input.trim() || loading}
          >
            <Send className="h-4 w-4" />
            Send
          </button>
          {history.length > 0 && (
            <button
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-3 py-2 text-xs font-medium text-gray-500 ring-1 ring-gray-200 transition-colors hover:bg-gray-50"
              onClick={clear}
            >
              <Trash2 className="h-3.5 w-3.5" />
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function InterviewChat({ apiKey, ranked }) {
  const [history, setHistory] = useState(() => loadHistory(INTERVIEW_STORAGE));
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);
  const role = ranked?.[0]?.career?.name || "Software Engineer";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, loading]);

  const start = async () => {
    setError("");
    setLoading(true);
    const startMsg = `Let's begin. Please conduct a mock interview for the role of ${role}. I'm ready.`;
    const next = [{ role: "user", content: startMsg }];
    setHistory(next);
    saveHistory(INTERVIEW_STORAGE, next);
    try {
      const reply = await mockInterview({ apiKey, role, messages: next });
      const updated = [...next, { role: "assistant", content: reply }];
      setHistory(updated);
      saveHistory(INTERVIEW_STORAGE, updated);
    } catch (e) {
      setError(e.message || "Failed to start interview.");
    } finally {
      setLoading(false);
    }
  };

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setError("");
    const next = [...history, { role: "user", content: text }];
    setHistory(next);
    saveHistory(INTERVIEW_STORAGE, next);
    setLoading(true);
    try {
      const reply = await mockInterview({ apiKey, role, messages: next });
      const updated = [...next, { role: "assistant", content: reply }];
      setHistory(updated);
      saveHistory(INTERVIEW_STORAGE, updated);
    } catch (e) {
      setError(e.message || "Failed to reach interviewer.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setHistory([]);
    saveHistory(INTERVIEW_STORAGE, []);
    setError("");
  };

  return (
    <div>
      {/* EU AI Act Art. 50 persistent disclosure */}
      <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-medium text-fuchsia-800 ring-1 ring-fuchsia-200">
        <Shield className="h-3 w-3" />
        AI-powered · Responses generated by Claude (Anthropic) · Practice only — not real interview feedback
      </div>
      <div className="mb-2 text-sm text-gray-600">
        Practising for: <span className="font-semibold text-fuchsia-800">{role}</span>
      </div>

      <div
        ref={scrollRef}
        className="max-h-[400px] min-h-[200px] overflow-y-auto rounded-2xl bg-white p-4 ring-1 ring-gray-200"
      >
        {history.length === 0 && !loading && (
          <div className="text-center">
            <Briefcase className="mx-auto h-10 w-10 text-fuchsia-400" />
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              I'll play the role of a hiring manager interviewing you for the role of{" "}
              <strong>{role}</strong>. Five to seven questions, feedback after each, and a
              summary at the end. Ready when you are.
            </p>
            <button className="btn-primary mt-4" onClick={start} disabled={loading}>
              <Briefcase className="h-4 w-4" />
              Start the interview
            </button>
          </div>
        )}
        {history.length > 0 &&
          history
            .slice(1) // hide the seed prompt
            .map((m, i) => <ChatBubble key={i} role={m.role} content={m.content} />)}
        {loading && (
          <div className="flex items-center gap-2 px-2 py-3 text-sm text-gray-500">
            <Loader2 className="h-4 w-4 animate-spin" /> Interviewer is thinking...
          </div>
        )}
      </div>

      {error && (
        <div className="mt-3 rounded-xl bg-rose-50 p-3 text-sm text-rose-800 ring-1 ring-rose-200">
          {error}
        </div>
      )}

      {history.length > 0 && (
        <div className="mt-3 flex items-start gap-2">
          <textarea
            className="textarea min-h-[80px] flex-1"
            placeholder="Type your answer..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex flex-col gap-2">
            <button
              className="btn-primary"
              onClick={send}
              disabled={!input.trim() || loading}
            >
              <Send className="h-4 w-4" />
              Answer
            </button>
            <button
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-3 py-2 text-xs font-medium text-gray-500 ring-1 ring-gray-200 transition-colors hover:bg-gray-50"
              onClick={reset}
            >
              <Trash2 className="h-3.5 w-3.5" />
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ChatBubble({ role, content }) {
  const isUser = role === "user";
  return (
    <div className={`flex gap-3 py-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
          isUser
            ? "bg-gradient-to-br from-brand-500 to-fuchsia-500 text-white"
            : "bg-fuchsia-100 text-fuchsia-700"
        }`}
      >
        {isUser ? <User className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
      </div>
      <div
        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ring-1 ${
          isUser
            ? "bg-brand-50 text-gray-800 ring-brand-100"
            : "bg-white text-gray-800 ring-gray-200"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
