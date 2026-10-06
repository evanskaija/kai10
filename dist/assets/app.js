const projectData = {
  "century-expeditions": {
    title: "Century Expeditions",
    category: "Travel website",
    intro: "A considered travel experience for discovering Tanzania’s wild places, choosing a direction, and taking the next step with confidence.",
    purpose: "Century Expeditions is shaped around a simple idea: travel planning should feel inspiring without becoming overwhelming. The interface gives destinations, experiences, and the safari path room to breathe.",
    contribution: "Kai10-led interface direction, responsive page structure, and front-end experience design.",
    status: "Development status to be confirmed",
    type: "travel",
    features: ["Editorial destination storytelling", "Experience-led discovery flow", "Responsive layouts for planning on the go", "Clear inquiry and booking next steps"],
    stack: "Responsive web interface · Content structure · Interaction design"
  },
  "tanzania-soccer-hub": {
    title: "Tanzania Soccer Hub",
    category: "Football platform",
    intro: "A focused home for live scores, league context, teams, and football stories from Tanzania.",
    purpose: "Tanzania Soccer Hub brings match-day energy and useful context into one place. The direction prioritizes quick scanning for fixtures while keeping teams and stories easy to explore.",
    contribution: "Kai10-led product direction, information architecture, and responsive interface design.",
    status: "Development status to be confirmed",
    type: "soccer",
    features: ["Live-score-first match view", "Teams and leagues navigation", "News and match context", "Mobile-friendly match-day experience"],
    stack: "Responsive web interface · Information architecture · Interaction design"
  },
  "ubannest": {
    title: "Ubannest",
    category: "Property marketplace",
    intro: "A simple, useful property journey for finding a next home with more clarity and less friction.",
    purpose: "Ubannest is designed to make property discovery feel approachable. Search, filters, property context, and the next conversation are treated as one connected journey.",
    contribution: "Kai10-led experience direction, search journey, and front-end interface design.",
    status: "Development status to be confirmed",
    type: "property",
    features: ["Buy, rent, and off-plan pathways", "Property-focused search entry point", "Clear listing context and next steps", "Responsive browsing for every screen"],
    stack: "Responsive web interface · Search journey · Interface design"
  },
  slcms: {
    title: "SLCMS",
    category: "Legal management system",
    intro: "A structured workspace for legal teams to keep matters, clients, documents, and deadlines moving.",
    purpose: "SLCMS is organized around the everyday rhythm of legal work. It makes important information visible without making a complex workflow feel heavy.",
    contribution: "Kai10-led workflow mapping, dashboard direction, and system interface design.",
    status: "Development status to be confirmed",
    type: "system",
    features: ["Matter and client overview", "Deadline and document visibility", "Calm dashboard hierarchy", "System patterns designed for repeat use"],
    stack: "System interface · Workflow mapping · Responsive dashboard patterns"
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
  const setText = (selector, value) => { const el = $(selector); if (el) el.textContent = value; };
  setText('[data-project-category]', project.category);
  setText('[data-project-title]', project.title);
  setText('[data-project-intro]', project.intro);
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
  if (live) live.remove();
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

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMenu();
  initScrollLinks();
  initReveal();
  populateProjectPage();
  initContactForm();
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
});
