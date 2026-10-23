/* Shared behaviour for index.html and project.html */
(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const escapeHTML = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  window.escapeHTML = escapeHTML;

  /* ---------- Theme ---------- */
  const themeBtn = $("#theme-toggle");
  const setThemeIcon = () => {
    if (!themeBtn) return;
    const light = document.documentElement.dataset.theme === "light";
    themeBtn.innerHTML = light ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
  };
  setThemeIcon();
  themeBtn?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    setThemeIcon();
  });

  /* ---------- Navbar ---------- */
  const navbar = $("#navbar");
  const menuBtn = $("#menu-btn");
  const navLinks = $("#nav-links");
  const toTop = $("#to-top");

  const onScroll = () => {
    const y = window.scrollY;
    navbar?.classList.toggle("scrolled", y > 10);
    toTop?.classList.toggle("show", y > 600);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const closeMenu = () => {
    navLinks?.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
    if (menuBtn) menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  };
  menuBtn?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });
  $$("#nav-links a").forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => e.key === "Escape" && closeMenu());
  document.addEventListener("click", (e) => {
    if (navLinks?.classList.contains("open") && !navLinks.contains(e.target) && !menuBtn.contains(e.target)) closeMenu();
  });

  // Highlight the nav link of the section in view (home page only).
  const sections = $$("main section[id]");
  const linkFor = (id) => $(`#nav-links a[href="#${id}"]`);
  if (sections.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const link = linkFor(entry.target.id);
          if (!link) return;
          $$("#nav-links a").forEach((a) => a.classList.remove("active"));
          link.classList.add("active");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Social buttons ---------- */
  const socialDefs = [
    { key: "github", icon: "fa-brands fa-github", label: "GitHub" },
    { key: "leetcode", icon: "mask-icon icon-leetcode", label: "LeetCode" },
    { key: "hackerrank", icon: "fa-brands fa-hackerrank", label: "HackerRank" },
    { key: "linkedin", icon: "fa-brands fa-linkedin-in", label: "LinkedIn" },
    { key: "facebook", icon: "fa-brands fa-facebook-f", label: "Facebook" },
    { key: "twitter", icon: "fa-brands fa-x-twitter", label: "X (Twitter)" }
  ];
  const socialHTML = () => {
    const links = socialDefs
      .filter((d) => PROFILE.socials[d.key])
      .map((d) => ({ href: PROFILE.socials[d.key], icon: d.icon, label: d.label, ext: true }));
    links.push({ href: `https://wa.me/${PROFILE.whatsapp}`, icon: "fa-brands fa-whatsapp", label: "WhatsApp", ext: true });
    links.push({ href: `mailto:${PROFILE.email}`, icon: "fa-solid fa-envelope", label: "Email", ext: false });
    return links
      .map(
        (l) =>
          `<a class="social" href="${escapeHTML(l.href)}" aria-label="${l.label}" title="${l.label}"${
            l.ext ? ' target="_blank" rel="noopener"' : ""
          }><i class="${l.icon}"></i></a>`
      )
      .join("");
  };
  $$("#hero-socials, #footer-socials").forEach((el) => (el.innerHTML = socialHTML()));

  /* ---------- Typing effect ---------- */
  const typed = $("#typed-role");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (typed && !reduceMotion) {
    let r = 0, i = PROFILE.roles[0].length, deleting = true;
    const tick = () => {
      const word = PROFILE.roles[r];
      i += deleting ? -1 : 1;
      typed.textContent = word.slice(0, i);
      let delay = deleting ? 35 : 70;
      if (!deleting && i === word.length) { deleting = true; delay = 2000; }
      else if (deleting && i === 0) { deleting = false; r = (r + 1) % PROFILE.roles.length; delay = 350; }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 2200);
  }

  /* ---------- Projects ---------- */
  const grid = $("#project-grid");
  if (grid) {
    grid.innerHTML = PROJECTS.map(
      (p) => `
      <article class="project-card reveal">
        <div class="project-thumb">
          <img src="${p.image}" alt="Screenshot of ${escapeHTML(p.name)}" loading="lazy" width="1280" height="800" />
          <span class="status ${p.live ? "" : "soon"}">${p.live ? "Live" : "Code available"}</span>
        </div>
        <div class="project-body">
          <h3>${escapeHTML(p.name)}</h3>
          <p class="tagline">${escapeHTML(p.tagline)}</p>
          <div class="chips">${p.tags.map((t) => `<span class="chip">${escapeHTML(t)}</span>`).join("")}</div>
          <a class="btn btn-primary btn-sm" href="project.html?id=${encodeURIComponent(p.id)}">
            View Details <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </article>`
    ).join("");
  }

  const pubList = $("#pub-list");
  if (pubList) {
    pubList.innerHTML = RESEARCH.map(
      (r) => `
      <li class="pub">
        <span class="pub-title">${escapeHTML(r.title)}</span>
        <span class="pub-venue">${escapeHTML(r.venue)} · ${escapeHTML(r.role)}</span>
        <span class="pill pub-status ${r.status === "Under review" ? "pill-accent" : ""}">${escapeHTML(r.status)}</span>
      </li>`
    ).join("");
  }

  /* ---------- Skill bars ---------- */
  $$(".skill-list li[data-level]").forEach((li) => {
    const lvl = li.dataset.level;
    li.insertAdjacentHTML(
      "beforeend",
      `<span class="pct">${lvl}%</span><span class="bar" role="progressbar" aria-valuenow="${lvl}" aria-valuemin="0" aria-valuemax="100" aria-label="${escapeHTML(li.textContent.trim())}"><span data-w="${lvl}"></span></span>`
    );
  });

  /* ---------- Reveal on scroll ---------- */
  const fillBars = (root) => $$(".bar > span", root).forEach((b) => (b.style.width = b.dataset.w + "%"));
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          fillBars(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => { el.classList.add("visible"); fillBars(el); });
  }

  /* ---------- Contact form (opens the visitor's email app) ---------- */
  const form = $("#contact-form");
  const note = $("#form-note");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "");
    if (!data.name?.trim() || !emailOk || !data.message?.trim()) {
      note.textContent = "Please add your name, a valid email and a message.";
      note.className = "form-note error";
      return;
    }
    const subject = data.subject?.trim() || `Portfolio enquiry from ${data.name}`;
    const body = `${data.message}\n\n- ${data.name} (${data.email})`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    note.textContent = "Opening your email app… If nothing happens, email me at " + PROFILE.email;
    note.className = "form-note";
    form.reset();
  });

  /* ---------- Footer year ---------- */
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
})();
