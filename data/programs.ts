export interface Program {
  id: string;
  name: string;
  shortName: string;
  faculty: string;
  duration: string;
  totalCredits: number;
  description: string;
  icon: string;
  highlights: string[];
  syllabus: SemesterSyllabus[];
  
  // New Info Fields
  overview: string;
  eligibility: string;
  classStructure: {
    daysPerWeek: string;
    totalClassDays: string;
    classHours: string;
    structureDesc: string;
  };
  mediumOfInstruction: string;
  campusFacilities: string[];
}

export interface SemesterSyllabus {
  semester: number;
  courses: { code: string; name: string; credits: number }[];
}

export const programs: Program[] = [
  {
    id: "bba",
    name: "Bachelor of Business Administration",
    shortName: "BBA",
    faculty: "Business Studies",
    duration: "4 Years (8 Semesters)",
    totalCredits: 136,
    description:
      "A comprehensive program covering management, marketing, finance, and entrepreneurship to develop future business leaders.",
    icon: "Briefcase",
    highlights: ["Case-Study Based Learning", "Industrial Visits", "Internship Program", "Live Project"],
    overview: "The Bachelor of Business Administration (BBA) program at BITC provides students with a holistic understanding of modern business environments. It integrates fundamental management principles with contemporary marketing strategies, financial analysis, human resources development, and corporate entrepreneurship. The program aims to foster analytical skills, strategic decision-making, and teamwork among future business executives and founders.",
    eligibility: "Candidates must have passed SSC and HSC (or equivalent) from any group (Science, Commerce, or Humanities) with a minimum GPA of 2.0 in both examinations.",
    classStructure: {
      daysPerWeek: "5 Days (Sunday to Thursday)",
      totalClassDays: "15 Weeks per Semester",
      classHours: "3 Hours per class day",
      structureDesc: "Instruction comprises lecture sessions, case studies, field research, and corporate presentations. Interactive sessions with industry professionals are organized regularly."
    },
    mediumOfInstruction: "English",
    campusFacilities: [
      "Corporate Seminar Halls & Presentation Rooms",
      "BITC Incubation & Business Startup Cell",
      "Comprehensive Case Study Resource Library",
      "Communication Lab for Soft Skills Development",
      "Mock Trading Center and Finance Lab"
    ],
    syllabus: [
      {
        semester: 1,
        courses: [
          { code: "BBA-101", name: "Principles of Management", credits: 3 },
          { code: "BBA-102", name: "Business Communication", credits: 3 },
          { code: "BBA-103", name: "Business Mathematics", credits: 3 },
          { code: "BBA-104", name: "Introduction to Economics", credits: 3 },
          { code: "BBA-105", name: "Computer Fundamentals", credits: 3 },
        ],
      },
      {
        semester: 2,
        courses: [
          { code: "BBA-201", name: "Financial Accounting", credits: 3 },
          { code: "BBA-202", name: "Marketing Management", credits: 3 },
          { code: "BBA-203", name: "Business Statistics", credits: 3 },
          { code: "BBA-204", name: "Organizational Behavior", credits: 3 },
          { code: "BBA-205", name: "Microeconomics", credits: 3 },
        ],
      },
      {
        semester: 3,
        courses: [
          { code: "BBA-301", name: "Managerial Accounting", credits: 3 },
          { code: "BBA-302", name: "Human Resource Management", credits: 3 },
          { code: "BBA-303", name: "Macroeconomics", credits: 3 },
          { code: "BBA-304", name: "Business Law", credits: 3 },
          { code: "BBA-305", name: "Taxation", credits: 3 },
        ],
      },
      {
        semester: 4,
        courses: [
          { code: "BBA-401", name: "Financial Management", credits: 3 },
          { code: "BBA-402", name: "Operations Management", credits: 3 },
          { code: "BBA-403", name: "Management Information Systems", credits: 3 },
          { code: "BBA-404", name: "Research Methodology", credits: 3 },
          { code: "BBA-405", name: "E-Commerce", credits: 3 },
        ],
      },
      {
        semester: 5,
        courses: [
          { code: "BBA-501", name: "Strategic Management", credits: 3 },
          { code: "BBA-502", name: "Consumer Behavior", credits: 3 },
          { code: "BBA-503", name: "International Business", credits: 3 },
          { code: "BBA-504", name: "Corporate Finance", credits: 3 },
          { code: "BBA-505", name: "Business Ethics", credits: 3 },
        ],
      },
      {
        semester: 6,
        courses: [
          { code: "BBA-601", name: "Entrepreneurship Development", credits: 3 },
          { code: "BBA-602", name: "Supply Chain Management", credits: 3 },
          { code: "BBA-603", name: "Investment & Portfolio Management", credits: 3 },
          { code: "BBA-604", name: "Brand Management", credits: 3 },
          { code: "BBA-605", name: "Major Elective I", credits: 3 },
        ],
      },
      {
        semester: 7,
        courses: [
          { code: "BBA-701", name: "Major Elective II", credits: 3 },
          { code: "BBA-702", name: "Major Elective III", credits: 3 },
          { code: "BBA-703", name: "Major Elective IV", credits: 3 },
          { code: "BBA-704", name: "Strategic Marketing", credits: 3 },
          { code: "BBA-705", name: "Project Management", credits: 3 },
        ],
      },
      {
        semester: 8,
        courses: [
          { code: "BBA-801", name: "Internship & Report", credits: 6 },
          { code: "BBA-802", name: "Comprehensive Viva Voce", credits: 3 },
          { code: "BBA-803", name: "Strategic Seminar", credits: 3 },
        ],
      },
    ],
  },
  {
    id: "cse",
    name: "Bachelor of Science in Computer Science & Engineering",
    shortName: "CSE",
    faculty: "Science & IT",
    duration: "4 Years (8 Semesters)",
    totalCredits: 148,
    description:
      "A rigorous technical program in programming, algorithms, databases, networks, and AI for the digital age.",
    icon: "Monitor",
    highlights: ["Modern Computer Labs", "Hackathons & Competitions", "Industry Mentorship", "AI/ML Electives"],
    overview: "The Bachelor of Science in Computer Science & Engineering (CSE) program at BITC is a flagship academic degree designed to prepare students for the global technology sector. The curriculum is meticulously crafted to blend theoretical computer science with practical, hands-on engineering applications. Students build a strong foundation in logic, mathematics, and programming before diving into advanced topics such as Artificial Intelligence, Machine Learning, Cyber Security, and Software Engineering. Our program emphasizes innovation, problem-solving, and professional ethics, enabling graduates to excel as software architects, tech leads, system analysts, and research scientists.",
    eligibility: "Candidates must have passed SSC and HSC (or equivalent) in Science group with a minimum GPA of 2.5 in both examinations. Additionally, Physics and Mathematics must have been studied and passed at the HSC level. O-level/A-level candidates require equivalent certification with equivalent grades.",
    classStructure: {
      daysPerWeek: "5 Days (Sunday to Thursday)",
      totalClassDays: "15 Weeks per Semester",
      classHours: "3 to 4 Hours per class day",
      structureDesc: "Theoretical classes are held in the morning and early afternoon, followed by hands-on laboratory sessions. Semester examinations, mid-terms, and quizzes are scheduled throughout the academic term."
    },
    mediumOfInstruction: "English",
    campusFacilities: [
      "State-of-the-Art Computer Labs with High-Speed Internet",
      "Dedicated Programming Club & Hackathon Arena",
      "Digital Hardware & Electronics Laboratory",
      "Rich Academic Library with Online Journals Access",
      "Interactive Multimedia Smart Classrooms"
    ],
    syllabus: [
      {
        semester: 1,
        courses: [
          { code: "CSE-101", name: "Introduction to Programming (C)", credits: 3 },
          { code: "CSE-102", name: "Discrete Mathematics", credits: 3 },
          { code: "CSE-103", name: "Digital Logic Design", credits: 3 },
          { code: "CSE-104", name: "English for Engineers", credits: 2 },
          { code: "CSE-105", name: "Physics", credits: 3 },
          { code: "CSE-106", name: "Structured Programming Lab", credits: 1.5 },
        ],
      },
      {
        semester: 2,
        courses: [
          { code: "CSE-201", name: "Object Oriented Programming (Java)", credits: 3 },
          { code: "CSE-202", name: "OOP Lab", credits: 1.5 },
          { code: "CSE-203", name: "Calculus & Analytical Geometry", credits: 3 },
          { code: "CSE-204", name: "Chemistry", credits: 3 },
          { code: "CSE-205", name: "Electric Circuits", credits: 3 },
          { code: "CSE-206", name: "Electric Circuits Lab", credits: 1 },
        ],
      },
      {
        semester: 3,
        courses: [
          { code: "CSE-301", name: "Data Structures", credits: 3 },
          { code: "CSE-302", name: "Data Structures Lab", credits: 1.5 },
          { code: "CSE-303", name: "Digital Electronics & Pulse Techniques", credits: 3 },
          { code: "CSE-304", name: "Linear Algebra", credits: 3 },
          { code: "CSE-305", name: "Ordinary Differential Equations", credits: 3 },
        ],
      },
      {
        semester: 4,
        courses: [
          { code: "CSE-401", name: "Algorithms", credits: 3 },
          { code: "CSE-402", name: "Algorithms Lab", credits: 1.5 },
          { code: "CSE-403", name: "Database Management Systems", credits: 3 },
          { code: "CSE-404", name: "DBMS Lab", credits: 1.5 },
          { code: "CSE-405", name: "Computer Architecture", credits: 3 },
          { code: "CSE-406", name: "Probability & Statistics", credits: 3 },
        ],
      },
      {
        semester: 5,
        courses: [
          { code: "CSE-501", name: "Software Engineering", credits: 3 },
          { code: "CSE-502", name: "Software Engineering Lab", credits: 1 },
          { code: "CSE-503", name: "Operating Systems", credits: 3 },
          { code: "CSE-504", name: "OS Lab", credits: 1.5 },
          { code: "CSE-505", name: "Microprocessors & Microcontrollers", credits: 3 },
          { code: "CSE-506", name: "Microprocessor Lab", credits: 1 },
        ],
      },
      {
        semester: 6,
        courses: [
          { code: "CSE-601", name: "Computer Networks", credits: 3 },
          { code: "CSE-602", name: "Computer Networks Lab", credits: 1.5 },
          { code: "CSE-603", name: "Theory of Computation & Automata", credits: 3 },
          { code: "CSE-604", name: "Artificial Intelligence", credits: 3 },
          { code: "CSE-605", name: "AI Lab", credits: 1 },
          { code: "CSE-606", name: "Web Engineering", credits: 3 },
        ],
      },
      {
        semester: 7,
        courses: [
          { code: "CSE-701", name: "Compiler Design", credits: 3 },
          { code: "CSE-702", name: "Compiler Lab", credits: 1 },
          { code: "CSE-703", name: "System Analysis & Design", credits: 3 },
          { code: "CSE-704", name: "Computer Graphics", credits: 3 },
          { code: "CSE-705", name: "Computer Graphics Lab", credits: 1 },
          { code: "CSE-706", name: "Elective Course I", credits: 3 },
        ],
      },
      {
        semester: 8,
        courses: [
          { code: "CSE-801", name: "Thesis/Project", credits: 6 },
          { code: "CSE-802", name: "Elective Course II", credits: 3 },
          { code: "CSE-803", name: "Elective Course III", credits: 3 },
          { code: "CSE-804", name: "Professional Ethics & Social Issues", credits: 2 },
          { code: "CSE-805", name: "Viva Voce", credits: 2 },
        ],
      },
    ],
  },
  {
    id: "llb",
    name: "Bachelor of Laws",
    shortName: "LLB",
    faculty: "Law",
    duration: "2 Years (4 Semesters)",
    totalCredits: 72,
    description:
      "A professional law degree program covering constitutional law, contract law, criminal law, and legal procedures.",
    icon: "Scale",
    highlights: ["Moot Court Practice", "Legal Aid Clinic", "Guest Lectures by Judges", "Bar Council Affiliation"],
    overview: "The Bachelor of Laws (LLB) program is a professional legal course designed to equip students with comprehensive knowledge of national and international legal systems. The curriculum covers key areas such as civil and criminal procedures, constitutional law, corporate law, human rights, and legal drafting. It prepares graduates for successful legal practice, judicial service, corporate advisory roles, and legal advocacy.",
    eligibility: "Candidates must possess a completed Bachelor's (Honours or Pass) degree from a recognized university with a minimum of 2nd Class/Division or equivalent CGPA.",
    classStructure: {
      daysPerWeek: "4 Days (Friday, Saturday, Monday, Wednesday)",
      totalClassDays: "16 Weeks per Semester",
      classHours: "3 Hours per class day",
      structureDesc: "Includes standard evening/weekend classes to support working professionals. Practical advocacy sessions, moot court simulations, and client counseling exercises are integral parts of the curriculum."
    },
    mediumOfInstruction: "English & Bengali",
    campusFacilities: [
      "In-house Moot Court Simulation Hall",
      "Dedicated Legal Aid Clinic for Practical Training",
      "Extensive Law Library with National Law Journals",
      "Discussion Rooms for Case Review",
      "Special Seminars with Senior Advocates & Judges"
    ],
    syllabus: [
      {
        semester: 1,
        courses: [
          { code: "LLB-101", name: "Constitutional Law", credits: 4 },
          { code: "LLB-102", name: "Law of Contract", credits: 4 },
          { code: "LLB-103", name: "Muslim Personal Law", credits: 3 },
          { code: "LLB-104", name: "Legal System of Bangladesh", credits: 3 },
          { code: "LLB-105", name: "Jurisprudence", credits: 4 },
        ],
      },
      {
        semester: 2,
        courses: [
          { code: "LLB-201", name: "Law of Torts & Consumer Protection", credits: 4 },
          { code: "LLB-202", name: "Criminal Law (Substantive)", credits: 4 },
          { code: "LLB-203", name: "Hindu Law & Family Laws", credits: 4 },
          { code: "LLB-204", name: "Equity, Trust & Specific Relief", credits: 3 },
          { code: "LLB-205", name: "Land Laws of Bangladesh", credits: 3 },
        ],
      },
      {
        semester: 3,
        courses: [
          { code: "LLB-301", name: "Code of Civil Procedure", credits: 4 },
          { code: "LLB-302", name: "Code of Criminal Procedure", credits: 4 },
          { code: "LLB-303", name: "Law of Evidence", credits: 4 },
          { code: "LLB-304", name: "Administrative Law", credits: 3 },
          { code: "LLB-305", name: "Moot Court & Legal Drafting", credits: 3 },
        ],
      },
      {
        semester: 4,
        courses: [
          { code: "LLB-401", name: "Company & Commercial Law", credits: 4 },
          { code: "LLB-402", name: "Labor & Industrial Laws", credits: 4 },
          { code: "LLB-403", name: "Environmental Law", credits: 3 },
          { code: "LLB-404", name: "Human Rights & Public International Law", credits: 4 },
          { code: "LLB-405", name: "Advocacy Skill & Trial Practice", credits: 3 },
        ],
      },
    ],
  },
  {
    id: "mba",
    name: "Master of Business Administration",
    shortName: "MBA",
    faculty: "Business Studies",
    duration: "2 Years (4 Semesters)",
    totalCredits: 60,
    description:
      "An advanced management program for working professionals and graduates seeking leadership and strategic skills.",
    icon: "GraduationCap",
    highlights: ["Executive Leadership Track", "Global Business Perspective", "Capstone Project", "Alumni Network"],
    overview: "The Master of Business Administration (MBA) program is an advanced postgraduate degree designed for graduates and working professionals seeking to elevate their careers to strategic leadership roles. It offers deep specialization in Finance, Marketing, Human Resource Management, and Operations, blending executive case analyses with core strategy simulations.",
    eligibility: "Candidates must hold a completed BBA or any Bachelor's (Honours/Pass) degree with a minimum 2nd Class/CGPA of 2.00 from a recognized institution.",
    classStructure: {
      daysPerWeek: "3 Days (Weekend-focused: Friday, Saturday, and Thursday evening)",
      totalClassDays: "15 Weeks per Semester",
      classHours: "3.5 Hours per class day",
      structureDesc: "Classes are scheduled during weekends and evenings to accommodate full-time working professionals. Emphasis is placed on collaborative capstone projects and strategic case discussions."
    },
    mediumOfInstruction: "English",
    campusFacilities: [
      "Executive MBA Lounge & Collaborative Workspaces",
      "BITC Corporate Career Center",
      "Video Conferencing Smart Rooms for International Seminars",
      "Access to Global Case Study Repositories",
      "Advanced Management Analytics Systems"
    ],
    syllabus: [
      {
        semester: 1,
        courses: [
          { code: "MBA-101", name: "Organizational Leadership & Ethics", credits: 3 },
          { code: "MBA-102", name: "Managerial Economics", credits: 3 },
          { code: "MBA-103", name: "Quantitative Methods for Business", credits: 3 },
          { code: "MBA-104", name: "Corporate Financial Reporting", credits: 3 },
        ]
      },
      {
        semester: 2,
        courses: [
          { code: "MBA-201", name: "Strategic Marketing Management", credits: 3 },
          { code: "MBA-202", name: "Corporate Financial Management", credits: 3 },
          { code: "MBA-203", name: "Operations & Technology Strategy", credits: 3 },
          { code: "MBA-204", name: "Managing Human Capital", credits: 3 },
        ]
      },
      {
        semester: 3,
        courses: [
          { code: "MBA-301", name: "Strategic Management", credits: 3 },
          { code: "MBA-302", name: "Global Business & Macro Policy", credits: 3 },
          { code: "MBA-303", name: "Specialized Elective I", credits: 3 },
          { code: "MBA-304", name: "Specialized Elective II", credits: 3 },
        ]
      },
      {
        semester: 4,
        courses: [
          { code: "MBA-401", name: "Specialized Elective III", credits: 3 },
          { code: "MBA-402", name: "Specialized Elective IV", credits: 3 },
          { code: "MBA-403", name: "Capstone Project & Defense", credits: 6 },
          { code: "MBA-404", name: "Viva Voce", credits: 3 },
        ]
      }
    ],
  },
  {
    id: "med",
    name: "Master of Education",
    shortName: "M.Ed",
    faculty: "Education",
    duration: "1 Year (2 Semesters)",
    totalCredits: 36,
    description:
      "Designed for practising teachers and education professionals to advance their pedagogical skills and research.",
    icon: "BookOpen",
    highlights: ["Classroom Research", "Curriculum Design", "Educational Psychology", "Teaching Practicum"],
    overview: "The Master of Education (M.Ed) program is a highly specialized postgraduate degree designed for educators, school administrators, and education professionals. It aims to develop advanced teaching pedagogies, modern curriculum design strategies, and educational psychology insights, fostering positive leadership across educational institutions.",
    eligibility: "Candidates must hold a Bachelor of Education (B.Ed) or equivalent degree with a minimum 2nd Class/Division from a recognized university.",
    classStructure: {
      daysPerWeek: "2 Days (Friday & Saturday)",
      totalClassDays: "15 Weeks per Semester",
      classHours: "4 Hours per class day",
      structureDesc: "A hybrid learning approach combining intensive weekend in-person classroom teaching sessions with online curriculum projects and classroom action research."
    },
    mediumOfInstruction: "English & Bengali",
    campusFacilities: [
      "Pedagogical Research & Curriculum Design Center",
      "Educational Psychology Lab",
      "Smart Technology Integration Lab",
      "Interactive Teacher Training Facilities",
      "E-Library for Advanced Pedagogical Studies"
    ],
    syllabus: [
      {
        semester: 1,
        courses: [
          { code: "MED-101", name: "Advanced Educational Psychology", credits: 4 },
          { code: "MED-102", name: "Philosophy & Sociology of Education", credits: 4 },
          { code: "MED-103", name: "Educational Research & Statistics", credits: 4 },
          { code: "MED-104", name: "Curriculum Studies & Instruction", credits: 4 },
          { code: "MED-105", name: "Educational Technology", credits: 3 },
        ]
      },
      {
        semester: 2,
        courses: [
          { code: "MED-201", name: "Teacher Education Policy & Development", credits: 4 },
          { code: "MED-202", name: "Educational Measurement & Evaluation", credits: 4 },
          { code: "MED-203", name: "Special & Inclusive Education", credits: 3 },
          { code: "MED-204", name: "Leadership & Management in Education", credits: 3 },
          { code: "MED-205", name: "Teaching Practicum & Action Research", credits: 3 },
        ]
      }
    ],
  },
];

export const programsByFaculty = programs.reduce((acc, program) => {
  if (!acc[program.faculty]) acc[program.faculty] = [];
  acc[program.faculty].push(program);
  return acc;
}, {} as Record<string, Program[]>);
