(function () {
  const D = window.SITE_DATA;
  const I18N = {
    zh: {
      brand: "沈恩亚",
      "nav.about": "简介",
      "nav.news": "动态",
      "nav.research": "研究",
      "nav.publications": "论文",
      "nav.projects": "项目",
      "nav.students": "团队",
      "nav.service": "服务",
      "nav.contact": "联系",
      "sec.about": "经历",
      "sec.work": "工作履历",
      "sec.education": "教育背景",
      "sec.news": "动态",
      "sec.recruit": "招生招聘",
      "sec.research": "研究方向",
      "sec.publications": "论文",
      "sec.books": "专著",
      "sec.projects": "研究项目",
      "sec.patents": "专利",
      "sec.students": "团队",
      "sec.current": "在组成员",
      "sec.alumni": "毕业学生",
      "sec.honors": "学生荣誉",
      "sec.service": "服务",
      "sec.contact": "联系",
      "contact.email": "邮箱",
      "contact.phone": "电话",
      "contact.address": "地址",
      "footer.link": "清华大学软件学院",
    },
    en: {
      brand: "Enya Shen",
      "nav.about": "About",
      "nav.news": "News",
      "nav.research": "Research",
      "nav.publications": "Publications",
      "nav.projects": "Projects",
      "nav.students": "Team",
      "nav.service": "Service",
      "nav.contact": "Contact",
      "sec.about": "Experience",
      "sec.work": "Work Experience",
      "sec.education": "Education",
      "sec.news": "News",
      "sec.recruit": "Recruiting",
      "sec.research": "Research",
      "sec.publications": "Publications",
      "sec.books": "Books",
      "sec.projects": "Research Projects",
      "sec.patents": "Patents",
      "sec.students": "Team",
      "sec.current": "Current Members",
      "sec.alumni": "Alumni",
      "sec.honors": "Student Honors",
      "sec.service": "Service",
      "sec.contact": "Contact",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.address": "Address",
      "footer.link": "School of Software, Tsinghua University",
    },
  };

  const SUPPORTED_LANGS = ["zh", "en"];
  const SUPPORTED_THEMES = ["light", "dark"];

  function getStoredLang() {
    const stored = localStorage.getItem("lang");
    return SUPPORTED_LANGS.includes(stored) ? stored : "zh";
  }

  function getCurrentTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    return SUPPORTED_THEMES.includes(current) ? current : "light";
  }

  let lang = getStoredLang();

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || key;
  }
  function pick(obj) {
    return obj && typeof obj === "object" && "zh" in obj ? obj[lang] : obj;
  }
  function esc(s) {
    return String(s).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  }

  function renderStatic() {
    document.documentElement.lang = lang === "zh" ? "zh" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll(".lang-toggle button").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) updateThemeToggle(themeToggle);
  }

  function renderHero() {
    const p = D.profile;
    document.getElementById("name").textContent = pick(p.name);
    document.getElementById("title-zh").textContent = pick(p.title);
    document.getElementById("affiliation").textContent = pick(p.affiliation);
    document.getElementById("bio").innerHTML = pick(p.bio);
    const tags = document.getElementById("area-tags");
    tags.innerHTML = pick(p.areas)
      .map((a) => `<span class="tag">${esc(a)}</span>`)
      .join("");
  }

  function renderAbout() {
    const e = D.experience;
    const toItems = (arr) =>
      arr
        .map(
          (x) =>
            `<li><span class="period">${esc(x.period)}</span><span>${esc(x.text)}</span></li>`,
        )
        .join("");
    document.getElementById("work-list").innerHTML = toItems(pick(e.work));
    document.getElementById("edu-list").innerHTML = toItems(pick(e.education));
  }

  function renderNews() {
    const r = D.recruiting;
    document.getElementById("recruit-year").textContent = r.year;
    document.getElementById("recruit-list").innerHTML = pick(r.items)
      .map((s) => `<li>${s}</li>`)
      .join("");
    document.getElementById("recruit-cta").textContent = pick(r.cta);
  }

  function renderResearch() {
    const grid = document.getElementById("research-grid");
    grid.innerHTML = D.research.areas
      .map(
        (a) => `
      <div class="research-card">
        <h3>${esc(pick(a.title))}</h3>
        <p>${esc(pick(a.desc))}</p>
      </div>
    `,
      )
      .join("");
  }

  function renderPublications() {
    const list = document.getElementById("pub-list");
    list.innerHTML = D.publications
      .map((p) => {
        const teaser = p.teaser
          ? `<img src="${esc(p.teaser)}" alt="">`
          : `<span>teaser</span>`;
        const links = (p.links || [])
          .map(
            (l) =>
              `<a href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`,
          )
          .join("");
        const abstract = pick(p.abstract);
        return `
        <li>
          <div class="pub-teaser">${teaser}</div>
          <div class="pub-body">
            <div class="pub-title">${esc(p.title)}</div>
            <div class="pub-authors">${p.authors}</div>
            <div class="pub-venue">${esc(p.venue)}</div>
            ${links ? `<div class="pub-links">${links}</div>` : ""}
            ${
              abstract
                ? `<div class="pub-abstract">${esc(abstract)}</div>`
                : ""
            }
          </div>
        </li>`;
      })
      .join("");

    document.getElementById("books-list").innerHTML = D.books
      .map((b) => `<li>${esc(pick(b))}</li>`)
      .join("");
  }

  function renderProjects() {
    document.getElementById("projects-list").innerHTML = D.projects
      .map(
        (p) =>
          `<li><span>${esc(pick({ zh: p.zh, en: p.en }))}</span><span class="period">${esc(p.period)}</span></li>`,
      )
      .join("");
  }

  function renderPatents() {
    document.getElementById("patents-list").innerHTML = D.patents
      .map(
        (p) => `
      <li>
        <div class="patent-title">${esc(p.title)}</div>
        <div class="patent-meta">${esc(p.authors)} · ${esc(p.id)} · ${esc(p.date)}</div>
      </li>
    `,
      )
      .join("");
  }

  function renderStudentGroup(group) {
    return Object.values(group)
      .map((g) => {
        const rows = g.items
          .map(
            (it) =>
              `<li><span class="year">${esc(it.year)}</span><span>${esc(it.names)}</span></li>`,
          )
          .join("");
        return `
        <div class="student-group">
          <h4>${esc(pick(g.label))}</h4>
          <ul>${rows}</ul>
        </div>`;
      })
      .join("");
  }

  function renderStudents() {
    document.getElementById("students-current").innerHTML = renderStudentGroup(
      D.students.current,
    );
    document.getElementById("students-alumni").innerHTML = renderStudentGroup(
      D.students.alumni,
    );
    document.getElementById("honors-list").innerHTML = D.honors
      .map((h) => `<li>${esc(pick(h))}</li>`)
      .join("");
  }

  function renderService() {
    document.getElementById("service-list").innerHTML = pick(D.service)
      .map((s) => `<li>${esc(s)}</li>`)
      .join("");
  }

  function renderContact() {
    const c = D.contact;
    const email = document.getElementById("c-email");
    const phone = document.getElementById("c-phone");
    const address = document.getElementById("c-address");

    if (email) {
      email.textContent = c.email;
      email.href = "mailto:" + c.email;
    }
    if (phone) phone.textContent = c.phone;
    if (address) address.textContent = pick(c.address);
  }

  function renderAll() {
    renderStatic();
    renderHero();
    renderAbout();
    renderNews();
    renderResearch();
    renderPublications();
    renderProjects();
    renderStudents();
    renderService();
    renderContact();
    document.title =
      (lang === "zh" ? "沈恩亚" : "Enya Shen") +
      " · " +
      (lang === "zh" ? "清华大学软件学院" : "Tsinghua University");
  }

  function setupLangToggle() {
    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!SUPPORTED_LANGS.includes(btn.dataset.lang)) return;
        lang = btn.dataset.lang;
        localStorage.setItem("lang", lang);
        renderAll();
      });
    });
  }

  function setupScrollSpy() {
    const links = document.querySelectorAll(".nav a");
    const sections = Array.from(links)
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);
    if (!("IntersectionObserver" in window) || !sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = "#" + e.target.id;
            links.forEach((a) =>
              a.classList.toggle("active", a.getAttribute("href") === id),
            );
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
  }

  function setupThemeToggle() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    updateThemeToggle(btn);
    btn.addEventListener("click", () => {
      const current = getCurrentTheme();
      const next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateThemeToggle(btn);
    });
  }

  function updateThemeToggle(btn) {
    const isDark = getCurrentTheme() === "dark";
    btn.setAttribute("aria-pressed", String(isDark));
    btn.setAttribute("aria-label", lang === "zh" ? "切换主题" : "Toggle theme");
    btn.title = lang === "zh" ? "切换主题" : "Toggle theme";
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupLangToggle();
    setupThemeToggle();
    renderAll();
    setupScrollSpy();
  });
})();
