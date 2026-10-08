const projectData = {
  "century-expeditions": {
    title: "Century Expeditions",
    category: "Travel website",
    intro: "A considered travel experience for discovering Tanzania’s wild places, choosing a direction, and taking the next step with confidence.",
    purpose: "Century Expeditions is shaped around a simple idea: travel planning should feel inspiring without becoming overwhelming. The interface gives destinations, experiences, and the safari path room to breathe.",
    contribution: "Kai10-led interface direction, responsive page structure, and front-end experience design.",
    status: "Live project",
    type: "travel",
    aim: "Help travelers move from inspiration to a clear safari enquiry without losing the feeling of discovery.",
    liveUrl: "https://century-expeditions.vercel.app/",
    features: ["Editorial destination storytelling", "Experience-led discovery flow", "Responsive layouts for planning on the go", "Clear inquiry and booking next steps"],
    stack: "Responsive web interface · Content structure · Interaction design"
  },
  "tanzania-soccer-hub": {
    title: "Tanzania Soccer Hub",
    category: "Football platform",
    intro: "A focused home for live scores, league context, teams, and football stories from Tanzania.",
    purpose: "Tanzania Soccer Hub brings match-day energy and useful context into one place. The direction prioritizes quick scanning for fixtures while keeping teams and stories easy to explore.",
    contribution: "Kai10-led product direction, information architecture, and responsive interface design.",
    status: "Live project",
    type: "soccer",
    aim: "Make Tanzanian football easier to follow by bringing match-day information, league context, and club stories into one focused experience.",
    liveUrl: "https://tanzania-football-hub.vercel.app/",
    features: ["Live-score-first match view", "Teams and leagues navigation", "News and match context", "Mobile-friendly match-day experience"],
    stack: "Responsive web interface · Information architecture · Interaction design"
  },
  "ubannest": {
    title: "Ubannest",
    category: "Property marketplace",
    intro: "A simple, useful property journey for finding a next home with more clarity and less friction.",
    purpose: "Ubannest is designed to make property discovery feel approachable. Search, filters, property context, and the next conversation are treated as one connected journey.",
    contribution: "Kai10-led experience direction, search journey, and front-end interface design.",
    status: "Live project",
    type: "property",
    aim: "Give people a calmer way to search, compare, and take the next step toward a property that fits their needs.",
    liveUrl: "https://urban-nest-topaz.vercel.app/",
    features: ["Buy, rent, and off-plan pathways", "Property-focused search entry point", "Clear listing context and next steps", "Responsive browsing for every screen"],
    stack: "Responsive web interface · Search journey · Interface design"
  },
  slcms: {
    title: "SLCMS",
    category: "Legal management system",
    intro: "A structured workspace for legal teams to keep matters, clients, documents, and deadlines moving.",
    purpose: "SLCMS is organized around the everyday rhythm of legal work. It makes important information visible without making a complex workflow feel heavy.",
    contribution: "Kai10-led workflow mapping, dashboard direction, and system interface design.",
    status: "Live project",
    type: "system",
    aim: "Help legal teams see what needs attention next while keeping matters, clients, documents, and deadlines connected.",
    liveUrl: "https://smart-legal-case-management-system-gules.vercel.app/",
    features: ["Matter and client overview", "Deadline and document visibility", "Calm dashboard hierarchy", "System patterns designed for repeat use"],
    stack: "System interface · Workflow mapping · Responsive dashboard patterns"
  },
  "sacred-heart-secondary-school": {
    title: "Sacred Heart Secondary School",
    category: "School website",
    intro: "A welcoming school website that brings academics, admissions, student life, and community into one clear experience.",
    purpose: "The school experience is designed to make important information easy to find while giving the institution a warm, credible digital presence.",
    contribution: "Kai10-led content structure, responsive page direction, and front-end experience design.",
    status: "Live project",
    type: "school",
    aim: "Help families quickly understand the school, discover its values, and take confident next steps toward learning and admission.",
    liveUrl: "https://school-website-tau-umber.vercel.app/",
    features: ["Clear academic and admissions pathways", "School values and community storytelling", "Student-life information", "Responsive experience for families on every screen"],
    stack: "Responsive web interface - Content structure - School communications"
  }
};

