document.addEventListener('DOMContentLoaded', () => {
  const refsmenu = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('#mobilemenu'),
  };

  if (refsmenu.openMenuBtn && refsmenu.menu) {
    refsmenu.openMenuBtn.addEventListener('click', toggleMenu);
  }

  if (refsmenu.closeMenuBtn && refsmenu.menu) {
    refsmenu.closeMenuBtn.addEventListener('click', toggleMenu);
  }

  function toggleMenu() {
    refsmenu.menu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }


  refsmenu.menu?.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      refsmenu.menu.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  });


  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  if (refs.openModalBtn && refs.modal) {
    refs.openModalBtn.addEventListener('click', toggleModal);
  }

  if (refs.closeModalBtn && refs.modal) {
    refs.closeModalBtn.addEventListener('click', toggleModal);
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
});