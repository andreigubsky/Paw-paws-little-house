import { createModalTemplate } from './render-functions';
import { allAnimals } from './pets-list';

document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    petList: document.querySelector('.js-pet-list'),
    backdrop: document.querySelector('.js-backdrop'),
    modalWindow: document.querySelector('.js-modal-window'),
  };

  if (!refs.petList || !refs.backdrop || !refs.modalWindow) return;

  // ===== OPEN MODAL =====
  refs.petList.addEventListener('click', e => {
    const btn = e.target.closest('.js-more-info');
    if (!btn) return;

    const id = btn.dataset.id;

    const pet = allAnimals.find(
      item => String(item._id) === String(id)
    );

    if (!pet) {
      console.warn('Pet not found:', id);
      return;
    }

    refs.modalWindow.innerHTML = createModalTemplate(pet);
    refs.backdrop.classList.add('is-open');
  });

  // ===== CLOSE MODAL =====
  refs.backdrop.addEventListener('click', e => {
    if (e.target === refs.backdrop || e.target.closest('.js-modal-close')) {
      closeModal();
    }
  });

  function closeModal() {
    refs.backdrop.classList.remove('is-open');
    refs.modalWindow.innerHTML = '';
  }
});
