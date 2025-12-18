import { createModalTemplate } from './render-functions';
import { allAnimals } from './pets-list';
import { openOrderModal } from './order-modal';

const refs = { petList: null, backdrop: null, modalWindow: null };

document.addEventListener('DOMContentLoaded', () => {
  refs.petList = document.querySelector('.js-pet-list');
  refs.backdrop = document.querySelector('.js-backdrop');
  refs.modalWindow = document.querySelector('.js-modal-window');

  if (!refs.petList || !refs.backdrop || !refs.modalWindow) return;

  /* ================= OPEN MODAL ================= */
  refs.petList.addEventListener('click', e => {
    const btn = e.target.closest('.js-more-info');
    if (!btn) return;

    const id = btn.dataset.id;
    const pet = allAnimals.find(p => String(p._id) === String(id));
    if (!pet) return;

    refs.modalWindow.innerHTML = createModalTemplate(pet);
    refs.backdrop.classList.add('is-open');
    document.body.classList.add('modal-open');
  });

  /* ================= CLOSE MODAL ================= */

  function closePetModal() {
    if (!refs.backdrop || !refs.modalWindow) return;
    refs.backdrop.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    refs.modalWindow.innerHTML = '';
  }

  refs.backdrop.addEventListener('click', e => {
    if (e.target === refs.backdrop || e.target.closest('.js-modal-close')) {
      closePetModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && refs.backdrop.classList.contains('is-open')) {
      closePetModal();
    }
  });

  document.addEventListener('click', e => {
    const btn = e.target.closest('.js-takehome-btn');
    if (!btn) return;

    const animalId = btn.dataset.id;
    if (!animalId) return;

    closePetModal();
    openOrderModal(animalId);
  });
});
