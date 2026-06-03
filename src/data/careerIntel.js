// Comprehensive career intelligence: salary bands, market demand, skill
// roadmaps, day-in-life videos, real public stories, and required-skill
// taxonomy used by the gap analyser.
//
// Salary data is DIRECTIONAL — figures vary enormously by city, employer,
// and individual. All salaries are shown in local currency and flagged as
// "directional ranges, not a guarantee."

// ──────────────────────────────────────────────────────────────────
// Job-board templates per country
// ──────────────────────────────────────────────────────────────────

export const JOB_BOARDS = {
  IN: [
    { name: "Naukri", url: (role) => `https://www.naukri.com/${encodeURIComponent(role)}-jobs` },
    { name: "LinkedIn Jobs", url: (role) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&location=India` },
    { name: "Indeed India", url: (role) => `https://in.indeed.com/jobs?q=${encodeURIComponent(role)}` },
    { name: "Instahyre", url: () => `https://www.instahyre.com/jobs/` },
  ],
  PK: [
    { name: "Rozee.pk", url: (role) => `https://www.rozee.pk/job/jsearch/q/${encodeURIComponent(role)}` },
    { name: "LinkedIn Jobs", url: (role) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&location=Pakistan` },
    { name: "Mustakbil", url: (role) => `https://www.mustakbil.com/jobs?keyword=${encodeURIComponent(role)}` },
    { name: "Indeed Pakistan", url: (role) => `https://pk.indeed.com/jobs?q=${encodeURIComponent(role)}` },
  ],
  UK: [
    { name: "LinkedIn Jobs", url: (role) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&location=United+Kingdom` },
    { name: "Indeed UK", url: (role) => `https://uk.indeed.com/jobs?q=${encodeURIComponent(role)}` },
    { name: "Reed", url: (role) => `https://www.reed.co.uk/jobs/${encodeURIComponent(role)}-jobs` },
    { name: "totaljobs", url: (role) => `https://www.totaljobs.com/jobs/${encodeURIComponent(role)}` },
  ],
  US: [
    { name: "LinkedIn Jobs", url: (role) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&location=United+States` },
    { name: "Indeed", url: (role) => `https://www.indeed.com/jobs?q=${encodeURIComponent(role)}` },
    { name: "Glassdoor", url: (role) => `https://www.glassdoor.com/Job/jobs.htm?sc.keyword=${encodeURIComponent(role)}` },
    { name: "Wellfound (startups)", url: (role) => `https://wellfound.com/role/${encodeURIComponent(role.toLowerCase().replace(/\s+/g, "-"))}` },
  ],
  CA: [
    { name: "LinkedIn Jobs", url: (role) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&location=Canada` },
    { name: "Indeed Canada", url: (role) => `https://ca.indeed.com/jobs?q=${encodeURIComponent(role)}` },
    { name: "Job Bank (Government)", url: (role) => `https://www.jobbank.gc.ca/jobsearch/jobsearch?searchstring=${encodeURIComponent(role)}` },
    { name: "Workopolis", url: (role) => `https://www.workopolis.com/jobsearch/find-jobs?ak=${encodeURIComponent(role)}` },
  ],
  BD: [
    { name: "Bdjobs", url: (role) => `https://jobs.bdjobs.com/jobsearch.asp?txtsearch=${encodeURIComponent(role)}` },
    { name: "LinkedIn Jobs", url: (role) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&location=Bangladesh` },
    { name: "Indeed (Bangladesh)", url: (role) => `https://www.indeed.com/jobs?q=${encodeURIComponent(role)}&l=Bangladesh` },
    { name: "Skill.jobs", url: (role) => `https://skill.jobs/?s=${encodeURIComponent(role)}` },
  ],
  AU: [
    { name: "Seek", url: (role) => `https://www.seek.com.au/${encodeURIComponent(role)}-jobs` },
    { name: "LinkedIn Jobs", url: (role) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&location=Australia` },
    { name: "Indeed Australia", url: (role) => `https://au.indeed.com/jobs?q=${encodeURIComponent(role)}` },
    { name: "Jora", url: (role) => `https://au.jora.com/j?q=${encodeURIComponent(role)}` },
  ],
  AE: [
    { name: "Bayt", url: (role) => `https://www.bayt.com/en/uae/jobs/${encodeURIComponent(role.toLowerCase().replace(/\s+/g, "-"))}-jobs/` },
    { name: "GulfTalent", url: (role) => `https://www.gulftalent.com/uae/jobs/title/${encodeURIComponent(role.toLowerCase().replace(/\s+/g, "-"))}` },
    { name: "LinkedIn Jobs", url: (role) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&location=United+Arab+Emirates` },
    { name: "Naukrigulf", url: (role) => `https://www.naukrigulf.com/${encodeURIComponent(role.toLowerCase().replace(/\s+/g, "-"))}-jobs-in-uae` },
  ],
  GL: [
    { name: "LinkedIn Jobs (global)", url: (role) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}` },
    { name: "Indeed (global)", url: (role) => `https://www.indeed.com/jobs?q=${encodeURIComponent(role)}` },
    { name: "Remote OK (remote-first roles)", url: (role) => `https://remoteok.com/remote-${encodeURIComponent(role.toLowerCase().replace(/\s+/g, "-"))}-jobs` },
    { name: "We Work Remotely", url: (role) => `https://weworkremotely.com/remote-jobs/search?term=${encodeURIComponent(role)}` },
  ],
  LK: [
    { name: "TopJobs.lk", url: (role) => `https://topjobs.lk/employer/JobAdvertismentServlet?ac=Searchx&txtSearchWord=${encodeURIComponent(role)}` },
    { name: "LinkedIn Jobs", url: (role) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&location=Sri%20Lanka` },
    { name: "ikman.lk Jobs", url: (role) => `https://ikman.lk/en/ads/sri-lanka/jobs?query=${encodeURIComponent(role)}` },
    { name: "XpressJobs", url: (role) => `https://xpressjobs.lk/searchresult?q=${encodeURIComponent(role)}` },
  ],
  AF: [
    { name: "Acbar Jobs", url: () => `https://www.acbar.org/jobs` },
    { name: "LinkedIn Jobs", url: (role) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&location=Afghanistan` },
    { name: "Jobs.af", url: (role) => `https://www.jobs.af/jobs?keyword=${encodeURIComponent(role)}` },
    { name: "Remote OK (remote roles)", url: (role) => `https://remoteok.com/remote-${encodeURIComponent(role.toLowerCase().replace(/\s+/g, "-"))}-jobs` },
  ],
  IR: [
    { name: "Jobinja", url: (role) => `https://jobinja.ir/jobs?filters%5Bkeywords%5D%5B%5D=${encodeURIComponent(role)}` },
    { name: "Jobvision", url: (role) => `https://jobvision.ir/jobs/keyword/${encodeURIComponent(role)}` },
    { name: "LinkedIn Jobs", url: (role) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&location=Iran` },
    { name: "Iran Talent", url: (role) => `https://www.irantalent.com/en/jobs?q=${encodeURIComponent(role)}` },
  ],
  IQ: [
    { name: "Bayt (Iraq)", url: (role) => `https://www.bayt.com/en/iraq/jobs/${encodeURIComponent(role.toLowerCase().replace(/\s+/g, "-"))}-jobs/` },
    { name: "LinkedIn Jobs", url: (role) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&location=Iraq` },
    { name: "Career Iraq", url: (role) => `https://www.careeriraq.com/jobs?keywords=${encodeURIComponent(role)}` },
    { name: "Iraq Jobs (Career Iraq)", url: (role) => `https://www.careeriraq.com/jobs?keywords=${encodeURIComponent(role)}` },
  ],
  LB: [
    { name: "Bayt (Lebanon)", url: (role) => `https://www.bayt.com/en/lebanon/jobs/${encodeURIComponent(role.toLowerCase().replace(/\s+/g, "-"))}-jobs/` },
    { name: "LinkedIn Jobs", url: (role) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&location=Lebanon` },
    { name: "Hirelebanese", url: (role) => `https://www.hirelebanese.com/jobsearch.aspx?KeyWords=${encodeURIComponent(role)}` },
    { name: "GulfTalent", url: (role) => `https://www.gulftalent.com/lebanon/jobs/title/${encodeURIComponent(role.toLowerCase().replace(/\s+/g, "-"))}` },
  ],
  CN: [
    { name: "51job (前程无忧)", url: (role) => `https://search.51job.com/list/000000,000000,0000,00,9,99,${encodeURIComponent(role)},2,1.html` },
    { name: "Zhaopin (智联招聘)", url: (role) => `https://sou.zhaopin.com/?kw=${encodeURIComponent(role)}` },
    { name: "Boss Zhipin (Boss直聘)", url: (role) => `https://www.zhipin.com/web/geek/job?query=${encodeURIComponent(role)}` },
    { name: "LinkedIn Jobs", url: (role) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&location=China` },
  ],
};

// ──────────────────────────────────────────────────────────────────
// Master skill taxonomy used by the gap analyser
// ──────────────────────────────────────────────────────────────────

export const SKILLS = {
  // Technical
  coding: { label: "Coding / Programming", category: "technical" },
  data: { label: "Data analysis", category: "technical" },
  math: { label: "Mathematics", category: "technical" },
  stats: { label: "Statistics", category: "technical" },
  ml: { label: "Machine learning", category: "technical" },
  systemsThinking: { label: "Systems thinking", category: "technical" },
  // Creative
  design: { label: "Visual design", category: "creative" },
  writing: { label: "Writing", category: "creative" },
  storytelling: { label: "Storytelling", category: "creative" },
  videoProduction: { label: "Video / audio production", category: "creative" },
  // Interpersonal
  empathy: { label: "Empathy", category: "interpersonal" },
  communication: { label: "Communication", category: "interpersonal" },
  publicSpeaking: { label: "Public speaking", category: "interpersonal" },
  teaching: { label: "Teaching / explaining", category: "interpersonal" },
  // Business / leadership
  leadership: { label: "Leadership", category: "leadership" },
  negotiation: { label: "Negotiation", category: "leadership" },
  salesPersuasion: { label: "Sales / persuasion", category: "leadership" },
  strategy: { label: "Strategy", category: "leadership" },
  finance: { label: "Financial literacy", category: "leadership" },
  // Operational
  projectMgmt: { label: "Project management", category: "operational" },
  attentionDetail: { label: "Attention to detail", category: "operational" },
  research: { label: "Research", category: "operational" },
  // Practical
  handsOn: { label: "Hands-on work", category: "practical" },
  problemSolving: { label: "Problem-solving", category: "practical" },
  craftsmanship: { label: "Craftsmanship", category: "practical" },
  // Self
  resilience: { label: "Resilience", category: "self" },
  selfDirection: { label: "Self-direction", category: "self" },
};

// Maps user signals (interests, easy subjects, traits) into skills they
// likely already have. We're deliberately generous; the gap analyser just
// surfaces the *delta*, it doesn't gatekeep.
export function inferUserSkills(answers) {
  const have = new Set();
  const interests = new Set(answers.interests || []);
  const easy = new Set(answers.easySubjects || []);

  if (interests.has("technology") || easy.has("computer")) have.add("coding");
  if (interests.has("logic") || easy.has("math")) have.add("math");
  if (easy.has("statistics")) have.add("stats");
  if (interests.has("problem-solving")) have.add("problemSolving");
  if (interests.has("research") || easy.has("psychology") || easy.has("biology")) have.add("research");
  if (interests.has("creativity") || easy.has("art")) have.add("design");
  if (interests.has("storytelling") || easy.has("english")) have.add("storytelling");
  if (interests.has("communication") || easy.has("english")) have.add("communication");
  if (interests.has("helping-people") || easy.has("psychology")) have.add("empathy");
  if (interests.has("leadership")) have.add("leadership");
  if (interests.has("business") || easy.has("business") || easy.has("economics")) have.add("finance");
  if (interests.has("building") || easy.has("vocational")) have.add("handsOn");

  // Trait-based inferences
  const traits = answers.strengthAnswers || {};
  for (const a of Object.values(traits)) {
    if (a?.traits?.conventional) have.add("attentionDetail");
    if (a?.traits?.enterprising) have.add("salesPersuasion");
    if (a?.traits?.social) have.add("teaching");
  }

  return Array.from(have);
}

// ──────────────────────────────────────────────────────────────────
// Per-career intelligence: salary, demand, videos, roadmap, gap, stories
// ──────────────────────────────────────────────────────────────────

// Salary is shown as { entry, mid, senior } per country, in local currency.
// Demand is { IN, PK, UK, US, CA } each one of "high" | "med" | "low".
// jobSearchTerm is what's plugged into each country's job board URL.

export const CAREER_INTEL = {
  "software-engineer": {
    jobSearchTerm: "Software Engineer",
    salary: {
      IN: { entry: "₹6–12 LPA", mid: "₹18–35 LPA", senior: "₹40–80 LPA+" },
      PK: { entry: "PKR 80K–150K /mo", mid: "PKR 250K–500K /mo", senior: "PKR 600K+ /mo" },
      UK: { entry: "£30–45K", mid: "£55–80K", senior: "£90–140K+" },
      US: { entry: "$70–110K", mid: "$130–180K", senior: "$200–400K+" },
      CA: { entry: "C$65–90K", mid: "C$100–140K", senior: "C$150–250K+" },
    },
    demand: { IN: "high", PK: "high", UK: "high", US: "high", CA: "high" },
    videoSearch: "day in the life software engineer",
    requiredSkills: ["coding", "problemSolving", "systemsThinking", "math", "communication", "selfDirection"],
    roadmap: [
      { phase: "Foundation (0–3 months)", milestones: [
        { label: "Learn one language deeply (Python or JavaScript)" },
        { label: "Build 3 small command-line projects" },
        { label: "Get comfortable with Git and GitHub" },
      ]},
      { phase: "First real projects (3–6 months)", milestones: [
        { label: "Build a full-stack web app from scratch" },
        { label: "Contribute to one open-source project" },
        { label: "Learn data structures + algorithms basics" },
      ]},
      { phase: "Job-ready (6–12 months)", milestones: [
        { label: "Deploy 2–3 portfolio projects on the public web" },
        { label: "Do 100+ LeetCode/HackerRank problems" },
        { label: "Start interviewing; aim for the first offer" },
      ]},
      { phase: "Level up (1–3 years)", milestones: [
        { label: "Specialise: backend, frontend, mobile, or ML" },
        { label: "Learn a second paradigm (typed, functional, or systems)" },
        { label: "Contribute to architecture decisions at work" },
      ]},
    ],
    stories: [
      {
        name: "Patrick Collison",
        role: "CEO / Co-founder, Stripe",
        country: "Ireland → USA",
        summary: "Started programming at 8, won the BT Young Scientist Award at 16, dropped out of MIT to co-found Stripe with his brother John in 2010. Stripe now processes hundreds of billions in payments annually.",
        sourceUrl: "https://en.wikipedia.org/wiki/Patrick_Collison",
      },
      {
        name: "Tracy Chou",
        role: "Founder & CEO, Block Party",
        country: "USA",
        summary: "Stanford CS grad. Engineer at Quora and Pinterest. Founded Block Party in 2018 to tackle online harassment. Outspoken voice on diversity in tech.",
        sourceUrl: "https://en.wikipedia.org/wiki/Tracy_Chou",
      },
    ],
  },

  "data-scientist": {
    jobSearchTerm: "Data Scientist",
    salary: {
      IN: { entry: "₹8–15 LPA", mid: "₹20–40 LPA", senior: "₹50–100 LPA+" },
      PK: { entry: "PKR 100K–200K /mo", mid: "PKR 300K–600K /mo", senior: "PKR 700K+ /mo" },
      UK: { entry: "£35–50K", mid: "£60–90K", senior: "£100–160K+" },
      US: { entry: "$80–120K", mid: "$140–200K", senior: "$220–450K+" },
      CA: { entry: "C$70–100K", mid: "C$110–160K", senior: "C$170–280K+" },
    },
    demand: { IN: "high", PK: "high", UK: "high", US: "high", CA: "high" },
    videoSearch: "day in the life data scientist",
    requiredSkills: ["math", "stats", "coding", "ml", "data", "research", "communication"],
    roadmap: [
      { phase: "Foundations (0–3 months)", milestones: [
        { label: "Master Python + pandas + NumPy" },
        { label: "Brush up linear algebra, probability, and statistics" },
        { label: "Learn SQL until it's second nature" },
      ]},
      { phase: "Core data work (3–6 months)", milestones: [
        { label: "Complete the Kaggle Learn micro-courses" },
        { label: "Take Andrew Ng's ML specialisation" },
        { label: "Reproduce 3 published Kaggle notebooks end-to-end" },
      ]},
      { phase: "Portfolio (6–12 months)", milestones: [
        { label: "Compete in 2–3 Kaggle competitions" },
        { label: "Publish 2 case-study notebooks to GitHub or Medium" },
        { label: "Network on LinkedIn; reach out to 10 working DS folks" },
      ]},
      { phase: "Specialise (1–3 years)", milestones: [
        { label: "Pick a track: NLP, computer vision, recsys, MLOps" },
        { label: "Ship a model into production at work" },
        { label: "Speak at a meetup or write technical blog posts" },
      ]},
    ],
    stories: [
      {
        name: "Hadley Wickham",
        role: "Chief Scientist, Posit (RStudio)",
        country: "New Zealand → USA",
        summary: "Statistician who built ggplot2 and the tidyverse, transforming how millions of analysts work with data. PhD from Iowa State.",
        sourceUrl: "https://en.wikipedia.org/wiki/Hadley_Wickham",
      },
      {
        name: "DJ Patil",
        role: "Former US Chief Data Scientist",
        country: "USA",
        summary: "Co-coined the term 'data scientist' at LinkedIn. PhD in applied mathematics. Served as the first US Chief Data Scientist under President Obama.",
        sourceUrl: "https://en.wikipedia.org/wiki/DJ_Patil",
      },
    ],
  },

  doctor: {
    jobSearchTerm: "Physician Doctor",
    salary: {
      IN: { entry: "₹6–10 LPA", mid: "₹15–35 LPA", senior: "₹50 LPA–2 Cr+" },
      PK: { entry: "PKR 80K–150K /mo", mid: "PKR 250K–500K /mo", senior: "PKR 800K+ /mo" },
      UK: { entry: "£32–45K", mid: "£60–95K", senior: "£100–180K+" },
      US: { entry: "$60–80K (resident)", mid: "$220–350K", senior: "$350–700K+" },
      CA: { entry: "C$60–80K (resident)", mid: "C$200–350K", senior: "C$300–600K+" },
    },
    demand: { IN: "high", PK: "high", UK: "high", US: "high", CA: "high" },
    videoSearch: "day in the life doctor physician resident",
    requiredSkills: ["empathy", "communication", "research", "attentionDetail", "resilience", "problemSolving"],
    roadmap: [
      { phase: "Pre-med (school)", milestones: [
        { label: "Excel at biology, chemistry, and physics" },
        { label: "Crack the entrance exam (NEET, MDCAT, UCAT, MCAT)" },
        { label: "Get clinical exposure: shadow a doctor or volunteer" },
      ]},
      { phase: "Medical school (4–6 years)", milestones: [
        { label: "Build foundations: anatomy, physiology, pharmacology" },
        { label: "Excel in clinical rotations across specialities" },
        { label: "Decide on a speciality based on what energises you" },
      ]},
      { phase: "Residency / housejob (3–7 years)", milestones: [
        { label: "Pass licensing exams (USMLE, PLAB, NEET PG, FCPS)" },
        { label: "Complete supervised practice in your chosen speciality" },
        { label: "Build a research or surgical record if it matters" },
      ]},
      { phase: "Independent practice (lifelong)", milestones: [
        { label: "Get board-certified and start independent practice" },
        { label: "Develop a sub-speciality and reputation" },
        { label: "Mentor the next cohort of junior doctors" },
      ]},
    ],
    stories: [
      {
        name: "Atul Gawande",
        role: "Surgeon, author of 'Being Mortal'",
        country: "USA (Indian heritage)",
        summary: "Surgeon at Brigham and Women's Hospital, MacArthur Fellow, and best-selling author who reshaped how the world thinks about end-of-life care and medical checklists.",
        sourceUrl: "https://en.wikipedia.org/wiki/Atul_Gawande",
      },
      {
        name: "Devi Shetty",
        role: "Founder, Narayana Health",
        country: "India",
        summary: "Cardiac surgeon who built Narayana Health, performing the world's lowest-cost heart surgeries. Treated over 100,000 patients personally.",
        sourceUrl: "https://en.wikipedia.org/wiki/Devi_Shetty",
      },
    ],
  },

  psychologist: {
    jobSearchTerm: "Psychologist Counsellor",
    salary: {
      IN: { entry: "₹3–6 LPA", mid: "₹8–18 LPA", senior: "₹20–50 LPA+" },
      PK: { entry: "PKR 40K–80K /mo", mid: "PKR 100K–200K /mo", senior: "PKR 250K+ /mo" },
      UK: { entry: "£28–40K", mid: "£50–70K", senior: "£80–120K+" },
      US: { entry: "$55–75K", mid: "$80–120K", senior: "$130–250K+" },
      CA: { entry: "C$55–75K", mid: "C$80–120K", senior: "C$130–200K+" },
    },
    demand: { IN: "high", PK: "med", UK: "high", US: "high", CA: "high" },
    videoSearch: "day in the life clinical psychologist therapist",
    requiredSkills: ["empathy", "communication", "research", "attentionDetail", "resilience"],
    roadmap: [
      { phase: "Undergrad (3–4 years)", milestones: [
        { label: "Major or honours in psychology" },
        { label: "Volunteer at a helpline or mental-health NGO" },
        { label: "Build research experience under a professor" },
      ]},
      { phase: "Master's (1–2 years)", milestones: [
        { label: "Choose: Clinical, Counselling, Industrial, or School psych" },
        { label: "Complete supervised clinical hours" },
        { label: "Start specialising in an area like trauma, child, or addiction" },
      ]},
      { phase: "Licensure (1–4 years)", milestones: [
        { label: "Doctoral or MPhil depending on country (DClinPsy, PsyD, PhD)" },
        { label: "Complete supervised practice for licensure" },
        { label: "Pass the country's licensing exam" },
      ]},
      { phase: "Practice (lifelong)", milestones: [
        { label: "Build a caseload in your speciality" },
        { label: "Pursue certifications in modalities (CBT, EMDR, IFS, etc.)" },
        { label: "Optional: teach, write, or supervise junior practitioners" },
      ]},
    ],
    stories: [
      {
        name: "Esther Perel",
        role: "Psychotherapist, author of 'Mating in Captivity'",
        country: "Belgium → USA",
        summary: "Couples therapist whose TED talks have been viewed 30+ million times. Transformed mainstream conversations about modern relationships.",
        sourceUrl: "https://en.wikipedia.org/wiki/Esther_Perel",
      },
    ],
  },

  designer: {
    jobSearchTerm: "Product Designer UX",
    salary: {
      IN: { entry: "₹5–10 LPA", mid: "₹15–30 LPA", senior: "₹35–70 LPA+" },
      PK: { entry: "PKR 70K–150K /mo", mid: "PKR 200K–400K /mo", senior: "PKR 500K+ /mo" },
      UK: { entry: "£28–42K", mid: "£50–75K", senior: "£85–130K+" },
      US: { entry: "$70–100K", mid: "$110–160K", senior: "$170–300K+" },
      CA: { entry: "C$60–85K", mid: "C$95–130K", senior: "C$140–200K+" },
    },
    demand: { IN: "high", PK: "med", UK: "high", US: "high", CA: "high" },
    videoSearch: "day in the life product designer UX",
    requiredSkills: ["design", "empathy", "communication", "research", "problemSolving", "storytelling"],
    roadmap: [
      { phase: "Build the eye (0–3 months)", milestones: [
        { label: "Study 100 great products. Save what works and why" },
        { label: "Learn Figma until it's invisible to you" },
        { label: "Read 'Refactoring UI' and 'Don't Make Me Think'" },
      ]},
      { phase: "First portfolio (3–9 months)", milestones: [
        { label: "Redesign 3 real apps end-to-end with case studies" },
        { label: "Interview 5 real users for one of those redesigns" },
        { label: "Get feedback from senior designers on ADPList" },
      ]},
      { phase: "Land your first role (9–15 months)", milestones: [
        { label: "Apply to 30 roles, do 10 portfolio reviews" },
        { label: "Take a design test or contract project" },
        { label: "Get the first product-design offer" },
      ]},
      { phase: "Grow into staff (2–5 years)", milestones: [
        { label: "Own end-to-end features in production" },
        { label: "Develop a speciality: research, systems, motion, or content" },
        { label: "Mentor juniors and write publicly about design" },
      ]},
    ],
    stories: [
      {
        name: "Julie Zhuo",
        role: "Former VP Design at Facebook, author of 'The Making of a Manager'",
        country: "USA",
        summary: "Joined Facebook as Mark Zuckerberg's first design intern at 22. Built Facebook's design team for over a decade.",
        sourceUrl: "https://en.wikipedia.org/wiki/Julie_Zhuo",
      },
      {
        name: "Tobias van Schneider",
        role: "Designer, co-founder of Semplice",
        country: "Austria → USA",
        summary: "Self-taught designer who worked as Design Lead at Spotify NYC. Built Semplice, a portfolio tool used by tens of thousands of designers.",
        sourceUrl: "https://www.vanschneider.com",
      },
    ],
  },

  "civil-engineer": {
    jobSearchTerm: "Engineer Civil Mechanical Electrical",
    salary: {
      IN: { entry: "₹4–7 LPA", mid: "₹10–20 LPA", senior: "₹25–50 LPA+" },
      PK: { entry: "PKR 60K–120K /mo", mid: "PKR 180K–350K /mo", senior: "PKR 400K+ /mo" },
      UK: { entry: "£28–38K", mid: "£45–65K", senior: "£75–110K+" },
      US: { entry: "$65–85K", mid: "$95–130K", senior: "$140–200K+" },
      CA: { entry: "C$60–80K", mid: "C$90–120K", senior: "C$130–180K+" },
    },
    demand: { IN: "med", PK: "med", UK: "high", US: "high", CA: "high" },
    videoSearch: "day in the life engineer civil mechanical",
    requiredSkills: ["math", "problemSolving", "handsOn", "attentionDetail", "systemsThinking", "projectMgmt"],
    roadmap: [
      { phase: "School (Grades 11–12)", milestones: [
        { label: "Strong foundation in physics + mathematics" },
        { label: "Crack the relevant entrance exam (JEE, ECAT, A-Levels)" },
      ]},
      { phase: "Engineering degree (4 years)", milestones: [
        { label: "Pick your discipline early but stay broad year 1" },
        { label: "Land a summer internship every year" },
        { label: "Compete in design challenges (BAJA, robotics, IEEE)" },
      ]},
      { phase: "Early career (0–4 years)", milestones: [
        { label: "Get fundamentals certification (FE in US, EIT in Canada)" },
        { label: "Find a senior mentor at work" },
        { label: "Build a public-facing project on your CV" },
      ]},
      { phase: "Chartered / PE (4–8 years)", milestones: [
        { label: "Complete supervised experience for your licence" },
        { label: "Pass the professional exam (PE, CEng, P.Eng)" },
        { label: "Choose: deep technical track, or management" },
      ]},
    ],
    stories: [
      {
        name: "E. Sreedharan",
        role: "Engineer, builder of the Delhi Metro",
        country: "India",
        summary: "Known as the 'Metro Man of India'. Led the Konkan Railway and Delhi Metro projects, finishing both on time and under budget.",
        sourceUrl: "https://en.wikipedia.org/wiki/E._Sreedharan",
      },
    ],
  },

  "business-finance": {
    jobSearchTerm: "Business Analyst Finance Consultant",
    salary: {
      IN: { entry: "₹5–10 LPA", mid: "₹15–35 LPA", senior: "₹40–100 LPA+" },
      PK: { entry: "PKR 70K–150K /mo", mid: "PKR 250K–500K /mo", senior: "PKR 700K+ /mo" },
      UK: { entry: "£30–45K", mid: "£60–100K", senior: "£120–250K+" },
      US: { entry: "$75–110K", mid: "$130–220K", senior: "$250–600K+" },
      CA: { entry: "C$60–90K", mid: "C$100–160K", senior: "C$180–350K+" },
    },
    demand: { IN: "med", PK: "med", UK: "high", US: "high", CA: "high" },
    videoSearch: "day in the life investment banker consultant",
    requiredSkills: ["finance", "communication", "salesPersuasion", "strategy", "attentionDetail", "negotiation"],
    roadmap: [
      { phase: "School (Grades 11–12)", milestones: [
        { label: "Commerce stream or maths-heavy track" },
        { label: "Build basic financial literacy: read 'The Intelligent Investor'" },
      ]},
      { phase: "Undergrad (3–4 years)", milestones: [
        { label: "Business, economics, finance, or accounting major" },
        { label: "Land summer internships at firms you'd want to join" },
        { label: "Start CFA Level 1 prep if finance-focused" },
      ]},
      { phase: "Early career (0–4 years)", milestones: [
        { label: "Analyst role at a bank, consultancy, or corporate strategy team" },
        { label: "Build the modelling toolkit (Excel, financial models, decks)" },
        { label: "Develop one industry deep-knowledge area" },
      ]},
      { phase: "Step up (4–10 years)", milestones: [
        { label: "Move to associate, then VP / manager" },
        { label: "Consider top MBA (Harvard, Wharton, IIM-A, LBS, Stanford)" },
        { label: "Build the network that will define the next decade" },
      ]},
    ],
    stories: [
      {
        name: "Indra Nooyi",
        role: "Former CEO, PepsiCo",
        country: "India → USA",
        summary: "From Madras Christian College to running one of the world's largest companies. Led PepsiCo for 12 years, growing revenue 80%.",
        sourceUrl: "https://en.wikipedia.org/wiki/Indra_Nooyi",
      },
    ],
  },

  lawyer: {
    jobSearchTerm: "Lawyer Attorney Solicitor Advocate",
    salary: {
      IN: { entry: "₹4–8 LPA", mid: "₹12–30 LPA", senior: "₹50 LPA–5 Cr+" },
      PK: { entry: "PKR 50K–100K /mo", mid: "PKR 150K–350K /mo", senior: "PKR 500K+ /mo" },
      UK: { entry: "£28–55K", mid: "£60–120K", senior: "£150–500K+" },
      US: { entry: "$70–180K", mid: "$140–300K", senior: "$300K–2M+" },
      CA: { entry: "C$65–110K", mid: "C$120–200K", senior: "C$200–500K+" },
    },
    demand: { IN: "med", PK: "med", UK: "med", US: "med", CA: "med" },
    videoSearch: "day in the life lawyer attorney",
    requiredSkills: ["communication", "writing", "research", "negotiation", "attentionDetail", "publicSpeaking"],
    roadmap: [
      { phase: "School", milestones: [
        { label: "Build strong reading + writing habits" },
        { label: "Crack the entrance test (CLAT, LNAT, LSAT)" },
      ]},
      { phase: "Law degree (3–5 years)", milestones: [
        { label: "Top of your moot court / debate game" },
        { label: "Intern at courts, NGOs, and law firms" },
        { label: "Find a specialism: corporate, criminal, IP, tax, family" },
      ]},
      { phase: "Bar / qualification (1–3 years)", milestones: [
        { label: "Pass the Bar exam in your jurisdiction" },
        { label: "Join a firm, chambers, or take the in-house route" },
        { label: "Build a record on smaller cases first" },
      ]},
      { phase: "Establish (3–10 years)", milestones: [
        { label: "Get to senior associate or partner track" },
        { label: "Build a reputation in one specific area of law" },
        { label: "Consider judiciary, academia, or independent practice" },
      ]},
    ],
    stories: [
      {
        name: "Bryan Stevenson",
        role: "Founder, Equal Justice Initiative",
        country: "USA",
        summary: "Lawyer and author of 'Just Mercy'. Has saved over 135 wrongfully condemned death-row prisoners. Built EJI's National Memorial for Peace and Justice.",
        sourceUrl: "https://en.wikipedia.org/wiki/Bryan_Stevenson",
      },
    ],
  },

  "teacher-educator": {
    jobSearchTerm: "Teacher Educator",
    salary: {
      IN: { entry: "₹3–6 LPA", mid: "₹7–15 LPA", senior: "₹18–40 LPA+" },
      PK: { entry: "PKR 40K–80K /mo", mid: "PKR 100K–200K /mo", senior: "PKR 250K+ /mo" },
      UK: { entry: "£28–35K", mid: "£40–55K", senior: "£60–95K+" },
      US: { entry: "$45–60K", mid: "$60–80K", senior: "$80–120K+" },
      CA: { entry: "C$50–65K", mid: "C$70–90K", senior: "C$95–120K+" },
    },
    demand: { IN: "high", PK: "high", UK: "high", US: "high", CA: "high" },
    videoSearch: "day in the life teacher educator",
    requiredSkills: ["communication", "empathy", "publicSpeaking", "teaching", "resilience", "attentionDetail"],
    roadmap: [
      { phase: "Undergrad", milestones: [
        { label: "Major in the subject you want to teach (or education)" },
        { label: "Tutor or coach kids to test the calling" },
      ]},
      { phase: "Teacher qualification", milestones: [
        { label: "B.Ed, PGCE, or state teacher prep program" },
        { label: "Complete supervised teaching placements" },
        { label: "Pass the licensure exam (CTET, QTS, state cert)" },
      ]},
      { phase: "First 3 years teaching", milestones: [
        { label: "Find a school where you fit and have mentors" },
        { label: "Develop your classroom-management style" },
        { label: "Start observing other teachers actively" },
      ]},
      { phase: "Master teacher / leader (3+ years)", milestones: [
        { label: "Pick a path: deeper teaching craft, or curriculum / leadership" },
        { label: "Pursue a master's, NBPTS, or department head role" },
        { label: "Mentor newer teachers, shape your school" },
      ]},
    ],
    stories: [
      {
        name: "Salman Khan",
        role: "Founder, Khan Academy",
        country: "USA",
        summary: "Hedge fund analyst who started tutoring his cousin via YouTube. Built Khan Academy into the world's most-used free education platform.",
        sourceUrl: "https://en.wikipedia.org/wiki/Sal_Khan",
      },
    ],
  },

  "content-creator": {
    jobSearchTerm: "Content Creator Journalist Writer",
    salary: {
      IN: { entry: "Highly variable; ₹0–10 LPA", mid: "₹10–50 LPA", senior: "Top earners ₹1 Cr+" },
      PK: { entry: "Highly variable; PKR 0–150K /mo", mid: "PKR 150K–500K /mo", senior: "PKR 1M+ /mo (top creators)" },
      UK: { entry: "£20–35K (entry journalism)", mid: "£40–70K", senior: "£80K–multi-million (top creators)" },
      US: { entry: "$30–55K (entry journalism)", mid: "$60–120K", senior: "$150K–millions (top creators)" },
      CA: { entry: "C$40–55K", mid: "C$65–100K", senior: "C$120K+ (top creators much more)" },
    },
    demand: { IN: "high", PK: "high", UK: "high", US: "high", CA: "high" },
    videoSearch: "day in the life youtuber content creator",
    requiredSkills: ["storytelling", "videoProduction", "writing", "communication", "resilience", "selfDirection"],
    roadmap: [
      { phase: "Find your voice (0–6 months)", milestones: [
        { label: "Pick ONE platform and ONE niche to start" },
        { label: "Publish 20–30 pieces just to find your style" },
        { label: "Study 5 creators you admire; learn their structure" },
      ]},
      { phase: "Get traction (6–18 months)", milestones: [
        { label: "Post consistently. Weekly, never less" },
        { label: "Engage in your niche's community" },
        { label: "Cross-post: same content, different platforms" },
      ]},
      { phase: "Monetise (18–36 months)", milestones: [
        { label: "Launch one paid product (course, newsletter, community)" },
        { label: "Build an email list — your audience that's truly yours" },
        { label: "Get sponsorship or platform monetisation" },
      ]},
      { phase: "Scale (3+ years)", milestones: [
        { label: "Hire a team (editor, manager, ops)" },
        { label: "Diversify income across 3+ revenue streams" },
        { label: "Build something that compounds beyond yourself" },
      ]},
    ],
    stories: [
      {
        name: "Marques Brownlee",
        role: "Tech YouTuber (MKBHD)",
        country: "USA",
        summary: "Started reviewing tech in his bedroom at 15. Now has 19M+ subscribers, interviews CEOs and presidents, and is widely considered the most influential tech reviewer alive.",
        sourceUrl: "https://en.wikipedia.org/wiki/Marques_Brownlee",
      },
      {
        name: "Bhuvan Bam",
        role: "Content creator (BB Ki Vines) and musician",
        country: "India",
        summary: "Started solo on YouTube in 2015 with comedy sketches voicing every character himself. First Indian creator to cross 10M subscribers, then 20M+. Built a production studio and Netflix specials from scratch.",
        sourceUrl: "https://en.wikipedia.org/wiki/Bhuvan_Bam",
      },
    ],
  },

  entrepreneur: {
    jobSearchTerm: "Founder Entrepreneur Startup",
    salary: {
      IN: { entry: "Often ₹0 until product-market fit", mid: "₹20–60 LPA + equity", senior: "₹1 Cr+ + equity (or much more)" },
      PK: { entry: "Often PKR 0 early on", mid: "PKR 300K–600K /mo + equity", senior: "PKR 1M+ /mo + equity" },
      UK: { entry: "Often £0 early", mid: "£60–100K + equity", senior: "£150K+ + equity" },
      US: { entry: "Often $0–40K early", mid: "$120–200K + equity", senior: "$200K+ + significant equity" },
      CA: { entry: "Often C$0 early", mid: "C$100–160K + equity", senior: "C$180K+ + equity" },
    },
    demand: { IN: "high", PK: "high", UK: "high", US: "high", CA: "high" },
    videoSearch: "day in the life startup founder",
    requiredSkills: ["leadership", "salesPersuasion", "resilience", "selfDirection", "strategy", "communication"],
    roadmap: [
      { phase: "Pre-founder (0–12 months)", milestones: [
        { label: "Work at a startup to see how it's really done" },
        { label: "Build small things and ship them publicly" },
        { label: "Find your co-founder before you need them" },
      ]},
      { phase: "Idea + validation (3–12 months)", milestones: [
        { label: "Talk to 50 potential customers before writing code" },
        { label: "Build the smallest possible thing that proves the idea" },
        { label: "Get to first paying customer or genuine usage" },
      ]},
      { phase: "Build the company (1–3 years)", milestones: [
        { label: "Reach product-market fit (people pull, not push)" },
        { label: "Raise funding if needed or stay bootstrapped" },
        { label: "Make your first 5 hires very carefully" },
      ]},
      { phase: "Scale (3+ years)", milestones: [
        { label: "Build leadership team and delegate" },
        { label: "Find the next 10x of growth" },
        { label: "Decide: scale further, exit, or stay independent" },
      ]},
    ],
    stories: [
      {
        name: "Sara Blakely",
        role: "Founder, Spanx",
        country: "USA",
        summary: "Started Spanx with $5,000 saved selling fax machines door to door. Became the world's youngest self-made woman billionaire.",
        sourceUrl: "https://en.wikipedia.org/wiki/Sara_Blakely",
      },
      {
        name: "Falguni Nayar",
        role: "Founder, Nykaa",
        country: "India",
        summary: "Left a 19-year career as MD at Kotak Mahindra at 50 to start Nykaa. Took it public and became India's wealthiest self-made woman billionaire.",
        sourceUrl: "https://en.wikipedia.org/wiki/Falguni_Nayar",
      },
    ],
  },

  "civil-services": {
    jobSearchTerm: "Civil Servant Policy Officer",
    salary: {
      IN: { entry: "₹56K–80K /mo + perks", mid: "₹1.5–2.5 L /mo + perks", senior: "₹2.25–2.5 L /mo + Cabinet Secy" },
      PK: { entry: "PKR 75K–120K /mo + perks", mid: "PKR 200K–400K /mo + perks", senior: "PKR 600K+ /mo + perks" },
      UK: { entry: "£28–32K (Fast Stream)", mid: "£50–80K (SCS pay band 1)", senior: "£90–200K (Permanent Secretary)" },
      US: { entry: "$50–75K (GS-7/9)", mid: "$80–120K (GS-12/13)", senior: "$140–230K (SES)" },
      CA: { entry: "C$55–75K", mid: "C$85–120K", senior: "C$130–200K+" },
    },
    demand: { IN: "med", PK: "med", UK: "med", US: "med", CA: "med" },
    videoSearch: "day in the life IAS officer civil service",
    requiredSkills: ["communication", "research", "leadership", "negotiation", "writing", "publicSpeaking"],
    roadmap: [
      { phase: "Undergrad", milestones: [
        { label: "Any degree, ideally with public-policy or current-affairs exposure" },
        { label: "Develop reading habits across politics, economics, geography" },
      ]},
      { phase: "Prep (1–3 years)", milestones: [
        { label: "Pick a programme: UPSC, CSS, Fast Stream, PMF, etc." },
        { label: "Build a 12-month structured prep plan" },
        { label: "Take mock tests and join a study group" },
      ]},
      { phase: "Crack the exam (1–2 attempts)", milestones: [
        { label: "Clear preliminary stage" },
        { label: "Clear mains / written stage" },
        { label: "Crack the interview" },
      ]},
      { phase: "Career (lifelong)", milestones: [
        { label: "Probation + training at the academy" },
        { label: "First posting; learn the field reality" },
        { label: "Move into leadership roles over 15+ years" },
      ]},
    ],
    stories: [
      {
        name: "Kiran Bedi",
        role: "First woman IPS officer in India",
        country: "India",
        summary: "Joined the Indian Police Service in 1972 as its first woman officer. Reformed Tihar Jail and won the Ramon Magsaysay Award.",
        sourceUrl: "https://en.wikipedia.org/wiki/Kiran_Bedi",
      },
    ],
  },

  "trades-skilled": {
    jobSearchTerm: "Electrician Plumber Mechanic Chef",
    salary: {
      IN: { entry: "₹15K–30K /mo", mid: "₹40K–80K /mo", senior: "₹1 L–3 L /mo (self-employed)" },
      PK: { entry: "PKR 25K–50K /mo", mid: "PKR 80K–150K /mo", senior: "PKR 200K+ /mo (own business)" },
      UK: { entry: "£22–32K (apprentice + early)", mid: "£35–55K", senior: "£60–120K+ (own business in London)" },
      US: { entry: "$40–60K", mid: "$60–90K", senior: "$100–200K+ (own business)" },
      CA: { entry: "C$45–60K", mid: "C$65–95K", senior: "C$100–200K+ (own business)" },
    },
    demand: { IN: "med", PK: "med", UK: "high", US: "high", CA: "high" },
    videoSearch: "day in the life electrician plumber mechanic chef",
    requiredSkills: ["handsOn", "problemSolving", "craftsmanship", "attentionDetail", "communication", "resilience"],
    roadmap: [
      { phase: "Foundation (school)", milestones: [
        { label: "Basic maths, physics, and shop skills" },
        { label: "Try a few trades through summer work or shadowing" },
      ]},
      { phase: "Apprenticeship / training (1–4 years)", milestones: [
        { label: "Enrol in ITI, T-Levels, Red Seal, or trade school" },
        { label: "Find a licensed master to apprentice under" },
        { label: "Build your own tool kit" },
      ]},
      { phase: "Licensure", milestones: [
        { label: "Pass the journeyman / Red Seal / NVQ exam" },
        { label: "Start working independently or with a small crew" },
      ]},
      { phase: "Master + business (3+ years)", milestones: [
        { label: "Get master certification" },
        { label: "Decide: stay employed, or start your own contracting business" },
        { label: "Build a referral network — your reputation IS your business" },
      ]},
    ],
    stories: [
      {
        name: "Mike Rowe",
        role: "Skilled-trades advocate, host of 'Dirty Jobs'",
        country: "USA",
        summary: "Built a career and a foundation (mikeroweWORKS) dedicated to making skilled trades respected again. Awards over $1M annually in trade-school scholarships.",
        sourceUrl: "https://en.wikipedia.org/wiki/Mike_Rowe",
      },
    ],
  },

  "scientist-researcher": {
    jobSearchTerm: "Research Scientist PhD",
    salary: {
      IN: { entry: "₹4–8 LPA (postdoc / scientist B)", mid: "₹10–20 LPA", senior: "₹25–60 LPA+ (top labs / industry)" },
      PK: { entry: "PKR 60K–100K /mo (early academic)", mid: "PKR 150K–300K /mo", senior: "PKR 400K+ /mo" },
      UK: { entry: "£32–42K (postdoc)", mid: "£50–75K (senior research)", senior: "£90–150K+ (industry research lead)" },
      US: { entry: "$55–75K (postdoc)", mid: "$95–140K", senior: "$150–300K+ (industry research)" },
      CA: { entry: "C$55–75K", mid: "C$85–120K", senior: "C$130–220K+" },
    },
    demand: { IN: "med", PK: "low", UK: "med", US: "med", CA: "med" },
    videoSearch: "day in the life research scientist PhD",
    requiredSkills: ["research", "math", "writing", "communication", "attentionDetail", "selfDirection"],
    roadmap: [
      { phase: "Undergrad", milestones: [
        { label: "Strong fundamentals in your science" },
        { label: "Volunteer in a lab; co-author a small paper" },
        { label: "Take GRE / subject exams if needed" },
      ]},
      { phase: "Master's / PhD (4–7 years)", milestones: [
        { label: "Choose advisor as carefully as you choose a topic" },
        { label: "Publish 2–4 peer-reviewed papers" },
        { label: "Present at international conferences" },
      ]},
      { phase: "Postdoc (1–4 years)", milestones: [
        { label: "Move to a different lab to broaden your network" },
        { label: "Lead an independent research line" },
        { label: "Apply for fellowships and faculty positions" },
      ]},
      { phase: "Independent career (lifelong)", milestones: [
        { label: "Faculty, industry R&D, or government lab" },
        { label: "Build a research group and write grants" },
        { label: "Mentor the next generation of scientists" },
      ]},
    ],
    stories: [
      {
        name: "Tu Youyou",
        role: "Pharmaceutical chemist, Nobel Prize in Medicine",
        country: "China",
        summary: "Discovered artemisinin, a malaria drug that has saved millions. Won the Nobel Prize in 2015 — the first Chinese woman scientist to do so.",
        sourceUrl: "https://en.wikipedia.org/wiki/Tu_Youyou",
      },
    ],
  },

  "healthcare-allied": {
    jobSearchTerm: "Nurse Physiotherapist Pharmacist",
    salary: {
      IN: { entry: "₹3–6 LPA", mid: "₹6–12 LPA", senior: "₹15–35 LPA+" },
      PK: { entry: "PKR 40K–80K /mo", mid: "PKR 80K–180K /mo", senior: "PKR 200K+ /mo" },
      UK: { entry: "£28–35K (Band 5 NHS)", mid: "£40–55K", senior: "£60–95K+" },
      US: { entry: "$60–80K (BSN nurse)", mid: "$85–115K", senior: "$130–200K+ (NP, CRNA)" },
      CA: { entry: "C$60–80K", mid: "C$85–110K", senior: "C$115–160K+" },
    },
    demand: { IN: "high", PK: "high", UK: "high", US: "high", CA: "high" },
    videoSearch: "day in the life nurse physiotherapist pharmacist",
    requiredSkills: ["empathy", "communication", "attentionDetail", "resilience", "handsOn", "problemSolving"],
    roadmap: [
      { phase: "Pre-clinical", milestones: [
        { label: "Strong biology and chemistry foundation" },
        { label: "Volunteer in a clinical setting" },
      ]},
      { phase: "Degree (2–4 years)", milestones: [
        { label: "BSN, BPT, PharmD, or relevant diploma" },
        { label: "Clinical placements across specialities" },
        { label: "Pass the licensure exam (NCLEX, board exam, PCI registration)" },
      ]},
      { phase: "Early career (0–4 years)", milestones: [
        { label: "Find your speciality (ICU, ortho, paediatric, etc.)" },
        { label: "Earn specialty certifications" },
        { label: "Consider international opportunities (visas welcome you)" },
      ]},
      { phase: "Advance (4+ years)", milestones: [
        { label: "Master's degree (NP, DPT, MS) for higher autonomy" },
        { label: "Move into leadership, education, or speciality practice" },
        { label: "Consider locum / travel work for income flexibility" },
      ]},
    ],
    stories: [
      {
        name: "Florence Nightingale",
        role: "Founder of modern nursing",
        country: "UK",
        summary: "Transformed nursing from an informal trade into a respected profession during the Crimean War. Her statistical analysis of mortality saved millions of lives.",
        sourceUrl: "https://en.wikipedia.org/wiki/Florence_Nightingale",
      },
    ],
  },

  architect: {
    jobSearchTerm: "Architect Urban Planner",
    salary: {
      IN: { entry: "₹3–6 LPA", mid: "₹8–18 LPA", senior: "₹25–60 LPA+ (own practice can be much more)" },
      PK: { entry: "PKR 50K–100K /mo", mid: "PKR 150K–300K /mo", senior: "PKR 400K+ /mo (own practice)" },
      UK: { entry: "£28–40K (Part 1 / 2)", mid: "£45–65K", senior: "£75–130K+" },
      US: { entry: "$55–75K", mid: "$80–115K", senior: "$130–200K+ (licensed)" },
      CA: { entry: "C$55–75K", mid: "C$80–110K", senior: "C$120–180K+" },
    },
    demand: { IN: "med", PK: "med", UK: "med", US: "med", CA: "med" },
    videoSearch: "day in the life architect",
    requiredSkills: ["design", "math", "handsOn", "communication", "projectMgmt", "attentionDetail"],
    roadmap: [
      { phase: "Pre-architecture", milestones: [
        { label: "Strong drawing + maths foundation" },
        { label: "Crack the entrance test (NATA, JEE B.Arch, portfolio)" },
      ]},
      { phase: "B.Arch (5 years)", milestones: [
        { label: "Master AutoCAD, Revit, Rhino, SketchUp" },
        { label: "Strong portfolio: studio projects with depth" },
        { label: "Summer internships at varied practices" },
      ]},
      { phase: "Early career (Part 1, 2, 3 / ARE)", milestones: [
        { label: "Complete supervised practice (Part 2/3 in UK, AXP in US)" },
        { label: "Pass the registration exam" },
        { label: "Find your niche: residential, commercial, urban, sustainability" },
      ]},
      { phase: "Independent / partner (5+ years)", milestones: [
        { label: "Become a registered architect" },
        { label: "Lead projects from concept to completion" },
        { label: "Decide: stay in a firm, partner up, or start your own practice" },
      ]},
    ],
    stories: [
      {
        name: "Zaha Hadid",
        role: "Pritzker Prize-winning architect",
        country: "Iraq → UK",
        summary: "The first woman to win the Pritzker Prize. Designed icons like the London Aquatics Centre and the Heydar Aliyev Center. Built an architectural language that didn't exist before her.",
        sourceUrl: "https://en.wikipedia.org/wiki/Zaha_Hadid",
      },
    ],
  },
};

// ──────────────────────────────────────────────────────────────────
// Career reality: lifestyle, pros + cons, AI risk, pivot paths
// ──────────────────────────────────────────────────────────────────

export const CAREER_REALITY = {
  "software-engineer": {
    reality: {
      hours: "40–55/week typical, 60+ at high-growth startups",
      stress: "Medium. Spikes around launches and on-call rotations.",
      remote: "Often fully remote or hybrid possible.",
      travel: "Minimal in most roles.",
      lifestyle: "Sedentary; screen-heavy. Strong work-life balance at most companies.",
    },
    pros: [
      "High pay relative to most career paths",
      "Strong global demand and visa pathways",
      "Can be done remotely from almost anywhere",
      "Continuous learning keeps the work interesting",
      "Self-taught paths are genuinely accepted",
    ],
    cons: [
      "Constant pressure to keep skills current",
      "Imposter syndrome is widely reported",
      "Career mid-life crunch around age 45–55 in some markets",
      "Companies can ship layoffs in waves",
      "Sitting all day takes a toll on health",
    ],
    aiRisk: {
      level: "low-medium",
      summary:
        "AI is changing the work, not removing the workers. Junior coding tasks are being automated, but architectural thinking, integration, and judgement become more valuable. Engineers who use AI well will out-earn those who don't.",
    },
    pivots: ["data-scientist", "designer", "entrepreneur", "civil-services"],
  },

  "data-scientist": {
    reality: {
      hours: "40–50/week typical",
      stress: "Medium. Spikes around major model deployments and quarterly reporting.",
      remote: "Often remote-friendly.",
      travel: "Low. Occasional industry conferences.",
      lifestyle: "Deep-work heavy. Long uninterrupted blocks are needed.",
    },
    pros: [
      "Among the highest-paid early-career roles",
      "Skills transfer across nearly every industry",
      "Strong demand for AI and ML specialists",
      "Intellectually rewarding work",
      "Remote-friendly globally",
    ],
    cons: [
      "Maths and stats requirements scare many away",
      "Bootcamp grads compete with PhDs",
      "Lots of unglamorous data cleaning",
      "Reproducibility and validation are constant battles",
      "Tooling shifts every 18 months",
    ],
    aiRisk: {
      level: "low",
      summary:
        "Ironically the safest seat in the AI revolution. The people building and overseeing AI systems are needed more than ever.",
    },
    pivots: ["software-engineer", "scientist-researcher", "business-finance", "entrepreneur"],
  },

  doctor: {
    reality: {
      hours: "60–80/week through residency; 50–70 in most specialities after",
      stress: "Very high. Life-and-death decisions, long shifts, emotional weight.",
      remote: "Almost never. Telemedicine is growing but is a niche.",
      travel: "Low in most roles.",
      lifestyle: "Demanding, especially in early years. Burnout is a real risk.",
    },
    pros: [
      "Direct, daily impact on lives",
      "Globally respected profession",
      "Strong income ceiling, especially in surgical specialities",
      "Job security is exceptional",
      "Sense of meaning rarely wavers",
    ],
    cons: [
      "The longest training pipeline of any career here (10–15 years)",
      "Debt loads in US/UK are substantial",
      "Burnout rates are well-documented",
      "Litigation risk in some jurisdictions",
      "Personal life gets sacrificed for years",
    ],
    aiRisk: {
      level: "low",
      summary:
        "Diagnostic AI is changing radiology and pathology, but the human doctor (judgement, empathy, complex cases, procedures) is irreplaceable.",
    },
    pivots: ["psychologist", "scientist-researcher", "healthcare-allied", "entrepreneur"],
  },

  psychologist: {
    reality: {
      hours: "35–45/week typical; private practice is more flexible",
      stress: "Medium-high. Emotional weight of holding others' difficulties.",
      remote: "Often hybrid; teletherapy is now mainstream.",
      travel: "Low.",
      lifestyle: "Steady. Strong work-life balance once licensed.",
    },
    pros: [
      "Deeply meaningful, daily human impact",
      "Mental-health awareness is creating massive demand",
      "Can build private practice for autonomy",
      "Growth keeps happening as the field evolves",
      "Many sub-specialities to find your fit",
    ],
    cons: [
      "Vicarious trauma is a real occupational hazard",
      "Long training and supervision requirements",
      "Income ceiling is lower than medicine",
      "Insurance/billing administration in many countries",
      "Emotional load you carry home",
    ],
    aiRisk: {
      level: "very-low",
      summary:
        "Therapeutic relationships are the foundation. AI can support, never replace.",
    },
    pivots: ["teacher-educator", "content-creator", "healthcare-allied", "doctor"],
  },

  designer: {
    reality: {
      hours: "40–50/week typical",
      stress: "Medium. Deadline-driven, revision cycles can be exhausting.",
      remote: "Very remote-friendly.",
      travel: "Low to medium.",
      lifestyle: "Creative work with clear deliverables. Healthy balance.",
    },
    pros: [
      "Tangible, visible output of your work",
      "Strong remote and freelance opportunities",
      "Compounds with each portfolio piece",
      "Constant fresh problems to solve",
      "Pathways into product, leadership, or entrepreneurship",
    ],
    cons: [
      "Subjective feedback can be brutal early on",
      "Endless revisions test your patience",
      "Junior pay is modest in some markets",
      "Risk of being seen as 'just the visuals' person",
      "Tools change faster than you can master them",
    ],
    aiRisk: {
      level: "medium",
      summary:
        "AI excels at first-draft visuals. Strategic, research-driven, systems-level designers are growing more valuable; pure execution roles are at risk.",
    },
    pivots: ["software-engineer", "content-creator", "entrepreneur", "architect"],
  },

  "civil-engineer": {
    reality: {
      hours: "40–50/week typical",
      stress: "Medium. Project deadlines and safety responsibility.",
      remote: "Limited; site visits are part of the job.",
      travel: "Medium. Site work and client meetings.",
      lifestyle: "Mix of office and field. Tangible work satisfaction.",
    },
    pros: [
      "Work that physically exists in the world",
      "Strong job security with infrastructure investment",
      "Clear progression path with chartership",
      "Diverse sub-specialities and industries",
      "Public sector roles offer stability",
    ],
    cons: [
      "Salaries lag behind software in most markets",
      "Long licensing process (4–8 years)",
      "Safety responsibility carries weight",
      "Can feel slow-moving relative to tech",
      "Site work isn't always glamorous",
    ],
    aiRisk: {
      level: "low",
      summary:
        "Physical infrastructure needs human engineers on site. AI helps with design optimisation but can't replace field judgement.",
    },
    pivots: ["architect", "entrepreneur", "civil-services", "trades-skilled"],
  },

  "business-finance": {
    reality: {
      hours: "50–80/week (banking/consulting); 40–55/week (corporate)",
      stress: "High in banking/consulting; moderate in corporate roles.",
      remote: "Mixed. Banking and consulting expect office presence.",
      travel: "High in consulting (often 60–80% travel).",
      lifestyle: "Demanding but well-compensated, especially early career.",
    },
    pros: [
      "Among the highest-paid graduate careers",
      "Strong exit options into industry and startups",
      "Builds a powerful network",
      "Transferable analytical skills",
      "Quick career progression",
    ],
    cons: [
      "Lifestyle costs in banking are well-documented",
      "Up-or-out culture in many firms",
      "Long hours throughout your 20s",
      "Plateau without elite MBA in some firms",
      "High-stakes pressure can affect health",
    ],
    aiRisk: {
      level: "medium",
      summary:
        "Junior analyst work (modeling, decks, data crunching) is increasingly automated. Strategy, relationships, and judgement still need humans.",
    },
    pivots: ["entrepreneur", "civil-services", "data-scientist", "content-creator"],
  },

  lawyer: {
    reality: {
      hours: "50–70/week typical at firms; 40–50 in public sector",
      stress: "High. Adversarial work, billable hours, client pressure.",
      remote: "Hybrid is common post-2020.",
      travel: "Medium. Courts, client sites.",
      lifestyle: "Demanding but intellectually rich.",
    },
    pros: [
      "Strong income at senior levels",
      "Intellectually rigorous work",
      "Many sub-specialties to find your fit",
      "Direct social impact in some areas (criminal, civil rights)",
      "Skill set transfers to business and government",
    ],
    cons: [
      "Billable-hour culture in private practice is intense",
      "Heavy training pipeline (5–7 years)",
      "Debt loads in US are substantial",
      "Burnout is widely reported",
      "Junior associate years are notoriously tough",
    ],
    aiRisk: {
      level: "medium",
      summary:
        "Document review and basic research are increasingly automated. Strategy, courtroom advocacy, and complex negotiation remain human.",
    },
    pivots: ["civil-services", "entrepreneur", "business-finance", "teacher-educator"],
  },

  "teacher-educator": {
    reality: {
      hours: "45–55/week including marking and planning",
      stress: "Medium-high. Behavioural management and parent dynamics add load.",
      remote: "Limited for classroom roles; online education is growing.",
      travel: "Low for classroom; medium for academics.",
      lifestyle: "Strong holiday calendar but emotional load is high.",
    },
    pros: [
      "Daily impact on the next generation",
      "Steady employment and benefits",
      "Long holidays compared to most careers",
      "Pension and security in public systems",
      "Career compounds with experience",
    ],
    cons: [
      "Salary plateau is real in many countries",
      "Behavioural challenges and admin load",
      "Parents and politics add pressure",
      "Burnout particularly in early years",
      "Class sizes affect quality of work",
    ],
    aiRisk: {
      level: "low",
      summary:
        "Teaching is fundamentally relational. AI tutors supplement, but classroom teaching, mentorship, and pastoral care remain irreplaceably human.",
    },
    pivots: ["psychologist", "content-creator", "civil-services", "entrepreneur"],
  },

  "content-creator": {
    reality: {
      hours: "Highly variable. 50–70/week of self-managed work is common.",
      stress: "Medium-high. Income volatility and creative pressure.",
      remote: "Almost always.",
      travel: "Optional; many creators travel for content.",
      lifestyle: "Total flexibility on paper; often blurred lines in practice.",
    },
    pros: [
      "Geographic and time freedom",
      "Compounds your audience and equity",
      "Direct relationship with your supporters",
      "Top earners outperform almost any traditional career",
      "Skills (writing, video, audience-building) are durable",
    ],
    cons: [
      "Income is highly long-tailed (top 1% take most)",
      "Algorithm dependency is unnerving",
      "Mental health under public scrutiny",
      "Burnout from constant publishing pressure",
      "Healthcare, retirement, taxes are on you",
    ],
    aiRisk: {
      level: "medium-high",
      summary:
        "AI floods the market with synthetic content. Authentic voice, taste, and parasocial trust become more valuable, while generic content commoditises.",
    },
    pivots: ["entrepreneur", "designer", "psychologist", "teacher-educator"],
  },

  entrepreneur: {
    reality: {
      hours: "60–100/week in early years; varies with stage",
      stress: "Very high. Financial, emotional, identity-level risk.",
      remote: "Possible but founder presence matters early.",
      travel: "High. Investors, partners, customers.",
      lifestyle: "Total commitment for years; potentially life-changing reward.",
    },
    pros: [
      "Uncapped upside (financial and impact)",
      "Build the kind of work and culture you want",
      "Skills compound across every domain",
      "Failure teaches you more than most jobs",
      "Network of other founders is gold",
    ],
    cons: [
      "Most startups fail. Most founders don't get rich.",
      "Stress is sustained for years",
      "Family and relationship strain is common",
      "Identity intertwines with the company",
      "Healthcare, retirement, salary you provide yourself",
    ],
    aiRisk: {
      level: "very-low",
      summary:
        "AI is enabling more founders, not fewer. Solo and lean teams can now build what used to require 50 people.",
    },
    pivots: ["business-finance", "content-creator", "software-engineer", "civil-services"],
  },

  "civil-services": {
    reality: {
      hours: "45–60/week with intermittent surges",
      stress: "Medium-high. Political and public-accountability pressure.",
      remote: "Limited; field postings are part of the role.",
      travel: "High in early postings; lower at senior levels.",
      lifestyle: "Demanding but pension and prestige offset the load.",
    },
    pros: [
      "Direct impact on policy and society",
      "Strong pension and benefits",
      "Authority and decision-making at junior levels",
      "Respected status, especially in India and Pakistan",
      "Long-term security",
    ],
    cons: [
      "Salary lags behind private sector",
      "Brutal entry exam (UPSC, CSS, Fast Stream)",
      "Bureaucracy can frustrate idealists",
      "Political winds affect projects",
      "Postings can be in difficult locations",
    ],
    aiRisk: {
      level: "low",
      summary:
        "Public administration relies on human judgement, accountability, and trust. AI supports the work; it doesn't lead it.",
    },
    pivots: ["lawyer", "teacher-educator", "entrepreneur", "business-finance"],
  },

  "trades-skilled": {
    reality: {
      hours: "40–50/week typically; self-employed varies",
      stress: "Medium. Physical demands; less office politics.",
      remote: "Never for the trade itself; admin can be.",
      travel: "Local; sometimes regional.",
      lifestyle: "Active, hands-on, visible results. Body wears with age.",
    },
    pros: [
      "Genuine, severe shortage in UK/US/Canada",
      "AI-resistant work",
      "Self-employment income can outpace 'professional' careers",
      "Visible, tangible work satisfaction",
      "Apprenticeship pays you to learn",
    ],
    cons: [
      "Physical toll over decades is real",
      "Less prestige in some cultures (changing)",
      "Income inconsistent if self-employed",
      "Insurance and liability burdens own your business",
      "Health risks vary by trade",
    ],
    aiRisk: {
      level: "very-low",
      summary:
        "Robotics is decades away from replacing skilled trades. This is one of the safest career bets if you enjoy the work.",
    },
    pivots: ["entrepreneur", "civil-engineer", "teacher-educator", "civil-services"],
  },

  "scientist-researcher": {
    reality: {
      hours: "50–70/week including reading and grant writing",
      stress: "Medium. Funding insecurity and publish-or-perish pressure.",
      remote: "Some theoretical fields; most need lab access.",
      travel: "Medium. Conferences and collaborations.",
      lifestyle: "Intellectual freedom; institutional politics in academia.",
    },
    pros: [
      "Push the frontier of human knowledge",
      "Intellectual freedom (especially after tenure)",
      "Strong international community",
      "Industry R&D pays well",
      "Travel for conferences globally",
    ],
    cons: [
      "Long training (PhD + postdoc) for uncertain academic jobs",
      "Funding pressures dominate the work",
      "Academic salaries lag behind industry",
      "Publish-or-perish culture",
      "Career path narrows after each stage",
    ],
    aiRisk: {
      level: "low",
      summary:
        "AI accelerates research but expands the frontier; researchers who use AI as a tool will outproduce those who don't.",
    },
    pivots: ["data-scientist", "teacher-educator", "doctor", "entrepreneur"],
  },

  "healthcare-allied": {
    reality: {
      hours: "36–50/week typical; shifts in hospital roles",
      stress: "Medium-high. Patient outcomes, staffing shortages.",
      remote: "Limited for direct patient care; growing in telehealth.",
      travel: "Low to medium.",
      lifestyle: "Predictable schedules in many roles; shift work in others.",
    },
    pros: [
      "Severe global shortage means jobs are abundant",
      "Visa pathways friendly for international moves",
      "Direct patient impact every day",
      "Strong pay in US/Canada",
      "Many sub-specialty paths",
    ],
    cons: [
      "Emotional and physical demands",
      "Shift work disrupts sleep and family time",
      "Burnout is well-documented",
      "Documentation burden has grown",
      "Wages can lag in some countries",
    ],
    aiRisk: {
      level: "very-low",
      summary:
        "Direct human care is irreplaceable. AI supports diagnostics and admin; the bedside work remains a human profession.",
    },
    pivots: ["doctor", "psychologist", "teacher-educator", "scientist-researcher"],
  },

  architect: {
    reality: {
      hours: "45–60/week, especially in firms; deadline spikes",
      stress: "Medium-high. Client revisions, regulatory complexity.",
      remote: "Hybrid is common; site visits required.",
      travel: "Medium. Sites and client meetings.",
      lifestyle: "Creative deep-work + collaboration mix.",
    },
    pros: [
      "Buildings outlive you; legacy matters",
      "Creative + technical synthesis",
      "Path to running your own practice",
      "International mobility for licensed architects",
      "Visual portfolio compounds",
    ],
    cons: [
      "Long licensing path (5–8 years)",
      "Salary lags engineering early career",
      "Project timelines stretch over years",
      "Client revisions test patience",
      "Boom-bust with construction cycles",
    ],
    aiRisk: {
      level: "low-medium",
      summary:
        "AI helps with renderings and code-checking. Spatial design, client psychology, and regulatory navigation remain human.",
    },
    pivots: ["designer", "civil-engineer", "entrepreneur", "teacher-educator"],
  },
};

// ──────────────────────────────────────────────────────────────────
// Inclusive communities mapped by identity lens × career
// ──────────────────────────────────────────────────────────────────

export const INCLUSIVE_COMMUNITIES = {
  women: {
    "software-engineer": [
      { name: "Women Who Code", url: "https://womenwhocode.com", note: "Global network with 360,000+ members, free events, mentorship." },
      { name: "Anita Borg Institute / AnitaB.org", url: "https://anitab.org", note: "Grace Hopper Celebration, scholarships, career resources." },
      { name: "Rewriting the Code", url: "https://rewritingthecode.org", note: "Network for women in tech, undergrad through senior leadership." },
    ],
    "data-scientist": [
      { name: "Women in Data Science (WiDS)", url: "https://www.widsworldwide.org", note: "Stanford-founded global initiative, free conferences in 60+ countries." },
      { name: "Women in Machine Learning (WiML)", url: "https://wimlworkshop.org", note: "Research-focused community at top ML conferences." },
    ],
    designer: [
      { name: "Ladies that UX", url: "https://www.ladiesthatux.com", note: "Global meetup network in 40+ cities for women in UX." },
      { name: "Women Talk Design", url: "https://womentalkdesign.com", note: "Speaker directory and resources." },
    ],
    "civil-engineer": [
      { name: "Society of Women Engineers (SWE)", url: "https://swe.org", note: "Scholarships, mentorship, conferences worldwide." },
      { name: "Women in Engineering Network (UK)", url: "https://www.wes.org.uk", note: "UK-focused; advocacy and community." },
    ],
    "business-finance": [
      { name: "Ellevate Network", url: "https://www.ellevatenetwork.com", note: "Global professional women's network." },
      { name: "100 Women in Finance", url: "https://100women.org", note: "Global community of women in the finance industry." },
    ],
    entrepreneur: [
      { name: "All Raise", url: "https://www.allraise.org", note: "Women in venture capital and high-growth founding." },
      { name: "SheEO / Coralus", url: "https://coralus.world", note: "Network funding women-led ventures worldwide." },
    ],
    doctor: [
      { name: "American Medical Women's Association", url: "https://www.amwa-doc.org", note: "Resources for women in medicine across all stages." },
    ],
    default: [
      { name: "Lean In Circles", url: "https://leanin.org/circles", note: "Peer-support circles for women in any career." },
    ],
  },

  "first-gen": {
    default: [
      { name: "FirstGen Network (LinkedIn group)", url: "https://www.linkedin.com/groups/first-generation-professionals", note: "Peer support for first-generation professionals." },
      { name: "I'm First!", url: "https://imfirst.org", note: "Community for first-generation college students." },
      { name: "Center for First-generation Student Success", url: "https://firstgen.naspa.org", note: "NASPA-backed centre with research, mentorship, and scholarship resources for first-gen students." },
    ],
  },

  disability: {
    default: [
      { name: "Lime Connect", url: "https://www.limeconnect.com", note: "Rebranding disability through achievement. Connects students with disabilities to elite employers." },
      { name: "Disability:IN", url: "https://disabilityin.org", note: "Business resource for disability inclusion across industries." },
      { name: "AbilityNet (UK)", url: "https://abilitynet.org.uk", note: "Technology accessibility resources." },
    ],
  },

  neurodivergent: {
    default: [
      { name: "Neurodiversity Network", url: "https://www.neurodiversitynetwork.com", note: "Resources for neurodivergent professionals." },
      { name: "ADHD Aha! community", url: "https://www.understood.org", note: "Peer community and resources for ADHD adults." },
      { name: "Specialisterne", url: "https://specialisterne.com", note: "Global initiative employing autistic adults in tech." },
    ],
  },

  immigrant: {
    default: [
      { name: "Upwardly Global", url: "https://www.upwardlyglobal.org", note: "Career help for immigrant professionals in the US." },
      { name: "Hire Immigrants Ottawa", url: "https://hireimmigrants.ca", note: "Canada-focused immigrant employment resource." },
    ],
  },

  faith: {
    default: [
      { name: "Religious Freedom & Business Foundation", url: "https://religiousfreedomandbusiness.org", note: "Resources for employees and employers who value religious accommodation in the workplace." },
      { name: "Salaam Workplace (LinkedIn Group)", url: "https://www.linkedin.com/groups/salaam-workplace", note: "Network of Muslim professionals sharing faith-friendly workplace experiences." },
      { name: "Harvard Pluralism Project", url: "https://pluralism.org", note: "Multi-faith research and resources on religious life across diverse workplaces." },
      { name: "Modest Style Network", url: "https://modeststreetfashion.com", note: "Community for professionals who observe modest dress in modern workplaces." },
    ],
    "software-engineer": [
      { name: "Muslims in Tech (Slack)", url: "https://muslimsintech.com", note: "Global community of Muslim software professionals supporting each other in tech careers." },
      { name: "Tech Faith Collective", url: "https://www.linkedin.com/groups/13917095/", note: "LinkedIn community for technologists across faith traditions to discuss faith-integrated work." },
    ],
    "business-finance": [
      { name: "AAOIFI", url: "https://aaoifi.com", note: "Islamic finance standards body. Great entry into Shariah-compliant finance careers." },
      { name: "Islamic Finance News", url: "https://www.islamicfinancenews.com", note: "Global publication and event series for Islamic-finance professionals." },
    ],
  },

  caregiver: {
    default: [
      { name: "Caregiver Action Network", url: "https://caregiveraction.org", note: "Global community of family caregivers with resources and peer support." },
      { name: "Working Caregivers (LinkedIn Group)", url: "https://www.linkedin.com/groups/working-caregivers", note: "Professionals balancing careers with care for family members." },
      { name: "Mother Honestly", url: "https://www.motherhonestly.com", note: "Career-and-care community especially strong for working mothers." },
      { name: "Eldercare Locator (US)", url: "https://eldercare.acl.gov", note: "Government-backed resource for finding eldercare support so you can work." },
    ],
  },

  rural: {
    default: [
      { name: "Rural Index / Rural Online Initiative", url: "https://extension.usu.edu/remoteworkcertificate", note: "Remote-work training for people based in rural areas." },
      { name: "OneSchool Global", url: "https://www.oneschoolglobal.com", note: "Education-and-career resources strong in rural and small-town contexts." },
      { name: "Smart Villages Network", url: "https://e4sv.org", note: "Connects rural professionals with mentorship and opportunities globally." },
      { name: "Pratham Education Foundation", url: "https://www.pratham.org", note: "India's largest education NGO, with strong programmes for rural students transitioning into careers." },
    ],
  },
};

// Salary patches: add data for newly-added countries (BD, AU, AE, GL) on the
// careers most users actually pick. Defined as a side-table so we don't have
// to surgically edit every career's salary block.
const SALARY_PATCHES = {
  "software-engineer": {
    BD: { entry: "BDT 30K–60K /mo", mid: "BDT 80K–180K /mo", senior: "BDT 200K+ /mo" },
    AU: { entry: "A$70–90K", mid: "A$110–150K", senior: "A$170–250K+" },
    AE: { entry: "AED 8K–15K /mo", mid: "AED 20K–35K /mo", senior: "AED 40K+ /mo (tax-free)" },
    GL: { entry: "Varies widely. Remote-first global roles often pay USD 30K–80K to start.", mid: "USD 60K–120K", senior: "USD 120K+ for global remote roles" },
    LK: { entry: "LKR 80K–150K /mo", mid: "LKR 200K–450K /mo", senior: "LKR 500K+ /mo" },
    AF: { entry: "USD 200–500 /mo (local); $1K–3K /mo (remote / international)", mid: "USD 1K–3K /mo (remote)", senior: "USD 3K+ /mo (international remote)" },
    IR: { entry: "IRR 100–250M /mo (~$200–500)", mid: "IRR 300–700M /mo", senior: "IRR 1B+ /mo (or USD 2K+ remote)" },
    IQ: { entry: "USD 500–1,200 /mo", mid: "USD 1,500–3,500 /mo", senior: "USD 4K+ /mo" },
    LB: { entry: "USD 600–1,200 /mo (now quoted in USD)", mid: "USD 1,500–3,500 /mo", senior: "USD 4K+ /mo" },
    CN: { entry: "¥10K–18K /mo", mid: "¥25K–50K /mo", senior: "¥60K+ /mo (FAANG-equivalent: ¥80K–200K)" },
  },
  "data-scientist": {
    BD: { entry: "BDT 40K–80K /mo", mid: "BDT 100K–250K /mo", senior: "BDT 300K+ /mo" },
    AU: { entry: "A$75–95K", mid: "A$110–160K", senior: "A$180–260K+" },
    AE: { entry: "AED 12K–18K /mo", mid: "AED 25K–45K /mo", senior: "AED 50K+ /mo (tax-free)" },
    GL: { entry: "USD 40K–80K", mid: "USD 80K–140K", senior: "USD 150K+ remote-friendly globally" },
    LK: { entry: "LKR 100K–180K /mo", mid: "LKR 250K–500K /mo", senior: "LKR 600K+ /mo" },
    AF: { entry: "Mostly remote / international roles", mid: "USD 1.5K–4K /mo remote", senior: "USD 4K+ /mo remote" },
    IR: { entry: "IRR 150–350M /mo", mid: "IRR 400–900M /mo", senior: "IRR 1B+ /mo (or USD 3K+ remote)" },
    IQ: { entry: "USD 700–1,500 /mo", mid: "USD 2K–4K /mo", senior: "USD 5K+ /mo" },
    LB: { entry: "USD 800–1,500 /mo", mid: "USD 2K–4K /mo", senior: "USD 5K+ /mo" },
    CN: { entry: "¥15K–25K /mo", mid: "¥30K–60K /mo", senior: "¥80K+ /mo" },
  },
  doctor: {
    BD: { entry: "BDT 30K–60K /mo (intern/MO)", mid: "BDT 100K–250K /mo", senior: "BDT 500K+ /mo (specialist)" },
    AU: { entry: "A$75–95K (intern)", mid: "A$200–350K (specialist)", senior: "A$400–700K+" },
    AE: { entry: "AED 12K–25K /mo", mid: "AED 35K–70K /mo", senior: "AED 80K+ /mo (consultant)" },
    GL: { entry: "Highly country-dependent.", mid: "Strong incomes globally; varies", senior: "Top specialists earn well in most countries" },
    LK: { entry: "LKR 80K–150K /mo (intern)", mid: "LKR 250K–500K /mo (specialist)", senior: "LKR 600K+ /mo" },
    AF: { entry: "USD 200–500 /mo (govt)", mid: "USD 600–1,500 /mo", senior: "USD 2K+ /mo (private / NGO)" },
    IR: { entry: "IRR 150–300M /mo", mid: "IRR 400–800M /mo", senior: "IRR 1B+ /mo (specialist private practice)" },
    IQ: { entry: "USD 500–1,000 /mo", mid: "USD 1.5K–3K /mo", senior: "USD 4K+ /mo" },
    LB: { entry: "USD 800–1,500 /mo", mid: "USD 2K–4K /mo", senior: "USD 5K+ /mo (top specialists)" },
    CN: { entry: "¥8K–15K /mo (resident)", mid: "¥20K–40K /mo", senior: "¥50K+ /mo (consultant level)" },
  },
  designer: {
    BD: { entry: "BDT 25K–50K /mo", mid: "BDT 60K–150K /mo", senior: "BDT 200K+ /mo" },
    AU: { entry: "A$65–85K", mid: "A$95–130K", senior: "A$150–200K+" },
    AE: { entry: "AED 7K–12K /mo", mid: "AED 15K–30K /mo", senior: "AED 35K+ /mo" },
    GL: { entry: "USD 25K–60K", mid: "USD 60K–110K", senior: "USD 120K+ remote-friendly" },
    LK: { entry: "LKR 70K–130K /mo", mid: "LKR 180K–400K /mo", senior: "LKR 500K+ /mo" },
    AF: { entry: "Mostly remote", mid: "USD 1K–3K /mo (remote)", senior: "USD 3K+ /mo (remote)" },
    IR: { entry: "IRR 80–200M /mo", mid: "IRR 250–500M /mo", senior: "IRR 600M+ /mo (or USD 2K+ remote)" },
    IQ: { entry: "USD 400–900 /mo", mid: "USD 1K–2.5K /mo", senior: "USD 3K+ /mo" },
    LB: { entry: "USD 500–1,200 /mo", mid: "USD 1.5K–3K /mo", senior: "USD 4K+ /mo" },
    CN: { entry: "¥8K–15K /mo", mid: "¥18K–35K /mo", senior: "¥40K+ /mo" },
  },
  "business-finance": {
    BD: { entry: "BDT 25K–60K /mo", mid: "BDT 100K–300K /mo", senior: "BDT 400K+ /mo" },
    AU: { entry: "A$70–90K", mid: "A$120–200K", senior: "A$220–500K+" },
    AE: { entry: "AED 10K–18K /mo", mid: "AED 25K–60K /mo", senior: "AED 70K+ /mo (tax-free)" },
    GL: { entry: "USD 30K–70K", mid: "USD 70K–150K", senior: "USD 150K+" },
    LK: { entry: "LKR 80K–150K /mo", mid: "LKR 200K–500K /mo", senior: "LKR 600K+ /mo" },
    AF: { entry: "USD 400–800 /mo (banks / NGOs)", mid: "USD 1K–2.5K /mo", senior: "USD 3K+ /mo" },
    IR: { entry: "IRR 100–300M /mo", mid: "IRR 400–900M /mo", senior: "IRR 1B+ /mo" },
    IQ: { entry: "USD 600–1,500 /mo", mid: "USD 2K–4K /mo", senior: "USD 5K+ /mo" },
    LB: { entry: "USD 700–1,800 /mo", mid: "USD 2K–4K /mo", senior: "USD 5K+ /mo (especially Gulf opportunities)" },
    CN: { entry: "¥10K–20K /mo", mid: "¥25K–60K /mo", senior: "¥70K+ /mo" },
  },
  "content-creator": {
    BD: { entry: "Variable; BDT 0–60K /mo", mid: "BDT 80K–300K /mo", senior: "Top earners much more" },
    AU: { entry: "A$50–70K (journalism)", mid: "A$80–130K", senior: "Top creators A$200K+" },
    AE: { entry: "AED 8K–15K /mo", mid: "AED 20K–40K /mo", senior: "AED 50K+ /mo" },
    GL: { entry: "Highly variable", mid: "Build audience; income follows", senior: "Top creators earn millions globally" },
    LK: { entry: "Variable; LKR 0–100K /mo", mid: "LKR 150K–500K /mo", senior: "Top creators much more" },
    AF: { entry: "Mostly via global platforms", mid: "USD 500–3K /mo (YouTube, freelance)", senior: "Top creators much more" },
    IR: { entry: "Variable", mid: "IRR 200–800M /mo", senior: "Top creators much more (Instagram, Aparat)" },
    IQ: { entry: "Variable", mid: "USD 1K–3K /mo (YouTube, freelance)", senior: "Top creators much more" },
    LB: { entry: "Variable", mid: "USD 1K–4K /mo", senior: "Top creators reach 6 figures in USD" },
    CN: { entry: "Variable", mid: "¥10K–50K /mo (Bilibili, Xiaohongshu)", senior: "Top KOLs earn millions ¥ /year" },
  },
  "healthcare-allied": {
    BD: { entry: "BDT 20K–40K /mo", mid: "BDT 50K–100K /mo", senior: "BDT 120K+ /mo" },
    AU: { entry: "A$65–85K", mid: "A$90–115K", senior: "A$120–170K+" },
    AE: { entry: "AED 6K–12K /mo", mid: "AED 15K–25K /mo", senior: "AED 30K+ /mo" },
    GL: { entry: "Severe global shortage; visa-friendly", mid: "Strong demand worldwide", senior: "Specialist nurses, PTs earn very well" },
    LK: { entry: "LKR 50K–100K /mo", mid: "LKR 120K–250K /mo", senior: "LKR 300K+ /mo" },
    AF: { entry: "USD 200–500 /mo (govt); higher with NGOs / international", mid: "USD 600–1,500 /mo", senior: "USD 2K+ /mo" },
    IR: { entry: "IRR 80–180M /mo", mid: "IRR 200–450M /mo", senior: "IRR 500M+ /mo" },
    IQ: { entry: "USD 400–900 /mo", mid: "USD 1K–2K /mo", senior: "USD 2.5K+ /mo" },
    LB: { entry: "USD 500–1,200 /mo (often Gulf migration)", mid: "USD 1.5K–3K /mo", senior: "USD 3.5K+ /mo" },
    CN: { entry: "¥6K–12K /mo", mid: "¥15K–25K /mo", senior: "¥30K+ /mo" },
  },
  "trades-skilled": {
    BD: { entry: "BDT 10K–25K /mo", mid: "BDT 30K–60K /mo", senior: "BDT 80K+ /mo (own business)" },
    AU: { entry: "A$50–70K (apprentice + early)", mid: "A$80–110K", senior: "A$120K–200K+ (own business)" },
    AE: { entry: "AED 3K–8K /mo", mid: "AED 10K–20K /mo", senior: "AED 25K+ /mo" },
    GL: { entry: "Severe global shortage", mid: "Strong demand everywhere", senior: "Self-employed trades earn 6 figures in many countries" },
    LK: { entry: "LKR 30K–60K /mo", mid: "LKR 70K–150K /mo", senior: "LKR 200K+ /mo (own business)" },
    AF: { entry: "USD 100–300 /mo", mid: "USD 400–900 /mo", senior: "USD 1K+ /mo (own business)" },
    IR: { entry: "IRR 60–150M /mo", mid: "IRR 200–400M /mo", senior: "IRR 500M+ /mo (own business)" },
    IQ: { entry: "USD 300–700 /mo", mid: "USD 800–1,500 /mo", senior: "USD 2K+ /mo (own business)" },
    LB: { entry: "USD 300–700 /mo", mid: "USD 800–1,800 /mo", senior: "USD 2K+ /mo (especially Gulf migration)" },
    CN: { entry: "¥5K–10K /mo", mid: "¥12K–20K /mo", senior: "¥25K+ /mo (own business)" },
  },
};

// Apply patches at module load
for (const [careerId, byCountry] of Object.entries(SALARY_PATCHES)) {
  if (CAREER_INTEL[careerId]) {
    CAREER_INTEL[careerId].salary = { ...CAREER_INTEL[careerId].salary, ...byCountry };
  }
}

// Default demand for new countries (per career)
const DEMAND_DEFAULTS = {
  BD: { "software-engineer": "high", "data-scientist": "high", "content-creator": "high", "healthcare-allied": "high", "trades-skilled": "med", doctor: "high", designer: "med", "business-finance": "med", default: "med" },
  AU: { "software-engineer": "high", "data-scientist": "high", "healthcare-allied": "high", "trades-skilled": "high", doctor: "high", designer: "high", "business-finance": "high", default: "med" },
  AE: { "software-engineer": "high", "data-scientist": "high", "business-finance": "high", "healthcare-allied": "high", doctor: "high", designer: "high", "trades-skilled": "med", default: "med" },
  GL: { default: "med" },
  LK: { "software-engineer": "high", "data-scientist": "high", "content-creator": "med", "healthcare-allied": "high", doctor: "high", designer: "med", "business-finance": "med", "trades-skilled": "med", default: "med" },
  AF: { "software-engineer": "med", "data-scientist": "med", "content-creator": "med", "healthcare-allied": "high", doctor: "high", "teacher-educator": "high", "trades-skilled": "med", default: "low" },
  IR: { "software-engineer": "high", "data-scientist": "high", "content-creator": "med", "healthcare-allied": "high", doctor: "high", designer: "high", "trades-skilled": "med", "business-finance": "med", "scientist-researcher": "high", default: "med" },
  IQ: { "software-engineer": "high", "data-scientist": "med", "healthcare-allied": "high", doctor: "high", "trades-skilled": "high", "civil-engineer": "high", "business-finance": "med", default: "med" },
  LB: { "software-engineer": "high", "data-scientist": "high", "healthcare-allied": "high", doctor: "med", "business-finance": "high", designer: "high", "content-creator": "med", default: "med" },
  CN: { "software-engineer": "high", "data-scientist": "high", "healthcare-allied": "high", doctor: "high", designer: "high", "business-finance": "high", "content-creator": "high", "scientist-researcher": "high", "civil-engineer": "high", "trades-skilled": "med", default: "med" },
};
for (const [code, byCareer] of Object.entries(DEMAND_DEFAULTS)) {
  for (const [careerId, intel] of Object.entries(CAREER_INTEL)) {
    if (intel.demand && !intel.demand[code]) {
      intel.demand[code] = byCareer[careerId] || byCareer.default;
    }
  }
}

// Fallback message when salary data isn't available for a country
export function getSalaryWithFallback(intel, countryCode) {
  if (intel?.salary?.[countryCode]) return intel.salary[countryCode];
  return null; // caller can decide what to render
}

// Helper: get inclusive resources for a career given the user's identity lens
// AND derived signals from the new fields (faith, caregiving, background).
// This ensures users get relevant resources even when they didn't explicitly
// tick the identity-lens option.
export function getInclusiveResources(careerId, identityLensOrAnswers) {
  // Support either the old signature (lens array) or the new (answers object)
  let lens = [];
  if (Array.isArray(identityLensOrAnswers)) {
    lens = [...identityLensOrAnswers];
  } else if (identityLensOrAnswers && typeof identityLensOrAnswers === "object") {
    const ans = identityLensOrAnswers;
    lens = [...(ans.identityLens || [])];
    if ((ans.faithConsiderations || []).length && !lens.includes("faith")) lens.push("faith");
    if ((ans.caregiving || []).length && !lens.includes("caregiver")) lens.push("caregiver");
    if ((ans.background === "rural" || ans.background === "small-town") && !lens.includes("rural")) {
      lens.push("rural");
    }
  }

  const result = [];
  const seen = new Set();
  for (const l of lens) {
    const bank = INCLUSIVE_COMMUNITIES[l];
    if (!bank) continue;
    const list = bank[careerId] || bank.default || [];
    for (const r of list) {
      const key = r.url;
      if (seen.has(key)) continue;
      seen.add(key);
      result.push({ ...r, lens: l });
    }
  }
  return result;
}

// Helper: get demand label
export function demandLabel(level) {
  return { high: "High demand", med: "Steady demand", low: "Limited demand" }[level] || "Variable";
}

export function demandColor(level) {
  return {
    high: "bg-emerald-100 text-emerald-800 ring-emerald-200",
    med: "bg-amber-100 text-amber-800 ring-amber-200",
    low: "bg-rose-100 text-rose-800 ring-rose-200",
  }[level] || "bg-gray-100 text-gray-700 ring-gray-200";
}
