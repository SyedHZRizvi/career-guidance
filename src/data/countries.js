// Country-specific context: education systems, entry exams, common paths,
// cultural pressures, and student support resources.

export const COUNTRIES = {
  IN: {
    code: "IN",
    name: "India",
    flag: "🇮🇳",
    educationSystem: {
      schoolStreams: [
        { id: "science-pcm", name: "Science (PCM)", note: "Physics, Chemistry and Maths. Leads into engineering, architecture and defence." },
        { id: "science-pcb", name: "Science (PCB)", note: "Physics, Chemistry and Biology. Leads into medicine, biotech and pharmacy." },
        { id: "commerce", name: "Commerce", note: "Accounts, Business and Economics. Leads into CA, finance and business." },
        { id: "arts", name: "Arts / Humanities", note: "History, Psychology and Political Science. Leads into law, civil services and media." },
        { id: "vocational", name: "Vocational", note: "Skill-based, industry-ready tracks (NSDC, ITI)" },
      ],
      entranceExams: [
        { id: "jee", name: "JEE Main + Advanced", forStreams: ["science-pcm"], leadsTo: "IITs, NITs, IIITs (engineering)" },
        { id: "neet", name: "NEET", forStreams: ["science-pcb"], leadsTo: "MBBS, BDS, AYUSH" },
        { id: "cuet", name: "CUET", forStreams: ["commerce", "arts", "science-pcm", "science-pcb"], leadsTo: "Central universities (DU, JNU, BHU, etc.)" },
        { id: "clat", name: "CLAT", forStreams: ["arts", "commerce"], leadsTo: "NLUs (5-year integrated law)" },
        { id: "nift", name: "NIFT / NID", forStreams: ["arts"], leadsTo: "Fashion, design institutes" },
        { id: "upsc", name: "UPSC CSE", forStreams: ["arts", "commerce"], leadsTo: "IAS, IPS, IFS (after graduation)" },
        { id: "ca", name: "CA Foundation", forStreams: ["commerce"], leadsTo: "Chartered Accountant" },
      ],
      topInstitutions: ["IITs", "IIMs", "AIIMS", "NLU Bangalore", "DU", "JNU", "IISc", "BITS Pilani", "NIFT"],
    },
    culturalContext: {
      commonPressures: [
        "Family expectation to pursue engineering, medicine, or government services",
        "Comparison with cousins, neighbours, classmates",
        "Marriage prospects tied to career prestige",
        "Reservation/category-based competition stress",
        "Pressure to take coaching (Kota, Hyderabad) from class 9 onward",
      ],
      reframing:
        "India today has thriving careers in design, content, sports, AI, climate, startups, and creative arts that didn't exist for your parents. Prestige is shifting.",
    },
    resources: [
      { name: "iCare (Govt. helpline)", detail: "Mental health helpline: 1800-599-0019" },
      { name: "Vandrevala Foundation", detail: "Free 24/7 counselling: 1860-2662-345" },
      { name: "Manodarpan (MoE)", detail: "Student wellbeing support" },
    ],
  },

  PK: {
    code: "PK",
    name: "Pakistan",
    flag: "🇵🇰",
    educationSystem: {
      schoolStreams: [
        { id: "pre-engineering", name: "Pre-Engineering", note: "Maths, Physics and Chemistry. Leads into engineering and IT." },
        { id: "pre-medical", name: "Pre-Medical", note: "Biology, Physics and Chemistry. Leads into MBBS, BDS and pharmacy." },
        { id: "computer-science", name: "ICS / Computer Science", note: "Maths, Physics and CS. Leads into software and AI." },
        { id: "commerce", name: "I.Com / Commerce", note: "Accounts and Business. Leads into banking, CA and ACCA." },
        { id: "humanities", name: "Humanities / Arts", note: "Political Science, Psychology and Islamic Studies. Leads into law, CSS and education." },
        { id: "olevels", name: "O/A Levels", note: "British system. Strong international university pathway." },
      ],
      entranceExams: [
        { id: "mdcat", name: "MDCAT", forStreams: ["pre-medical"], leadsTo: "MBBS, BDS in public/private medical colleges" },
        { id: "ecat", name: "ECAT", forStreams: ["pre-engineering", "computer-science"], leadsTo: "UET and engineering universities" },
        { id: "nust-net", name: "NUST NET", forStreams: ["pre-engineering", "computer-science"], leadsTo: "NUST programs" },
        { id: "nts", name: "NTS / NAT", forStreams: ["all"], leadsTo: "Various universities" },
        { id: "lums-sse", name: "LUMS SSE/SAT", forStreams: ["all"], leadsTo: "LUMS, Habib, IBA" },
        { id: "css", name: "CSS", forStreams: ["humanities", "commerce"], leadsTo: "Civil services (after graduation)" },
      ],
      topInstitutions: ["LUMS", "NUST", "IBA Karachi", "FAST", "GIKI", "Aga Khan U", "QAU", "UET Lahore", "Habib U"],
    },
    culturalContext: {
      commonPressures: [
        "Strong push toward MBBS, engineering, or going abroad",
        "'Log kya kahenge', the constant worry about what other people will say",
        "Joint-family opinions on career choice carry weight",
        "Pressure to support family financially soon after graduating",
        "Gender expectations affecting field choice",
      ],
      reframing:
        "Pakistan's tech, freelancing, and creative industries have exploded. Software exports, design, content, and entrepreneurship are now respected and well-paying paths.",
    },
    resources: [
      { name: "Umang Pakistan", detail: "Mental health support: umang.com.pk" },
      { name: "Rozan Helpline", detail: "Counselling: 0800-22444" },
      { name: "Taskeen", detail: "Free mental health resources: taskeen.org" },
    ],
  },

  UK: {
    code: "UK",
    name: "United Kingdom",
    flag: "🇬🇧",
    educationSystem: {
      schoolStreams: [
        { id: "gcse", name: "GCSEs (Year 10–11)", note: "Foundation stage, usually 8 to 10 subjects" },
        { id: "a-levels", name: "A-Levels", note: "3 to 4 subjects, the core university preparation route" },
        { id: "btec", name: "BTEC / T-Levels", note: "Vocational, industry-aligned" },
        { id: "ib", name: "International Baccalaureate", note: "Global curriculum, broader subject mix" },
        { id: "apprenticeship", name: "Apprenticeships", note: "Earn while you learn, including degree apprenticeships" },
      ],
      entranceExams: [
        { id: "ucas", name: "UCAS Application", forStreams: ["a-levels", "ib", "btec"], leadsTo: "UK universities" },
        { id: "ucat", name: "UCAT / BMAT", forStreams: ["a-levels"], leadsTo: "Medicine, dentistry" },
        { id: "lnat", name: "LNAT", forStreams: ["a-levels"], leadsTo: "Law programs at top universities" },
        { id: "tmua", name: "TMUA / MAT", forStreams: ["a-levels"], leadsTo: "Maths-heavy programs (Cambridge, Warwick, etc.)" },
      ],
      topInstitutions: ["Oxford", "Cambridge", "Imperial College", "LSE", "UCL", "Edinburgh", "Warwick", "Manchester", "Bristol", "King's College London"],
    },
    culturalContext: {
      commonPressures: [
        "Pressure to attend Russell Group / Oxbridge universities",
        "Anxiety over post-pandemic tuition costs and graduate debt",
        "Comparison via UCAS predicted grades",
        "Choosing between traditional uni vs. apprenticeship pathways",
        "Subject choice anxiety as early as Year 9 GCSE options",
      ],
      reframing:
        "Degree apprenticeships and skill-based bootcamps are increasingly valued by employers. The 'top uni' route is no longer the only respectable one.",
    },
    resources: [
      { name: "Childline", detail: "Free, confidential: 0800 1111" },
      { name: "YoungMinds", detail: "Mental health for young people: youngminds.org.uk" },
      { name: "The Mix", detail: "Under-25s support: themix.org.uk" },
    ],
  },

  US: {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    educationSystem: {
      schoolStreams: [
        { id: "honors", name: "Honors / AP", note: "Advanced Placement courses for college credit" },
        { id: "ib", name: "International Baccalaureate", note: "Rigorous global diploma program" },
        { id: "standard", name: "Standard College Prep", note: "Core academic track" },
        { id: "cte", name: "Career & Tech Ed (CTE)", note: "Hands-on, industry-credentialed pathways" },
        { id: "dual", name: "Dual Enrollment", note: "Earn community-college credit in high school" },
      ],
      entranceExams: [
        { id: "sat", name: "SAT / ACT", forStreams: ["honors", "standard", "ib"], leadsTo: "Most 4-year universities (many test-optional now)" },
        { id: "ap", name: "AP Exams", forStreams: ["honors", "ib"], leadsTo: "College credit, strong applications" },
        { id: "psat", name: "PSAT/NMSQT", forStreams: ["honors", "standard"], leadsTo: "National Merit Scholarship qualifying" },
      ],
      topInstitutions: ["MIT", "Stanford", "Harvard", "Berkeley", "CMU", "Princeton", "Yale", "Georgia Tech", "UCLA", "U Michigan", "UT Austin"],
    },
    culturalContext: {
      commonPressures: [
        "The college admissions arms race over extracurriculars, essays and scores",
        "Crushing student-loan anxiety",
        "Parental career mapping (doctor / lawyer / engineer / FAANG)",
        "Peer comparison via college acceptances on social media",
        "Pressure to declare a major early to graduate in 4 years",
      ],
      reframing:
        "Community college → transfer, trade schools, and bootcamp pathways are increasingly producing strong outcomes without the debt. Your 'dream school' isn't the only path.",
    },
    resources: [
      { name: "988 Suicide & Crisis Lifeline", detail: "Call or text 988" },
      { name: "Crisis Text Line", detail: "Text HOME to 741741" },
      { name: "JED Foundation", detail: "Teen/young-adult mental health: jedfoundation.org" },
    ],
  },

  CA: {
    code: "CA",
    name: "Canada",
    flag: "🇨🇦",
    educationSystem: {
      schoolStreams: [
        { id: "academic", name: "Academic / University Prep", note: "Grade 11–12 university-stream courses" },
        { id: "applied", name: "Applied / College Prep", note: "Practical pathway to college diplomas" },
        { id: "ib-ap", name: "IB / AP", note: "Advanced curriculum for top universities" },
        { id: "french-immersion", name: "French Immersion", note: "Bilingual pathway, valued nationally" },
        { id: "coop", name: "Co-op / SHSM", note: "Specialist High Skills Major with work placement" },
      ],
      entranceExams: [
        { id: "ouac", name: "OUAC (Ontario)", forStreams: ["academic", "ib-ap"], leadsTo: "Ontario universities" },
        { id: "provincial-apps", name: "Provincial applications", forStreams: ["academic"], leadsTo: "BC (EducationPlannerBC), Alberta (ApplyAlberta), etc." },
        { id: "mcat", name: "MCAT", forStreams: ["academic"], leadsTo: "Medical schools (after undergrad)" },
        { id: "lsat", name: "LSAT", forStreams: ["academic"], leadsTo: "Law schools (after undergrad)" },
      ],
      topInstitutions: ["U of Toronto", "UBC", "McGill", "Waterloo", "McMaster", "Queen's", "U of Alberta", "Western", "Montreal", "Ottawa"],
    },
    culturalContext: {
      commonPressures: [
        "Immigrant-family expectation of medicine, engineering, or law",
        "Tuition rising (especially for international students)",
        "Co-op competition for tech / engineering placements",
        "Pressure to stay near family vs. move provinces for school",
        "Comparison with peers heading to US Ivies",
      ],
      reframing:
        "Canada has world-class colleges (Seneca, BCIT, George Brown) producing job-ready grads in 2 years. Trade and skilled-labour shortages mean massive demand and great pay.",
    },
    resources: [
      { name: "Kids Help Phone", detail: "Free, 24/7: 1-800-668-6868 or text CONNECT to 686868" },
      { name: "Talk Suicide Canada", detail: "1-833-456-4566" },
      { name: "Wellness Together Canada", detail: "wellnesstogether.ca" },
    ],
  },
};

