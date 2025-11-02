/* ============================================================
   CONFIGURATION – EDIT ONLY THIS
   ============================================================ */
const config = {
  title: "Portfolio",

  hero: {
    title: "Hi, I'm [Waving Hand]",
    subtitle: "19, building fast backends, scalable language models, and iOS apps...",
    tagline: "Building <a href='https://alice.com' target='_blank'>alice</a> and <a href='https://easywire.com' target='_blank'>easywire</a>.",
    photo: "assets/aryan.jpg"
  },

  nav: { resume: "resume", projects: "projects", contact: "contact" },

  about: {
    title: "About",
    text: `I love to solve problems... (your full about text)`,
    citiesTitle: "I Grew Up in Six Cities",
    citiesIntro: "Here are some of my favorite clicks:",
    cities: [
      { img: "assets/chandler.jpg", label: "Chandler, AZ" },
      { img: "assets/sanfran.jpg", label: "San Francisco, CA" },
      { img: "assets/mumbai.jpg", label: "Mumbai, MH" }
    ]
  },

  edu: {
    title: "Education",
    items: [
      { logo: "assets/asu.png", school: "Arizona State University (Barrett Honors)", degree: "BS in Computer Science, Minor in Statistics", date: "August 2023 – May 2026" },
      { logo: "assets/buildspace.png", school: "Buildspace", degree: "nights & weekends s5", date: "May 2024 – June 2024" }
    ]
  },

  skills: {
    title: "Skills & Tech Stack",
    badges: ["Java","C++","Python","JavaScript","SQL","C","Julia","Golang","Prolog","React.js","Next.js","Node.js","TypeScript","MongoDB","AWS","GCP","Docker","Linux","Git"]
  },

  research: {
    title: "Research Publications",
    items: [
      { title: "Do LLMs Understand Ambiguity in Text?", venue: "IEEE Big Data 2024", links: [{text:"Google Scholar",url:"#"},{text:"Tweet",url:"#"}] },
      { title: "Tri-Accel: GPU Optimization", venue: "arXiv preprint", links: [{text:"Google Scholar",url:"#"}] }
    ]
  },

  exp: {
    title: "Work Experience",
    items: [
      { logo: "assets/healthgc.png", company: "HealthGC", role: "AI Research Intern", date: "May 2025 – Dec 2025", desc: "Seed-stage startup..." },
      { logo: "assets/asu.png", company: "ASU Lab", role: "ML Researcher", date: "Apr 2024 – Present", desc: "Filtered 1M+ rows..." }
      // Add others...
    ]
  },

  proj: {
    title: "Projects",
    intro: "I've worked on a variety of projects...",
    items: [
      { img: "assets/alice.png", title: "Alice", desc: "Browser extension...", tags: ["JS","TS"], links: [{text:"GitHub",url:"#"}] },
      { img: "assets/canvas-mcp.png", title: "canvas-mcp", desc: "AI-agent protocol...", tags: ["Python"], links: [{text:"GitHub",url:"#"}] }
    ]
  },

  hack: {
    title: "Hackathons",
    intro: "I like hacking things (a lot)...",
    items: [
      { letter: "C", date: "Oct 2025", name: "CalHacks 2025", badge: "Turing", location: "Berkeley, CA", desc: "Turing watches how you..." },
      { letter: "H", date: "Sep 2025", name: "HackMIT 2025", badge: "Flashback", location: "Cambridge, MA", desc: "RAG for videos..." }
    ]
  },

  contact: {
    title: "Contact",
    text: "Feel free to reach out!",
    emailBtn: "Email Me",
    email: "aryan@example.com"
  },

  bottomNav: [
    { href: "#about",      svg: "home" },
    { href: "#education", svg: "briefcase" },
    { href: "#skills",    svg: "wrench" },
    { href: "#research",  svg: "flask" },
    { href: "https://linkedin.com/in/aryan", svg: "linkedin", external: true },
    { href: "https://x.com/aryan",          svg: "x",        external: true },
    { href: "#projects",  svg: "zap" },
    { href: "#contact",   svg: "sun" }
  ]
};

/* ============================================================
   ICONS
   ============================================================ */
