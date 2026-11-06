/* ============================================================
   SITE LOGIC — renders the page from data.js. You normally
   don't need to touch this file; edit data.js instead.
   ============================================================ */

const ICONS = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  infinity: '<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  gradcap: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
  sparkle: '<path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z"/>',
  pause: '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  radio: '<circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14"/>',
  landmark: '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>'
};

function icon(name, cls = "icon") {
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

const state = {
  lang: null,
  theme: null
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function t(obj) {
  if (obj == null) return "";
  if (typeof obj === "string") return obj;
  return obj[state.lang] ?? obj.en ?? "";
}

/* ---------- rendering ---------- */

function renderNav() {
  const p = SITE.profile;
  $("#brand").innerHTML = `${p.firstName}<span class="brand-dot">.</span>`;
  $("#nav-links").innerHTML = SITE.nav
    .map((n) => `<a href="#${n.id}" class="nav-link" data-nav="${n.id}">${t(n.label)}</a>`)
    .join("");
}

function renderHero() {
  const p = SITE.profile;
  const h = SITE.hero;
  const resume = state.lang === "fr" ? p.resumeFr : p.resumeEn;
  const avail = p.availability ? "available" : "unavailable";
  const availChip = p.availability ? "chip-accent" : "chip-muted";
  const availIcon = p.availability ? "sparkle" : "pause";
  $("#hero").innerHTML = `
    <div class="hero-bg" aria-hidden="true"></div>
    <div class="container hero-grid">
      <div class="hero-copy reveal">
        <span class="chip ${availChip}">${icon(availIcon)}<span>${t(p.availabilityLabels[avail])}</span></span>
        <p class="hero-greeting">${t(h.greeting)}</p>
        <h1 class="hero-title">${p.name}<span class="grad-text">${t(h.headlineSuffix)}</span></h1>
        <p class="hero-role">${t(p.role)}</p>
        <p class="hero-tagline">${t(h.tagline)}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="mailto:${p.email}">${icon("send")}${t(h.ctaPrimary)}</a>
          ${p.availability ? `<a class="btn btn-ghost" href="${resume}" target="_blank" rel="noopener">${icon("download")}${t(h.ctaSecondary)}</a>` : ""}
        </div>
      </div>
      <div class="hero-visual reveal">
        <div class="photo-ring">
          <img src="${p.photo}" alt="${t({ en: `Portrait of ${p.name}`, fr: `Portrait de ${p.name}` })}" width="320" height="320" fetchpriority="high">
        </div>
        <span class="float-chip float-chip-1">${icon("briefcase")} ${t({ en: "7+ yrs DevOps", fr: "7+ ans DevOps" })}</span>
        <span class="float-chip float-chip-2">${icon("pin")} ${t(p.location)}</span>
      </div>
    </div>
    <div class="container">
      <dl class="stats reveal">
        ${h.stats.map((s) => `
          <div class="stat">
            <dt class="stat-value">${s.value}</dt>
            <dd class="stat-label">${t(s.label)}</dd>
          </div>`).join("")}
      </dl>
    </div>`;
}

function renderAbout() {
  const a = SITE.about;
  $("#about").innerHTML = `
    <div class="container">
      <header class="section-head reveal">
        <span class="eyebrow">${t({ en: "Profile", fr: "Profil" })}</span>
        <h2 class="section-title">${t(a.heading)}</h2>
      </header>
      <div class="about-grid">
        <div class="about-text reveal">
          ${a.paragraphs.map((p) => `<p>${t(p)}</p>`).join("")}
        </div>
        <ul class="facts-card reveal">
          ${a.facts.map((f) => `
            <li>
              ${icon(f.icon)}
              <div>
                <span class="fact-label">${t(f.label)}</span>
                <span class="fact-value">${t(f.value)}</span>
              </div>
            </li>`).join("")}
        </ul>
      </div>
    </div>`;
}

function renderExperience() {
  const e = SITE.experience;
  $("#experience").innerHTML = `
    <div class="container">
      <header class="section-head reveal">
        <span class="eyebrow">${t({ en: "Career", fr: "Parcours" })}</span>
        <h2 class="section-title">${t({ en: "Where I've worked", fr: "Où j'ai travaillé" })}</h2>
      </header>
      <ol class="timeline">
        ${e.map((job) => `
          <li class="timeline-item reveal">
            <div class="timeline-marker" aria-hidden="true"></div>
            <article class="card job-card">
              <div class="job-head">
                <span class="company-logo" aria-hidden="true">${job.logoText}</span>
                <div>
                  <h3 class="job-role">${t(job.role)}</h3>
                  <p class="job-company">${job.company} · ${t(job.location)}</p>
                  ${job.sector ? `<span class="job-sector">${icon(job.sectorIcon || "briefcase")}${t(job.sector)}</span>` : ""}
                </div>
                <span class="job-period">${t(job.period)}</span>
              </div>
              <p class="job-summary">${t(job.summary)}</p>
              <ul class="job-bullets">
                ${job.bullets.map((b) => `<li>${t(b)}</li>`).join("")}
              </ul>
              <ul class="tag-row" aria-label="Technologies">
                ${job.tags.map((tag) => `<li class="tag">${tag}</li>`).join("")}
              </ul>
            </article>
          </li>`).join("")}
      </ol>
    </div>`;
}

function renderSkills() {
  const s = SITE.skills;
  $("#skills").innerHTML = `
    <div class="container">
      <header class="section-head reveal">
        <span class="eyebrow">${t({ en: "Toolbox", fr: "Boîte à outils" })}</span>
        <h2 class="section-title">${t({ en: "Skills & technologies", fr: "Compétences & technologies" })}</h2>
      </header>
      <div class="skills-grid">
        ${s.map((group) => `
          <article class="card skill-card reveal">
            <div class="skill-icon">${icon(group.icon)}</div>
            <h3 class="skill-cat">${t(group.category)}</h3>
            <ul class="tag-row">
              ${group.items.map((item) => `<li class="tag">${item}</li>`).join("")}
            </ul>
          </article>`).join("")}
      </div>
    </div>`;
}

function renderProjects() {
  const pr = SITE.projects;
  const labels = { en: "Selected work", fr: "Travaux sélectionnés" };
  const heading = { en: "Things I've built", fr: "Ce que j'ai construit" };
  $("#projects").innerHTML = `
    <div class="container">
      <header class="section-head reveal">
        <span class="eyebrow">${t(labels)}</span>
        <h2 class="section-title">${t(heading)}</h2>
      </header>
      <div class="projects-grid">
        ${pr.map((project) => `
          <article class="card project-card reveal">
            <div class="project-top">
              <h3 class="project-title">${t(project.title)}</h3>
              ${project.link ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener" aria-label="${t(project.title)}">${icon("arrow")}</a>` : ""}
            </div>
            <p class="project-desc">${t(project.description)}</p>
            <ul class="tag-row">
              ${project.tags.map((tag) => `<li class="tag">${tag}</li>`).join("")}
            </ul>
          </article>`).join("")}
      </div>
    </div>`;
}

function renderEducation() {
  const ed = SITE.education;
  const cert = SITE.certifications;
  const heading = { en: "Education & certifications", fr: "Formation & certifications" };
  const eduLabel = { en: "Education", fr: "Formation" };
  const certLabel = { en: "Certifications", fr: "Certifications" };
  $("#education").innerHTML = `
    <div class="container">
      <header class="section-head reveal">
        <span class="eyebrow">${t({ en: "Background", fr: "Parcours académique" })}</span>
        <h2 class="section-title">${t(heading)}</h2>
      </header>
      <div class="edu-grid">
        <ul class="edu-list reveal">
          <li class="edu-heading">${icon("gradcap")}${t(eduLabel)}</li>
          ${ed.map((item) => `
            <li class="edu-item">
              <span class="edu-year">${item.year}</span>
              <div>
                <p class="edu-degree">${t(item.degree)}</p>
                <p class="edu-school">${t(item.school)}</p>
              </div>
            </li>`).join("")}
        </ul>
        <ul class="edu-list reveal">
          <li class="edu-heading">${icon("award")}${t(certLabel)}</li>
          ${cert.map((c) => `
            <li class="edu-item">
              <span class="edu-year" aria-hidden="true">${icon("award", "icon-sm")}</span>
              <div>
                <p class="edu-degree">${c.name}</p>
                <p class="edu-school">${c.issuer}</p>
              </div>
            </li>`).join("")}
        </ul>
      </div>
    </div>`;
}

function renderContact() {
  const p = SITE.profile;
  const c = SITE.contact;
  $("#contact").innerHTML = `
    <div class="container">
      <div class="contact-panel reveal">
        <h2 class="contact-title">${t(c.heading)}</h2>
        <p class="contact-sub">${t(c.sub)}</p>
        <a class="btn btn-primary btn-lg" href="mailto:${p.email}">${icon("mail")}${p.email}</a>
        <ul class="contact-channels">
          <li><a href="mailto:${p.email}">${icon("mail")}<span>${t(c.labels.email)}</span></a></li>
          <li><a href="${p.linkedin}" target="_blank" rel="noopener">${icon("linkedin")}<span>LinkedIn</span></a></li>
        </ul>
      </div>
    </div>`;
}

function renderFooter() {
  const p = SITE.profile;
  $("#footer-inner").innerHTML = `
    <div class="footer-brand">${p.name}</div>
    <p class="footer-made">${t(SITE.footer.made)}</p>
    <p class="footer-copy">© <span id="year"></span> ${p.name}</p>`;
  $("#year").textContent = new Date().getFullYear();
}

function renderAll() {
  renderNav();
  renderHero();
  renderAbout();
  renderExperience();
  renderSkills();
  renderProjects();
  renderEducation();
  renderContact();
  renderFooter();
  setupReveal();
  setupActiveNav();
}

/* ---------- interactions ---------- */

let revealObserver;
function setupReveal() {
  if (revealObserver) revealObserver.disconnect();
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const els = $$(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => revealObserver.observe(el));
}

let activeObserver;
function setupActiveNav() {
  if (activeObserver) activeObserver.disconnect();
  const links = $$(".nav-link");
  if (!("IntersectionObserver" in window)) return;
  activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.toggle("active", l.dataset.nav === entry.target.id));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  SITE.nav.forEach((n) => {
    const section = document.getElementById(n.id);
    if (section) activeObserver.observe(section);
  });
}

/* ---------- language & theme ---------- */

function setLang(lang) {
  if (!SITE) return;
  state.lang = lang;
  document.documentElement.lang = lang;
  document.title = lang === "fr"
    ? `${SITE.profile.name} — Ingénieur DevOps`
    : `${SITE.profile.name} — DevOps Engineer`;
  $$(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  renderAll();
  localStorage.setItem("lang", lang);
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme;
  $("#theme-toggle").innerHTML = icon(theme === "dark" ? "sun" : "moon");
  localStorage.setItem("theme", theme);
}

/* ---------- boot ---------- */

function init() {
  let lang = localStorage.getItem("lang");
  if (!lang || !["fr", "en"].includes(lang)) {
    lang = (navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
  }
  state.lang = lang;

  const theme = localStorage.getItem("theme")
    || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  state.theme = theme;
  document.documentElement.dataset.theme = theme;

  $$(".lang-btn").forEach((btn) =>
    btn.addEventListener("click", () => setLang(btn.dataset.lang))
  );
  $("#theme-toggle").addEventListener("click", () =>
    setTheme(state.theme === "dark" ? "light" : "dark")
  );

  const burger = $("#nav-toggle");
  const nav = $("#nav-links");
  burger.innerHTML = icon("menu");
  burger.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    burger.setAttribute("aria-expanded", String(open));
    burger.innerHTML = icon(open ? "x" : "menu");
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      document.body.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");
      burger.innerHTML = icon("menu");
    }
  });

  setTheme(state.theme);
  setLang(lang);
}

init();