// Additional countries added for broader inclusion.
COUNTRIES.BD = {
  code: "BD",
  name: "Bangladesh",
  flag: "🇧🇩",
  educationSystem: {
    schoolStreams: [
      { id: "science", name: "Science", note: "Physics, Chemistry, Biology or Maths. Leads into engineering, medicine and tech." },
      { id: "business", name: "Business Studies", note: "Accounting, finance and management. Leads into banking, BBA, CA." },
      { id: "humanities", name: "Humanities", note: "Civics, history, economics. Leads into law, civil service, journalism." },
      { id: "madrasah", name: "Alia Madrasah / Dakhil", note: "Islamic studies alongside general subjects. Leads into both religious and modern careers." },
    ],
    entranceExams: [
      { id: "hsc", name: "HSC", forStreams: ["all"], leadsTo: "University admission base requirement" },
      { id: "du-admission", name: "University admission tests", forStreams: ["science", "business", "humanities"], leadsTo: "Dhaka U, BUET, BUP, IBA, NSU, BRAC, IUB" },
      { id: "bcs", name: "BCS exam", forStreams: ["all"], leadsTo: "Bangladesh Civil Service (after graduation)" },
      { id: "ielts", name: "IELTS / SAT", forStreams: ["all"], leadsTo: "Study abroad pathways" },
    ],
    topInstitutions: ["BUET", "University of Dhaka", "BUP", "IBA Dhaka", "NSU", "BRAC University", "IUB", "Jahangirnagar U"],
  },
  culturalContext: {
    commonPressures: [
      "Strong push toward medicine, engineering, BCS, or going abroad",
      "Pressure to support family financially soon after graduating",
      "Joint-family opinions on career carry weight",
      "Comparison with relatives and neighbours is common",
      "Gender expectations affecting field choice in many families",
    ],
    reframing:
      "Bangladesh's IT, freelancing, RMG and creative sectors have exploded. The country is one of the world's top freelancer markets, and domestic startups are thriving.",
  },
  resources: [
    { name: "Kaan Pete Roi", detail: "Mental-health helpline: 9612-119-911" },
    { name: "Moner Bondhu", detail: "Online counselling: monerbondhu.com" },
    { name: "Bangladesh Career Club", detail: "Free career guidance: bangladeshcareerclub.com" },
  ],
};

