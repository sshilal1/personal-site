import { siteData } from "./site-data.js";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const icon = (name) => {
  const paths = {
    arrow: '<path d="M5 12h13m-5-5 5 5-5 5"/>',
    external:
      '<path d="M14 4h6v6m0-6-9 9"/><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/>',
    spark: '<path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6Z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    code: '<path d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-9-4 12"/>',
  };
  return `<svg aria-hidden="true" class="icon icon-${name}" viewBox="0 0 24 24">${paths[name]}</svg>`;
};

const linkAttrs = (href) =>
  href ? ` href="${escapeHtml(href)}" target="_blank" rel="noreferrer"` : ' href="#contact"';

const techList = (items) => items.map((item) => `<span>${escapeHtml(item)}</span>`).join("");

const statusClass = (status) => {
  const normalized = status.toLowerCase();
  if (normalized.includes("beta") || normalized.includes("testflight")) return "beta";
  if (normalized.includes("progress") || normalized.includes("soon")) return "progress";
  if (normalized.includes("evolving") || normalized.includes("ongoing")) return "system";
  if (normalized.includes("live")) return "live";
  return "default";
};

const navLinks = (prefix = "") => `
  <a href="#${prefix}work">Work</a>
  <a href="#${prefix}about">About</a>
  <a href="#contact">Contact</a>
`;

const socialLinks = () =>
  siteData.person.links
    .map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)} ${icon("external")}</a>`)
    .join("");

const featuredProjects = () => siteData.projects.filter((project) => project.featured);
const projectCount = String(siteData.projects.length).padStart(2, "0");

const sharedFooter = (variant = "dark") => `
  <section class="site-contact site-contact-${variant}" id="contact">
    <p class="section-kicker">Contact</p>
    <h2>Want to talk engineering, games, or useful side projects?</h2>
    <p>${escapeHtml(siteData.person.availability)}</p>
    <div class="contact-links">${socialLinks()}</div>
  </section>
`;

const afterProjects = () => `
  <section class="after-projects" id="work">
    <div class="section-heading">
      <p class="section-kicker">Selected work</p>
      <h2>Games, apps, bots, and systems with a real pulse.</h2>
    </div>
    <div class="after-project-grid">
      ${siteData.projects
        .map(
          (project, index) => `
        <article class="after-project-card ${project.featured ? "is-featured" : ""}">
          <a${linkAttrs(project.href)} aria-label="${escapeHtml(project.name)}">
            <div class="project-card-top">
              <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
              <span class="project-status status-${statusClass(project.status)}">${escapeHtml(project.status)}</span>
            </div>
            <h3>${escapeHtml(project.name)}</h3>
            <p>${escapeHtml(project.summary)}</p>
            <small>${escapeHtml(project.impact)}</small>
            <div class="project-tech">${techList(project.tech)}</div>
          </a>
        </article>`,
        )
        .join("")}
    </div>
  </section>
`;

const afterAbout = () => `
  <section class="after-about" id="about">
    <div>
      <p class="section-kicker">Profile</p>
      <h2>${escapeHtml(siteData.person.role)} at <a class="company-link" href="${escapeHtml(siteData.person.companyUrl)}" target="_blank" rel="noreferrer">${escapeHtml(siteData.person.company)}</a>. Indie developer after hours.</h2>
      <p>${escapeHtml(siteData.person.intro)}</p>
    </div>
    <div class="after-stats">
      ${siteData.stats.map((stat) => `<article><strong>${escapeHtml(stat.value)}</strong><span>${escapeHtml(stat.label)}</span></article>`).join("")}
    </div>
  </section>
