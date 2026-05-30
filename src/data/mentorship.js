// Mentorship + counselling resources.
//
// IMPORTANT DESIGN NOTE:
// We never fabricate specific individuals as "willing mentors". Instead we link
// to real platforms where actual humans have opted in to mentor strangers, and
// we give users the tools (search URLs, outreach scripts) to find their own.

export const GLOBAL_MENTOR_PLATFORMS = [
  {
    name: "ADPList",
    url: "https://adplist.org",
    cost: "Free",
    note: "Thousands of opted-in mentors offer free 1-on-1 sessions. Strongest for design, product, tech, and content roles.",
    bestFor: ["software-engineer", "data-scientist", "designer", "content-creator", "entrepreneur"],
  },
  {
    name: "MentorCruise",
    url: "https://mentorcruise.com",
    cost: "$150 to $300 a month",
    note: "Long-term, vetted mentorship across most tech and business fields. Senior practitioners commit to ongoing 1-on-1 coaching.",
    bestFor: ["software-engineer", "data-scientist", "designer", "business-finance", "entrepreneur"],
  },
  {
    name: "Topmate",
    url: "https://topmate.io",
    cost: "$5 to $50 per session",
    note: "Pay-per-session calls with verified senior professionals. Extremely strong in India and growing globally.",
    bestFor: ["software-engineer", "data-scientist", "designer", "business-finance", "civil-services", "entrepreneur"],
  },
  {
    name: "GrowthMentor",
    url: "https://growthmentor.com",
    cost: "Subscription based",
    note: "Mentor matching focused on marketing, product, growth, and entrepreneurship.",
    bestFor: ["business-finance", "entrepreneur", "content-creator"],
  },
  {
    name: "Plato",
    url: "https://platohq.com",
    cost: "Mostly enterprise",
    note: "Engineering leadership mentorship. Useful if you're aiming for tech-lead, EM, or director roles.",
    bestFor: ["software-engineer", "data-scientist"],
  },
];

