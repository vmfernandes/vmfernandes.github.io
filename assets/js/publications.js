/* Renders RESEARCH data into the Research page. Tabs switch
   between publications, invited talks and conference abstracts.
   Chips filter publications by theme or student-led work. */
(function () {
  var R = window.RESEARCH || { publications: [], talks: [], abstracts: [] };
  var THEME = { "terraces": "terraces", "dynamic-topo": "dynamic topo", "sediment": "sediment" };

  var tabsEl = document.getElementById("tabs");
  var chipsEl = document.getElementById("chips");
  var outEl = document.getElementById("output");
  if (!outEl) return;

  var state = { tab: "publications", filter: "all" };

  function byYearDesc(a, b) { return b.year - a.year; }

  function pubMatches(p) {
    if (state.filter === "all") return true;
    if (state.filter === "student") return !!p.student;
    return (p.themes || []).indexOf(state.filter) !== -1;
  }

  function renderPubs() {
    var list = R.publications.slice().sort(byYearDesc).filter(pubMatches);
    if (!list.length) return '<p style="font-family:var(--font-serif);color:var(--muted);padding:18px 0;">No papers match this filter yet.</p>';
    return list.map(function (p) {
      var tags = "";
      (p.themes || []).forEach(function (t) { tags += '<span class="ptag theme">' + (THEME[t] || t) + "</span>"; });
      if (p.student) tags += '<span class="ptag student">student-led</span>';
      if (p.status && p.status !== "published") tags += '<span class="ptag status">' + p.status + "</span>";
      return '<div class="pub"><span class="yr">' + p.year + '</span><div><div class="cite">' + p.cite + "</div>" +
        (tags ? '<div class="tags">' + tags + "</div>" : "") + "</div></div>";
    }).join("");
  }

  function renderTalks() {
    return R.talks.slice().sort(byYearDesc).map(function (t) {
      return '<div class="pub"><span class="yr">' + t.year + '</span><div class="cite">' + t.html + "</div></div>";
    }).join("");
  }

  function renderAbstracts() {
    return R.abstracts.slice().sort(byYearDesc).map(function (a) {
      var inv = a.invited ? '<div class="tags"><span class="ptag status">invited</span></div>' : "";
      return '<div class="pub"><span class="yr">' + a.year + '</span><div><div class="cite">' + a.html + "</div>" + inv + "</div></div>";
    }).join("");
  }

  function render() {
    if (chipsEl) chipsEl.style.display = state.tab === "publications" ? "flex" : "none";
    if (state.tab === "publications") outEl.innerHTML = renderPubs();
    else if (state.tab === "talks") outEl.innerHTML = renderTalks();
    else outEl.innerHTML = renderAbstracts();
  }

  if (tabsEl) {
    tabsEl.addEventListener("click", function (e) {
      var b = e.target.closest("[data-tab]"); if (!b) return;
      state.tab = b.getAttribute("data-tab");
      [].forEach.call(tabsEl.querySelectorAll(".tab"), function (t) { t.classList.toggle("active", t === b); });
      render();
    });
  }
  if (chipsEl) {
    chipsEl.addEventListener("click", function (e) {
      var c = e.target.closest("[data-filter]"); if (!c) return;
      state.filter = c.getAttribute("data-filter");
      [].forEach.call(chipsEl.querySelectorAll(".chip"), function (t) { t.classList.toggle("active", t === c); });
      render();
    });
  }
  render();
})();