const caseStudyOrder = ["century-expeditions", "ubannest", "tanzania-soccer-hub", "slcms"];

const caseStudyData = {
  "century-expeditions": {
    title: "Century Expeditions",
    category: "Travel website",
    intro: "A destination-led travel experience for discovering Tanzania, choosing a direction, and taking the next step with confidence.",
    overview: "Century Expeditions gives Tanzania's destinations, safari ideas, and planning path one calm, visual home. The experience is designed to inspire first, then make an enquiry feel simple.",
    aim: "Turn travel inspiration into a clear safari-planning enquiry.",
    targetUsers: "Travelers, couples, families, and safari planners",
    problem: "Trip planning can feel scattered across destinations, safari ideas, and enquiry steps. Visitors need an inviting place to start without being overwhelmed by options.",
    contribution: "I shaped the visual direction, responsive page structure, content hierarchy, and front-end experience for browsing destinations and moving toward an enquiry.",
    status: "Live project",
    type: "travel",
    liveUrl: "https://century-expeditions.vercel.app/",
    image: "../assets/project-century.png",
    imageAlt: "Century Expeditions website showing a Tanzania travel landing page",
    screenshotCaption: "A visual entry point for discovering Tanzania and planning a journey.",
    features: [
      ["Destination storytelling", "A spacious, editorial layout gives each place room to create interest."],
      ["Experience-led discovery", "Safari, culture, beaches, and journeys are organised around how people choose to travel."],
      ["Planning next steps", "Clear calls to action help visitors move from inspiration to an enquiry."],
      ["Responsive travel browsing", "The experience stays useful when plans are being made from a phone."]
    ],
    stack: "HTML, CSS, JavaScript, responsive web UI, content-led layout",
    lessons: "Strong visual hierarchy can make a rich destination catalogue feel easy to explore. The key was keeping the first action obvious while letting the imagery carry the emotion.",
    walkthrough: "Static preview of the shipped landing experience. A recorded demo can be added when one is available.",
    demoUrl: "",
    sourceUrl: ""
  },
  "tanzania-soccer-hub": {
    title: "Tanzania Soccer Hub",
    category: "Football platform",
    intro: "A focused home for match-day information, league context, club stories, and the wider rhythm of Tanzanian football.",
    overview: "Tanzania Soccer Hub brings football information into one place so fans can scan what is happening now and then explore the teams, competitions, and stories behind it.",
    aim: "Make Tanzanian football easier to follow in one focused experience.",
    targetUsers: "Fans, clubs, journalists, and match-day readers",
    problem: "Fixtures, results, club context, and football stories are often spread across separate places. Readers need a fast way to orient themselves before choosing what to read next.",
    contribution: "I shaped the product direction, information architecture, responsive layouts, and match-day interface patterns for quick scanning and deeper browsing.",
    status: "Live project",
    type: "soccer",
    liveUrl: "https://tanzania-football-hub.vercel.app/",
    image: "../assets/project-tanzania.png",
    imageAlt: "Tanzania Soccer Hub website showing a football news hero section",
    screenshotCaption: "A bold football home page built around match-day energy and editorial context.",
    features: [
      ["Match-first scanning", "The landing experience makes current football stories and match context easy to spot."],
      ["Teams and leagues", "Navigation gives clubs and competitions a clear place in the broader football story."],
      ["News with context", "Editorial moments are presented as part of a connected football experience."],
      ["Mobile match-day use", "The layout keeps essential information close at hand when readers are on the move."]
    ],
    stack: "HTML, CSS, JavaScript, responsive web UI, information architecture",
    lessons: "A sports interface needs energy, but it also needs restraint. Prioritising the first scan helped the page feel lively without making the information hard to find.",
    walkthrough: "Static preview of the football hub home page. A recorded demo can be added when one is available.",
    demoUrl: "",
    sourceUrl: ""
  },
  "ubannest": {
    title: "UrbanNest",
    category: "Property marketplace",
    intro: "A clearer property journey for people searching for a home and owners managing the next step in the relationship.",
    overview: "UrbanNest is designed to make property discovery feel more approachable. Search, property context, and the next conversation are treated as one connected journey for seekers and owners.",
    aim: "Make property discovery easier for seekers and listing management simpler for owners.",
    targetUsers: "Home seekers, landlords, agents, and property owners",
    problem: "Property discovery can be noisy and uncertain. People need a trusted way to narrow options, understand a listing, and know what to do next; owners need a simple place to manage enquiries.",
    contribution: "I shaped the experience direction, search journey, listing hierarchy, owner workspace concept, and responsive front-end interface.",
    status: "Live project",
    type: "property",
    liveUrl: "https://urban-nest-topaz.vercel.app/",
    image: "../assets/project-ubannest.png",
    imageAlt: "UrbanNest property platform showing the home search interface",
    screenshotCaption: "The search entry point for finding homes and property opportunities across Tanzania.",
    features: [
      ["Location search", "People can begin with the place and property context that matters to them."],
      ["Organised listings", "Property information is structured to make comparison and decision-making easier."],
      ["Saved properties", "Visitors can keep track of options they want to revisit while searching."],
      ["Owner workspace", "A focused dashboard direction helps owners manage listings and enquiries."]
    ],
    stack: "HTML, CSS, JavaScript, responsive web UI, search and listing patterns",
    lessons: "Property products need to build confidence one decision at a time. Clear filters, consistent listing details, and a visible next action made the experience feel more trustworthy.",
    walkthrough: "Static preview of the UrbanNest search experience. A recorded demo can be added when one is available.",
    demoUrl: "",
    sourceUrl: ""
  },
  slcms: {
    title: "SLCMS",
    category: "Legal management system",
    intro: "A structured workspace for legal teams to keep matters, clients, documents, and deadlines moving.",
    overview: "SLCMS is organised around the everyday rhythm of legal work. It makes important information visible without making a complex workflow feel heavy.",
    aim: "Help legal teams see what needs attention next while keeping matters, clients, documents, and deadlines connected.",
    targetUsers: "Law-firm partners, advocates, operations staff, and clients",
    problem: "Legal teams lose time when matter details, deadlines, documents, and client information live in disconnected places. The workspace needs to make the next action visible without compromising clarity.",
    contribution: "I mapped the workflow, shaped the dashboard direction, organised the information hierarchy, and designed the responsive system interface patterns.",
    status: "Live project",
    type: "system",
    liveUrl: "https://smart-legal-case-management-system-gules.vercel.app/",
    image: "../assets/project-slcms.png",
    imageAlt: "SLCMS legal management system showing its secure portal interface",
    screenshotCaption: "A secure-looking entry point for legal teams and clients to access the right workspace.",
    features: [
      ["Matter overview", "The workspace gives teams a clearer view of active legal work and its current state."],
      ["Deadline visibility", "Important dates and follow-up work have a visible place in the experience."],
      ["Client and document context", "Connected information helps teams move between people, matters, and files."],
      ["Repeatable system patterns", "A consistent interface foundation is designed for frequent, focused use."]
    ],
    stack: "HTML, CSS, JavaScript, responsive dashboard UI, workflow mapping",
    lessons: "Complex systems become easier to use when the interface respects the team's mental model. The most useful dashboard content is the work that needs attention next.",
    walkthrough: "Static preview of the SLCMS entry experience. A recorded demo can be added when one is available.",
    demoUrl: "",
    sourceUrl: ""
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function applyTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  try { localStorage.setItem("kai10-theme", nextTheme); } catch (_) {}
  $$('[data-theme-toggle]').forEach((button) => {
    const isDark = nextTheme === "dark";
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  });
}

function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem("kai10-theme"); } catch (_) {}
  applyTheme(saved || "light");
  $$('[data-theme-toggle]').forEach((button) => button.addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  }));
}

