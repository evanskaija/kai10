(() => {
  const root = document.querySelector(".football-site");
  if (!root) return;

  const stories = [
    { kicker: "NBC PREMIER LEAGUE", season: "2026 / 27\u00a0 — \u00a0THE SEASON IS ALIVE", title: "THE <em>game</em><br />LIVES HERE.", lede: "From the roar of the stands to the last touch in the box — step inside the football stories shaping Tanzania.", story: "Fiston Mayele · the fire returns", feature: "Fiston Mayele brings the heat", location: "Portraits · Dar es Salaam", position: "center 62%" },
    { kicker: "THE FIXTURE DESK", season: "MATCH WEEK 08\u00a0 — \u00a0EVERY POINT MATTERS", title: "THE <em>rivalry</em><br />STARTS NOW.", lede: "Every derby carries a memory. Follow the teams, the tension, and the moments that turn a fixture into a story.", story: "The derby that owns the weekend", feature: "Where the rivalry gets real", location: "Match notes · Mbeya", position: "center 65%" },
    { kicker: "FROM THE TOUCHLINE", season: "THE NEXT GENERATION\u00a0 — \u00a0WATCH CLOSELY", title: "THE <em>future</em><br />IS ALREADY HERE.", lede: "Meet the players, coaches, and communities pushing the game forward before the rest of the world catches up.", story: "A new generation steps up", feature: "The future is already playing", location: "Academy stories · Mwanza", position: "center 60%" },
    { kicker: "WOMEN'S FOOTBALL", season: "THE GAME GROWS\u00a0 — \u00a0THE VOICES GET LOUDER", title: "HER <em>moment</em><br />IS NOW.", lede: "The pitch is opening wider. Hear from the women making space, raising standards, and changing what comes next.", story: "Her moment is now", feature: "More than a match", location: "Inside the game · Dodoma", position: "center 70%" }
  ];

  const $ = (selector) => root.querySelector(selector);
  const $$ = (selector) => [...root.querySelectorAll(selector)];
  const hero = $(".football-hero");
  const play = $("[data-football-play]");
  const pause = $("[data-football-pause]");
  let active = 0;
  let timer;
  let paused = false;

  const render = (index) => {
    active = (index + stories.length) % stories.length;
    const story = stories[active];
    $("[data-football-kicker]").textContent = story.kicker;
    $("[data-football-season]").textContent = story.season;
    $("[data-football-title]").innerHTML = story.title;
    $("[data-football-lede]").textContent = story.lede;
    $("[data-football-story]").textContent = story.story;
    $("[data-football-feature]").textContent = story.feature;
    $("[data-football-location]").textContent = story.location;
    $("[data-football-counter]").textContent = `${String(active + 1).padStart(2, "0")} / ${String(stories.length).padStart(2, "0")}`;
    hero.style.backgroundPosition = story.position;
    $$('[data-football-dot]').forEach((dot, dotIndex) => {
      const selected = dotIndex === active;
      dot.classList.toggle("is-active", selected);
      dot.setAttribute("aria-selected", String(selected));
    });
  };

  const schedule = () => {
    window.clearInterval(timer);
    if (!paused) timer = window.setInterval(() => render(active + 1), 8000);
  };

  $("[data-football-prev]").addEventListener("click", () => { render(active - 1); schedule(); });
  $("[data-football-next]").addEventListener("click", () => { render(active + 1); schedule(); });
  $$('[data-football-dot]').forEach((dot) => dot.addEventListener("click", () => { render(Number(dot.dataset.footballDot)); schedule(); }));
  pause.addEventListener("click", () => {
    paused = !paused;
    pause.classList.toggle("is-paused", paused);
    pause.setAttribute("aria-label", paused ? "Resume story rotation" : "Pause story rotation");
    pause.querySelector("span").textContent = paused ? "PLAY" : "PAUSE";
    schedule();
  });
  play.addEventListener("click", () => { paused = false; pause.classList.remove("is-paused"); pause.querySelector("span").textContent = "PAUSE"; schedule(); });

  const menuToggle = $(".football-menu-toggle");
  const menu = $("#football-mobile-menu");
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    menuToggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
    menu.hidden = open;
  });
  $$('a', menu).forEach((link) => link.addEventListener("click", () => { menu.hidden = true; menuToggle.setAttribute("aria-expanded", "false"); }));

  render(0);
  schedule();
})();
