const refsmenu = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  menu: document.querySelector('[data-menu]'),
};
refsmenu.openMenuBtn.addEventListener('click', toggleMenu);
refsmenu.closeMenuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
  refsmenu.menu.classList.toggle('is-open');
}

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};
refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
function toggleModal() {
  refs.modal.classList.toggle('is-open');
}
