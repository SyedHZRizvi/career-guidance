// Question banks for each step. Each option carries either trait scores,
// subject preferences, interest tags, or pressure indicators that the
// matcher uses to score careers later.

export const STRENGTH_QUESTIONS = [
  {
    id: "weekend",
    question: "What sounds like your ideal Saturday afternoon?",
    options: [
      { id: "build", label: "🔧 Tinkering with something. Fixing it, building it, taking it apart to see how it works.", traits: { realistic: 3 } },
      { id: "puzzle", label: "🧩 A really tough puzzle, brain teaser, or coding problem", traits: { investigative: 3 } },
      { id: "create", label: "🎨 Drawing, designing, making music, or shooting videos", traits: { artistic: 3 } },
      { id: "people", label: "🤝 Hanging out, listening to friends, organizing a group meet-up", traits: { social: 3 } },
      { id: "lead", label: "🚀 Pitching an idea, running a club, starting something new", traits: { enterprising: 3 } },
      { id: "organize", label: "📊 Organising my space or notes until every single thing has its right place", traits: { conventional: 3 } },
    ],
  },
  {
    id: "compliment",
    question: "What do people most often say you're really good at?",
    options: [
      { id: "fix", label: "Fixing things, working with my hands, getting things to actually work", traits: { realistic: 2 } },
      { id: "smart", label: "Figuring stuff out, being analytical, asking good questions", traits: { investigative: 2 } },
      { id: "creative", label: "Coming up with creative ideas, making things look great", traits: { artistic: 2 } },
      { id: "kind", label: "Listening, being supportive, making people feel heard", traits: { social: 2 } },
      { id: "convince", label: "Convincing people, leading, being the planner of the group", traits: { enterprising: 2 } },
      { id: "thorough", label: "Being thorough, detail-oriented, never missing things", traits: { conventional: 2 } },
    ],
  },
  {
    id: "approach",
    question: "When you face a hard problem, what's your first instinct?",
    options: [
      { id: "try", label: "Try things hands-on and see what works", traits: { realistic: 2 } },
      { id: "research", label: "Research, gather data, then decide", traits: { investigative: 2 } },
      { id: "imagine", label: "Imagine new, unusual approaches", traits: { artistic: 2 } },
      { id: "ask", label: "Ask someone who's been through it", traits: { social: 2 } },
      { id: "act", label: "Just dive in and rally people around a plan", traits: { enterprising: 2 } },
      { id: "plan", label: "Make a checklist, break it into steps", traits: { conventional: 2 } },
    ],
  },
  {
    id: "energy",
    question: "What kind of work environment energises you?",
    options: [
      { id: "outside", label: "Outdoors, in a workshop, lab or field. Somewhere with real things to handle", traits: { realistic: 2 } },
      { id: "quiet", label: "Quiet, focused, deep-work. Just me and my thoughts", traits: { investigative: 2 } },
      { id: "studio", label: "An open, expressive studio with music and stuff to play with", traits: { artistic: 2 } },
      { id: "team", label: "Surrounded by people, collaborating constantly", traits: { social: 2, enterprising: 1 } },
      { id: "office", label: "A structured office with clear systems and processes", traits: { conventional: 2 } },
      { id: "mix", label: "A mix of everything. Variety is what keeps me alive", traits: { enterprising: 1, artistic: 1, social: 1 } },
    ],
  },
];

// Pressure questions adapt slightly by situation. We define a single bank but
// the labels and option lists vary; the component picks the right one.
const FAMILY_EXPECTATION_OPTIONS = [
  { id: "medicine", label: "🩺 Medicine / Doctor" },
  { id: "engineering", label: "⚙️ Engineering" },
  { id: "civil-services", label: "🏛️ Civil services / Government" },
  { id: "business-family", label: "💼 Family business / Commerce" },
  { id: "law", label: "⚖️ Law" },
  { id: "teaching", label: "📚 Teaching / Academics" },
  { id: "finance", label: "📈 Finance / Banking" },
  { id: "stable-job", label: "🛡️ Any 'stable, secure' job (e.g. govt, bank)" },
  { id: "abroad", label: "✈️ Going abroad for a 'good' opportunity" },
  { id: "stay-current", label: "📌 Stay in my current job and not risk anything" },
  { id: "no-clear", label: "Nothing specific. They say 'whatever makes you happy'" },
  { id: "discouraged", label: "They actively discourage what I actually want" },
];