COUNTRIES.AU = {
  code: "AU",
  name: "Australia",
  flag: "🇦🇺",
  educationSystem: {
    schoolStreams: [
      { id: "atar", name: "ATAR pathway (Year 11–12)", note: "University-bound senior school. Subject choice affects degree options." },
      { id: "vet", name: "Vocational Education & Training (VET)", note: "Practical, industry-aligned qualifications. Strong job outcomes." },
      { id: "ib", name: "International Baccalaureate", note: "Globally recognised alternative to ATAR." },
      { id: "apprenticeship", name: "Apprenticeship / Traineeship", note: "Earn while you learn across trades, business and tech." },
    ],
    entranceExams: [
      { id: "atar", name: "ATAR", forStreams: ["atar", "ib"], leadsTo: "Australian universities" },
      { id: "uac", name: "UAC application", forStreams: ["atar", "ib"], leadsTo: "NSW / ACT universities" },
      { id: "vtac", name: "VTAC application", forStreams: ["atar", "ib"], leadsTo: "Victorian universities" },
      { id: "ucat", name: "UCAT", forStreams: ["atar"], leadsTo: "Medical degrees" },
    ],
    topInstitutions: ["U of Melbourne", "ANU", "U of Sydney", "UNSW", "Monash", "U of Queensland", "U of Western Australia", "Adelaide", "Macquarie"],
  },
  culturalContext: {
    commonPressures: [
      "ATAR ranking anxiety and competitive university entry",
      "International student fees pressure in some communities",
      "Choosing between city universities and regional options",
      "Skilled-migration visa pathway considerations",
      "Cost of living in Sydney and Melbourne is significant",
    ],
    reframing:
      "TAFE and apprenticeships in Australia produce strong incomes, often outpacing university grads early in career. Skilled trades are in severe shortage and pay extremely well.",
  },
  resources: [
    { name: "Lifeline Australia", detail: "Free 24/7: 13 11 14" },
    { name: "Beyond Blue", detail: "Mental-health support: 1300 22 4636" },
    { name: "headspace", detail: "Youth mental health (12–25): headspace.org.au" },
    { name: "Career Industry Council of Australia", detail: "Find a certified career professional: cica.org.au" },
  ],
};

