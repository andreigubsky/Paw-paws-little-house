// order-modal.js
import '../css/order-modal.css';
import { sendOrder } from './paw-hut-api-orders';

const modalLayer = document.querySelector('.js-modal-order-overlay');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const form = document.querySelector('.modal-order-form');

let selectedPetId = null;

function openModal(animalId) {
  selectedPetId = animalId;
  modalLayer.classList.add('is-open');
  document.body.classList.add('modal-open');
}

function closeModal() {
  modalLayer.classList.remove('is-open');
  document.body.classList.remove('modal-open');
  form.reset();
  selectedPetId = null;
}

if (modalLayer && modalCloseBtn && form) {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.js-takehome-btn');
    if (!btn) return;

    const animalId = btn.dataset.id;
    if (!animalId) return;

    openModal(animalId);
  });

  modalCloseBtn.addEventListener('click', closeModal);
  modalLayer.addEventListener('click', e => {
    if (e.target === modalLayer) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalLayer.classList.contains('is-open')) {
      closeModal();
    }
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const name = form.elements['user-name'].value.trim();
    const phone = form.elements['phone'].value.trim();
    const comment = form.elements['user-comment'].value.trim();

    if (!name || !phone || !selectedPetId) return;

    const payload = {
      name,
      phone,
      comment,
      animalId: selectedPetId,
    };

    try {
      await sendOrder(payload);
      closeModal();
    } catch (error) {
      console.error('Помилка запиту:', error?.response?.data || error.message);
    }
  });
}