const PRESSURE_LEVEL_OPTIONS = [
  { id: "none", label: "😌 None really. I'm pretty free to choose", value: 0 },
  { id: "some", label: "🙂 Some, but it's manageable", value: 1 },
  { id: "moderate", label: "😐 Moderate. It weighs on me regularly", value: 2 },
  { id: "high", label: "😟 High. I think about it most days", value: 3 },
  { id: "crushing", label: "😣 Crushing. It's affecting my sleep, health and mood", value: 4 },
];

const PRESSURE_SOURCE_STUDENT = [
  { id: "parents", label: "👨‍👩‍👧 Parents" },
  { id: "relatives", label: "👴 Extended family / relatives" },
  { id: "society", label: "🏘️ Society / neighbours / 'log kya kahenge'" },
  { id: "peers", label: "👥 Friends / classmates competition" },
  { id: "self", label: "🪞 Myself. I put a lot of it on myself" },
  { id: "social-media", label: "📱 Social media comparison" },
  { id: "school", label: "🏫 School / teachers / counsellor" },
  { id: "financial", label: "💰 Financial pressure to support family" },
];

const PRESSURE_SOURCE_ADULT = [
  { id: "parents", label: "👨‍👩‍👧 Parents" },
  { id: "partner", label: "💞 Spouse / partner" },
  { id: "in-laws", label: "🏡 In-laws / extended family" },
  { id: "kids", label: "👶 My children's needs" },
  { id: "society", label: "🏘️ Society / neighbours / peers" },
  { id: "self", label: "🪞 Myself. I put a lot of it on myself" },
  { id: "social-media", label: "📱 Social media comparison" },
  { id: "boss", label: "👔 Current boss / employer" },
  { id: "financial", label: "💰 Financial obligations / debt / bills" },
  { id: "ageism", label: "⏳ Worry about my age vs the field" },
];

const COMFORT_OPTIONS_STUDENT = [
  { id: "yes", label: "👍 Yes. We talk about it openly", value: 0 },
  { id: "kinda", label: "🤔 Somewhat, but they don't fully understand", value: 1 },
  { id: "no", label: "🙁 No. I keep my real thoughts to myself", value: 2 },
  { id: "scared", label: "😨 No, and honestly I'm scared of how they'd react", value: 3 },
];

const COMFORT_OPTIONS_ADULT = [
  { id: "yes", label: "👍 Yes. My family or partner are supportive", value: 0 },
  { id: "kinda", label: "🤔 Somewhat, but they don't fully get it", value: 1 },
  { id: "no", label: "🙁 No. I keep most of my plans to myself", value: 2 },
  { id: "scared", label: "😨 No, and honestly I'm scared of how they'd react", value: 3 },
];

export const PRESSURE_QUESTIONS_BY_SITUATION = {
  student: [
    {
      id: "family-expectations",
      question: "What career path does your family most expect or hope you'll take?",
      multi: true,
      options: FAMILY_EXPECTATION_OPTIONS,
    },
    {
      id: "pressure-level",
      question: "How much pressure do you feel about your career choice?",
      options: PRESSURE_LEVEL_OPTIONS,
    },
    {
      id: "pressure-source",
      question: "Where does most of the pressure come from?",
      multi: true,
      options: PRESSURE_SOURCE_STUDENT,
    },
    {
      id: "comfort",
      question: "Can you talk openly with your family about your real interests?",
      options: COMFORT_OPTIONS_STUDENT,
    },
  ],
  adult: [
    {
      id: "family-expectations",
      question:
        "Which career paths are your family / partner most invested in you taking (or staying in)?",
      multi: true,
      options: FAMILY_EXPECTATION_OPTIONS,
    },
    {
      id: "pressure-level",
      question: "How much pressure do you feel about your career direction?",
      options: PRESSURE_LEVEL_OPTIONS,
    },
    {
      id: "pressure-source",
      question: "Where does most of the pressure come from?",
      multi: true,
      options: PRESSURE_SOURCE_ADULT,
    },
    {
      id: "comfort",
      question:
        "Can you talk openly with your family / partner about your real career thoughts?",
      options: COMFORT_OPTIONS_ADULT,
    },
  ],
};

// Back-compat default export for any other file importing PRESSURE_QUESTIONS
export const PRESSURE_QUESTIONS = PRESSURE_QUESTIONS_BY_SITUATION.student;

