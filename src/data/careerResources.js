// Online resources for each career: curated learning paths, real communities,
// and a search-term hint that powers the "find practitioners on LinkedIn" link.
//
// We deliberately keep each list small and high-signal. Everything linked here
// is an established, public resource. We do NOT list individual people as
// "mentors" because we cannot verify their willingness; instead we point users
// to platforms where real humans have opted in to mentor.

export const CAREER_RESOURCES = {
  "software-engineer": {
    searchRole: "Software Engineer",
    learn: [
      { name: "freeCodeCamp", url: "https://www.freecodecamp.org", cost: "Free", note: "Project-based curriculum from absolute beginner to job-ready." },
      { name: "CS50 (Harvard via edX)", url: "https://cs50.harvard.edu/x/", cost: "Free", note: "The world's most respected intro to computer science." },
      { name: "The Odin Project", url: "https://www.theodinproject.com", cost: "Free", note: "Free full-stack web development path with strong community." },
      { name: "LeetCode", url: "https://leetcode.com", cost: "Free + Paid", note: "Coding-interview practice. Essential for landing top jobs." },
    ],
    communities: [
      { name: "r/cscareerquestions", url: "https://www.reddit.com/r/cscareerquestions/", note: "Honest career advice from working engineers." },
      { name: "freeCodeCamp Forum", url: "https://forum.freecodecamp.org", note: "Active community of learners helping each other." },
      { name: "Hacker News", url: "https://news.ycombinator.com", note: "Where senior engineers discuss what's actually happening in tech." },
      { name: "DEV Community", url: "https://dev.to", note: "Blog posts and discussions from developers worldwide." },
    ],
  },

  "data-scientist": {
    searchRole: "Data Scientist Machine Learning Engineer",
    learn: [
      { name: "Andrew Ng's ML Specialization (Coursera)", url: "https://www.coursera.org/specializations/machine-learning-introduction", cost: "Audit free", note: "The classic on-ramp into machine learning." },
      { name: "Fast.ai", url: "https://www.fast.ai", cost: "Free", note: "Practical deep-learning course built for working professionals." },
      { name: "Kaggle Learn", url: "https://www.kaggle.com/learn", cost: "Free", note: "Hands-on micro-courses plus real competitions to build a portfolio." },
      { name: "StatQuest (YouTube)", url: "https://www.youtube.com/c/joshstarmer", cost: "Free", note: "Statistics and ML explained clearly without intimidating maths." },
    ],
    communities: [
      { name: "r/MachineLearning", url: "https://www.reddit.com/r/MachineLearning/", note: "Cutting-edge ML papers and discussions." },
      { name: "r/datascience", url: "https://www.reddit.com/r/datascience/", note: "Career advice and real-world data work." },
      { name: "Kaggle Forums", url: "https://www.kaggle.com/discussions", note: "Where the world's data scientists share notebooks and tactics." },
    ],
  },

  doctor: {
    searchRole: "Doctor Physician Resident",
    learn: [
      { name: "Khan Academy MCAT/Pre-Med", url: "https://www.khanacademy.org/science", cost: "Free", note: "Strong free foundation in bio, chem, and physics." },
      { name: "Osmosis (Elsevier)", url: "https://www.osmosis.org", cost: "Paid", note: "Video-based medical learning used by med students worldwide." },
      { name: "Lecturio", url: "https://www.lecturio.com", cost: "Free + Paid", note: "Pre-med and medical-school prep courses." },
    ],
    communities: [
      { name: "r/premed", url: "https://www.reddit.com/r/premed/", note: "Pre-medical advice, application help, and honest experiences." },
      { name: "r/medicalschool", url: "https://www.reddit.com/r/medicalschool/", note: "Real talk from current and former medical students." },
      { name: "Student Doctor Network", url: "https://www.studentdoctor.net", note: "Long-running forum across all medical career stages." },
    ],
  },

  psychologist: {
    searchRole: "Psychologist Counsellor Therapist",
    learn: [
      { name: "Yale's Science of Wellbeing (Coursera)", url: "https://www.coursera.org/learn/the-science-of-well-being", cost: "Audit free", note: "The most popular psychology course in the world." },
      { name: "Verywell Mind", url: "https://www.verywellmind.com", cost: "Free", note: "Approachable, well-sourced articles on every area of psychology." },
      { name: "American Psychological Association", url: "https://www.apa.org", cost: "Free + Paid", note: "Authoritative resources on careers and education in psychology." },
    ],
    communities: [
      { name: "r/psychology", url: "https://www.reddit.com/r/psychology/", note: "Research-focused discussions." },
      { name: "r/AskPsychology", url: "https://www.reddit.com/r/AskPsychology/", note: "Real practitioners answer questions about the field." },
    ],
  },

  designer: {
    searchRole: "Product Designer UX Designer",
    learn: [
      { name: "Google UX Design Certificate", url: "https://www.coursera.org/professional-certificates/google-ux-design", cost: "Paid", note: "Career-changer-friendly certificate that hiring teams recognise." },
      { name: "Refactoring UI", url: "https://www.refactoringui.com", cost: "Paid book", note: "Visual design fundamentals for non-designers and devs." },
      { name: "Figma's Design School (YouTube)", url: "https://www.youtube.com/@Figma", cost: "Free", note: "Free tutorials from the tool you'll actually be using." },
      { name: "Designer Hangout", url: "https://www.designerhangout.co", cost: "Free", note: "The largest UX designer Slack community." },
    ],
    communities: [
      { name: "Designer Hangout (Slack)", url: "https://www.designerhangout.co", note: "Vetted UX-designer community with 13,000+ members." },
      { name: "ADPList", url: "https://adplist.org", note: "Free 1-on-1 design mentorship from senior practitioners." },
      { name: "r/userexperience", url: "https://www.reddit.com/r/userexperience/", note: "Honest UX career discussions." },
    ],
  },

  "civil-engineer": {
    searchRole: "Civil Engineer Mechanical Engineer Electrical Engineer",
    learn: [
      { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu", cost: "Free", note: "Engineering courses from one of the world's top engineering schools." },
      { name: "Khan Academy: Physics + Math", url: "https://www.khanacademy.org", cost: "Free", note: "Solid foundation in the maths and physics that engineering rests on." },
      { name: "Engineering.com", url: "https://www.engineering.com", cost: "Free", note: "Industry news, project case studies, and trend articles." },
    ],
    communities: [
      { name: "r/EngineeringStudents", url: "https://www.reddit.com/r/EngineeringStudents/", note: "Where engineering students help each other through degrees." },
      { name: "r/AskEngineers", url: "https://www.reddit.com/r/AskEngineers/", note: "Practising engineers answer real career and technical questions." },
    ],
  },

  "business-finance": {
    searchRole: "Business Analyst Investment Banker Consultant",
    learn: [
      { name: "CFI (Corporate Finance Institute)", url: "https://corporatefinanceinstitute.com", cost: "Free + Paid", note: "Financial-modelling and analyst skills used in banking and consulting." },
      { name: "Wall Street Prep", url: "https://www.wallstreetprep.com", cost: "Paid", note: "The standard self-study path for breaking into investment banking." },
      { name: "Harvard Business Review", url: "https://hbr.org", cost: "Free + Paid", note: "Where senior business thinkers publish; you'll absorb the language of business." },
    ],
    communities: [
      { name: "r/FinancialCareers", url: "https://www.reddit.com/r/FinancialCareers/", note: "Honest career advice from working professionals." },
      { name: "Wall Street Oasis", url: "https://www.wallstreetoasis.com", note: "Largest community for finance / consulting careers." },
    ],
  },

  lawyer: {
    searchRole: "Lawyer Advocate Attorney Solicitor",
    learn: [
      { name: "edX Law Courses", url: "https://www.edx.org/learn/law", cost: "Free + Paid", note: "Intro courses from top law schools to get a real taste of legal thinking." },
      { name: "Bar Council guides", url: "https://www.barcouncil.org.uk", cost: "Free", note: "Official guidance on becoming a barrister in the UK; useful framework even elsewhere." },
    ],
    communities: [
      { name: "r/LawSchool", url: "https://www.reddit.com/r/LawSchool/", note: "Law-school applicants and current students sharing the process." },
      { name: "r/Lawyertalk", url: "https://www.reddit.com/r/Lawyertalk/", note: "Practising lawyers discussing real working life." },
    ],
  },

  "teacher-educator": {
    searchRole: "Teacher Educator Professor",
    learn: [
      { name: "Coursera: Foundations of Teaching", url: "https://www.coursera.org/learn/foundations-teaching-learning", cost: "Audit free", note: "Approachable intro to learning science and classroom design." },
      { name: "Edutopia", url: "https://www.edutopia.org", cost: "Free", note: "Practical classroom strategies from working teachers worldwide." },
      { name: "Teach for India / All / America", url: "https://www.teachforall.org", cost: "Programme", note: "Global network of teaching fellowships for graduates entering education." },
    ],
    communities: [
      { name: "r/Teachers", url: "https://www.reddit.com/r/Teachers/", note: "Working teachers exchanging classroom realities and tips." },
      { name: "Edutopia Community", url: "https://www.edutopia.org/community", note: "Discussion forums attached to a respected education publication." },
    ],
  },

  "content-creator": {
    searchRole: "Content Creator Journalist Writer",
    learn: [
      { name: "Ali Abdaal's YouTuber Academy (free YT version)", url: "https://www.youtube.com/@aliabdaal", cost: "Free", note: "Practical YouTube and personal-brand advice from a creator who built it himself." },
      { name: "Write of Passage", url: "https://writeofpassage.school", cost: "Paid cohort", note: "The most respected online writing programme for serious creators." },
      { name: "Creator Economy newsletters", url: "https://www.passionfroot.me", cost: "Free", note: "Newsletters like 'The Tilt' and 'Creator Economy Report' map this industry weekly." },
    ],
    communities: [
      { name: "r/NewTubers", url: "https://www.reddit.com/r/NewTubers/", note: "Beginner-friendly YouTube creator community." },
      { name: "Creator Economy Pros", url: "https://www.passionfroot.me", note: "Communities of working creators across multiple platforms." },
    ],
  },

  entrepreneur: {
    searchRole: "Founder Entrepreneur Startup",
    learn: [
      { name: "Y Combinator Startup School", url: "https://www.startupschool.org", cost: "Free", note: "World-class founder curriculum from the most influential accelerator on earth." },
      { name: "Paul Graham's essays", url: "https://www.paulgraham.com/articles.html", cost: "Free", note: "The original founder writings. Read them in order." },
      { name: "First Round Review", url: "https://review.firstround.com", cost: "Free", note: "Deep interviews with founders and operators on how they actually built things." },
    ],
    communities: [
      { name: "Indie Hackers", url: "https://www.indiehackers.com", note: "Bootstrapped founders sharing revenue and lessons publicly." },
      { name: "r/startups", url: "https://www.reddit.com/r/startups/", note: "Active startup discussion across all stages." },
      { name: "Hacker News", url: "https://news.ycombinator.com", note: "Where founders, engineers, and investors debate what's coming next." },
    ],
  },

  "civil-services": {
    searchRole: "Civil Services UPSC CSS Policy Officer",
    learn: [
      { name: "Insights on India (UPSC)", url: "https://www.insightsonindia.com", cost: "Free + Paid", note: "One of India's most trusted UPSC preparation portals." },
      { name: "CSS Pakistan resources", url: "https://www.cssforum.com.pk", cost: "Free", note: "Active forum and notes for Pakistani CSS candidates." },
      { name: "UK Civil Service Fast Stream", url: "https://www.faststream.gov.uk", cost: "Free", note: "Official UK Civil Service graduate programme info and prep tips." },
    ],
    communities: [
      { name: "r/UPSC", url: "https://www.reddit.com/r/UPSC/", note: "Real strategies and mental-health discussions among UPSC aspirants." },
      { name: "CSSForum", url: "https://www.cssforum.com.pk", note: "Pakistan's largest CSS aspirant community." },
    ],
  },

  "trades-skilled": {
    searchRole: "Electrician Plumber Mechanic HVAC Chef",
    learn: [
      { name: "Mike Holt Enterprises (electrical)", url: "https://www.mikeholt.com", cost: "Free + Paid", note: "Industry-standard training for electrical work." },
      { name: "Skilled Trades Canada", url: "https://www.red-seal.ca", cost: "Free", note: "Red Seal certification info covering every Canadian trade." },
      { name: "City & Guilds (UK)", url: "https://www.cityandguilds.com", cost: "Programme", note: "The UK's main vocational and skilled-trades certifying body." },
      { name: "YouTube: 'This Old House'", url: "https://www.youtube.com/@thisoldhouse", cost: "Free", note: "Watch real tradespeople do real work. Better than any textbook." },
    ],
    communities: [
      { name: "r/Construction", url: "https://www.reddit.com/r/Construction/", note: "Working tradespeople answering questions from newcomers." },
      { name: "r/Skookum", url: "https://www.reddit.com/r/Skookum/", note: "Hands-on engineering and trades community." },
    ],
  },

  "scientist-researcher": {
    searchRole: "Research Scientist PhD Postdoc",
    learn: [
      { name: "Coursera: Research courses", url: "https://www.coursera.org/courses?query=research%20methods", cost: "Audit free", note: "Foundations of research methodology from top universities." },
      { name: "arXiv", url: "https://arxiv.org", cost: "Free", note: "The open-access preprint server where most new science appears first." },
      { name: "Nature Careers", url: "https://www.nature.com/naturecareers", cost: "Free", note: "Honest advice and job listings for working scientists." },
    ],
    communities: [
      { name: "r/AskAcademia", url: "https://www.reddit.com/r/AskAcademia/", note: "Working academics share the realities of research careers." },
      { name: "ResearchGate", url: "https://www.researchgate.net", note: "Researcher network where you can follow your future field's leaders directly." },
    ],
  },

  "healthcare-allied": {
    searchRole: "Nurse Physiotherapist Pharmacist",
    learn: [
      { name: "Khan Academy: Health & Medicine", url: "https://www.khanacademy.org/science/health-and-medicine", cost: "Free", note: "Foundational health-science content used by pre-med and allied-health students." },
      { name: "NursingCenter", url: "https://www.nursingcenter.com", cost: "Free + Paid", note: "Continuing-education resources from the journal Nursing." },
      { name: "Coursera: Healthcare specialisations", url: "https://www.coursera.org/browse/health", cost: "Audit free", note: "Programmes across nursing, public health, and patient care." },
    ],
    communities: [
      { name: "r/nursing", url: "https://www.reddit.com/r/nursing/", note: "Active community of working nurses." },
      { name: "r/physicaltherapy", url: "https://www.reddit.com/r/physicaltherapy/", note: "PTs and PT students discussing the profession honestly." },
    ],
  },

  architect: {
    searchRole: "Architect Urban Planner",
    learn: [
      { name: "Coursera: Making Architecture", url: "https://www.coursera.org/learn/making-architecture", cost: "Audit free", note: "Intro to architectural thinking from IE School." },
      { name: "ArchDaily", url: "https://www.archdaily.com", cost: "Free", note: "The world's most-read architecture publication." },
      { name: "Dezeen", url: "https://www.dezeen.com", cost: "Free", note: "Daily design and architecture news. Inspiration and trends." },
    ],
    communities: [
      { name: "r/architecture", url: "https://www.reddit.com/r/architecture/", note: "Active community of students and working architects." },
      { name: "Archinect", url: "https://archinect.com", note: "Long-running architecture community with jobs, forum, and school discussions." },
    ],
  },
};
