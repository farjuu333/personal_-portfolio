/**
 * Centralized Portfolio Data Configuration File
 * All personal information, projects, skills, timeline, resume details,
 * and contact data are managed dynamically from this central source.
 */

export const portfolioData = {
  personalInfo: {
    name: "Farjana Akter",
    firstName: "Farjana",
    lastName: "Akter",
    role: "Full-Stack Developer",
    typingSubtitles: [
      "Full-Stack Developer",
      "React & Next.js Specialist",
      "Node.js, Express & Prisma Engineer",
      "Tailwind CSS & Framer Motion Craftsman"
    ],
    bio: "Passionate Full-Stack Developer specializing in building scalable, end-to-end web applications with React, Next.js, Node.js, and Express. Experienced in crafting modern user experiences with Tailwind CSS and Framer Motion, paired with resilient database architectures (PostgreSQL, MongoDB, Prisma), Better Auth security, and Stripe integrations.",
    extendedBio: "I specialize in engineering complete, modern web applications from initial database schema to interactive, pixel-perfect user interfaces. My core toolkit revolves around React, Next.js, Node.js, Express, PostgreSQL, MongoDB, Prisma, Better Auth, Tailwind CSS, and Framer Motion. Having built and shipped end-to-end applications including Fable (an ebook publishing platform with Stripe monetization), DocAppoint (a doctor appointment management system with Google OAuth authentication), and SkillSphere, I bring a holistic, product-driven approach to full-stack engineering.",
    location: "Dhaka, Bangladesh",
    email: "farjanapinky350@gmail.com",
    phone: "+8801749600538",
    availabilityStatus: "Available for Full-Stack Opportunities",
    availableForHire: true,
    avatar: "/images/profile.jpeg",
    experienceYears: "Full-Stack",
    resumeUrl: "/Farjana_Akter_Full_Stack_Developer_Resume.pdf",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/farjuu333", icon: "Github", handle: "@farjuu333" },
      { name: "LinkedIn", url: "http://www.linkedin.com/in/farjana-akter-dev", icon: "Linkedin", handle: "in/farjana-akter-dev" },
      { name: "WhatsApp", url: "https://wa.me/8801749600538", icon: "WhatsApp", handle: "+8801749600538" }
    ]
  },

  stats: [
    { label: "Core Tech Stack", value: "10+", change: "Full-Stack Technologies" },
    { label: "Featured Web Apps", value: "3+", change: "Fable, DocAppoint, SkillSphere" },
    { label: "Architecture", value: "100%", change: "End-to-End Scalable" },
    { label: "Code Quality", value: "A+", change: "Type-Safe & Clean" }
  ],

  featureCards: [
    {
      step: "01",
      title: "Frontend & Fluid Motion",
      desc: "Crafting performant, accessible web interfaces with React and Next.js, structured component hierarchies, modern styling in Tailwind CSS, and kinetic micro-interactions powered by Framer Motion.",
      icon: "Frontend",
      color: "from-cyan-500 to-blue-600",
      stack: "React • Next.js • Tailwind CSS • Framer Motion"
    },
    {
      step: "02",
      title: "Backend & API Architecture",
      desc: "Engineering structured, modular server-side architectures and high-throughput RESTful APIs with Node.js and Express, ensuring clean service abstraction and robust middleware error handling.",
      icon: "Backend",
      color: "from-indigo-500 to-purple-600",
      stack: "Node.js • Express • REST APIs"
    },
    {
      step: "03",
      title: "Database Modeling & ORM",
      desc: "Designing resilient data layers using PostgreSQL with Prisma ORM for strictly typed schemas and migrations, alongside flexible NoSQL document storage with MongoDB for scalable architectures.",
      icon: "Database",
      color: "from-emerald-400 to-teal-600",
      stack: "PostgreSQL • MongoDB • Prisma ORM"
    },
    {
      step: "04",
      title: "Auth, Payments & Shipped Apps",
      desc: "Implementing secure authentication workflows with Better Auth & Google OAuth, alongside Stripe payment pipelines across production web apps like Fable, DocAppoint, and SkillSphere.",
      icon: "Security",
      color: "from-amber-400 to-orange-500",
      stack: "Better Auth • Google OAuth • Stripe"
    }
  ],

  workflowPhases: [
    {
      step: "01",
      title: "Frontend & Fluid Motion",
      desc: "Crafting performant, accessible web interfaces with React and Next.js, structured component hierarchies, modern styling in Tailwind CSS, and kinetic micro-interactions powered by Framer Motion.",
      icon: "Frontend",
      color: "from-cyan-500 to-blue-600",
      stack: "React • Next.js • Tailwind CSS • Framer Motion"
    },
    {
      step: "02",
      title: "Backend & API Architecture",
      desc: "Engineering structured, modular server-side architectures and high-throughput RESTful APIs with Node.js and Express, ensuring clean service abstraction and robust middleware error handling.",
      icon: "Backend",
      color: "from-indigo-500 to-purple-600",
      stack: "Node.js • Express • REST APIs"
    },
    {
      step: "03",
      title: "Database Modeling & ORM",
      desc: "Designing resilient data layers using PostgreSQL with Prisma ORM for strictly typed schemas and migrations, alongside flexible NoSQL document storage with MongoDB for scalable architectures.",
      icon: "Database",
      color: "from-emerald-400 to-teal-600",
      stack: "PostgreSQL • MongoDB • Prisma ORM"
    },
    {
      step: "04",
      title: "Auth, Payments & Shipped Apps",
      desc: "Implementing secure authentication workflows with Better Auth & Google OAuth, alongside Stripe payment pipelines across production web apps like Fable, DocAppoint, and SkillSphere.",
      icon: "Security",
      color: "from-amber-400 to-orange-500",
      stack: "Better Auth • Google OAuth • Stripe"
    }
  ],

  projectCategories: ["All", "Full Stack", "Frontend", "Backend"],

  projects: [
    {
      id: "fable-ebook-platform",
      title: "Fable - Ebook Publishing Platform",
      subtitle: "Digital ebook publishing platform with Stripe payments & reader dashboard",
      category: "Full Stack",
      featured: true,
      image: "/projects/project1.PNG",
      description: "An end-to-end ebook publishing marketplace allowing authors to publish books and readers to preview and purchase via secure Stripe payments.",
      longDescription: "Fable provides authors with a streamlined publication pipeline and readers with a responsive in-browser reading experience. Engineered with Next.js, Node.js, Express, and PostgreSQL via Prisma ORM, integrating Stripe Checkout and webhooks for real-time payment verification and instant digital delivery.",
      keyFeatures: [
        "End-to-end ebook publishing flow with metadata and cover uploads",
        "Secure Stripe payment processing with webhook fulfillment",
        "Responsive in-browser reader with custom font and theme toggling",
        "Author analytics dashboard tracking sales, revenue, and readership"
      ],
      impactMetrics: [
        { label: "Payment Success", value: "99.9%" },
        { label: "Digital Delivery", value: "Instant" },
        { label: "Lighthouse Score", value: "98/100" }
      ],
      techStack: ["Next.js", "React", "Node.js", "Express", "PostgreSQL", "Prisma", "Stripe", "Tailwind CSS"],
      liveUrl: "https://fable-ebook.portfolio.dev",
      githubUrl: "https://github.com/farjana/fable-ebook-platform"
    },
    {
      id: "docappoint-health",
      title: "DocAppoint - Doctor Appointment Manager",
      subtitle: "Healthcare scheduling platform with Google OAuth & patient portals",
      category: "Full Stack",
      featured: true,
      image: "/projects/project2.PNG",
      description: "A comprehensive doctor appointment management system with calendar slot bookings, patient records, and Google OAuth authentication.",
      longDescription: "DocAppoint simplifies healthcare scheduling for clinics and patients. Built using React, Next.js, Node.js, Express, and MongoDB, with Better Auth and Google OAuth for frictionless sign-in. Doctors manage time slots while patients book appointments with automated email confirmations.",
      keyFeatures: [
        "One-click Google OAuth authentication and role-based access",
        "Real-time calendar slot management and conflict prevention",
        "Patient history and prescription attachment dashboard",
        "Responsive dark/light medical appointment scheduling interface"
      ],
      impactMetrics: [
        { label: "Auth Flow", value: "<1.5s" },
        { label: "Booking Speed", value: "3 Steps" },
        { label: "Data Integrity", value: "100%" }
      ],
      techStack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Google OAuth", "Better Auth", "Tailwind CSS"],
      liveUrl: "https://docappoint.portfolio.dev",
      githubUrl: "https://github.com/farjana/docappoint-manager"
    },
    {
      id: "skillsphere-platform",
      title: "SkillSphere - Collaborative Learning Hub",
      subtitle: "Interactive skill sharing, course management & peer learning platform",
      category: "Full Stack",
      featured: true,
      image: "/projects/project3.png",
      description: "A modern skill-sharing web application enabling peer-to-peer learning, course progress tracking, and interactive community discussions with Framer Motion.",
      longDescription: "SkillSphere empowers individuals to exchange skills and enroll in interactive modules. Developed with React, Next.js, Node.js, Express, PostgreSQL, and Prisma ORM, styled with Tailwind CSS, and enriched with dynamic fluid micro-interactions using Framer Motion.",
      keyFeatures: [
        "Interactive course modular roadmap with animated progress indicators",
        "Peer-to-peer discussion forum with markdown support",
        "Fluid gesture-based card navigation powered by Framer Motion",
        "Type-safe relational database schema managed via Prisma"
      ],
      impactMetrics: [
        { label: "Interactive FAS", value: "60 FAS" },
        { label: "API Response", value: "<85ms" },
        { label: "Mobile Responsive", value: "100%" }
      ],
      techStack: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://skillsphere.portfolio.dev",
      githubUrl: "https://github.com/farjana/skillsphere-app"
    }
  ],

  skillGroups: [
    {
      name: "Frontend & UI Engineering",
      icon: "Layout",
      description: "Crafting modern, accessible, and kinetic interfaces with clean component architectures",
      skills: [
        { name: "React & Next.js", level: 95, highlight: "App Router & SSR", icon: "Atom" },
        { name: "Tailwind CSS", level: 96, highlight: "Responsive & Modern Design", icon: "Palette" },
        { name: "Framer Motion", level: 90, highlight: "Kinetic UI & Micro-interactions", icon: "Sparkles" },
        { name: "JavaScript & ESNext", level: 94, highlight: "Modern Asynchronous JS", icon: "Code" },
        { name: "HTML5 & Semantic UI", level: 98, highlight: "Accessible Standards", icon: "Layers" }
      ]
    },
    {
      name: "Backend & Systems Architecture",
      icon: "Server",
      description: "Building reliable server architectures, RESTful APIs, and robust data pipelines",
      skills: [
        { name: "Node.js & Express", level: 92, highlight: "REST APIs & Middleware", icon: "Cpu" },
        { name: "PostgreSQL", level: 88, highlight: "Relational Schemas", icon: "Database" },
        { name: "Prisma ORM", level: 90, highlight: "Type-Safe Queries & Migrations", icon: "Zap" },
        { name: "MongoDB", level: 86, highlight: "NoSQL Document Modeling", icon: "Database" },
        { name: "RESTful Architecture", level: 92, highlight: "Modular Endpoint Design", icon: "Share2" }
      ]
    },
    {
      name: "Authentication, Payments & Tooling",
      icon: "Cloud",
      description: "Integrating secure user authentication, payment gateways, and modern developer tooling",
      skills: [
        { name: "Better Auth & OAuth", level: 92, highlight: "Google OAuth & Session Security", icon: "CheckCircle2" },
        { name: "Stripe API Integration", level: 90, highlight: "Checkout & Webhook Pipelines", icon: "Zap" },
        { name: "Git & GitHub Workflows", level: 92, highlight: "Version Control & Collaboration", icon: "GitBranch" },
        { name: "Vite & Modern Bundlers", level: 90, highlight: "Fast Development & Builds", icon: "Wrench" }
      ]
    }
  ],

  achievements: [
    {
      id: "fullstack-apps",
      year: "2025",
      title: "Shipped 3+ End-to-End Production Applications",
      organization: "Production Milestones",
      badge: "Real-World Impact",
      description: "Engineered and shipped Fable, DocAppoint, and SkillSphere from concept to production with payment processing and OAuth integrations.",
      credentialUrl: "https://github.com/farjana",
      icon: "Award"
    },
    {
      id: "modern-stack",
      year: "2024",
      title: "Mastery in Modern React & Next.js Ecosystem",
      organization: "Full-Stack Specialization",
      badge: "Architecture",
      description: "Built scalable architectures combining Next.js App Router, Tailwind CSS, Prisma ORM, and PostgreSQL with sub-100ms API response times.",
      credentialUrl: "https://github.com/farjana",
      icon: "ShieldCheck"
    },
    {
      id: "stripe-auth-integration",
      year: "2023",
      title: "Stripe & OAuth Production Deployment",
      organization: "Security & Payments",
      badge: "Security",
      description: "Implemented secure user authentication with Better Auth and Google OAuth, along with complete Stripe payment and webhook pipelines.",
      credentialUrl: "https://github.com/farjana",
      icon: "Star"
    }
  ],

  resumeDetails: {
    downloadFilename: "Farjana_Akter_Resume.pdf",
    downloadUrl: "/Farjana_Akter_Full_Stack_Developer_Resume.pdf",
    version: "2026 Edition",
    lastUpdated: "October 2026",
    summary: "Full-Stack Developer with hands-on experience building scalable, end-to-end web applications using React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Prisma, Better Auth, Tailwind CSS, and Framer Motion. Proven track record of developing and shipping complete applications including Fable (Ebook publishing with Stripe), DocAppoint (Doctor appointment manager with Google OAuth), and SkillSphere.",
    resumeVersions: [
      {
        id: "frontend",
        name: "Frontend Developer Resume",
        label: "Frontend Developer",
        role: "Frontend Developer",
        badge: "React & Next.js Focus",
        downloadFilename: "Farjana_Akter_Frontend_Developer_Resume.pdf",
        downloadUrl: "/Farjana_Akter_Frontend_Developer_Resume.pdf",
        objective: "Junior Frontend Developer with hands-on MERN stack, React, and Next.js experience. Skilled in building responsive dashboards, secure authentication, and REST APIs. Adept at leveraging AI tools for faster debugging, clean component refactoring, and efficient feature delivery.",
        skillsSummary: "HTML5, CSS3, JavaScript ES6+, TypeScript, React.js, Next.js, Context API, Tailwind CSS, HeroUI, DaisyUI, Framer Motion",
        highlights: [
          "Responsive dashboards with Next.js & Recharts",
          "Kinetic micro-interactions with Framer Motion",
          "Clean component architecture & state management",
          "Better Auth, Google OAuth & protected routes"
        ],
        stats: { experience: "Frontend Specialist", projects: "3+ Deployed Apps", focus: "React / Next.js / UI" }
      },
      {
        id: "mern",
        name: "MERN Stack Developer Resume",
        label: "MERN Stack Developer",
        role: "MERN Stack Developer",
        badge: "MongoDB & Express Focus",
        downloadFilename: "Farjana_Akter_MERN_Stack_Developer_Resume.pdf",
        downloadUrl: "/Farjana_Akter_MERN_Stack_Developer_Resume.pdf",
        objective: "Dynamic MERN Stack Developer skilled in building full-stack web applications with React, Node.js, Express, and MongoDB. Experienced in creating responsive UIs, RESTful APIs, and secure authentication. Adept at leveraging AI tools for efficient debugging and clean code delivery.",
        skillsSummary: "MongoDB Atlas, Express.js, React.js, Node.js, RESTful APIs, JWT Security, Better Auth, CRUD Operations",
        highlights: [
          "MongoDB multi-layered search & document modeling",
          "High-performance Express.js REST APIs",
          "Real-time booking with 50+ concurrent req/min",
          "JWT & Better Auth authentication systems"
        ],
        stats: { experience: "MERN Engineer", projects: "3+ Full-Stack Apps", focus: "Node / Express / Mongo" }
      },
      {
        id: "fullstack",
        name: "Full-Stack Developer Resume",
        label: "Full-Stack Developer",
        role: "Full-Stack Developer",
        badge: "PostgreSQL & Prisma Focus",
        downloadFilename: "Farjana_Akter_Full_Stack_Developer_Resume.pdf",
        downloadUrl: "/Farjana_Akter_Full_Stack_Developer_Resume.pdf",
        objective: "Adaptable Full Stack Developer experienced in building end-to-end web apps with React, Next.js, Node.js, Express, MongoDB, and PostgreSQL. Skilled in responsive UIs, Prisma ORM, secure REST APIs, and authentication. Adept at using AI tools for faster debugging and clean code delivery.",
        skillsSummary: "React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Prisma ORM, Stripe Payments, Better Auth, Tailwind CSS",
        highlights: [
          "End-to-end scalable web application architecture",
          "PostgreSQL data layers & type-safe Prisma ORM",
          "Stripe checkout pipelines with automated webhooks",
          "Google OAuth & Better Auth security workflows"
        ],
        stats: { experience: "Full-Stack Architect", projects: "3+ Production Apps", focus: "End-to-End Delivery" }
      }
    ],
    coreCompetencies: [
      "React & Next.js Architecture",
      "Node.js & Express REST APIs",
      "PostgreSQL, MongoDB & Prisma ORM",
      "Better Auth & Google OAuth",
      "Tailwind CSS & Framer Motion",
      "Stripe Payments & Webhooks"
    ],
    experience: [
      {
        role: "Full-Stack Developer",
        company: "Fable — Ebook Publishing Platform",
        location: "Web Application Project",
        period: "2024 - 2025",
        responsibilities: [
          "Architected and deployed a full-stack ebook publishing platform enabling author management, book previews, and digital reader interfaces.",
          "Integrated Stripe payment gateway with webhook verification for automated digital order fulfillment.",
          "Implemented database modeling with PostgreSQL and Prisma ORM for efficient book indexing and reader purchases."
        ]
      },
      {
        role: "Full-Stack Developer",
        company: "DocAppoint — Healthcare Appointment Platform",
        location: "Web Application Project",
        period: "2024",
        responsibilities: [
          "Developed an end-to-end doctor appointment booking manager with flexible calendar slot management and patient dashboards.",
          "Implemented secure user authentication utilizing Google OAuth and Better Auth for doctors and patients.",
          "Structured scalable data schemas with MongoDB and built high-performance REST APIs with Node.js and Express."
        ]
      },
      {
        role: "Full-Stack Developer",
        company: "SkillSphere — Collaborative Learning Hub",
        location: "Web Application Project",
        period: "2023 - 2024",
        responsibilities: [
          "Engineered an interactive skill-sharing application featuring modular learning roadmaps and peer discussion forums.",
          "Designed responsive, engaging user interfaces with Tailwind CSS and kinetic micro-interactions powered by Framer Motion.",
          "Created modular RESTful APIs with Node.js and Express backed by PostgreSQL and Prisma."
        ]
      }
    ],
    education: [
      {
        degree: "B.Sc. in Computer Science and Engineering",
        institution: "Institute of Science and Technology (IST)",
        period: "Expected 2027",
        location: "Dhaka, Bangladesh",
        honors: "Web Development, DBMS, Software Engineering & Data Structures"
      }
    ]
  },

  contactInfo: {
    directEmail: "farjanapinky350@gmail.com",
    emailMailto: "mailto:farjanapinky350@gmail.com",
    phone: "+8801749600538",
    phoneTel: "tel:+8801749600538",
    whatsappUrl: "https://wa.me/8801749600538",
    officeLocation: "Dhaka, Bangladesh",
    githubUrl: "https://github.com/farjuu333",
    linkedinUrl: "http://www.linkedin.com/in/farjana-akter-dev",
    timeZone: "UTC+6 (Dhaka, Bangladesh • Flexible for Global Teams)",
    typicalResponseTime: "Within a few hours",
    bookingLink: "mailto:farjanapinky350@gmail.com"
  }
};