// Career counselling resources by country. Mix of professional bodies,
// affordable online platforms, and free youth-focused options.
export const COUNTRY_CAREER_SUPPORT = {
  IN: [
    {
      name: "Mindler",
      url: "https://www.mindler.com",
      cost: "Paid",
      type: "Career counsellor platform",
      note: "Psychometric assessment plus 1-on-1 counsellor sessions. Designed for Class 9 onward and working professionals.",
    },
    {
      name: "iDreamCareer",
      url: "https://www.idreamcareer.com",
      cost: "Paid",
      type: "Career counsellor platform",
      note: "Career counselling for students with reports, college guidance, and counsellor sessions.",
    },
    {
      name: "YourDOST",
      url: "https://yourdost.com",
      cost: "Free + paid tiers",
      type: "Counselling + emotional support",
      note: "Online emotional support and career counselling from licensed Indian counsellors.",
    },
    {
      name: "iCare (Government helpline)",
      url: "tel:18005990019",
      cost: "Free",
      type: "Free helpline",
      note: "Government-backed mental-health helpline: 1800-599-0019.",
    },
  ],
  PK: [
    {
      name: "Career Counselor PK",
      url: "https://www.careercounselor.pk",
      cost: "Paid",
      type: "Career counsellor platform",
      note: "Pakistan-based career counselling with assessment plus counsellor sessions.",
    },
    {
      name: "Taskeen",
      url: "https://taskeen.org",
      cost: "Free",
      type: "Mental health + free resources",
      note: "Free mental-health resources and counsellor directory, focused on Pakistani youth.",
    },
    {
      name: "Umang Pakistan",
      url: "https://umang.com.pk",
      cost: "Free",
      type: "Peer support",
      note: "Peer-driven emotional support network. Volunteers respond within 24 hours.",
    },
    {
      name: "Rozan Helpline",
      url: "tel:080022444",
      cost: "Free",
      type: "Free helpline",
      note: "Confidential counselling helpline: 0800-22444.",
    },
  ],
  UK: [
    {
      name: "National Careers Service",
      url: "https://nationalcareers.service.gov.uk",
      cost: "Free",
      type: "Government service",
      note: "Free careers advice for everyone 13+. Phone advisers available 8am to 8pm.",
    },
    {
      name: "Prospects",
      url: "https://www.prospects.ac.uk/careers-advice",
      cost: "Free",
      type: "Online advice + tools",
      note: "Comprehensive career advice especially strong for university students and graduates.",
    },
    {
      name: "BetterUp",
      url: "https://www.betterup.com",
      cost: "Paid (often employer-funded)",
      type: "Coaching platform",
      note: "Professional coaching with certified coaches. Many UK employers cover access.",
    },
    {
      name: "YoungMinds",
      url: "https://youngminds.org.uk",
      cost: "Free",
      type: "Youth wellbeing",
      note: "Mental-health support designed for young people, including a parents' helpline.",
    },
  ],
  US: [
    {
      name: "BetterUp",
      url: "https://www.betterup.com",
      cost: "Paid (often employer-funded)",
      type: "Coaching platform",
      note: "Coaching from certified professional coaches. Many US employers offer access as a benefit.",
    },
    {
      name: "CareerVillage",
      url: "https://www.careervillage.org",
      cost: "Free",
      type: "Q&A with professionals",
      note: "Ask questions and get answers from real professionals in any field. Designed for students.",
    },
    {
      name: "National Career Development Association",
      url: "https://www.ncda.org/aws/NCDA/pt/sp/consumer_find",
      cost: "Paid",
      type: "Find a certified counsellor",
      note: "Directory of certified career counsellors across the US, searchable by zip code.",
    },
    {
      name: "JED Foundation",
      url: "https://jedfoundation.org",
      cost: "Free",
      type: "Youth mental health",
      note: "Emotional health and suicide prevention resources for teens and young adults.",
    },
  ],
  CA: [
    {
      name: "CERIC",
      url: "https://ceric.ca",
      cost: "Free directory",
      type: "Find a career professional",
      note: "Canadian career-development association with a searchable directory of professionals.",
    },
    {
      name: "JobBank Canada Career Quiz + Advice",
      url: "https://www.jobbank.gc.ca",
      cost: "Free",
      type: "Government service",
      note: "Government of Canada job and career planning resources including a career quiz.",
    },
    {
      name: "BetterUp",
      url: "https://www.betterup.com",
      cost: "Paid (often employer-funded)",
      type: "Coaching platform",
      note: "Certified coach matching. Increasingly available through Canadian employer plans.",
    },
    {
      name: "Kids Help Phone",
      url: "https://kidshelpphone.ca",
      cost: "Free",
      type: "24/7 youth support",
      note: "Free 24/7 confidential support: 1-800-668-6868 or text CONNECT to 686868.",
    },
  ],
  AU: [
    { name: "headspace", url: "https://headspace.org.au", cost: "Free", type: "Youth support 12–25", note: "Free mental-health and career support for young people across Australia." },
    { name: "Career Industry Council of Australia", url: "https://cica.org.au", cost: "Paid directory", type: "Find certified career professionals", note: "National directory of certified career development practitioners." },
    { name: "Beyond Blue", url: "https://www.beyondblue.org.au", cost: "Free", type: "Mental-health support", note: "Free counselling and information service: 1300 22 4636." },
    { name: "Job Outlook", url: "https://www.jobsandskills.gov.au/jobsandskillsaustralia", cost: "Free", type: "Government career data", note: "Skills, job market info, and career exploration tools from the Australian government." },
  ],
  BD: [
    { name: "Moner Bondhu", url: "https://www.monerbondhu.com", cost: "Free + paid", type: "Online counselling", note: "Bangladesh-based mental-health and counselling platform with trained counsellors." },
    { name: "Kaan Pete Roi", url: "https://shuni.org", cost: "Free", type: "Emotional support helpline", note: "Confidential helpline: 9612-119-911. Daily 3pm–9pm." },
    { name: "Bangladesh Career Club", url: "https://bangladeshcareerclub.com", cost: "Free", type: "Career-guidance community", note: "Free career-counselling community for Bangladeshi students and professionals." },
    { name: "10 Minute School Career", url: "https://10minuteschool.com", cost: "Free + paid", type: "Career and skill content", note: "Bangladesh's largest edtech platform with career-prep content in Bangla and English." },
  ],
  AE: [
    { name: "Estijaba", url: "https://www.doh.gov.ae", cost: "Free", type: "Health & mental-health helpline", note: "Department of Health Abu Dhabi service: 8001717." },
    { name: "Lighthouse Arabia", url: "https://www.lighthousearabia.com", cost: "Paid", type: "Counselling clinic", note: "Highly respected Dubai-based counselling clinic supporting career and life decisions." },
    { name: "UAE Ministry of Education guides", url: "https://www.moe.gov.ae", cost: "Free", type: "Government careers info", note: "Official guides on careers, study paths, and Emiratisation." },
    { name: "Friends of Cancer Patients UAE", url: "https://focp.ae", cost: "Free", type: "Counselling support", note: "Free counselling support across health and life decisions." },
  ],
  LK: [
    { name: "Sumithrayo", url: "https://srilankasumithrayo.lk", cost: "Free", type: "Emotional support helpline", note: "Free helpline: +94 11 2 696 666 or +94 11 2 692 909." },
    { name: "Shanthi Maargam", url: "https://shanthimaargam.org", cost: "Free", type: "Youth counselling", note: "Free counselling for youth in English, Sinhala, and Tamil." },
    { name: "CCC Line", url: "tel:1333", cost: "Free", type: "Mental-health hotline", note: "Mental-health hotline available 24/7: dial 1333." },
  ],
  AF: [
    { name: "Asian University for Women", url: "https://asian-university.org", cost: "Free (scholarship)", type: "Education access for Afghan women", note: "Fully-funded undergraduate education for Afghan women, based in Bangladesh." },
    { name: "University of the People", url: "https://www.uopeople.edu", cost: "Free tuition", type: "Free accredited online degrees", note: "American-accredited online university with free tuition (small assessment fees)." },
    { name: "UNHCR DAFI", url: "https://www.unhcr.org/dafi-scholarships", cost: "Free (scholarship)", type: "Refugee tertiary education", note: "Scholarships for refugees including Afghans, in host countries worldwide." },
    { name: "Befrienders Worldwide", url: "https://www.befrienders.org", cost: "Free", type: "Global helpline directory", note: "Find local helplines by country." },
  ],
  IR: [
    { name: "Behzisti Hotline 1480", url: "tel:1480", cost: "Free", type: "Government welfare hotline", note: "National mental-health and social-support hotline." },
    { name: "Aramesh Online Counselling", url: "https://aramesh-online.com", cost: "Paid", type: "Online counselling", note: "Iran's largest online counselling platform with licensed counsellors." },
    { name: "Hamrahan-e-Aramesh", url: "https://www.haram-org.com", cost: "Free + paid", type: "Counselling & support", note: "Iran-based counselling support network." },
  ],
  IQ: [
    { name: "Iraqi Society of Psychiatrists", url: "https://isp-iraq.org", cost: "Paid directory", type: "Find a psychiatrist", note: "Directory of practising psychiatrists across Iraq." },
    { name: "International Medical Corps Iraq", url: "https://internationalmedicalcorps.org", cost: "Free", type: "Mental-health programmes", note: "Free mental-health support programmes especially in conflict-affected regions." },
    { name: "AUIS Career Development Office", url: "https://auis.edu.krd", cost: "Free for AUIS students", type: "Career counselling", note: "American University of Iraq career office; many resources also publicly accessible." },
  ],
  LB: [
    { name: "Embrace Lifeline", url: "https://embracelebanon.org", cost: "Free", type: "24/7 mental-health support", note: "Lebanon's national mental-health helpline: 1564." },
    { name: "IDRAAC", url: "https://idraac.org", cost: "Free + paid", type: "Mental-health institute", note: "Institute for Development, Research, Advocacy, and Applied Care." },
    { name: "AUB Career Hub", url: "https://www.aub.edu.lb", cost: "Free for AUB community", type: "Career counselling", note: "American University of Beirut's career-services office." },
  ],
  CN: [
    { name: "Beijing Suicide Research and Prevention Center", url: "tel:01082951332", cost: "Free", type: "Mental-health hotline", note: "24/7 hotline: 010-8295-1332." },
    { name: "Lifeline Shanghai", url: "https://www.lifelineshanghai.com", cost: "Free", type: "Confidential support", note: "English / Mandarin helpline: 400 821 1215. 10am–10pm daily." },
    { name: "BetterHelp China", url: "https://www.betterhelp.com", cost: "Paid", type: "Online therapy", note: "Online therapy platform with Mandarin-speaking therapists." },
    { name: "Zhaopin Career Advice", url: "https://www.zhaopin.com", cost: "Free", type: "Career-guidance articles", note: "Career-advice section of China's largest job portal." },
  ],
};