// VENT_PROMPTS are picked based on the user's situation.
// `default` is the fallback used when the situation has no specific set.
export const VENT_PROMPTS_BY_SITUATION = {
  default: [
    "What's the one thing about your career situation that's been bothering you the most?",
    "If nothing was off the table, with no family, money, or society pressure, what would you genuinely want to do?",
    "What's a fear you have about your future that you haven't told anyone?",
    "What's something you're really proud of that you wish more people in your life noticed?",
  ],
  student: [
    "What's the one thing about your career or studies that's been bothering you the most?",
    "If nothing was off the table, with no family, money, or society pressure, what would you genuinely want to do?",
    "What's a fear you have about your future that you haven't told anyone?",
    "What's something you're really proud of that you wish more people in your life noticed?",
  ],
  employed: [
    "What's not working about your current job that you wish you could change?",
    "If money was sorted for a year, what would you spend your work hours doing?",
    "What part of your career feels stuck or stagnant right now?",
    "What's a skill you're hiding from your boss that you wish you could use more?",
  ],
  unemployed: [
    "What's the hardest part of being between jobs right now?",
    "What would feel like the right next role for you, not just any role?",
    "What's something a job rejection is making you doubt about yourself that isn't actually true?",
    "If you got an offer tomorrow for ANY role, what would you most hope it was?",
  ],
  "career-change": [
    "What's pulling you away from your current career, and what's pulling you toward something new?",
    "What's the biggest fear holding you back from making the switch?",
    "If you could press pause and try a different path for 6 months risk-free, what would it be?",
    "What does your family / partner think of the change, and how does that affect you?",
  ],
  returning: [
    "What's the hardest part of getting back into work right now?",
    "What's changed about you during your break that you'd want a future employer to actually see?",
    "What's a fear you have about returning that you haven't shared with anyone?",
    "What kind of work-life shape do you need this time around, perhaps different from before?",
  ],
};

// Back-compat default export so any other file importing VENT_PROMPTS still works.
export const VENT_PROMPTS = VENT_PROMPTS_BY_SITUATION.default;

export const SITUATION_OPTIONS = [
  {
    id: "student",
    label: "Student",
    emoji: "🎓",
    note: "In school, college, or university",
  },
  {
    id: "employed",
    label: "Currently working",
    emoji: "💼",
    note: "I have a job but I'm exploring options",
  },
  {
    id: "unemployed",
    label: "Between jobs",
    emoji: "🔄",
    note: "Looking for work right now",
  },
  {
    id: "career-change",
    label: "Changing careers",
    emoji: "🦋",
    note: "I want to pivot into something different",
  },
  {
    id: "returning",
    label: "Returning to work",
    emoji: "🌱",
    note: "After a break for parenting, health, study, or anything else",
  },
];

export const FAMILY_STATUS_OPTIONS = [
  { id: "single", label: "Single", emoji: "🙋" },
  { id: "engaged", label: "Engaged", emoji: "💍" },
  { id: "married", label: "Married", emoji: "💑" },
  { id: "divorced", label: "Divorced / Separated", emoji: "🛤️" },
  { id: "widowed", label: "Widowed", emoji: "🌙" },
  { id: "prefer-not-say", label: "Prefer not to say", emoji: "🤐" },
];

// All optional. The point isn't to label people; it's to surface relevant
// resources (e.g. screen-reader-friendly tools, first-gen scholarships,
// communities for women in STEM) without making anyone select them.
export const ACCESSIBILITY_OPTIONS = [
  { id: "visual", label: "Visual impairment", emoji: "👁️" },
  { id: "hearing", label: "Hearing impairment", emoji: "👂" },
  { id: "mobility", label: "Mobility constraints", emoji: "🦽" },
  { id: "chronic-illness", label: "Chronic illness or fatigue", emoji: "🫀" },
  { id: "neurodivergent", label: "Neurodivergent (ADHD, autism, dyslexia)", emoji: "🧠" },
  { id: "mental-health", label: "Mental-health condition", emoji: "💚" },
];

export const FIRST_GEN_OPTIONS = [
  { id: "yes", label: "Yes, I'm the first in my family to pursue this path" },
  { id: "no", label: "No, others in my family have walked similar roads" },
];

export const FINANCIAL_CONSTRAINT_OPTIONS = [
  { id: "tight", label: "Tight. I need income soon and can't take unpaid roles or expensive courses." },
  { id: "moderate", label: "Moderate. I can afford some investment but not unlimited." },
  { id: "flexible", label: "Flexible. Money isn't the main pressure right now." },
];

export const GEO_MOBILITY_OPTIONS = [
  { id: "must-stay", label: "I need to stay in my current city or region." },
  { id: "flexible", label: "I'm open to moving anywhere in my country." },
  { id: "open-abroad", label: "I'm open to moving abroad for the right opportunity." },
];