COUNTRIES.AE = {
  code: "AE",
  name: "United Arab Emirates",
  flag: "🇦🇪",
  educationSystem: {
    schoolStreams: [
      { id: "ministry", name: "Ministry of Education curriculum", note: "Standard Emirati school stream. Strong pathway into UAE universities." },
      { id: "british", name: "British curriculum (IGCSE / A-Level)", note: "Most common international stream. UK + global university pathway." },
      { id: "american", name: "American curriculum", note: "AP / Honors pathway to US and global universities." },
      { id: "ib", name: "International Baccalaureate", note: "Internationally recognised diploma." },
      { id: "indian", name: "CBSE / ICSE (Indian curriculum)", note: "Large Indian-school network across the UAE." },
    ],
    entranceExams: [
      { id: "emsat", name: "EmSAT", forStreams: ["ministry", "british", "american", "ib", "indian"], leadsTo: "UAE federal universities and scholarships" },
      { id: "sat", name: "SAT / IELTS / TOEFL", forStreams: ["all"], leadsTo: "International + UAE private universities" },
      { id: "ucas", name: "UCAS", forStreams: ["british", "ib"], leadsTo: "UK universities" },
    ],
    topInstitutions: ["NYU Abu Dhabi", "Khalifa University", "American University of Sharjah", "Zayed U", "UAE University", "Higher Colleges of Technology", "MBZUAI"],
  },
  culturalContext: {
    commonPressures: [
      "Family expectation to enter government, medicine, engineering or banking",
      "Expat-family pressure to choose 'visa-stable' careers",
      "Pressure to pursue further studies abroad",
      "Religious and modest-dress workplace considerations",
      "Cost of living and visa-renewal anxieties for expats",
    ],
    reframing:
      "The UAE is investing heavily in AI, fintech, renewable energy, space, and creative industries. Emiratisation, golden visa, and tech-startup visas create real pathways outside traditional careers.",
  },
  resources: [
    { name: "Estijaba Service (DoH)", detail: "Health and mental-health helpline: 8001717" },
    { name: "National Crisis Helpline", detail: "920033360" },
    { name: "Friends of Cancer Patients UAE", detail: "Counselling support: focp.ae" },
    { name: "UAE Ministry of Education career guides", detail: "moe.gov.ae" },
  ],
};