// Build a pre-filtered LinkedIn search URL so a user can find real practitioners.
export function linkedInSearchUrl(role, countryCode) {
  const countryNames = {
    IN: "India",
    PK: "Pakistan",
    UK: "United Kingdom",
    US: "United States",
    CA: "Canada",
  };
  const country = countryNames[countryCode] || "";
  const q = encodeURIComponent(`${role} ${country}`.trim());
  return `https://www.linkedin.com/search/results/people/?keywords=${q}`;
}

// A short, honest cold-outreach template the user can copy into a DM.
export const OUTREACH_SCRIPT = `Hi {Name},

I'm {your name}, currently {your situation} based in {your country}. I'm seriously exploring {field} as my next step and I came across your work on {specific thing they did}.

I'm not looking for a job. I'd just love 15 minutes of your thinking on one specific question: {your question}.

If you have the bandwidth in the next two weeks, I'd really appreciate it. Either way, thank you for what you put out into the world.

{your name}`;

// Honest framing the user can show in the UI.
export const MENTORSHIP_PRINCIPLES = [
  "Real mentors are people, not algorithms. The platforms below contain real humans who have opted in to help strangers like you.",
  "Don't ask anyone 'will you be my mentor?'. Ask one specific question. Mentorship grows from there naturally.",
  "Senior people are generous when you respect their time. A 2-line message with a specific question gets responses. A 6-paragraph essay does not.",
];
