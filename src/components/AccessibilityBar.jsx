import { useEffect, useState } from "react";
import { Moon, Sun, Type, Eye } from "lucide-react";

const KEY = "pathfinder.a11y";

function loadSettings() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}
function saveSettings(s) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    // ignore
  }
}

const FONT_LEVELS = [
  { id: "s", label: "Small", scale: 0.92 },
  { id: "m", label: "Medium", scale: 1 },
  { id: "l", label: "Large", scale: 1.1 },
  { id: "xl", label: "Extra large", scale: 1.22 },
];

export default function AccessibilityBar() {
  const initial = loadSettings();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(Boolean(initial.dark));
  const [size, setSize] = useState(initial.size || "m");
  const [reduceMotion, setReduceMotion] = useState(Boolean(initial.reduceMotion));

  // Apply settings to the document root
  useEffect(() => {
    const root = document.documentElement;
    const level = FONT_LEVELS.find((l) => l.id === size) || FONT_LEVELS[1];
    root.style.fontSize = `${level.scale * 100}%`;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    if (reduceMotion) root.classList.add("reduce-motion");
    else root.classList.remove("reduce-motion");
    saveSettings({ dark, size, reduceMotion });
  }, [dark, size, reduceMotion]);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {open ? (
        <div className="rounded-2xl border-2 border-brand-100 bg-white p-4 shadow-2xl ring-1 ring-brand-200 w-72 animate-fade-in">
          <div className="mb-3 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800">
              <Eye className="h-4 w-4 text-brand-600" /> Accessibility
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-xs font-semibold text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Theme
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setDark(false)}
                  className={`inline-flex items-center justify-center gap-2 rounded-lg p-2 text-sm font-medium transition-colors ${
                    !dark
                      ? "bg-brand-100 text-brand-800 ring-2 ring-brand-300"
                      : "bg-gray-50 text-gray-600 ring-1 ring-gray-200"
                  }`}
                >
                  <Sun className="h-4 w-4" /> Light
                </button>
                <button
                  onClick={() => setDark(true)}
                  className={`inline-flex items-center justify-center gap-2 rounded-lg p-2 text-sm font-medium transition-colors ${
                    dark
                      ? "bg-brand-100 text-brand-800 ring-2 ring-brand-300"
                      : "bg-gray-50 text-gray-600 ring-1 ring-gray-200"
                  }`}
                >
                  <Moon className="h-4 w-4" /> Dark
                </button>
              </div>
            </div>

            <div>
              <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Text size
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {FONT_LEVELS.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setSize(l.id)}
                    className={`rounded-lg p-1.5 text-xs font-semibold transition-colors ${
                      size === l.id
                        ? "bg-brand-100 text-brand-800 ring-2 ring-brand-300"
                        : "bg-gray-50 text-gray-600 ring-1 ring-gray-200"
                    }`}
                  >
                    {l.id.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex cursor-pointer items-center justify-between gap-3 rounded-lg p-2 hover:bg-gray-50">
              <span className="text-sm text-gray-700">Reduce motion</span>
              <input
                type="checkbox"
                checked={reduceMotion}
                onChange={(e) => setReduceMotion(e.target.checked)}
                className="h-4 w-4 cursor-pointer rounded text-brand-600 focus:ring-brand-500"
              />
            </label>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="grid h-12 w-12 place-items-center rounded-full bg-white text-brand-700 shadow-xl ring-2 ring-brand-200 transition-all hover:scale-105"
          aria-label="Open accessibility settings"
          title="Accessibility settings"
        >
          <Eye className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
