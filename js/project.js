/* Renders project.html?id=<project-id> from PROJECTS in data.js.
   Runs before main.js so the reveal animation picks up the new elements. */
(function () {
  const root = document.getElementById("project-root");
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const list = (items) => `<ul class="bullets">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;

  const id = new URLSearchParams(location.search).get("id");
  const index = PROJECTS.findIndex((p) => p.id === id);
  const p = PROJECTS[index];

  if (!p) {
    document.title = "Project not found | Abdur Rouf";
    root.innerHTML = `
      <section class="not-found container">
        <h1>Project not found</h1>
        <p class="section-sub">That project doesn't exist or the link is broken.</p>
        <a class="btn btn-primary" href="index.html#projects"><i class="fa-solid fa-arrow-left"></i> Back to projects</a>
      </section>`;
    return;
  }

  document.title = `${p.name} | Abdur Rouf`;

  const liveBtn = p.live
    ? `<a class="btn btn-primary" href="${esc(p.live)}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Project</a>`
    : `<span class="btn btn-primary" aria-disabled="true"><i class="fa-solid fa-clock"></i> Live demo coming soon</span>`;

  const others = [1, 2, 3].map((k) => PROJECTS[(index + k) % PROJECTS.length]);

  root.innerHTML = `
    <section class="detail-hero">
      <div class="container">
        <a class="back-link" href="index.html#projects"><i class="fa-solid fa-arrow-left"></i> All projects</a>
        <div class="detail-head">
          <div>
            <p class="kicker">Project ${index + 1} of ${PROJECTS.length}</p>
            <h1>${esc(p.name)}</h1>
            <p class="tagline">${esc(p.tagline)}</p>
            <div class="detail-links">
              ${liveBtn}
              <a class="btn btn-ghost" href="${esc(p.github)}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub (Client)</a>
            </div>
            ${p.live ? "" : `<p class="live-note"><i class="fa-solid fa-circle-info"></i> The source code is public on GitHub; the hosted demo is being set up.</p>`}
          </div>
          <div class="detail-shot">
            <div class="browser-bar" aria-hidden="true"><span></span><span></span><span></span></div>
            <img src="${p.image}" alt="Screenshot of ${esc(p.name)}" width="1280" height="800" />
          </div>
        </div>
      </div>
    </section>

    <section class="container detail-grid">
      <div>
        <div class="detail-block reveal">
          <h2><i class="fa-solid fa-align-left"></i> Overview</h2>
          <p>${esc(p.description)}</p>
        </div>
        <div class="detail-block reveal">
          <h2><i class="fa-solid fa-list-check"></i> Key features</h2>
          ${list(p.features)}
        </div>
        <div class="detail-block reveal">
          <h2><i class="fa-solid fa-mountain"></i> Challenges I faced</h2>
          ${list(p.challenges)}
        </div>
        <div class="detail-block reveal">
          <h2><i class="fa-solid fa-rocket"></i> Improvements &amp; future plans</h2>
          ${list(p.future)}
        </div>
      </div>
      <aside>
        <div class="detail-block reveal">
          <h2><i class="fa-solid fa-layer-group"></i> Tech stack</h2>
          <div class="stack-list">${p.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        </div>
        <div class="detail-block reveal">
          <h2><i class="fa-solid fa-link"></i> Links</h2>
          <ul class="bullets">
            <li>Live: ${p.live ? `<a class="accent" href="${esc(p.live)}" target="_blank" rel="noopener">${esc(p.live.replace(/^https?:\/\//, ""))}</a>` : "coming soon"}</li>
            <li>Code: <a class="accent" href="${esc(p.github)}" target="_blank" rel="noopener">${esc(p.github.replace(/^https?:\/\//, ""))}</a></li>
          </ul>
        </div>
        <div class="detail-block reveal">
          <h2><i class="fa-solid fa-shapes"></i> More projects</h2>
          <div class="next-projects">
            ${others
              .map(
                (o) => `<a href="project.html?id=${encodeURIComponent(o.id)}">
                  <img src="${o.image}" alt="" loading="lazy" />
                  <span><strong>${esc(o.name)}</strong><span>${esc(o.tagline)}</span></span>
                </a>`
              )
              .join("")}
          </div>
        </div>
      </aside>
    </section>`;
})();
