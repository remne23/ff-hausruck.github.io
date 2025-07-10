(function() {
  function initBurger() {
    const siteHeader = document.getElementById('site-header');
    if (!siteHeader) return;

    const burger = siteHeader.querySelector('.burger');
    const nav = siteHeader.querySelector('#nav-menu');

    if (burger && nav) {
      burger.addEventListener('click', function() {
        nav.classList.toggle('active');
      });
    } else {
      console.warn('Burger-Menü Elemente nicht gefunden.');
    }
  }

  if (document.readyState === 'loading') {
    // Seite lädt noch → warte auf DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function() {
      // Warte trotzdem kurz, bis fetch fertig ist
      setTimeout(initBurger, 100);
    });
  } else {
    // Seite ist schon geladen → warte nur auf fetch
    setTimeout(initBurger, 100);
  }
})();
