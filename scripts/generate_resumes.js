import fs from 'fs';
import path from 'path';

// Clean standard PDF generator without external dependencies
function generateResumePDF({ title, role, objective, filename }) {
  // Page size: Letter 612 x 792 pt
  const width = 612;
  const height = 792;
  const margin = 40;
  const printableWidth = width - margin * 2;

  // Stream content builder
  let stream = '';

  const escapePdf = (str) => {
    return str.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  };

  // Helper commands
  const setColor = (r, g, b) => {
    stream += `${(r/255).toFixed(3)} ${(g/255).toFixed(3)} ${(b/255).toFixed(3)} rg\n`;
    stream += `${(r/255).toFixed(3)} ${(g/255).toFixed(3)} ${(b/255).toFixed(3)} RG\n`;
  };

  const drawLine = (x1, y1, x2, y2, lineWidth = 0.75, r = 200, g = 205, b = 215) => {
    setColor(r, g, b);
    stream += `${lineWidth} w\n`;
    stream += `${x1} ${y1} m ${x2} ${y2} l S\n`;
  };

  let curY = 756;

  // Header
  // FARJANA AKTER
  setColor(15, 23, 42); // slate 900
  stream += `BT /F2 18 Tf ${margin} ${curY} Td (${escapePdf('FARJANA AKTER')} ) Tj ET\n`;
  curY -= 16;

  // Role subtitle
  setColor(14, 116, 144); // cyan-700
  stream += `BT /F2 11 Tf ${margin} ${curY} Td (${escapePdf(role)} ) Tj ET\n`;
  curY -= 14;

  // Contact info line
  setColor(71, 85, 105); // slate-600
  const contactText = 'Dhaka, Bangladesh  |  +8801749600538  |  farjanapinky350@gmail.com';
  stream += `BT /F1 9 Tf ${margin} ${curY} Td (${escapePdf(contactText)} ) Tj ET\n`;
  curY -= 12;

  // Links line
  setColor(2, 132, 199); // sky-600
  const linksText = 'LinkedIn: linkedin.com/in/farjana-akter-dev  |  GitHub: github.com/farjuu333';
  stream += `BT /F2 8.5 Tf ${margin} ${curY} Td (${escapePdf(linksText)} ) Tj ET\n`;
  curY -= 8;

  drawLine(margin, curY, width - margin, curY, 1, 6, 182, 212);
  curY -= 13;

  // Section Header helper
  const addSectionHeader = (title) => {
    setColor(15, 23, 42);
    stream += `BT /F2 10 Tf ${margin} ${curY} Td (${escapePdf(title)} ) Tj ET\n`;
    curY -= 3;
    drawLine(margin, curY, width - margin, curY, 0.5, 226, 232, 240);
    curY -= 9;
  };

  // CAREER OBJECTIVE
  addSectionHeader('CAREER OBJECTIVE');
  setColor(51, 65, 85);
  // Multi-line wrap helper
  const wrapText = (text, maxChars = 105) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    for (const w of words) {
      if ((currentLine + ' ' + w).trim().length > maxChars) {
        lines.push(currentLine.trim());
        currentLine = w;
      } else {
        currentLine = (currentLine + ' ' + w).trim();
      }
    }
    if (currentLine) lines.push(currentLine.trim());
    return lines;
  };

  wrapText(objective, 108).forEach((line) => {
    stream += `BT /F1 8.5 Tf ${margin} ${curY} Td (${escapePdf(line)} ) Tj ET\n`;
    curY -= 10.5;
  });
  curY -= 4;

  // SKILLS
  addSectionHeader('SKILLS');
  const skillsList = [
    { cat: 'Frontend:', items: 'HTML5, CSS3, JavaScript ES6+, TypeScript, React.js, Next.js, Context API, DOM Manipulation' },
    { cat: 'UI / Styling:', items: 'Tailwind CSS, HeroUI, DaisyUI, Framer Motion, SwiperJS, Responsive Web Design, Dark-Theme' },
    { cat: 'Backend:', items: 'Node.js, Express.js, MongoDB Atlas, REST API, PostgreSQL, Prisma CRUD Operations' },
    { cat: 'Forms / Auth:', items: 'Better Auth, Google OAuth, JWT Security Verification, Protected Routes, React Toastify' },
    { cat: 'Tools & Deploy:', items: 'Git, GitHub, Vercel, Postman, Chrome DevTools, Figma-to-code, VS Code, npm' },
    { cat: 'AI Workflow:', items: 'ChatGPT, Gemini, Prompt Engineering, AI-assisted debugging, clean code refactoring, Claude' },
  ];

  skillsList.forEach((sk) => {
    setColor(15, 23, 42);
    stream += `BT /F2 8.5 Tf ${margin} ${curY} Td (${escapePdf(sk.cat)} ) Tj `;
    setColor(71, 85, 105);
    stream += `/F1 8.5 Tf (${escapePdf(' ' + sk.items)} ) Tj ET\n`;
    curY -= 10.5;
  });
  curY -= 4;

  // PROJECTS
  addSectionHeader('PROJECTS');

  const projects = [
    {
      name: 'Fable — Digital Ebook Publishing & Reading Platform',
      links: 'Live | Frontend | Backend',
      desc: 'A digital ebook publishing and reading platform with role-based dashboards, multi-layered search, and Stripe payment integration.',
      bullets: [
        'Built dynamic dashboards using Next.js & Recharts, cutting task time from 15m to 5m.',
        'Designed a multi-layered search system with MongoDB handling 100+ listings daily.',
        'Implemented Stripe checkout with Tailwind CSS, reducing payment drops by 35%.'
      ],
      stack: 'Tech Stack: Next.js, Tailwind CSS, MongoDB, React Hook, ImgBB, Stripe.js, BetterAuth, Recharts, Framer Motion'
    },
    {
      name: 'DocAppoint — Doctor Appointment Manager',
      links: 'Live | Frontend | Backend',
      desc: 'A doctor appointment booking platform featuring Google OAuth authentication, real-time booking management, and dynamic specialist search filters.',
      bullets: [
        'Built Google OAuth authentication with BetterAuth, cutting sign-in time from 10s to 6s.',
        'Designed and shipped a real-time booking system that handles 50+ concurrent requests per minute.',
        'Implemented dynamic specialist discovery filters using Next.js, cutting doctor selection search time by 25%.'
      ],
      stack: 'Tech Stack: Next.js, MongoDB, Better Auth, Tailwind CSS, REST API'
    },
    {
      name: 'SkillSphere — Online Learning Platform',
      links: 'Live | GitHub',
      desc: 'An online learning platform with protected route navigation, multi-tiered course contents, and interactive Framer Motion animations.',
      bullets: [
        'Built route guards with Next.js & Better Auth, cutting unauthorized access to 0%.',
        'Designed nested course navigation with Next.js handling 500+ requests daily.',
        'Implemented Framer Motion animations, reducing navigation drop-off by 20%.'
      ],
      stack: 'Tech Stack: React.js, Next.js, MongoDB, Better Auth, Framer Motion, SwiperJS, React'
    }
  ];

  projects.forEach((proj, idx) => {
    // Project title & links
    setColor(15, 23, 42);
    stream += `BT /F2 9 Tf ${margin} ${curY} Td (${escapePdf(proj.name)} ) Tj `;
    setColor(2, 132, 199);
    stream += `/F2 8.5 Tf (${escapePdf('  ' + proj.links)} ) Tj ET\n`;
    curY -= 10;

    // Short summary
    setColor(71, 85, 105);
    wrapText(proj.desc, 110).forEach((l) => {
      stream += `BT /F1 8 Tf ${margin} ${curY} Td (${escapePdf(l)} ) Tj ET\n`;
      curY -= 9.5;
    });

    // Bullets
    proj.bullets.forEach((b) => {
      setColor(14, 116, 144);
      stream += `BT /F2 8 Tf ${margin + 4} ${curY} Td (${escapePdf('* ')} ) Tj `;
      setColor(51, 65, 85);
      stream += `/F1 8 Tf (${escapePdf(b)} ) Tj ET\n`;
      curY -= 9.5;
    });

    // Tech stack
    setColor(30, 41, 59);
    stream += `BT /F2 7.5 Tf ${margin + 4} ${curY} Td (${escapePdf(proj.stack)} ) Tj ET\n`;
    curY -= idx === projects.length - 1 ? 5 : 7;
  });

  // EDUCATION
  addSectionHeader('EDUCATION');
  setColor(15, 23, 42);
  stream += `BT /F2 8.5 Tf ${margin} ${curY} Td (${escapePdf('B.Sc. in Computer Science and Engineering')} ) Tj `;
  setColor(71, 85, 105);
  stream += `/F1 8.5 Tf (${escapePdf(' — Institute of Science and Technology (IST) | Expected 2027')} ) Tj ET\n`;
  curY -= 10;
  setColor(100, 116, 139);
  stream += `BT /F1 7.5 Tf ${margin} ${curY} Td (${escapePdf('Relevant Coursework: Web Development, Database Management Systems (DBMS), Software Engineering, Data Structures & Algorithms, OOP, Computer Networking')} ) Tj ET\n`;
  curY -= 7;

  // COURSES, TRAINING & CERTIFICATIONS
  addSectionHeader('COURSES, TRAINING & CERTIFICATIONS');
  setColor(15, 23, 42);
  stream += `BT /F2 8.5 Tf ${margin} ${curY} Td (${escapePdf('Complete Web Development Course')} ) Tj `;
  setColor(71, 85, 105);
  stream += `/F1 8.5 Tf (${escapePdf(' — Programming Hero (2026)')} ) Tj ET\n`;
  curY -= 10;
  setColor(2, 132, 199);
  stream += `BT /F1 7.5 Tf ${margin} ${curY} Td (${escapePdf('Verify Certificate: drive.google.com/file/d/1-Q_vY_krib8QTPXKn9E8KztSkOBu0dcF/view')} ) Tj ET\n`;
  curY -= 7;

  // LANGUAGES
  addSectionHeader('LANGUAGES');
  setColor(51, 65, 85);
  stream += `BT /F1 8.5 Tf ${margin} ${curY} Td (${escapePdf('English (Professional)  |  Bangla (Native)  |  Hindi (Basic)')} ) Tj ET\n`;

  // Build PDF structure
  const streamLength = Buffer.byteLength(stream, 'latin1');

  let pdf = `%PDF-1.4\n`;
  const offsets = [];

  const addObj = (str) => {
    offsets.push(Buffer.byteLength(pdf, 'latin1'));
    pdf += str;
  };

  // Object 1: Catalog
  addObj(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`);

  // Object 2: Pages
  addObj(`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`);

  // Object 3: Page
  addObj(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n`);

  // Object 4: Contents Stream
  addObj(`4 0 obj\n<< /Length ${streamLength} >>\nstream\n${stream}\nendstream\nendobj\n`);

  // Object 5: Font Helvetica
  addObj(`5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`);

  // Object 6: Font Helvetica-Bold
  addObj(`6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`);

  const startxref = Buffer.byteLength(pdf, 'latin1');
  pdf += `xref\n0 7\n0000000000 65535 f \n`;
  for (let i = 0; i < offsets.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF\n`;

  const outputPath = path.resolve('public', filename);
  fs.writeFileSync(outputPath, pdf, 'latin1');
  console.log(`Generated: ${outputPath} (${Buffer.byteLength(pdf, 'latin1')} bytes)`);
}

// Generate the 3 tailored versions
const frontendObj = "Junior Frontend Developer with hands-on MERN stack, React, and Next.js experience. Skilled in building responsive dashboards, secure authentication, and REST APIs. Adept at leveraging AI tools for faster debugging, clean component refactoring, and efficient feature delivery.";

const mernObj = "Dynamic MERN Stack Developer skilled in building full-stack web applications with React, Node.js, Express, and MongoDB. Experienced in creating responsive UIs, RESTful APIs, and secure authentication. Adept at leveraging AI tools for efficient debugging and clean code delivery.";

const fullStackObj = "Adaptable Full Stack Developer experienced in building end-to-end web apps with React, Next.js, Node.js, Express, MongoDB, and PostgreSQL. Skilled in responsive UIs, Prisma ORM, secure REST APIs, and authentication. Adept at using AI tools for faster debugging and clean code delivery.";

generateResumePDF({
  title: "Frontend Developer Resume",
  role: "Frontend Developer",
  objective: frontendObj,
  filename: "Farjana_Akter_Frontend_Developer_Resume.pdf"
});

generateResumePDF({
  title: "MERN Stack Developer Resume",
  role: "MERN Stack Developer",
  objective: mernObj,
  filename: "Farjana_Akter_MERN_Stack_Developer_Resume.pdf"
});

generateResumePDF({
  title: "Full-Stack Developer Resume",
  role: "Full Stack Developer",
  objective: fullStackObj,
  filename: "Farjana_Akter_Full_Stack_Developer_Resume.pdf"
});

// Also create default resume.pdf as Full-Stack version
generateResumePDF({
  title: "Full-Stack Developer Resume",
  role: "Full Stack Developer",
  objective: fullStackObj,
  filename: "resume.pdf"
});