const ICONS = {
  home: `<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
  briefcase: `<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  wrench: `<svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
  flask: `<svg viewBox="0 0 24 24"><path d="M9.5 3h5v4.05l4.28 7.43A2 2 0 0 1 17.05 17H6.95a2 2 0 0 1-1.73-3l4.28-7.43V3z"></path><path d="M9.5 3v4.05l-4.28 7.43"></path><path d="M14.5 3v4.05l4.28 7.43"></path></svg>`,
  linkedin: `<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  x: `<svg viewBox="0 0 24 24"><path d="M18.9 1.3h3.8l-8.3 9.5 9.8 12.9h-7.6l-6-7.8-6.8 7.8H.1l8.9-10.2L0 1.3h7.8l5.4 7.1L18.9 1.3z"></path></svg>`,
  zap: `<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
};

/* ============================================================
   RENDER
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  // Text
  $$("[data-key]").forEach(el => {
    const val = getNested(config, el.dataset.key);
    if (val !== undefined) {
      if (el.tagName === "A" && el.dataset.key.endsWith("emailBtn")) {
        el.href = `mailto:${config.contact.email}`;
      }
      el.innerHTML = typeof val === "string" ? val : "";
    }
  });

  // Hero photo
  $(".hero__photo").src = config.hero.photo;

  // Cities
  const cityGrid = $("#cityGrid");
  config.about.cities.forEach(c => { cityGrid.innerHTML += `<div class="city-card"><img src="${c.img}" alt="${c.label}"><span>${c.label}</span></div>`; });

  // Education
  const eduList = $("#eduList");
  config.edu.items.forEach(e => { eduList.innerHTML += `<div class="edu-card"><img src="${e.logo}" alt="${e.school}"><div class="info"><h3>${e.school}</h3><p class="degree">${e.degree}</p><p class="date">${e.date}</p></div></div>`; });

  // Skills
  const skillBadges = $("#skillBadges");
  config.skills.badges.forEach(s => { skillBadges.innerHTML += `<span class="skill-badge">${s}</span>`; });

  // Research
  const pubList = $("#pubList");
  config.research.items.forEach(p => {
    const links = p.links.map(l => `<a href="${l.url}">${l.text}</a>`).join(" · ");
    pubList.innerHTML += `<div class="pub-card"><h3>${p.title}</h3><p class="venue">${p.venue}</p><div class="links">${links}</div></div>`;
  });

  // Experience
  const expList = $("#expList");
  config.exp.items.forEach(e => { expList.innerHTML += `<div class="exp-card"><img class="logo" src="${e.logo}" alt="${e.company}"><div><h3>${e.company}</h3><p class="date">${e.date}</p><p><strong>${e.role}</strong></p><p>${e.desc}</p></div></div>`; });

  // Projects
  const projList = $("#projList");
  config.proj.items.forEach(p => {
    const tags = p.tags ? p.tags.map(t => `<span>${t}</span>`).join("") : "";
    const links = p.links.map(l => `<a href="${l.url}">${l.text}</a>`).join(" · ");
    projList.innerHTML += `<div class="proj-card">${p.img ? `<img src="${p.img}" alt="${p.title}">` : ""}<div class="content"><h3>${p.title}</h3><p>${p.desc}</p>${tags ? `<div class="tags">${tags}</div>` : ""}<div class="links">${links}</div></div></div>`;
  });

  // Hackathons
  const hackList = $("#hackList");
  config.hack.items.forEach(h => { hackList.innerHTML += `<div class="hack-card" data-letter="${h.letter}"><p class="date">${h.date}</p><h3><span class="badge">${h.badge}</span> ${h.name}</h3><p><strong>${h.location}</strong></p><p>${h.desc}</p></div>`; });

  // Bottom Nav
  const navInner = $("#bottomNav .bottom-nav__inner");
  config.bottomNav.forEach(item => {
    const a = document.createElement("a");
    a.href = item.href;
    if (item.external) a.target = "_blank";
    a.innerHTML = ICONS[item.svg] || "";
    a.title = item.svg;
    navInner.appendChild(a);
  });

  // Smooth scroll
  $$('.bottom-nav a').forEach(a => {
    a.addEventListener('click', e => {
      if (a.href.includes('#')) {
        e.preventDefault();
        const target = $(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Active state
  window.addEventListener('scroll', () => {
    let current = '';
    $$('section[id]').forEach(s => {
      if (s.getBoundingClientRect().top <= 150) current = s.id;
    });
    $$('.bottom-nav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
  });
});

/* Helper */
function getNested(o, p) { return p.split(".").reduce((a, b) => a?.[b], o); }