// ============================================================
// PORTFOLIO CONTENT — edit everything from this single file.
// ============================================================

export const profile = {
  name: 'Mursal Mehri',
  roles: ['Creative Web Designer', 'Digital Creator', 'AI Learner'],
  tagline: 'Turning ideas into beautiful digital experiences.',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  paragraphs: [
    "Hello! I'm Mursal Mehri, an online university student with a strong interest in web design, technology, artificial intelligence, and digital creativity.",
    'I am continuously learning new skills, working on projects, and improving my ability to create useful, beautiful, and user-friendly digital experiences.',
    'My goal is to grow as a technology professional, build meaningful projects, and explore new opportunities.',
  ],
  highlights: [
    {
      icon: 'graduation',
      title: 'Online University Student',
      text: 'Studying remotely and embracing flexible, self-driven learning.',
    },
    {
      icon: 'code',
      title: 'Web Design Learner',
      text: 'Practicing modern web design through hands-on personal projects.',
    },
    {
      icon: 'palette',
      title: 'Digital Creativity',
      text: 'Exploring visual design, motion, and expressive digital media.',
    },
    {
      icon: 'book',
      title: 'Continuous Learning',
      text: 'Always adding new skills — currently diving into AI.',
    },
  ],
}

// ============================================================
// SKILLS — descriptions stay honest; no percentages.
// ============================================================

export const skillCategories = [
  { id: 'web', label: 'Web Development' },
  { id: 'design', label: 'Design' },
  { id: 'tech', label: 'Technology' },
]

export const skills = [
  // --- Web Development ---
  {
    name: 'HTML',
    category: 'web',
    icon: 'code',
    description: 'The foundation of every page I build — clean, semantic structure.',
  },
  {
    name: 'CSS',
    category: 'web',
    icon: 'paintbrush',
    description: 'Styling, layout, animation, and responsive design for the modern web.',
  },
  {
    name: 'Bootstrap',
    category: 'web',
    icon: 'layout',
    description: 'Building fast, responsive layouts with a component framework.',
  },
  {
    name: 'Tailwind CSS',
    category: 'web',
    icon: 'wind',
    description: 'Utility-first styling — this very portfolio is built with it.',
  },
  {
    name: 'JavaScript',
    category: 'web',
    icon: 'braces',
    description: 'Adding interactivity and dynamic behavior to my interfaces.',
  },
  // --- Design ---
  {
    name: 'Figma',
    category: 'design',
    icon: 'figma',
    description: 'Designing interfaces and prototypes with a collaborative mindset.',
  },
  {
    name: 'Framer',
    category: 'design',
    icon: 'framer',
    description: 'Creating interactive, animated websites without heavy code.',
  },
  {
    name: 'Canva',
    category: 'design',
    icon: 'shapes',
    description: 'Quick, creative visuals for graphics, content, and presentations.',
  },
  {
    name: 'Adobe Photoshop',
    category: 'design',
    icon: 'image',
    description:
      'Practical, problem-solving editing — retouching and visual fixes for real project needs, rather than advanced artistry.',
  },
  {
    name: 'Adobe Illustrator',
    category: 'design',
    icon: 'pen',
    description:
      'Practical vector work — icons and simple illustrations that solve real design problems.',
  },
  // --- Technology ---
  {
    name: 'Networking',
    category: 'tech',
    icon: 'network',
    description: 'Core networking concepts, explored through dedicated coursework.',
  },
  {
    name: 'Artificial Intelligence',
    category: 'tech',
    icon: 'brain',
    description: 'Currently learning — exploring how AI is shaping the web.',
  },
]

// ============================================================
// PROJECTS — all URLs verified live on 2026-10-17.
// Tech tags verified by inspecting each live site.
// preview: screenshot imported in Projects.jsx; null = abstract preview.
// ============================================================

export const projects = [
  {
    title: 'Teacher Website',
    url: 'https://mursalmehri.github.io/Teacher/',
    preview: 'teacher',
    description:
      'A website project related to teachers and education — an animated tribute built around a personal message.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: "Teacher's Day",
    url: 'https://mursalmehri.github.io/TeacherDay/',
    preview: 'teacherday',
    description:
      'A creative website celebrating teachers and expressing appreciation for their work.',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'University Website',
    url: 'https://mursalmehri.github.io/University-Website/',
    preview: 'university',
    description:
      'A university website project featuring educational information and website navigation.',
    tags: ['HTML', 'Bootstrap', 'CSS'],
  },
  {
    title: 'Lifeline',
    url: 'https://setayeshazizi.github.io/lifeline/',
    preview: 'lifeline',
    contribution: 'Contributed as part of a team',
    description:
      'A donation and emergency-matching project designed to connect people who need blood with potential donors and relevant healthcare services.',
    tags: ['HTML', 'Bootstrap', 'CSS', 'JavaScript'],
  },
  {
    title: 'Framer Website',
    url: 'https://breezy-position-395784.framer.app/',
    preview: 'framer',
    description: 'An interactive website created using Framer.',
    tags: ['Framer'],
  },
]

// ============================================================
// CERTIFICATES — DEMO placeholders for now.
// To add a real certificate: put the image in src/assets/certificates/,
// then set `image: myImage` (an import) and fill in title/organization/date.
// Unknown fields stay null and are simply not shown.
// ============================================================

export const certificates = [
  
    {
  id: 'cert-web',
  category: 'Web Design',
  title: 'Web Design Certificate',
  image: '/web-design.jpg',
  organization: 'Online Women University',
  date: null,
  placeholder: false,

  },
  {
    id: 'cert-editing',
    category: 'Editing',
    title: 'Editing Certificate',
    image: '/editing-Certificate.jpg',
    organization: 'Online Women University',
    date: null,
    placeholder: true,
  },
  {
    id: 'cert-english',
    category: 'English Language',
    title: 'Beginner English Language Class',
    image:' /english-certificate.jpg',
    organization: 'Girls Beyond Tomorrow',
    date: null,
    placeholder: true,
  },
  
  
]

// ============================================================
// EDUCATION — no dates or completion status invented.
// ============================================================

export const education = [
  {
    icon: 'code',
    institution: 'Netlinks',
    title: 'Web Design Course',
    text: 'Hands-on web design coursework and practice.',
    status: null,
  },
  {
    icon: 'languages',
    institution: 'Afghanistan Roshan University',
    title: 'English Language Course',
    text: 'Language studies focused on English.',
    status: null,
  },
  {
    icon: 'school',
institution: 'Asia Central University',
title: 'Git & GitHub Practice',
text: 'Currently reviewing Git and GitHub, practicing version control, repository management, branching, and collaboration on team projects.',
status: 'active',
  },
  {
    icon: 'network',
    institution: 'Coursera',
    title: 'Networking Course',
    text: 'Online coursework covering networking fundamentals.',
    status: null,
  },
  {
    icon: 'brain',
    institution: 'Artificial Intelligence',
    title: 'Currently learning',
    text: 'Actively exploring AI concepts and tools.',
    status: 'active',
  },
]

// ============================================================
// CONTACT — replace null with real links to activate a button.
// e.g. email: 'your.name@example.com',
//      github: 'https://github.com/your-username',
//      linkedin: 'https://www.linkedin.com/in/your-profile'
// ============================================================

export const contact = {
  intro: "I'm always interested in learning, collaboration, and opportunities to grow.",
  email: 'mursalmehri2030@gmail.com',
  github: 'https://github.com/MursalMehri',
  linkedin: 'https://www.linkedin.com/in/mursal-mehri-0683b3439'

,
}
