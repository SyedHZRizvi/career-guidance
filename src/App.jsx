import { useState, useEffect } from "react";
import Logo from "./components/Logo.jsx";
import AccessibilityBar from "./components/AccessibilityBar.jsx";
import Welcome from "./components/Welcome.jsx";
import Profile from "./components/Profile.jsx";
import Academics from "./components/Academics.jsx";
import Interests from "./components/Interests.jsx";
import Strengths from "./components/Strengths.jsx";
import Pressure from "./components/Pressure.jsx";
import Vent from "./components/Vent.jsx";
import Results from "./components/Results.jsx";
import ProgressBar from "./components/ProgressBar.jsx";

const STEPS = [
  { id: "welcome", title: "Welcome", component: Welcome, showProgress: false },
  { id: "profile", title: "About you", component: Profile, showProgress: true },
  { id: "academics", title: "Your studies", component: Academics, showProgress: true },
  { id: "interests", title: "Your interests", component: Interests, showProgress: true },
  { id: "strengths", title: "Your strengths", component: Strengths, showProgress: true },
  { id: "pressure", title: "Pressure & expectations", component: Pressure, showProgress: true },
  { id: "vent", title: "What's on your mind", component: Vent, showProgress: true },
  { id: "results", title: "Your paths", component: Results, showProgress: false },
];

const INITIAL_ANSWERS = {
  name: "",
  country: "",
  situation: "", // student | employed | unemployed | career-change | returning
  grade: "", // only for students
  stream: "", // only for students
  careerStage: "", // for working / changing-career adults
  age: "", // optional, string so empty is allowed
  familyStatus: "", // optional
  dependents: "", // optional, string of number
  // Inclusivity fields (all optional, all universally accepted)
  accessibility: [], // array of considerations
  firstGen: "", // "yes" | "no" | ""
  financialConstraint: "", // "tight" | "moderate" | "flexible" | ""
  geoMobility: "", // "must-stay" | "flexible" | "open-abroad" | ""
  identityLens: [], // optional self-identified groups for inclusive resources
  faithConsiderations: [], // optional workplace accommodations the user values
  caregiving: [], // optional caregiving responsibilities
  background: "", // rural | small-town | urban
  languages: [], // languages user speaks fluently
  educationLevel: "", // optional, so we don't gatekeep based on degrees
  deviceAccess: "", // optional, surfaces mobile-friendly / low-bandwidth advice
  performance: "",
  easySubjects: [],
  hardSubjects: [],
  interests: [],
  strengthAnswers: {},
  familyExpects: [],
  pressureLevel: null,
  pressureSources: [],
  canTalkToFamily: null,
  ventText: "",
};

const STORAGE_KEY = "pathfinder.session";

function loadAnswers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_ANSWERS;
    return { ...INITIAL_ANSWERS, ...JSON.parse(raw) };
  } catch {
    return INITIAL_ANSWERS;
  }
}

export default function App() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState(loadAnswers);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {
      // ignore
    }
  }, [answers]);

  const step = STEPS[stepIndex];
  const StepComponent = step.component;

  const update = (patch) => setAnswers((prev) => ({ ...prev, ...patch }));
  const next = () => setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  const back = () => setStepIndex((i) => Math.max(i - 1, 0));

  const restart = () => {
    setAnswers(INITIAL_ANSWERS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setStepIndex(0);
  };

  const progressSteps = STEPS.filter((s) => s.showProgress);
  const progressIndex = progressSteps.findIndex((s) => s.id === step.id);

  return (
    <div className="min-h-screen w-full">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <Logo size="sm" animated />
          <div>
            <h1 className="font-display bg-gradient-to-r from-brand-700 via-fuchsia-700 to-pink-600 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
              Pathfinder
            </h1>
            <p className="text-xs text-gray-500">Career guidance, made for you</p>
          </div>
        </div>
        {step.showProgress && (
          <div className="hidden text-sm text-gray-500 sm:block">
            Step {progressIndex + 1} of {progressSteps.length}
          </div>
        )}
      </header>

      {step.showProgress && (
        <div className="mx-auto max-w-5xl px-6">
          <ProgressBar current={progressIndex} total={progressSteps.length} />
        </div>
      )}

      <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-10">
        <div key={step.id} className="animate-slide-up">
          <StepComponent
            answers={answers}
            update={update}
            next={next}
            back={back}
            restart={restart}
            stepIndex={stepIndex}
          />
        </div>
      </main>

      <footer className="mx-auto max-w-5xl px-6 pb-10 text-center text-xs text-gray-500">
        <p>
          Your responses stay on your device. Nothing is uploaded unless you opt in to the AI
          companion in the "vent" step.
        </p>
      </footer>

      <AccessibilityBar />
    </div>
  );
}