export const IDENTITY_LENS_OPTIONS = [
  { id: "women", label: "Women in male-dominated fields", emoji: "♀️" },
  { id: "first-gen", label: "First-generation professional networks", emoji: "🌱" },
  { id: "disability", label: "Disability-friendly workplaces", emoji: "♿" },
  { id: "neurodivergent", label: "Neurodivergent-friendly cultures", emoji: "🧠" },
  { id: "immigrant", label: "Immigrant / diaspora communities", emoji: "✈️" },
  { id: "faith", label: "Faith-friendly workplaces", emoji: "🕊️" },
  { id: "caregiver", label: "Caregiver-supportive employers", emoji: "🤲" },
  { id: "rural", label: "Rural-background and small-town networks", emoji: "🌾" },
];

// Universal inclusive fields that respect every culture and faith tradition.
export const FAITH_CONSIDERATION_OPTIONS = [
  { id: "prayer-time", label: "Prayer time accommodations", emoji: "🤲" },
  { id: "dietary", label: "Halal / Kosher / Vegetarian dietary observance", emoji: "🍽️" },
  { id: "holy-days", label: "Religious holidays off", emoji: "📅" },
  { id: "modest-dress", label: "Modest dress code respected", emoji: "👗" },
  { id: "no-alcohol", label: "Alcohol-free work events available", emoji: "🍵" },
  { id: "faith-community", label: "A faith community nearby matters", emoji: "🕊️" },
];

export const CAREGIVING_OPTIONS = [
  { id: "elderly-parents", label: "Caring for elderly parents", emoji: "👵" },
  { id: "young-children", label: "Caring for young children", emoji: "👶" },
  { id: "special-needs", label: "Caring for someone with special needs", emoji: "🤝" },
  { id: "extended-family", label: "Extended-family responsibilities", emoji: "🏡" },
];

export const BACKGROUND_OPTIONS = [
  { id: "rural", label: "Rural / village background" },
  { id: "small-town", label: "Small town or semi-urban" },
  { id: "urban", label: "Urban / metro" },
];

export const EDUCATION_LEVEL_OPTIONS = [
  { id: "in-school", label: "Still in school", emoji: "🎒" },
  { id: "school-done", label: "Finished school", emoji: "🎓" },
  { id: "some-college", label: "Some college, didn't finish", emoji: "📚" },
  { id: "diploma", label: "Diploma or vocational certificate", emoji: "🔧" },
  { id: "bachelors", label: "Bachelor's degree", emoji: "🎓" },
  { id: "masters-plus", label: "Master's degree or higher", emoji: "🎓" },
  { id: "self-taught", label: "Self-taught, no formal degree", emoji: "💡" },
  { id: "left-early", label: "Left formal education early", emoji: "🌱" },
];

export const DEVICE_ACCESS_OPTIONS = [
  { id: "full-setup", label: "Laptop and reliable internet", emoji: "💻" },
  { id: "laptop-limited", label: "Laptop but limited / patchy internet", emoji: "🔌" },
  { id: "mobile-only", label: "Mostly phone-based", emoji: "📱" },
  { id: "shared", label: "I share devices with others", emoji: "👥" },
];

export const LANGUAGE_OPTIONS = [
  { id: "english", label: "English", emoji: "🇬🇧" },
  // South Asia
  { id: "hindi", label: "Hindi", emoji: "🇮🇳" },
  { id: "urdu", label: "Urdu", emoji: "🇵🇰" },
  { id: "punjabi", label: "Punjabi", emoji: "🌾" },
  { id: "bengali", label: "Bengali", emoji: "🇧🇩" },
  { id: "tamil", label: "Tamil", emoji: "📜" },
  { id: "sinhala", label: "Sinhala", emoji: "🇱🇰" },
  { id: "pashto", label: "Pashto", emoji: "🇦🇫" },
  { id: "dari", label: "Dari (Afghan Persian)", emoji: "🇦🇫" },
  // Middle East
  { id: "arabic", label: "Arabic", emoji: "🇦🇪" },
  { id: "persian", label: "Persian / Farsi", emoji: "🇮🇷" },
  { id: "kurdish", label: "Kurdish", emoji: "🌄" },
  // East Asia
  { id: "mandarin", label: "Mandarin Chinese", emoji: "🇨🇳" },
  { id: "cantonese", label: "Cantonese", emoji: "🏮" },
  // Western & global
  { id: "french", label: "French", emoji: "🇫🇷" },
  { id: "spanish", label: "Spanish", emoji: "🇪🇸" },
  { id: "other", label: "Another language", emoji: "🌐" },
];