function initMenu() {
  const toggle = $('[data-menu-toggle]');
  const menu = $('#mobile-menu');
  if (!toggle || !menu) return;
  const close = () => { toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open menu"); menu.hidden = true; };
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
    menu.hidden = open;
  });
  $$('a, button', menu).forEach((item) => item.addEventListener("click", close));
}

function initScrollLinks() {
  $$('[data-scroll-target]').forEach((button) => button.addEventListener("click", () => {
    const target = $(button.dataset.scrollTarget);
    if (target) target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }));
}

function initReveal() {
  const items = $$('.reveal');
  if (!items.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, observerRef) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observerRef.unobserve(entry.target); } });
  }, { threshold: .12 });
  items.forEach((item) => observer.observe(item));
}

function artMarkup(type) {
  if (type === "school") return '<div class="art-browser school-browser"><div class="art-top school-top"><span class="art-logo"><span class="school-cross">School</span><b>Sacred Heart</b><small>Secondary School</small></span><span>Home &nbsp; Academics &nbsp; Admissions</span><b class="school-switch">SW</b></div><div class="school-preview"><div class="school-badge">SH<span>SS</span></div><span class="school-kicker">SACRED HEART SECONDARY SCHOOL</span><strong>Excellence.</strong><b>Defined by Tradition.</b><span class="school-cta">Explore the school</span></div></div>';
  if (type === "soccer") return '<div class="art-browser"><div class="art-top dark-top"><span class="art-logo"><span class="aqua-dot"></span><b>TANZANIA</b><small>SOCCER HUB</small></span><span>Matches &nbsp; Teams &nbsp; Leagues</span><b class="search-dot">⌕</b></div><div class="art-photo art-football"><span class="football-glow"></span><span class="art-photo-copy">Tanzanian Football<br />All in One Place.</span><span class="ball">◉</span></div></div>';
  if (type === "property") return '<div class="art-browser"><div class="art-top property-top"><span class="art-logo"><span class="aqua-dot"></span><b>Ubannest</b></span><span>Buy &nbsp; Rent &nbsp; New Developments</span><b class="sign-in">Sign in</b></div><div class="art-photo art-home"><span class="art-photo-copy">Find Your<br />Next Home<br />in Tanzania.</span><div class="search-bar">Search by location, property type or keywords… <b>⌕</b></div></div></div>';
  if (type === "system") return '<div class="art-browser system-browser"><div class="art-top system-top"><span class="art-logo"><span class="mini-mark">◒</span><b>SLCMS</b></span><span class="system-search">Search matters, clients… &nbsp; ◌</span></div><div class="system-preview"><div class="preview-nav"><b>▦ &nbsp; Dashboard</b><span>▤ &nbsp; Matters</span><span>♙ &nbsp; Clients</span><span>□ &nbsp; Documents</span><span>◫ &nbsp; Calendar</span></div><div class="preview-content"><small>Welcome back</small><strong>Manage your legal matters efficiently.</strong><div class="metric-row"><span><b>24</b><small>Active matters</small></span><span><b>12</b><small>Upcoming deadlines</small></span><span><b>8</b><small>Clients</small></span></div><div class="table-preview"><i></i><i></i><i></i><i></i></div></div></div></div>';
  return '<div class="art-browser"><div class="art-top"><span class="art-logo">◒ <b>CENTURY</b><small>EXPEDITIONS</small></span><span>Home &nbsp; Destinations &nbsp; Experiences</span><b class="art-cta">Plan Your Safari</b></div><div class="art-photo art-safari"><span class="art-photo-copy">Discover<br />Tanzania’s<br />Wild Beauty</span><span class="art-elephant">◒</span></div></div>';
}

