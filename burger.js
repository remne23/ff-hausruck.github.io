document.addEventListener("DOMContentLoaded", function() {
  const siteHeader = document.getElementById('site-header');

  // Warte kurz, bis fetch fertig ist (oder nutze MutationObserver, hier einfach timeout)
  setTimeout(function() {
    const burger = siteHeader.querySelector(".burger");
    const nav = siteHeader.querySelector("#nav-menu");

    if (burger && nav) {
      burger.addEventListener("click", function() {
        nav.classList.toggle("active");
      });
    }
  }, 100);
});
