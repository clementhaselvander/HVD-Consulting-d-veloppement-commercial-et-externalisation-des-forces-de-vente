/* ═══════════════════════════════════════════════
   HVD CONSULTING — Script commun (nav + reveal)
   ═══════════════════════════════════════════════ */

// ── NAV scroll behaviour ──
(function() {
  var nav = document.querySelector('nav');
  if (!nav) return;
  var isHome = nav.classList.contains('nav-home');

  function updateNav() {
    if (isHome) {
      if (window.scrollY > 40) {
        nav.classList.remove('transparent');
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
        nav.classList.add('transparent');
      }
    }
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ── Mobile menu ──
  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
    });
    // Ferme au clic sur un lien
    mobileMenu.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
      });
    });
  }
})();

// ── Scroll reveal ──
(function() {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
  els.forEach(function(el) { obs.observe(el); });
})();
