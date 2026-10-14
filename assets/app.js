document.documentElement.classList.add("js");

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function applyTheme(theme) {
  const next = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("kai10-theme", next); } catch (_) {}
  $$('[data-theme-toggle]').forEach((button) => {
    const dark = next === "dark";
    button.setAttribute("aria-pressed", String(dark));
    button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  });
}

function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem("kai10-theme"); } catch (_) {}
  applyTheme(saved || "light");
  $$('[data-theme-toggle]').forEach((button) => button.addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark")));
}

function initMenu() {
  const toggle = $('[data-menu-toggle]');
  const menu = $('#mobile-menu');
  if (!toggle || !menu) return;
  const close = () => { toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open menu"); menu.hidden = true; };
  toggle.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") === "true"; toggle.setAttribute("aria-expanded", String(!open)); toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu"); menu.hidden = open; });
  $$('a, button', menu).forEach((item) => item.addEventListener("click", close));
}

function initReveal() {
  const autoRevealSelectors = [
    "main > *",
    "main > * > section",
    "main > * > article",
    "main > * > aside",
    "main > * > form",
    ".about-note",
    ".focus-card",
    ".value-card",
    ".service-card",
    ".next-step",
    ".project-card",
    ".work-row",
    "footer.site-footer"
  ];
  autoRevealSelectors.forEach((selector) => $$(selector).forEach((element) => element.classList.add("reveal")));
  const items = $$('.reveal');
  if (!items.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { items.forEach((item) => item.classList.add("is-visible")); return; }
  const observer = new IntersectionObserver((entries, observerRef) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observerRef.unobserve(entry.target); } }), { threshold: .12 });
  items.forEach((item) => observer.observe(item));
}

function initContactForm() {
  const form = $('[data-contact-form]');
  if (!form) return;

  const status = $('[data-form-status]', form);
  const submit = $('button[type=submit]', form);
  const fields = $$('input[name], select[name], textarea[name]', form).filter((field) => field.name !== 'company');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setError = (field, message) => {
    const error = $(`[data-error='${field.name}']`, form);
    field.setAttribute('aria-invalid', String(Boolean(message)));
    if (error) error.textContent = message;
    return !message;
  };

  const validate = (field) => {
    const value = field.value.trim();
    if (field.required && !value) return setError(field, 'This field is required.');
    if (field.type === 'email' && value && !emailPattern.test(value)) return setError(field, 'Enter a valid email address.');
    return setError(field, '');
  };

  const setStatus = (message, type = '') => {
    if (!status) return;
    status.textContent = message;
    status.className = 'form-status' + (type ? ' ' + type : '');
  };

  fields.forEach((field) => {
    const eventName = field.tagName === 'SELECT' ? 'change' : 'input';
    field.addEventListener(eventName, () => {
      validate(field);
      if (status && status.classList.contains('error')) setStatus('');
    });
  });

  form.addEventListener('submit', (event) => {
    const honeypot = form.elements.company;
    if (honeypot && honeypot.value.trim()) {
      event.preventDefault();
      return;
    }

    const invalid = fields.filter((field) => !validate(field));
    if (invalid.length) {
      event.preventDefault();
      setStatus('Please check the highlighted fields and try again.', 'error');
      invalid[0].focus();
      return;
    }

    if (window.location.protocol === 'file:') {
      event.preventDefault();
      setStatus('The contact form needs to be published with its /api/contact endpoint before it can send messages.', 'error');
      return;
    }

    setStatus('Sending your message…');
    if (submit) submit.disabled = true;
  });

  window.addEventListener('pageshow', () => {
    if (submit) submit.disabled = false;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMenu();


  initReveal();

  initContactForm();
  $$('[data-year]').forEach((element) => { element.textContent = new Date().getFullYear(); });
});