function populateProjectPage() {
  const root = $('[data-project-root]');
  if (!root) return;
  const project = projectData[root.dataset.project];
  if (!project) return;
  document.title = `${project.title} — Kai10`;
  const setText = (selector, value) => $$(selector).forEach((el) => { el.textContent = value; });
  setText('[data-project-category]', project.category);
  setText('[data-project-title]', project.title);
  setText('[data-project-intro]', project.intro);
  setText('[data-project-overview]', project.purpose);
  setText('[data-project-aim]', project.aim);
  setText('[data-project-purpose]', project.purpose);
  setText('[data-project-contribution]', project.contribution);
  setText('[data-project-status]', project.status);
  setText('[data-project-stack]', project.stack);
  const featureList = $('[data-project-features]');
  if (featureList) featureList.innerHTML = project.features.map((feature) => `<li>${feature}</li>`).join("");
  const stage = $('[data-project-art]');
  if (stage) stage.innerHTML = artMarkup(project.type);
  const gallery = $('[data-project-gallery]');
  if (gallery) gallery.innerHTML = `<div class="gallery-frame">${artMarkup(project.type)}</div><div class="gallery-frame"><div class="system-preview"><div class="preview-nav"><b>▦ &nbsp; Overview</b><span>▤ &nbsp; Activity</span><span>□ &nbsp; Details</span><span>◫ &nbsp; Notes</span></div><div class="preview-content"><small>${project.category}</small><strong>A clear view of what matters next.</strong><div class="metric-row"><span><b>01</b><small>Direction</small></span><span><b>04</b><small>Key flows</small></span><span><b>∞</b><small>Room to grow</small></span></div><div class="table-preview"><i></i><i></i><i></i><i></i></div></div></div></div>`;
  const live = $('[data-live-project]');
  if (live) {
    live.href = project.liveUrl;
    live.target = "_blank";
    live.rel = "noopener noreferrer";
  }
}

