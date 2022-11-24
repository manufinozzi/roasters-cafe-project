const hamMenuEl = document.querySelector('.hamburger');
const navListEl = document.querySelector('.nav-list');
const navLinkEl = document.querySelectorAll('.nav-list-link');

hamMenuEl.addEventListener('click', () => {
  hamMenuEl.classList.toggle('is-active');
  navListEl.classList.toggle('nav-menu-active');
})

navLinkEl.forEach(n => n.addEventListener('click', () => {
  hamMenuEl.classList.remove('is-active');
  navListEl.classList.remove('nav-menu-active');
}))