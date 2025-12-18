// order-modal.js
import '../css/order-modal.css';
import { sendOrder } from './paw-hut-api-orders';

const modalLayer = document.querySelector('.js-modal-order-overlay');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const form = document.querySelector('.modal-order-form');

let selectedPetId = null;

export function openOrderModal(animalId) {
  selectedPetId = animalId;
  modalLayer.classList.add('is-open');
  document.body.classList.add('modal-open');
}

function closeOrderModal() {
  modalLayer.classList.remove('is-open');
  document.body.classList.remove('modal-open');
  form.reset();
  selectedPetId = null;
}

if (modalLayer && modalCloseBtn && form) {
  modalCloseBtn.addEventListener('click', closeOrderModal);

  form.addEventListener('input', e => {
    if (e.target.closest('.field')) clearError(e.target);
  });

  modalLayer.addEventListener('click', e => {
    if (e.target === modalLayer) closeOrderModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalLayer.classList.contains('is-open')) {
      closeOrderModal();
    }
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const name = form.elements['user-name'].value.trim();
    const phoneMask = form.elements['phone'].value;
    const phone = phoneMask.replace(/\D/g, '');
    const comment = form.elements['user-comment'].value.trim();

    const nameInput = form.elements['user-name'];
    const phoneInput = form.elements['phone'];
    const commentInput = form.elements['user-comment'];

    clearError(nameInput);
    clearError(phoneInput);
    clearError(commentInput);

    let hasError = false;

    if (!name) {
      showError(nameInput, 'Введіть імʼя');
      hasError = true;
    }

    if (!/^\d{12}$/.test(phone)) {
      showError(phoneInput, 'Формат: 380XXXXXXXXX');
      hasError = true;
    }

    if (!comment) {
      showError(commentInput, 'Напишіть коментар');
      hasError = true;
    }

    if (hasError || !selectedPetId) return;

    const payload = {
      name,
      phone,
      comment,
      animalId: selectedPetId,
    };

    console.log(payload);

    try {
      await sendOrder(payload);
      closeOrderModal();
    } catch (error) {
      console.error('Помилка запиту:', error?.response?.data || error.message);
    }
  });
}

// =================================маска номеру========================
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('focus', () => {
    if (!phoneInput.value) phoneInput.value = '+38(0';
  });

  phoneInput.addEventListener('input', () => {
    let digits = phoneInput.value.replace(/\D/g, '');
    if (!digits.startsWith('380')) digits = '380';
    digits = digits.slice(0, 12);

    let formatted = '+38(0';
    if (digits.length > 3) formatted += digits.slice(3, 5);
    if (digits.length > 5) formatted += ') ' + digits.slice(5, 8);
    if (digits.length > 8) formatted += '-' + digits.slice(8, 10);
    if (digits.length > 10) formatted += '-' + digits.slice(10, 12);

    phoneInput.value = formatted;
  });
}
// =================================червоні інпути при помилці====
function showError(input, message) {
  const field = input.closest('.field');
  if (!field) return;

  field.classList.add('is-error');
  const errorEl = field.querySelector('.field-error');
  if (errorEl) errorEl.textContent = message;
}

function clearError(input) {
  const field = input.closest('.field');
  if (!field) return;
  field.classList.remove('is-error');
  const errorEl = field.querySelector('.field-error');
  if (errorEl) errorEl.textContent = '';
}