COUNTRIES.LK = {
  code: "LK",
  name: "Sri Lanka",
  flag: "🇱🇰",
  educationSystem: {
    schoolStreams: [
      { id: "bio-science", name: "Bio Science", note: "Biology, Chemistry, Physics. Leads into medicine, dentistry and biotech." },
      { id: "physical-science", name: "Physical Science", note: "Maths, Physics, Chemistry. Leads into engineering and IT." },
      { id: "commerce", name: "Commerce", note: "Accounting, Business Studies, Economics. Leads into CA, banking, business." },
      { id: "arts", name: "Arts", note: "Languages, History, Political Science. Leads into law, civil service, education." },
      { id: "technology", name: "Technology stream", note: "Engineering Tech, Bio-systems Tech, ICT. Leads into vocational and engineering careers." },
    ],
    entranceExams: [
      { id: "ol", name: "G.C.E. Ordinary Level (O/L)", forStreams: ["all"], leadsTo: "Stream selection for A/L" },
      { id: "al", name: "G.C.E. Advanced Level (A/L)", forStreams: ["all"], leadsTo: "Sri Lankan universities; Z-score cut-offs" },
      { id: "ielts", name: "IELTS / SAT", forStreams: ["all"], leadsTo: "Study abroad pathways" },
      { id: "sliit-admission", name: "SLIIT / NIBM admission", forStreams: ["physical-science", "commerce"], leadsTo: "Private universities and degree-awarding institutes" },
    ],
    topInstitutions: ["University of Colombo", "University of Peradeniya", "University of Moratuwa", "University of Kelaniya", "University of Sri Jayewardenepura", "SLIIT", "NSBM", "NIBM"],
  },
  culturalContext: {
    commonPressures: [
      "Strong family expectation around medicine, engineering, accounting",
      "Z-score anxiety with extremely competitive university entry",
      "Comparison with cousins and neighbours' children",
      "Pressure to go abroad after A/Ls or graduation",
      "Economic uncertainty driving career-choice anxiety",
    ],
    reframing:
      "Sri Lanka has a strong IT, BPO, and freelance ecosystem. Many Sri Lankans now build international careers from Colombo, Kandy, or remote villages, exporting services globally without ever leaving home.",
  },
  resources: [
    { name: "Sumithrayo", detail: "Free emotional support helpline: +94 11 2 696 666" },
    { name: "CCC Line", detail: "Mental-health hotline: 1333" },
    { name: "Shanthi Maargam", detail: "Counselling for youth: shanthimaargam.org" },
  ],
};

