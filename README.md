# Pathfinder

> Career guidance for students and professionals across South Asia, the Middle East, East Asia, and the West. Built to be genuinely inclusive, culturally respectful, and useful for anyone, anywhere.

Pathfinder is a private, in-browser career guidance app that helps students and professionals figure out what to do next. It's designed for users in **15 countries** with full localisation, plus a "Global / Other" fallback for everywhere else.

**Live demo:** run locally with `npm run dev` and visit `http://localhost:5173/`.

## What it does

A friendly multi-step conversation captures:

1. **Profile** — name, country, current situation (student / working / between jobs / changing careers / returning), optional age, family status, and dependents, plus an optional inclusive section for accessibility needs, first-gen status, financial constraint, geographic mobility, faith and dietary needs, caregiving responsibilities, rural/urban background, languages spoken, education level, and device access.
2. **Academics or skills** — what you find easy and what drains you.
3. **Interests** — what genuinely lights you up.
4. **Strengths** — four lightweight personality questions.
5. **Pressure** — family expectations and the weight you're carrying.
6. **Vent** — an optional safe space to write what's on your mind, with empathetic responses powered by the Anthropic Claude API or a thoughtful offline fallback.

Then it produces a personalised **Results** page packed with:

- **5 ranked career matches** scored against your traits, interests, and skills.
- **Per-career deep dives** including:
  - Salary bands in your local currency (entry / mid / senior)
  - Demand indicator for your country and career
  - Realistic lifestyle data (hours, stress, remote-friendliness, travel)
  - Honest pros and cons
  - AI / automation risk assessment for 2024–2030
  - Common career pivots from that role
  - Visual skill roadmap with checkbox progress tracking
  - Skill-gap analyser ("you have X, you need Y")
  - Day-in-the-life YouTube searches and country-specific job boards
  - Real public stories from people who walked that path
  - Curated free + paid learning resources and communities
- **A "Built for your reality" panel** that flexes based on your background:
  - Rural / small-town reality
  - Tight-budget free-first paths
  - First-generation framing
  - Mobile-only / patchy-internet routes
  - No-degree-needed alternatives
  - Caregiver-friendly employer guidance
  - Stay-local strategies with remote-first options
- **Career comparison tool** to compare 2–3 careers side-by-side.
- **Family letter generator** that helps you respectfully explain your choice to family, culture-aware for South Asian dynamics.
- **AI Career Coach chat** (persistent, multi-turn).
- **Mock interview practice** with feedback.
- **Connect with humans** card with real mentor platforms (ADPList, MentorCruise, Topmate, GrowthMentor), country-specific counsellors, and an outreach script for cold-DMing practitioners.
- **Journey timeline** that tracks how your thinking evolves across visits.
- **Starter CV + LinkedIn templates** tailored to your top match.
- **Accessibility bar** with dark mode, font-size control, and reduced-motion toggle.
- **Print / Save as PDF** so the whole report works offline.

## Countries supported

| Region | Countries |
|---|---|
| South Asia | 🇵🇰 Pakistan, 🇮🇳 India, 🇧🇩 Bangladesh, 🇱🇰 Sri Lanka, 🇦🇫 Afghanistan |
| Middle East | 🇦🇪 UAE, 🇮🇷 Iran, 🇮🇶 Iraq, 🇱🇧 Lebanon |
| East Asia | 🇨🇳 China |
| Western | 🇬🇧 UK, 🇺🇸 US, 🇨🇦 Canada, 🇦🇺 Australia |
| Catch-all | 🌍 Other / Global |

Every supported country has its own:
- Education-system streams and entrance exams
- Top institutions
- Salary bands for the most-picked careers
- Country-specific job boards (Naukri, Rozee.pk, Bdjobs, Bayt, Jobinja, 51job, Seek, Reed, etc.)
- Career counsellors and mental-health helplines
- Cultural reframing for the unique pressures of that region

## Languages recognised

English, Hindi, Urdu, Punjabi, Bengali, Tamil, Sinhala, Pashto, Dari, Arabic, Persian / Farsi, Kurdish, Mandarin, Cantonese, French, Spanish, and "Another language" for anyone we missed.

## Privacy

**Everything stays on your device.** All survey answers, progress snapshots, AI chat history, and accessibility preferences are stored in your browser's `localStorage`. The only network call is to the Anthropic API for the optional Career Coach / Mock Interview / venting empathy features — and only if you choose to paste your own API key.

## Tech stack

- **React 19** + **Vite 8**
- **Tailwind CSS 3** for styling
- **Lucide React** for icons
- **Anthropic Claude API** (optional, browser-direct via `anthropic-dangerous-direct-browser-access`)

## Running locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173/` in your browser.

## Project structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── Welcome.jsx          Hero + audience pills + intro
│   ├── Profile.jsx          Step 1: name, country, situation, optional inclusive fields
│   ├── Academics.jsx        Step 2: performance + easy/hard subjects or skills
│   ├── Interests.jsx        Step 3: interest tags
│   ├── Strengths.jsx        Step 4: 4-question personality check
│   ├── Pressure.jsx         Step 5: family expectations + pressure check
│   ├── Vent.jsx             Step 6: free-text venting with AI / fallback
│   ├── Results.jsx          The results screen with all deep-dive cards
│   ├── CompareCareers.jsx   Side-by-side comparison matrix
│   ├── FamilyLetter.jsx     Culture-aware letter generator
│   ├── CoachAndInterview.jsx  Persistent AI chat + mock interview
│   ├── AccessibilityBar.jsx  Dark mode + font size + motion controls
│   ├── ProgressBar.jsx
│   └── Logo.jsx             Custom 4-point compass star mark
├── data/
│   ├── careers.js           16 careers with traits, paths, country routes
│   ├── countries.js         15 countries with full education + cultural data
│   ├── questions.js         All survey questions + option labels
│   ├── careerResources.js   Per-career learning + community links
│   ├── careerIntel.js       Salary + demand + reality + roadmap + stories + inclusive lenses
│   └── mentorship.js        Mentor platforms + country counsellors + outreach script
└── utils/
    ├── careerMatcher.js     Cosine-similarity scoring + life-stage adjustment
    ├── claudeApi.js         Three API modes: vent / coach / interview
    ├── progressTracker.js   Snapshot system across visits
    └── cvBuilder.js         Resume + LinkedIn template generators
```

## Design principles

1. **Universal acceptance.** No identity, faith, or political lens is forced on the user. Features that could conflict with religious or cultural values in any region were deliberately omitted.
2. **Privacy by default.** Nothing leaves the device unless the user pastes an API key.
3. **Honest data.** Salary ranges are flagged as directional. Real stories are cited. AI-risk assessments are level-graded honestly.
4. **Inclusive by design.** Faith-friendly workplaces, caregiver responsibilities, rural backgrounds, mobile-only access, free-first paths, and no-degree alternatives all get first-class treatment.
5. **No em-dashes in user-facing copy.** They read as AI-generated. The codebase uses periods, commas, and colons throughout.

## Contributing

This is a personal project, but pull requests are welcome. If you'd like to add another country, language, or career, the data files are straightforward to extend.

## Licence

MIT.
