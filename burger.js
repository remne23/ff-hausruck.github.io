(function() {
  const siteHeader = document.getElementById('site-header');
  if (!siteHeader) {
    console.warn('site-header nicht gefunden.');
    return;
  }

  const burger = siteHeader.querySelector('.burger');
  const nav = siteHeader.querySelector('#nav-menu');

  if (burger && nav) {
    burger.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  } else {
    console.warn('Burger-Menü Elemente nicht gefunden.');
  }
})();
