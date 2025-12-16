const mobileMenu = document.querySelector('.location');
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-visible');
});

