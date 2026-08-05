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
