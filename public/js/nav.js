const navLinkEls = document.querySelector('nav a:link')
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
  if (navLinkEl.href.includes(windowPathname)) {
    navLinkEl.classList.add('active');
  }
});