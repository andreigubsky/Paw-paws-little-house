import { createModalTemplate } from './render-functions';
import { allAnimals } from './pets-list';
import { openOrderModal } from './order-modal';
import '../img/sprite.svg';

const refs = {
  petList: null,
  backdrop: null,
  modalWindow: null,
};

// ===== ESC HANDLER (ОДИН І ТОЙ САМИЙ РЕФ) =====
function onEscPress(e) {
  if (e.key === 'Escape') {
    closePetModal();
  }
}

// ===== OPEN MODAL =====
function openPetModal(pet) {
  refs.modalWindow.innerHTML = createModalTemplate(pet);
  refs.backdrop.classList.add('is-open');
  document.body.classList.add('modal-open');

  // 🔑 ВАЖЛИВО: слухач додається ТІЛЬКИ ТУТ
  document.addEventListener('keydown', onEscPress);
}

// ===== CLOSE MODAL =====
function closePetModal() {
  refs.backdrop.classList.remove('is-open');
  document.body.classList.remove('modal-open');
  refs.modalWindow.innerHTML = '';

  // 🔑 ВАЖЛИВО: слухач ЗНІМАЄТЬСЯ ТУТ
  document.removeEventListener('keydown', onEscPress);
}

document.addEventListener('DOMContentLoaded', () => {
  refs.petList = document.querySelector('.js-pet-list');
  refs.backdrop = document.querySelector('.js-backdrop');
  refs.modalWindow = document.querySelector('.js-modal-window');

  if (!refs.petList || !refs.backdrop || !refs.modalWindow) return;

  // ===== OPEN BY BUTTON =====
  refs.petList.addEventListener('click', e => {
    const btn = e.target.closest('.js-more-info');
    if (!btn) return;

    const id = btn.dataset.id;
    const pet = allAnimals.find(p => String(p._id) === String(id));
    if (!pet) return;

    openPetModal(pet);
  });

  // ===== CLOSE BY BACKDROP / X =====
  refs.backdrop.addEventListener('click', e => {
    if (e.target === refs.backdrop || e.target.closest('.js-modal-close')) {
      closePetModal();
    }
  });

  // ===== OPEN ORDER MODAL =====
  document.addEventListener('click', e => {
    const btn = e.target.closest('.js-takehome-btn');
    if (!btn) return;

    const animalId = btn.dataset.id;
    if (!animalId) return;

    closePetModal();
    openOrderModal(animalId);
  });
});

// додат ифункцію відкриття мод вікна, в неї перенести логіку відкриття модального вікна, в цю функцію додати вішання прослуховувача подій на кнопку esc,
// у функцію closepetmodal додати зняття прослуховувача події натискання кнопки esc