function escapeCaseStudyHTML(value) {
  const node = document.createElement("span");
  node.textContent = value == null ? "" : String(value);
  return node.innerHTML;
}

function populateCaseStudyPage() {
  const root = $('[data-project-root]');
  if (!root) return;
  const key = root.dataset.project || new URLSearchParams(window.location.search).get("project") || "century-expeditions";
  const project = caseStudyData[key];
  if (!project) return;
  document.title = `${project.title} - Kai10`;
  const metaDescription = $('meta[name="description"]');
  if (metaDescription) metaDescription.content = `${project.title} project case study from Kai10.`;
  const setText = (selector, value) => $$(selector).forEach((el) => { el.textContent = value; });

  setText('[data-project-category]', project.category);
  setText('[data-project-title]', project.title);
  setText('[data-project-intro]', project.intro);
  setText('[data-project-overview]', project.overview);
  setText('[data-project-aim]', project.aim);
  setText('[data-project-target-users]', project.targetUsers);
  setText('[data-project-problem]', project.problem);
  setText('[data-project-contribution]', project.contribution);
  setText('[data-project-status]', project.status);
  setText('[data-project-stack]', project.stack);
  setText('[data-project-lessons]', project.lessons);
  setText('[data-project-walkthrough-note]', project.walkthrough);

  const stage = $('[data-project-art]');
  if (stage) stage.innerHTML = `<div class="case-art-glow" aria-hidden="true"></div><div class="case-art-orbit orbit-one" aria-hidden="true"></div><div class="case-art-orbit orbit-two" aria-hidden="true"></div><figure class="case-art-card"><img src="${escapeCaseStudyHTML(project.image)}" alt="${escapeCaseStudyHTML(project.imageAlt)}" /><figcaption>${escapeCaseStudyHTML(project.title)} interface preview</figcaption></figure>`;
  const walkthroughImage = $('[data-project-walkthrough-image]');
  if (walkthroughImage) { walkthroughImage.src = project.image; walkthroughImage.alt = project.imageAlt; }

  const featureList = $('[data-project-features]');
  if (featureList) {
    featureList.innerHTML = project.features.map((feature, index) => `<article class="case-feature"><span class="feature-number">${String(index + 1).padStart(2, "0")}</span><div><h3>${escapeCaseStudyHTML(feature[0])}</h3><p>${escapeCaseStudyHTML(feature[1])}</p></div></article>`).join("");
  }

  const gallery = $('[data-project-gallery]');
  if (gallery) {
    gallery.innerHTML = `<figure class="screenshot-card screenshot-primary"><button class="screenshot-button" type="button" data-screenshot-open aria-label="Open ${escapeCaseStudyHTML(project.title)} screenshot"><img src="${escapeCaseStudyHTML(project.image)}" alt="${escapeCaseStudyHTML(project.imageAlt)}" /></button><figcaption><strong>Primary interface</strong><span>${escapeCaseStudyHTML(project.screenshotCaption)}</span></figcaption></figure><figure class="screenshot-card screenshot-secondary"><div class="screenshot-art">${artMarkup(project.type)}</div><figcaption><strong>Experience direction</strong><span>Key layout and interaction cues carried through the project.</span></figcaption></figure>`;
  }

  const live = $('[data-live-project]');
  if (live) { live.href = project.liveUrl; live.target = "_blank"; live.rel = "noopener noreferrer"; }
  const liveLink = $('[data-project-link-live]');
  if (liveLink) { liveLink.href = project.liveUrl; liveLink.target = "_blank"; liveLink.rel = "noopener noreferrer"; }
  const optionalLinks = [
    [ $('[data-project-demo-link]'), project.demoUrl ],
    [ $('[data-project-source-link]'), project.sourceUrl ]
  ];
  optionalLinks.forEach(([link, value]) => {
    if (!link) return;
    if (value) { link.href = value; link.hidden = false; link.target = "_blank"; link.rel = "noopener noreferrer"; }
    else link.hidden = true;
  });

  const demoNote = $('[data-project-demo-note]');
  if (demoNote) demoNote.hidden = Boolean(project.demoUrl);
  const demoSection = $('[data-project-demo-section]');
  if (demoSection) demoSection.hidden = !project.demoUrl;

  const nextKey = caseStudyOrder[(caseStudyOrder.indexOf(key) + 1) % caseStudyOrder.length];
  const next = caseStudyData[nextKey];
  const nextLink = $('[data-project-next-link]');
  if (nextLink && next) {
    nextLink.href = `case-study.html?project=${nextKey}`;
    nextLink.setAttribute("aria-label", `Next project: ${next.title}`);
  }
  setText('[data-project-next-title]', next ? next.title : "Next project");
  setText('[data-project-next-label]', next ? `View ${next.title}` : "View next project");

  $$('[data-screenshot-open]').forEach((button) => button.addEventListener("click", () => {
    const image = $('img', button);
    if (!image) return;
    const preview = document.createElement("dialog");
    preview.className = "screenshot-dialog";
    preview.innerHTML = `<button type="button" class="dialog-close" aria-label="Close screenshot">Close</button><img src="${escapeCaseStudyHTML(image.src)}" alt="${escapeCaseStudyHTML(image.alt)}" />`;
    document.body.appendChild(preview);
    preview.showModal();
    const close = () => { preview.close(); preview.remove(); };
    $(".dialog-close", preview).addEventListener("click", close);
    preview.addEventListener("click", (event) => { if (event.target === preview) close(); });
  }));
  normalizeProjectLinksAndLabels();
}