COUNTRIES.AF = {
  code: "AF",
  name: "Afghanistan",
  flag: "🇦🇫",
  educationSystem: {
    schoolStreams: [
      { id: "general", name: "General school programme", note: "Standard secondary education leading to the Kankor exam." },
      { id: "religious", name: "Madrasa / Religious studies", note: "Islamic-studies-centred education with general subjects." },
      { id: "vocational", name: "Technical & Vocational Training", note: "Practical trades, accelerated employment pathway." },
      { id: "online", name: "Online / Distance learning", note: "Increasingly important. Universities like the University of the People offer free online degrees." },
    ],
    entranceExams: [
      { id: "kankor", name: "Kankor (National Entrance Exam)", forStreams: ["general"], leadsTo: "Afghan public universities" },
      { id: "online-admissions", name: "Online university admissions", forStreams: ["all"], leadsTo: "University of the People, Coursera Degrees, edX programs" },
      { id: "scholarships", name: "International scholarships", forStreams: ["all"], leadsTo: "DAFI (UNHCR), Chevening, Fulbright, Türkiye Bursları, MEXT" },
    ],
    topInstitutions: ["Kabul University", "Kabul Polytechnic University", "Herat University", "Nangarhar University", "University of the People (online, free)", "Asian University for Women (Bangladesh, full scholarships for Afghan women)"],
  },
  culturalContext: {
    commonPressures: [
      "Severe restrictions on women's education and work in many areas",
      "Economic crisis affecting families' ability to invest in education",
      "Many talented students considering or pursuing diaspora options",
      "Online and remote pathways becoming critical lifelines",
      "Pressure to support family financially as soon as possible",
    ],
    reframing:
      "Online learning, remote work, and global freelancing now make it possible to build international careers without leaving home or in diaspora. Organisations like UNHCR's DAFI scholarship, the Asian University for Women, and the University of the People exist specifically to support Afghan students who would otherwise be cut off from higher education.",
  },
  resources: [
    { name: "Asian University for Women", detail: "Full scholarships for Afghan women: asian-university.org" },
    { name: "University of the People", detail: "Free, accredited online degrees: uopeople.edu" },
    { name: "UNHCR DAFI Scholarship", detail: "Tertiary education for refugees: unhcr.org/dafi-scholarships" },
    { name: "Befrienders Worldwide", detail: "Helpline directory by country: befrienders.org" },
  ],
};

COUNTRIES.IR = {
  code: "IR",
  name: "Iran",
  flag: "🇮🇷",
  educationSystem: {
    schoolStreams: [
      { id: "mathematics", name: "Mathematics & Physics", note: "Leads into engineering, computer science, architecture." },
      { id: "experimental", name: "Experimental Sciences", note: "Biology-heavy. Leads into medicine, dentistry, pharmacy." },
      { id: "humanities", name: "Humanities", note: "Literature, history, social sciences. Leads into law, education, journalism." },
      { id: "islamic", name: "Islamic Sciences", note: "Religious studies with general subjects." },
      { id: "technical", name: "Technical & Vocational", note: "Hands-on training in industrial, agricultural, and service trades." },
    ],
    entranceExams: [
      { id: "konkur", name: "Konkur (National University Entrance Exam)", forStreams: ["all"], leadsTo: "Iranian public universities; intensely competitive" },
      { id: "azad-admissions", name: "Islamic Azad University admissions", forStreams: ["all"], leadsTo: "Large private university network" },
      { id: "international", name: "GRE / GMAT / IELTS / TOEFL", forStreams: ["all"], leadsTo: "Strong Iranian diaspora at top US, European, and Canadian universities" },
    ],
    topInstitutions: ["Sharif University of Technology", "University of Tehran", "Amirkabir University of Technology", "Iran University of Science and Technology", "Shiraz University", "Ferdowsi University of Mashhad", "Islamic Azad University"],
  },
  culturalContext: {
    commonPressures: [
      "Konkur exam pressure is among the most intense in the world",
      "Strong family expectation around medicine, engineering, and law",
      "Economic sanctions affecting career stability",
      "Brain drain pressure: many talented graduates considering emigration",
      "Generational expectations vs personal interests",
    ],
    reframing:
      "Iran has world-class engineering and STEM talent. The diaspora is large, successful, and supportive. Online freelancing, remote work for international clients, and study-abroad pathways all remain real options even under sanctions.",
  },
  resources: [
    { name: "Iranian Mental Health Hotline", detail: "Behzisti welfare hotline: 1480" },
    { name: "Aramesh Counselling", detail: "Online counselling: aramesh-online.com" },
    { name: "Befrienders Worldwide", detail: "Global directory: befrienders.org" },
  ],
};

