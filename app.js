const hamburgerMenu = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const body = document.querySelector('body');
const moonBotton = document.querySelector('#moon-botton');
const hlinks = document.querySelectorAll('.hlink');

hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

hlinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
});
moonBotton.addEventListener('click', () => {
  body.classList.toggle('dark');
});