function initContactForm() {
  const form = $('[data-contact-form]');
  if (!form) return;
  const status = $('[data-form-status]', form);
  const submit = $('button[type="submit"]', form);
  const fields = { name: $('[name="name"]', form), email: $('[name="email"]', form), type: $('[name="projectType"]', form), message: $('[name="message"]', form), company: $('[name="company"]', form) };
  const errors = { name: $('[data-error="name"]', form), email: $('[data-error="email"]', form), type: $('[data-error="projectType"]', form), message: $('[data-error="message"]', form) };
  const clearErrors = () => Object.values(errors).forEach((el) => { if (el) el.textContent = ""; });
  const validate = () => {
    clearErrors();
    const values = { name: fields.name.value.trim(), email: fields.email.value.trim(), type: fields.type.value, message: fields.message.value.trim() };
    let valid = true;
    if (values.name.length < 2) { errors.name.textContent = "Please enter your name."; valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) { errors.email.textContent = "Please enter a valid email."; valid = false; }
    if (!values.type) { errors.type.textContent = "Choose a project type."; valid = false; }
    if (values.message.length < 20) { errors.message.textContent = "Tell me a little more about the idea (20 characters minimum)."; valid = false; }
    return { valid, values };
  };
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const result = validate();
    if (!result.valid) { status.textContent = "Please check the highlighted fields."; status.className = "form-status error"; return; }
    if (fields.company.value.trim()) return;
    status.textContent = "Sending your message…"; status.className = "form-status"; submit.disabled = true; submit.textContent = "Sending…";
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(result.values) });
      if (!response.ok) throw new Error("contact endpoint unavailable");
      status.textContent = "Thanks — your message has been sent."; status.className = "form-status success"; form.reset();
    } catch (_) {
      status.textContent = "The form is validated, but its server-side delivery route is not connected yet. Please add the confirmed contact destination before publishing."; status.className = "form-status error";
    } finally { submit.disabled = false; submit.textContent = "Send message"; }
  });
  Object.values(fields).forEach((field) => { if (field && field !== fields.company) field.addEventListener("blur", validate); });
}