COUNTRIES.IQ = {
  code: "IQ",
  name: "Iraq",
  flag: "🇮🇶",
  educationSystem: {
    schoolStreams: [
      { id: "scientific", name: "Scientific stream", note: "Maths, Physics, Chemistry, Biology. Leads into medicine, engineering, sciences." },
      { id: "literary", name: "Literary stream", note: "Languages, history, geography. Leads into law, education, languages, business." },
      { id: "vocational", name: "Vocational secondary", note: "Industrial, commercial, agricultural training." },
      { id: "religious", name: "Religious / Islamic secondary", note: "Sharia and Islamic studies alongside general subjects." },
    ],
    entranceExams: [
      { id: "baccalaureate", name: "Baccalaureate (Bakaloria)", forStreams: ["all"], leadsTo: "University admissions based on score" },
      { id: "private-admissions", name: "Private university admissions", forStreams: ["all"], leadsTo: "AUIS, UoSaba, Cihan, Knowledge U" },
      { id: "international", name: "IELTS / SAT", forStreams: ["all"], leadsTo: "Scholarships abroad" },
    ],
    topInstitutions: ["University of Baghdad", "American University of Iraq, Sulaimani (AUIS)", "University of Sulaimani", "Salahaddin University", "University of Mosul", "Knowledge University", "University of Kurdistan Hewlêr"],
  },
  culturalContext: {
    commonPressures: [
      "Strong cultural focus on medicine, engineering, and law",
      "Post-conflict instability affecting career and study choices",
      "Family pressure tied to perceived 'safe' or 'prestigious' careers",
      "Economic dependence on oil sector limits some traditional paths",
      "Many graduates considering opportunities abroad",
    ],
    reframing:
      "Iraq is rebuilding, and there's real demand for skilled professionals in IT, energy, healthcare, education, and entrepreneurship. The Kurdistan region in particular has a growing private sector. Remote work and freelancing open international income paths from anywhere in the country.",
  },
  resources: [
    { name: "Iraqi Society of Psychiatrists", detail: "Find mental-health support: isp-iraq.org" },
    { name: "International Medical Corps Iraq", detail: "Mental-health programmes" },
    { name: "Befrienders Worldwide", detail: "Global helpline directory: befrienders.org" },
  ],
};

COUNTRIES.LB = {
  code: "LB",
  name: "Lebanon",
  flag: "🇱🇧",
  educationSystem: {
    schoolStreams: [
      { id: "ls", name: "Life Sciences (LS)", note: "Biology-heavy. Leads into medicine, dentistry, pharmacy, biology." },
      { id: "gs", name: "General Sciences (GS)", note: "Maths and physics focus. Leads into engineering and computer science." },
      { id: "es", name: "Economics & Sociology (ES)", note: "Leads into business, finance, economics, social sciences." },
      { id: "ll", name: "Literature & Humanities (LL)", note: "Leads into law, languages, education, communications." },
      { id: "tech", name: "Technical Baccalaureate", note: "Practical vocational pathways across trades and tech." },
    ],
    entranceExams: [
      { id: "bac", name: "Lebanese Baccalaureate", forStreams: ["all"], leadsTo: "University admission base requirement" },
      { id: "sat", name: "SAT", forStreams: ["all"], leadsTo: "AUB, LAU, USJ and US universities" },
      { id: "ielts", name: "IELTS / TOEFL", forStreams: ["all"], leadsTo: "Universities abroad, especially Canada, France, UK, UAE" },
    ],
    topInstitutions: ["American University of Beirut (AUB)", "Lebanese American University (LAU)", "Université Saint-Joseph (USJ)", "Lebanese University", "Notre Dame University (NDU)", "Beirut Arab University", "American University of Technology"],
  },
  culturalContext: {
    commonPressures: [
      "Economic crisis driving severe career-stability anxieties",
      "Currency devaluation; many salaries now quoted in USD by employers",
      "Strong pressure to emigrate, with most of the diaspora exceeding the population at home",
      "Sectarian and family-network effects on career opportunities",
      "Family expectation of medicine, engineering, banking, and law",
    ],
    reframing:
      "Despite the economic situation, Lebanese professionals are deeply valued globally. The diaspora is enormous and supportive. Trilingual ability (Arabic, French, English) is a real career advantage in Gulf, European, and global remote-work markets. Many young Lebanese now build international careers without permanently leaving.",
  },
  resources: [
    { name: "Embrace Lifeline", detail: "Free 24/7 mental-health support: 1564 or embracelebanon.org" },
    { name: "IDRAAC", detail: "Mental-health institute: idraac.org" },
    { name: "Befrienders Worldwide", detail: "Global helpline directory: befrienders.org" },
  ],
};

