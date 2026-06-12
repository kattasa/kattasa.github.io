/* Shared site renderer.
   Reads window.SITE (from content.js) and renders whichever page
   the body's data-page attribute names: "home" | "research" | "teaching" | "cv".

   Every page calls this script. It also injects the shared <nav> and
   <footer> chrome, with the correct active link highlighted. */

(function(){
  const S = window.SITE;
  const PAGE = document.body.dataset.page || "home";

  const $  = (id) => document.getElementById(id);
  const esc = (str) => String(str ?? '').replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

  // ---------- shared chrome: nav + footer ----------
  const navLinks = [
    { href: "index.html",    label: "Home",     key: "home" },
    { href: "research.html", label: "Research", key: "research" },
    { href: "teaching.html", label: "Teaching", key: "teaching" },
    { href: "cv.html",       label: "CV",       key: "cv" },
  ];

  const navHtml = `
    <nav class="nav">
      <div class="nav-inner">
        <a class="brand" href="index.html"><span class="dot"></span>${esc(S.name)}</a>
        <div class="nav-links">
          ${navLinks.map(l => `<a href="${l.href}" class="${l.key === PAGE ? "active" : ""}">${l.label}</a>`).join("")}
        </div>
      </div>
    </nav>`;

  const footHtml = `
    <footer class="foot shell">
      <span>© ${new Date().getFullYear()} ${esc(S.name)}</span>
      <span>
        <a href="mailto:${esc(S.email)}">${esc(S.email)}</a>
        ${S.links.cv ? ` · <a href="${esc(S.links.cv)}">CV</a>` : ""}
        ${S.links.github ? ` · <a href="${esc(S.links.github)}">GitHub</a>` : ""}
        ${S.links.linkedin ? ` · <a href="${esc(S.links.linkedin)}">LinkedIn</a>` : ""}
      </span>
    </footer>`;

  const navMount  = $("nav-mount");
  const footMount = $("foot-mount");
  if (navMount)  navMount.outerHTML  = navHtml;
  if (footMount) footMount.outerHTML = footHtml;

  // ---------- shared helpers ----------
  function renderContact(mountId){
    const el = $(mountId);
    if (!el) return;
    const links = [];
    if (S.email)          links.push({k:"email",    v:`<a href="mailto:${esc(S.email)}">${esc(S.email)}</a>`});
    if (S.links.cv)       links.push({k:"cv",       v:`<a href="${esc(S.links.cv)}">PDF</a>`});
    if (S.links.scholar)  links.push({k:"scholar",  v:`<a href="${esc(S.links.scholar)}">Google Scholar</a>`});
    if (S.links.github)   links.push({k:"github",   v:`<a href="${esc(S.links.github)}">@${esc(S.links.github.split('/').pop())}</a>`});
    if (S.links.linkedin) links.push({k:"linkedin", v:`<a href="${esc(S.links.linkedin)}">LinkedIn</a>`});
    el.innerHTML = links.map(l =>
      `<div class="row"><span class="k">${l.k}</span><span>${l.v}</span></div>`
    ).join("");
  }

  function renderHeadshot(mountId){
    const img = $(mountId);
    if (img) { img.src = S.photo; img.alt = S.name; }
  }

  function pubItem(p){
    const primaryUrl = (p.links || {}).site || (p.links || {}).pdf || "";
    const linkHtml = Object.entries(p.links || {})
      .filter(([,v]) => v).map(([k,v]) => `<a href="${esc(v)}">${k.toUpperCase()}</a>`).join("");
    const titleHtml = primaryUrl
      ? `<a href="${esc(primaryUrl)}" style="color:var(--ink);border:none;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--ink)'">${esc(p.title)}</a>`
      : esc(p.title);
    return `
      <div class="pub">
        <div class="yr">${esc(p.year)}</div>
        <div>
          <div class="title">${titleHtml}</div>
          <div class="authors">${p.authors}</div>
          <div class="venue" style="margin-bottom:6px">${esc(p.venue)}</div>
          ${p.awards ? `<div class="badges">${p.awards.map(a => `<span class="badge award">★ ${esc(a)}</span>`).join("")}</div>` : ""}
          ${linkHtml ? `<div class="links">${linkHtml}</div>` : ""}
        </div>
      </div>`;
  }

  // ============================================================
  //  HOME PAGE
  // ============================================================
  if (PAGE === "home") {
    const advisorList = S.advisors.map(a => `<a href="${esc(a.url)}">${esc(a.name)}</a>`).join(" & ");
    $("hero-name").textContent = S.name;
    $("hero-role").innerHTML =
      `<strong>${esc(S.title)}</strong> · ${esc(S.affiliation)}<br>` +
      `<span style="color:var(--muted-2)">Advised by ${advisorList}</span>`;
    $("hero-bio").innerHTML = S.bio.map(p => `<p>${p}</p>`).join("");
    renderHeadshot("headshot");
    renderContact("contact");

    // Featured publications (those marked featured: true)
    const featured = S.publications.published.filter(p => p.featured);
    $("featured").innerHTML = featured.map(p => `
      <div class="item">
        <div class="yr">${esc(p.year)}</div>
        <div>
          <div class="title">${(() => { const u=(p.links||{}).site||(p.links||{}).pdf||''; return u ? `<a href="${esc(u)}" style="color:var(--ink);border:none" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--ink)'">${esc(p.title)}</a>` : esc(p.title); })()}</div>
          <div class="blurb">${esc(p.blurb || "")}</div>
          <div class="meta">
            <span class="venue">${esc(p.venue)}</span>
            ${p.awards ? p.awards.map(a => `<span class="award">★ ${esc(a)}</span>`).join("") : ""}
          </div>
        </div>
      </div>
    `).join("");

    // Recent news (most recent first)
    $("news").innerHTML = S.news.map(n => `
      <div class="item">
        <div class="date">${esc(n.date)}</div>
        <div class="text">${n.text}</div>
      </div>`).join("");
  }

  // ============================================================
  //  RESEARCH PAGE
  // ============================================================
  if (PAGE === "research") {
    // Full publications grouped
    const groups = [
      { key: "published", label: "Published" },
      { key: "submitted", label: "Submitted & Under Review" },
      { key: "inPrep",    label: "In Preparation" },
    ];
    $("pubs").innerHTML = groups.map(g => {
      const list = S.publications[g.key] || [];
      if (!list.length) return "";
      return `<div class="pubgroup">
        <h3 class="pubgroup-title">${g.label}</h3>
        ${list.map(pubItem).join("")}
      </div>`;
    }).join("");
  }

  // ============================================================
  //  TEACHING PAGE
  // ============================================================
  if (PAGE === "teaching") {
    const t = S.teaching || { intro: "", notes: [], courses: [] };
    $("teach-intro").textContent = t.intro || "";

    $("notes").innerHTML = (t.notes || []).map(n => `
      <article class="note">
        <div class="meta">${esc(n.date || "")}</div>
        <h3>${n.url ? `<a href="${esc(n.url)}">${esc(n.title)}</a>` : esc(n.title)}</h3>
        <p>${esc(n.blurb || "")}</p>
        ${n.url ? `<div class="arrow">Read notes →</div>` : ""}
      </article>`).join("");

    const courses = t.courses || [];
    if (courses.length) {
      $("courses").innerHTML = courses.map(c => `
        <div class="row">
          <div class="yr">${esc(c.year)}</div>
          <div class="main">
            <strong>${esc(c.course)}</strong>
            <div class="sub">${esc(c.role)} · ${esc(c.institution)}</div>
          </div>
        </div>`).join("");
    } else {
      const section = document.getElementById("courses-section");
      if (section) section.style.display = "none";
    }
  }

  // ============================================================
  //  CV PAGE
  // ============================================================
  if (PAGE === "cv") {
    // Education
    $("education").innerHTML = S.education.map(e => `
      <div class="row">
        <div class="yr">${esc(e.dates.split(" ").slice(-1)[0])}</div>
        <div class="main">
          <strong>${esc(e.degree)}</strong>
          <div class="sub">${esc(e.school)} · ${esc(e.dates)}${e.detail ? ` · ${esc(e.detail)}` : ""}</div>
        </div>
      </div>`).join("");

    // Experience timeline (research + industry)
    $("timeline").innerHTML = (S.timeline || []).map(t => `
      <div class="tl-item" data-kind="${esc(t.kind)}">
        <div class="tl-when">
          ${esc(t.dates)}
          <span class="loc">${esc(t.where)}</span>
        </div>
        <div class="tl-rail"><span class="tl-dot"></span></div>
        <div class="tl-body">
          <div class="tl-role">${esc(t.role)}</div>
          <div class="tl-org">${esc(t.org)}</div>
          <p class="tl-desc">${esc(t.desc)}</p>
        </div>
      </div>`).join("");
  }

})();
