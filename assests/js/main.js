// Mind Body Bloom - shared JS helpers (streak counter, footer year, gallery filter, tabs)
document.addEventListener('DOMContentLoaded', function () {
  setFooterYear();
  initMobileNav();
  initStreakCounter();
  initGalleryFilter();
  initNutritionTabs();
  initAccordion();
});

/* ---------- Hamburger nav toggle (shared across all pages) ---------- */
function initMobileNav() {
  var toggleBtn = document.getElementById('nav-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
    var expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!expanded));
  });
}

/* ---------- FAQ accordion (resources.html / about.html) ---------- */
function initAccordion() {
  var headers = document.querySelectorAll('.accordion-header');
  if (!headers.length) return;

  headers.forEach(function (header) {
    header.addEventListener('click', function () {
      var panel = document.getElementById(header.getAttribute('aria-controls'));
      var icon = header.querySelector('.accordion-icon');
      if (!panel) return;

      var isOpen = panel.classList.contains('open');
      panel.classList.toggle('open', !isOpen);
      header.setAttribute('aria-expanded', String(!isOpen));
      if (icon) icon.classList.toggle('rotated', !isOpen);
    });
  });
}

function setFooterYear() {
  var el = document.getElementById('footer-year');
  if (el) {
    el.textContent = new Date().getFullYear();
  }
}

/* ---------- Daily Health Mission Streak Counter (index.html) ---------- */
function initStreakCounter() {
  var button = document.getElementById('streak-btn');
  var countEl = document.getElementById('streak-count');
  var messageEl = document.getElementById('streak-message');
  if (!button || !countEl) return;

  var STORAGE_KEY = 'mbb_streak_data';
  var today = new Date().toISOString().slice(0, 10);

  var data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"streak":0,"lastDate":null}');

  renderStreak();

  if (data.lastDate === today) {
    button.disabled = true;
    button.textContent = "Today's Mission Complete!";
    messageEl.textContent = 'Come back tomorrow to keep your streak alive.';
  }

  button.addEventListener('click', function () {
    var todayNow = new Date().toISOString().slice(0, 10);
    if (data.lastDate === todayNow) return;

    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var yesterdayStr = yesterday.toISOString().slice(0, 10);

    if (data.lastDate === yesterdayStr) {
      data.streak += 1;
    } else {
      data.streak = 1;
    }
    data.lastDate = todayNow;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    renderStreak();
    button.disabled = true;
    button.textContent = "Today's Mission Complete!";
    messageEl.textContent = 'Nice work! Streak updated to ' + data.streak + ' day(s).';
  });

  function renderStreak() {
    countEl.textContent = data.streak;
  }
}

/* ---------- Fitness image gallery filter (fitness.html) ---------- */
function initGalleryFilter() {
  var buttons = document.querySelectorAll('.gallery-filter-btn');
  var items = document.querySelectorAll('.gallery-item');
  if (!buttons.length || !items.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var filter = btn.getAttribute('data-filter');
      items.forEach(function (item) {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.classList.remove('d-none-filtered');
        } else {
          item.classList.add('d-none-filtered');
        }
      });
    });
  });
}

/* ---------- Nutrition tabbed content (nutrition.html) ---------- */
function initNutritionTabs() {
  var tabButtons = document.querySelectorAll('.nutrition-tab-btn');
  var panels = document.querySelectorAll('.nutrition-tab-panel');
  if (!tabButtons.length || !panels.length) return;

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabButtons.forEach(function (b) { b.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });

      btn.classList.add('active');
      var target = document.getElementById(btn.getAttribute('data-tab-target'));
      if (target) target.classList.add('active');
    });
  });
}