COUNTRIES.CN = {
  code: "CN",
  name: "China",
  flag: "🇨🇳",
  educationSystem: {
    schoolStreams: [
      { id: "science", name: "Science track (理科)", note: "Maths, Physics, Chemistry, Biology focus. Leads into engineering, medicine, sciences." },
      { id: "liberal-arts", name: "Liberal Arts (文科)", note: "Chinese, History, Geography, Politics focus. Leads into law, business, humanities." },
      { id: "mixed", name: "3+1+2 subject combination", note: "Modern flexible track where students pick subject combinations beyond the binary divide." },
      { id: "vocational", name: "Secondary Vocational Education", note: "Practical training leading directly into work in trades, manufacturing, and services." },
    ],
    entranceExams: [
      { id: "gaokao", name: "Gaokao (高考)", forStreams: ["all"], leadsTo: "Chinese universities. One of the world's most consequential exams." },
      { id: "ielts-gre", name: "IELTS / TOEFL / GRE / GMAT", forStreams: ["all"], leadsTo: "Top global universities; China sends the most international students worldwide" },
    ],
    topInstitutions: ["Tsinghua University", "Peking University", "Fudan University", "Shanghai Jiao Tong University", "Zhejiang University", "University of Science and Technology of China", "Nanjing University", "Wuhan University"],
  },
  culturalContext: {
    commonPressures: [
      "Gaokao pressure is among the most intense globally",
      "Single-child generation legacy concentrating family expectation on one student",
      "Hukou (household registration) system affecting university and job access",
      "Comparison culture in academics and careers (內捲 / involution)",
      "Pressure to enter Tier-1 cities (Beijing, Shanghai, Shenzhen) or specific industries",
    ],
    reframing:
      "China has the world's deepest market for talent in tech, hardware, AI, and manufacturing. Beyond the Big-Tech race, the maker movement, indie content creation (Bilibili, Xiaohongshu), and skilled trades all offer meaningful, well-paid paths. Many young Chinese are actively redefining what success looks like.",
  },
  resources: [
    { name: "Beijing Suicide Research and Prevention Center", detail: "Hotline: 010 8295 1332" },
    { name: "Lifeline Shanghai", detail: "English / Mandarin support: 400 821 1215" },
    { name: "Befrienders Worldwide", detail: "Global helpline directory: befrienders.org" },
  ],
};

COUNTRIES.GL = {
  code: "GL",
  name: "Other / Global",
  flag: "🌍",
  educationSystem: {
    schoolStreams: [
      { id: "stem", name: "STEM / Science-heavy track", note: "Maths and science focus. Leads into engineering, tech, healthcare." },
      { id: "humanities", name: "Humanities / Social Sciences", note: "Languages, history, social sciences. Leads into law, education, public service." },
      { id: "business", name: "Business / Commerce", note: "Accounting, economics, business studies." },
      { id: "vocational", name: "Vocational / Trade", note: "Skill-based and apprenticeship pathways." },
      { id: "arts", name: "Arts / Creative", note: "Design, music, visual arts, media." },
    ],
    entranceExams: [
      { id: "local", name: "Your country's local university entrance system", forStreams: ["all"], leadsTo: "Local universities" },
      { id: "sat", name: "SAT / ACT", forStreams: ["all"], leadsTo: "US and many global universities" },
      { id: "ielts", name: "IELTS / TOEFL", forStreams: ["all"], leadsTo: "Study abroad in English-speaking countries" },
    ],
    topInstitutions: ["Your country's top public universities", "International scholarship programmes (Chevening, Fulbright, DAAD, MEXT, etc.)"],
  },
  culturalContext: {
    commonPressures: [
      "Family expectations around 'safe' vs creative careers",
      "Financial pressure to start earning quickly",
      "Comparison with peers and relatives",
      "Geographic limits on local opportunities",
      "Uncertainty about how to evaluate options without local guidance",
    ],
    reframing:
      "The internet has globalised opportunity. Remote work, freelance platforms, and online degrees mean your home country no longer caps your ceiling. Many of the world's most successful professionals build careers without leaving their region.",
  },
  resources: [
    { name: "Befrienders Worldwide", detail: "Global directory of emotional-support helplines: befrienders.org" },
    { name: "International Association for Suicide Prevention", detail: "Crisis line directory by country: iasp.info/resources/Crisis_Centres" },
    { name: "Open Counseling", detail: "Free international helpline directory: opencounseling.com/suicide-hotlines" },
  ],
};

// Display order for the country selector.
// Grouped by region: South Asia → Middle East → East Asia → Western → Global.
const COUNTRY_DISPLAY_ORDER = [
  "PK", "IN", "BD", "LK", "AF",   // South Asia
  "AE", "IR", "IQ", "LB",          // Middle East
  "CN",                            // East Asia
  "UK", "US", "CA", "AU",          // Western / Anglosphere
  "GL",                            // Catch-all
];
export const COUNTRY_LIST = COUNTRY_DISPLAY_ORDER.map((code) => COUNTRIES[code]);