export const CAREER_STAGES = [
  { id: "entry", label: "Just starting out", note: "0–2 years of work experience" },
  { id: "early", label: "Early career", note: "3–7 years" },
  { id: "mid", label: "Mid-career", note: "8–15 years" },
  { id: "senior", label: "Senior / Experienced", note: "15+ years" },
];

// Performance / satisfaction question adapts to the user's situation.
export const CURRENT_STATUS_BY_SITUATION = {
  student: {
    question: "Overall, how are you doing in your current studies?",
    options: [
      { id: "top", label: "Top of the class with consistently high marks" },
      { id: "above", label: "Above average and doing well" },
      { id: "middle", label: "About average, somewhere in the middle of the pack" },
      { id: "below", label: "Below average and struggling in some subjects" },
      { id: "varies", label: "It varies a lot by subject" },
    ],
  },
  employed: {
    question: "How do you feel about your current work overall?",
    options: [
      { id: "thriving", label: "Thriving. Energised and growing" },
      { id: "okay", label: "It's okay. Pays the bills, teaches me a bit" },
      { id: "plateau", label: "Plateaued. No real growth lately" },
      { id: "drained", label: "Drained. It's affecting my wellbeing" },
      { id: "varies", label: "It varies a lot. Some good days, some bad" },
    ],
  },
  unemployed: {
    question: "How's the job search going?",
    options: [
      { id: "started", label: "Just started looking" },
      { id: "applying", label: "Actively applying, with some interviews lined up" },
      { id: "stuck", label: "Stuck. Lots of applications going out, very few responses" },
      { id: "burned", label: "Burnt out from rejections / silence" },
      { id: "rethinking", label: "Rethinking what I actually want" },
    ],
  },
  "career-change": {
    question: "Where are you in thinking about the change?",
    options: [
      { id: "curious", label: "Just curious. Exploring ideas" },
      { id: "researching", label: "Researching new fields seriously" },
      { id: "planning", label: "Have a target field, planning the move" },
      { id: "transitioning", label: "Already transitioning through courses or side projects" },
      { id: "stalled", label: "Stalled. I keep wanting to switch but can't seem to act" },
    ],
  },
  returning: {
    question: "How's the return-to-work feeling?",
    options: [
      { id: "ready", label: "Ready and excited" },
      { id: "rusty", label: "A bit rusty. I need to brush up" },
      { id: "anxious", label: "Anxious. Worried about the gap on my CV" },
      { id: "rebuilding", label: "Rebuilding confidence step by step" },
      { id: "exploring", label: "Considering a different path this time" },
    ],
  },
};

// Subject / Skill grid labels also adapt
export const SKILL_LABELS_BY_SITUATION = {
  student: {
    title: "How's school / college going?",
    sub: "Be honest here. There's no wrong answer. Knowing what you find easy versus hard helps a lot.",
    easyLabel: "Which subjects do you find easy and enjoyable?",
    hardLabel: "Which subjects do you find hard or boring?",
  },
  default: {
    title: "What kind of work energises you?",
    sub: "Knowing which kinds of tasks you find easy vs. draining is one of the best signals for the right career fit.",
    easyLabel: "Which areas / skills come naturally and energise you?",
    hardLabel: "Which areas / skills feel hard, slow, or draining?",
  },
};

export const PROFILE_GRADES = [
  { id: "grade-10", label: "Grade 10 / Year 11 / O-Levels", note: "Foundation year. Stream and subject decisions are coming up." },
  { id: "grade-11", label: "Grade 11 / Year 12 / 1st year A-Level", note: "Stream chosen. Time to explore the options." },
  { id: "grade-12", label: "Grade 12 / Year 13 / 2nd year A-Level", note: "Applying to colleges / entrance exams." },
  { id: "uni-1", label: "1st year University / College", note: "Just started. Sometimes wondering if it's the right fit." },
  { id: "uni-2", label: "2nd–3rd year University / College", note: "Middle of the degree. Thinking about specialisations and internships." },
  { id: "uni-final", label: "Final year / Recent graduate", note: "Career launch / postgrad / pivot decisions." },
];

export const CURRENT_PERFORMANCE = [
  { id: "top", label: "Top of the class with consistently high marks" },
  { id: "above", label: "Above average and doing well" },
  { id: "middle", label: "About average, somewhere in the middle of the pack" },
  { id: "below", label: "Below average and struggling in some subjects" },
  { id: "varies", label: "It varies a lot by subject" },
];