`;

const afterTimeline = () => `
  <section class="after-timeline">
    ${siteData.timeline.map((item) => `<article><span>${escapeHtml(item.label)}</span><h3>${item.url ? `<a class="timeline-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.title)} ${icon("external")}</a>` : escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></article>`).join("")}
  </section>
`;

const notesProjectRows = () =>
  siteData.projects
    .map(
      (project, index) => `
        <article>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <div><small>${escapeHtml(project.type)} / ${escapeHtml(project.status)}</small><h2>${escapeHtml(project.name)}</h2></div>
          <p>${escapeHtml(project.summary)}</p>
          <b>${icon(project.href ? "external" : "arrow")}</b>
        </article>`,
    )
    .join("");

const terminalRows = () =>
  siteData.projects
    .map(
      (project, index) => `
        <a${linkAttrs(project.href)}>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <b>${escapeHtml(project.name.toUpperCase().replaceAll(" ", "_"))}</b>
          <small>${escapeHtml(project.status.toUpperCase())}</small>
          <i>OPEN ${icon("arrow")}</i>
        </a>`,
    )
    .join("");

const studioWork = () =>
  featuredProjects()
    .map(
      (project, index) => `
        <a${linkAttrs(project.href)}>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${escapeHtml(project.name).replaceAll(" ", "<br />")}</strong>
          <em>${escapeHtml(project.type)}</em>
        </a>`,
    )
    .join("");

const compactProjectIndex = (variant = "dark") => `
  <section class="compact-index compact-index-${variant}">
    <p class="section-kicker">Project index</p>
    <div>
      ${siteData.projects
        .map(
          (project, index) => `
        <a${linkAttrs(project.href)}>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${escapeHtml(project.name)}</strong>
          <small>${escapeHtml(project.status)} / ${escapeHtml(project.type)}</small>
        </a>`,
        )
        .join("")}
    </div>
  </section>
`;

export const themes = [
  {
    id: "after-hours",
    number: "01",
    name: "After Hours",
    mood: "Cinematic / technical",
    detail: "Dark, focused, game-adjacent",
    className: "theme-after",
    render: () => `
      <main class="concept after">
        <nav class="after-nav"><a class="after-logo" href="#">${escapeHtml(siteData.person.name)}</a><div>${navLinks()}</div></nav>
        <section class="after-hero">
          <img class="after-art" src="./public/assets/after-hours-workstation.png" alt="Stylized workstation showing code, an app, and a game" />
          <div class="after-grid"></div>
          <div class="after-copy">
            <p class="eyebrow"><span></span> ${escapeHtml(siteData.person.role)} + indie developer</p>
            <h1>I lead teams by day.<br /><em>Build worlds</em> by night.</h1>
            <p class="after-intro">${escapeHtml(siteData.person.tagline)}</p>
            <a class="after-cta" href="#work">Explore the work ${icon("arrow")}</a>
          </div>
          <div class="after-side"><span>SELECTED WORK / 2026</span><strong>${projectCount}</strong><span>PROJECTS & SYSTEMS</span></div>
        </section>
        <section class="after-strip">
          <span>Currently building</span>${siteData.focusAreas.slice(1, 5).map((item) => `<strong>${escapeHtml(item)}</strong>`).join("")}
        </section>
        ${afterProjects()}
        ${afterAbout()}
        ${afterTimeline()}
        ${sharedFooter("dark")}
      </main>`,
  },
  {
    id: "field-notes",
    number: "02",
    name: "Field Notes",
    mood: "Warm / editorial",
    detail: "Personal, thoughtful, story-led",
    className: "theme-notes",
    render: () => `
      <main class="concept notes">
        <nav class="notes-nav"><a class="notes-logo" href="#">${escapeHtml(siteData.person.name)}</a><div>${navLinks("notes-")}</div></nav>
        <section class="notes-hero" id="notes-about">
          <p class="notes-kicker">Field notes / 001</p>
          <h1>Engineering teams.<br /><i>Making things.</i></h1>
          <div class="notes-row"><p>${escapeHtml(siteData.person.intro)}</p><a href="#notes-work">Browse the project index ${icon("arrow")}</a></div>
          <div class="notes-stamp">${projectCount}<br /><small>PROJECTS</small></div>
        </section>
        <section class="notes-list" id="notes-work">${notesProjectRows()}</section>
        ${sharedFooter("light")}
      </main>`,
  },
  {
    id: "control-room",
    number: "03",
    name: "Control Room",
    mood: "Terminal / systems",
    detail: "Sharp, distinctive, developer-first",
    className: "theme-control",
    render: () => `
      <main class="concept control">
        <nav class="control-nav"><a href="#">SS://PORTFOLIO</a><div><span class="control-status">ONLINE</span><a href="#ctrl-work">[WORK]</a><a href="#ctrl-about">[INFO]</a></div></nav>
        <section class="control-shell">
          <div class="control-heading"><span>~/profile</span><span>${escapeHtml(siteData.person.company)} + INDIE BUILDS</span></div>
          <section class="control-hero" id="ctrl-about">
            <div><p>&gt; HELLO_WORLD</p><h1>STEPHEN<br />SHILALE<span>_</span></h1><h2>${escapeHtml(siteData.person.role.toUpperCase())}<br /><em>+ INDEPENDENT DEVELOPER</em></h2></div>
            <div class="control-ascii" aria-hidden="true"><pre>     ┌───────────┐
 ┌───┤ BUILD.LOG ├───┐
 │   └───────────┘   │
 │  PROJECTS: ${projectCount}      │
 │  SYSTEMS: ONLINE  │
 └───────────────────┘</pre></div>
          </section>
          <section class="control-table" id="ctrl-work"><p>&gt; ls ./selected_work</p>${terminalRows()}</section>
        </section>
        ${sharedFooter("dark")}
      </main>`,
  },
  {
    id: "blueprint",
    number: "04",
    name: "Blueprint",
    mood: "Structured / architectural",
    detail: "Precise, confident, leadership-forward",
    className: "theme-blueprint",
    render: () => `
      <main class="concept blueprint">
        <nav class="blue-nav"><a class="blue-logo" href="#">S<span>/</span>S</a><div>${navLinks("blue-")}<button aria-label="Open navigation">${icon("menu")}</button></div></nav>
        <section class="blue-hero" id="blue-about">
          <div class="blue-copy"><p class="blue-label">PORTFOLIO / V.01</p><h1>Designing<br /><em>systems</em> that<br />hold up.</h1><p>${escapeHtml(siteData.person.tagline)}</p></div>
          <div class="blue-drawing" aria-hidden="true"><div class="blue-orbit orbit-one"></div><div class="blue-orbit orbit-two"></div><div class="blue-core">${icon("code")}</div><span class="blue-axis axis-x"></span><span class="blue-axis axis-y"></span><small class="label-a">LEADERSHIP</small><small class="label-b">CRAFT</small><small class="label-c">SYSTEMS THINKING</small></div>
        </section>
        <section class="blue-bottom" id="blue-work"><span>FEATURED BUILDS</span>${featuredProjects().map((project, index) => `<div><b>${String(index + 1).padStart(2, "0")}</b>${escapeHtml(project.name)}</div>`).join("")}</section>
        ${compactProjectIndex("blue")}
        ${sharedFooter("dark")}
      </main>`,
  },
  {
    id: "studio-index",
    number: "05",
    name: "Studio Index",
    mood: "Minimal / high contrast",
    detail: "Design-conscious and direct",
    className: "theme-studio",
    render: () => `
      <main class="concept studio">
        <nav class="studio-nav"><a href="#">STEPHEN / SHILALE</a><span>SOFTWARE / GAMES / APPS</span><a href="#contact">CONTACT ${icon("external")}</a></nav>
        <section class="studio-hero">
          <p>${escapeHtml(siteData.person.role)}<br />&amp; independent developer</p>
          <h1>GOOD<br /><em>WORK</em><br />TAKES<br />CARE.</h1>
          <div class="studio-note"><span>${escapeHtml(siteData.person.company)}</span><span>${projectCount} PROJECTS</span></div>
        </section>
        <section class="studio-work" id="studio-work">${studioWork()}</section>
        ${compactProjectIndex("light")}
        ${sharedFooter("light")}
      </main>`,
  },
  {
    id: "bento",
    number: "06",
    name: "Bento Lab",
    mood: "Playful / contemporary",
    detail: "Friendly, versatile, approachable",
    className: "theme-bento",
    render: () => {
      const [first, second, third] = featuredProjects();
      return `
      <main class="concept bento">
        <nav class="bento-nav"><a class="bento-logo" href="#"><span>${siteData.person.initials}</span> ${escapeHtml(siteData.person.name)}</a><div><a href="#bento-work">Work</a><a href="#bento-about">About</a><a class="bento-talk" href="#contact">Say hello ${icon("arrow")}</a></div></nav>
        <section class="bento-grid" id="bento-work">
          <article class="bento-main" id="bento-about"><span class="bento-chip">HELLO THERE</span><h1>I build teams,<br />games <i>&amp;</i> apps.</h1><p>${escapeHtml(siteData.person.tagline)}</p></article>
          <article class="bento-green"><span>${icon("spark")}</span><h2>${escapeHtml(siteData.timeline[2].body)}</h2></article>
          <article class="bento-game"><small>${escapeHtml(first.status)}</small><div class="pixel-window"><i></i><i></i><i></i><b></b></div><h2>${escapeHtml(first.name)}</h2><a${linkAttrs(first.href)}>View build ${icon("arrow")}</a></article>
          <article class="bento-app"><small>${escapeHtml(second.status)}</small><div class="bento-bars"><i></i><i></i><i></i></div><h2>${escapeHtml(second.name)}</h2></article>
          <article class="bento-about"><small>${escapeHtml(third.status)}</small><p>${escapeHtml(third.name)}: ${escapeHtml(third.type)}</p></article>
        </section>
        ${compactProjectIndex("light")}
        ${sharedFooter("light")}
      </main>`;
    },
  },
];
