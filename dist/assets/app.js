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
    intro: "A travel website concept for Tanzania, bringing destinations, safari experiences, and planning next steps into one calm journey.",
    overview: "Century Expeditions is a travel website concept for Tanzania, designed to help visitors move from discovering a destination to choosing an experience and making an enquiry. It gives the visual story, practical direction, and next action room to work together.",
    aim: "Help travelers move from inspiration to a realistic trip enquiry without losing the feeling of discovery.",
    targetUsers: "Travelers, couples, families, and safari planners",
    problem: "Travel information is often spread across destination pages, safari ideas, and enquiry channels. Visitors need enough context to choose a direction without having to assemble the whole journey themselves.",
    contribution: "My work focused on the landing-page direction, destination storytelling, safari discovery structure, and responsive layouts that keep the first enquiry step clear.",
    status: "Implemented interface / public preview",
    statusDetail: {
      designed: "Destination hierarchy, editorial storytelling, experience discovery, and responsive planning flows.",
      implemented: "Public interface preview with a visual landing page, destination direction, and clear trip-planning calls to action.",
      planned: "Content management, enquiry handling, availability data, and booking integrations."
    },
    type: "travel",
    liveUrl: "https://century-expeditions.vercel.app/",
    image: "../assets/project-century.png",
    imageAlt: "Century Expeditions website showing a Tanzania travel landing page",
    screenshotCaption: "A visual entry point for discovering Tanzania and planning a journey.",
    features: [
      ["Destination discovery", "Help travelers browse Tanzania's regions and choose a direction for the journey."],
      ["Safari experiences", "Present safari ideas with enough context to compare the feeling and focus of each option."],
      ["Visual storytelling", "Use place-led imagery and editorial rhythm to make the destination feel tangible."],
      ["Trip-planning CTA", "Keep the route from inspiration to a tailored enquiry visible and easy to follow."],
      ["Responsive browsing", "Keep destinations, experience details, and next actions usable across screen sizes."],
      ["Enquiry path", "Give visitors a clear way to ask for help shaping the right trip."]
    ],
    stack: "HTML, CSS, JavaScript, responsive layouts, content structure, image-led interface design",
    lessons: "Strong visual hierarchy can make a rich destination catalogue feel easy to explore. The key was keeping the first action obvious while letting the imagery carry the emotion.",
    walkthrough: "Static preview of the shipped landing experience. A recorded demo can be added when one is available.",
    demoUrl: "",
    sourceUrl: ""
  },
  "tanzania-soccer-hub": {
    title: "Tanzania Soccer Hub",
    category: "Football platform",
    intro: "A football information platform concept for Tanzania, bringing match-day updates, competitions, teams, and stories into one focused experience.",
    overview: "Tanzania Soccer Hub is a football information platform concept for Tanzania. It brings the match-day view, league context, club discovery, and editorial stories into one place so fans can quickly orient themselves and then explore further.",
    aim: "Help fans move from a headline or fixture to the match, team, or competition context they want to follow.",
    targetUsers: "Fans, clubs, journalists, and match-day readers",
    problem: "Fixtures, results, club context, and football stories are often spread across separate places. Readers need a fast way to see what matters now before choosing what to read or explore next.",
    contribution: "My work focused on the homepage hierarchy, match-day information architecture, news and club-navigation patterns, and responsive layouts for quick scanning and deeper browsing.",
    status: "Implemented interface / public preview",
    statusDetail: {
      designed: "Match-day hierarchy, fixtures and results structure, teams and leagues navigation, and editorial content patterns.",
      implemented: "Public interface preview with a football-led homepage, navigation structure, and responsive content direction.",
      planned: "Live score feeds, fixture data, editorial CMS, search, and personalised team or league follow features."
    },
    type: "soccer",
    liveUrl: "https://tanzania-football-hub.vercel.app/",
    image: "../assets/project-tanzania.png",
    imageAlt: "Tanzania Soccer Hub website showing a football news hero section",
    screenshotCaption: "A bold football home page built around match-day energy and editorial context.",
    features: [
      ["Match-day overview", "Give fans a fast view of current fixtures, results, and the stories around them."],
      ["Fixtures and results", "Make upcoming and completed matches easy to scan and return to."],
      ["Teams and leagues", "Give clubs and competitions a clear place in the broader football story."],
      ["News with context", "Present football stories with enough context to understand why they matter."],
      ["Search and discovery", "Help readers move from a headline to a team, league, or related story."],
      ["Responsive match-day use", "Keep essential information close at hand when readers are on the move."]
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
    intro: "A property marketplace concept for Tanzania, bringing property search, detailed listings, and enquiries into one clear experience.",
    overview: "UrbanNest is a property marketplace concept for Tanzania, bringing property search, detailed listings, and enquiries into one clear experience. It is designed to help seekers explore suitable spaces while giving owners a workspace to present and manage their properties.",
    aim: "Help people find properties that match their location, budget, and needs, understand their options, and connect with the advertiser. For owners, simplify the journey from creating a listing to managing interest.",
    targetUsers: "Home seekers, landlords, agents, and property owners",
    problem: "Property information is often scattered or incomplete, making comparison difficult. Seekers need clear prices, locations, features, and contact options. Owners need an organised way to update listings and respond to enquiries.",
    contribution: "My work focused on the search journey, property page structure, registration flow, and separate workspaces for seekers and owners. I also explored responsive layouts that keep navigation, forms, and property media easy to use across screen sizes.",
    status: "Implemented interface / public preview",
    statusDetail: {
      designed: "Search filters, property hierarchy, registration flow, seeker and owner journeys, and responsive page layouts.",
      implemented: "Public interface preview with a search entry point, listing presentation, responsive structure, and owner-portal direction.",
      planned: "Data-backed listings, authentication, live enquiries, viewing requests, and role permissions."
    },
    type: "property",
    liveUrl: "https://urban-nest-topaz.vercel.app/",
    image: "../assets/project-ubannest.png",
    imageAlt: "UrbanNest property platform showing the home search interface",
    screenshotCaption: "The search entry point for finding homes and property opportunities across Tanzania.",
    features: [
      ["Location search", "Narrow properties by region, district, and ward, alongside property type, budget, and sale or rental preference."],
      ["Organised listings", "Present prices, locations, descriptions, amenities, and availability consistently so visitors can compare options."],
      ["Saved properties", "Give seekers a personal shortlist of properties they want to revisit."],
      ["Owner workspace", "Bring listing creation, editing, publication status, enquiries, and viewing requests into one dashboard."],
      ["Photos and video tours", "Show galleries and walkthroughs that help visitors understand the layout and character of a property."],
      ["Enquiries and viewings", "Let visitors ask questions or request a viewing directly from the property page, with clear request status."]
    ],
    stack: "HTML, CSS, JavaScript, responsive layouts, reusable interface patterns, interactive search and listing elements",
    lessons: "This project highlighted the importance of consistent property information, useful filters, and clear next actions. Designing separate seeker and owner journeys also helped me think carefully about permissions, dashboard organisation, and how each role moves through the platform.",
    walkthrough: "Static preview of the UrbanNest search experience. A recorded demo can be added when one is available.",
    demoUrl: "",
    sourceUrl: ""
  },
  slcms: {
    title: "SLCMS",
    category: "Legal management system",
    intro: "A legal case management interface concept for keeping matters, clients, documents, and deadlines connected in one workspace.",
    overview: "SLCMS is a legal case management interface concept organised around the everyday rhythm of legal work. It gives legal teams and authorised clients a clearer way to enter the right workspace and see the information that needs attention next.",
    aim: "Help legal teams see what needs attention next while keeping matters, clients, documents, and deadlines connected.",
    targetUsers: "Law-firm partners, advocates, operations staff, and clients",
    problem: "Legal teams lose time when matter details, deadlines, documents, and client information live in disconnected places. The workspace needs to make the next action visible without making a complex legal workflow harder to understand.",
    contribution: "My work focused on the portal entry experience, dashboard hierarchy, matter and client information patterns, document visibility, and responsive system-interface layouts.",
    status: "Implemented interface / public preview",
    statusDetail: {
      designed: "Portal entry, dashboard hierarchy, matter and client views, document patterns, and role-specific workspace directions.",
      implemented: "Public interface preview with secure-looking portal entry, workspace paths, and responsive visual system patterns.",
      planned: "Persistent case data, authentication, role-based access control, document storage, and deadline automation."
    },
    type: "system",
    liveUrl: "https://smart-legal-case-management-system-gules.vercel.app/",
    image: "../assets/project-slcms.png",
    imageAlt: "SLCMS legal management system showing its secure portal interface",
    screenshotCaption: "A secure-looking entry point for legal teams and clients to access the right workspace.",
    features: [
      ["Secure portal entry", "Give authorised staff and clients a clear route into the right workspace."],
      ["Matter overview", "Give teams a clearer view of active legal work and its current state."],
      ["Deadline visibility", "Keep important dates, tasks, and follow-up work visible in the experience."],
      ["Clients and case parties", "Connect people to the matters, files, and proceedings relevant to them."],
      ["Documents and dockets", "Make case documents and court-related information easier to locate."],
      ["Role-based workspaces", "Shape different paths for firm personnel, counsel, and client access."]
    ],
    stack: "HTML, CSS, JavaScript, responsive dashboard layouts, workflow mapping, interface patterns",
    lessons: "Complex systems become easier to use when the interface respects the team's mental model. The most useful dashboard content is the work that needs attention next, while access boundaries need to stay clear in every path.",
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
  setText('[data-project-status-designed]', project.statusDetail.designed);
  setText('[data-project-status-implemented]', project.statusDetail.implemented);
  setText('[data-project-status-planned]', project.statusDetail.planned);
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

function casePanelMarkup(type, variant = 0) {
  const panels = {
    travel: [
      ["CENTURY EXPEDITIONS", "Serengeti Safari", "Wildlife / 7 days", "Plan this journey"],
      ["CENTURY EXPEDITIONS", "Choose your route", "Northern circuit / Coast", "Explore destinations"]
    ],
    soccer: [
      ["TANZANIA SOCCER HUB", "NBC Premier League", "Match centre / Live", "Follow the action"],
      ["TANZANIA SOCCER HUB", "Teams & leagues", "Clubs / Fixtures / News", "Explore football"]
    ],
    property: [
      ["URBANNEST", "Modern villa in Dar", "Dar es Salaam / For sale", "View property"],
      ["URBANNEST", "Owner workspace", "12 active listings / 8 enquiries", "Manage listings"]
    ],
    system: [
      ["SLCMS", "Matter overview", "Deadlines / Documents / Tasks", "Open matter"],
      ["SLCMS", "Client portal", "Secure access / Case files", "Enter workspace"]
    ]
  };
  const panel = panels[type][variant % panels[type].length];
  return `<div class="case-panel case-panel-${type}"><div class="case-panel-top"><b>${panel[0]}</b><span>Menu</span></div><div class="case-panel-body"><span class="case-panel-kicker">${panel[2]}</span><strong>${panel[1]}</strong><span class="case-panel-action">${panel[3]}</span><i></i><i></i><i></i></div></div>`;
}

function populateCaseStudyPage() {
  const root = $('[data-project-root]');
  if (!root) return;
  const key = root.dataset.project || new URLSearchParams(window.location.search).get("project") || "century-expeditions";
  const project = caseStudyData[key];
  if (!project) { populateProjectPage(); return; }
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
  if (stage) stage.innerHTML = `<div class="case-art-glow" aria-hidden="true"></div><div class="case-art-orbit orbit-one" aria-hidden="true"></div><div class="case-art-orbit orbit-two" aria-hidden="true"></div><div class="case-art-core" aria-hidden="true"><span></span></div><div class="case-art-dot dot-a" aria-hidden="true"></div><div class="case-art-dot dot-b" aria-hidden="true"></div><div class="case-art-dot dot-c" aria-hidden="true"></div><div class="case-art-label"><span>${escapeCaseStudyHTML(project.category)}</span><strong>${escapeCaseStudyHTML(project.title)}</strong></div>`;
  const walkthroughImage = $('[data-project-walkthrough-image]');
  if (walkthroughImage) { walkthroughImage.src = project.image; walkthroughImage.alt = project.imageAlt; }

  const featureList = $('[data-project-features]');
  if (featureList) {
    featureList.innerHTML = project.features.map((feature, index) => `<article class="case-feature"><span class="feature-number">${String(index + 1).padStart(2, "0")}</span><div><h3>${escapeCaseStudyHTML(feature[0])}</h3><p>${escapeCaseStudyHTML(feature[1])}</p></div></article>`).join("");
  }

  const gallery = $('[data-project-gallery]');
  if (gallery) {
    gallery.innerHTML = `<figure class="screenshot-card screenshot-primary"><button class="screenshot-button" type="button" data-screenshot-open aria-label="Open ${escapeCaseStudyHTML(project.title)} screenshot"><img src="${escapeCaseStudyHTML(project.image)}" alt="${escapeCaseStudyHTML(project.imageAlt)}" /></button><figcaption><strong>Homepage</strong><span>${escapeCaseStudyHTML(project.screenshotCaption)}</span></figcaption></figure><figure class="screenshot-card screenshot-secondary"><div class="screenshot-art">${casePanelMarkup(project.type, 0)}</div><figcaption><strong>Core flow</strong><span>One clear path through the main experience.</span></figcaption></figure><figure class="screenshot-card screenshot-secondary"><div class="screenshot-art">${casePanelMarkup(project.type, 1)}</div><figcaption><strong>Supporting view</strong><span>Secondary information stays close to the next action.</span></figcaption></figure>`;
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