function initProjectDirectory() {
  const cards = $$('[data-project-card]');
  const filters = $$('[data-project-filter]');
  const search = $('[data-project-search]');
  const count = $('[data-project-count]');
  const empty = $('[data-project-empty]');
  if (!cards.length || !filters.length || !count) return;

  let activeFilter = "all";
  const update = () => {
    const query = search ? search.value.trim().toLowerCase() : "";
    let visible = 0;
    cards.forEach((card) => {
      const matchesFilter = activeFilter === "all" || card.dataset.category === activeFilter;
      const matchesSearch = !query || (card.dataset.search || "").includes(query);
      const shouldShow = matchesFilter && matchesSearch;
      card.hidden = !shouldShow;
      if (shouldShow) visible += 1;
    });
    count.textContent = `${visible} ${visible === 1 ? "project" : "projects"}`;
    if (empty) empty.hidden = visible !== 0;
  };

  filters.forEach((filter) => filter.addEventListener("click", () => {
    activeFilter = filter.dataset.projectFilter || "all";
    filters.forEach((item) => {
      const selected = item === filter;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    update();
  }));
  if (search) search.addEventListener("input", update);
  update();
}

function normalizeProjectLinksAndLabels() {
  const routes = {
    "century-expeditions.html": "case-study.html?project=century-expeditions",
    "tanzania-soccer-hub.html": "case-study.html?project=tanzania-soccer-hub",
    "ubannest.html": "case-study.html?project=ubannest",
    "slcms.html": "case-study.html?project=slcms"
  };
  $$('a[href]').forEach((link) => {
    const href = link.getAttribute("href") || "";
    Object.entries(routes).forEach(([oldRoute, newRoute]) => {
      if (href === `projects/${oldRoute}`) link.setAttribute("href", `projects/${newRoute}`);
    });
  });
  $$('[alt], [aria-label]').forEach((element) => ["alt", "aria-label"].forEach((attribute) => {
    const value = element.getAttribute(attribute);
    if (value && value.includes("Ubannest")) element.setAttribute(attribute, value.replaceAll("Ubannest", "UrbanNest"));
  }));
  $$('h2, h3, strong, b, small, span').forEach((element) => {
    if (element.childElementCount === 0 && element.textContent.trim() === "Ubannest") element.textContent = "UrbanNest";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMenu();
  normalizeProjectLinksAndLabels();
  initScrollLinks();
  initReveal();
  populateCaseStudyPage();
  initContactForm();
  initProjectDirectory();
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
});
